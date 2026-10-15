// Service worker minimal d'Orgemont Connect (Phase 2).
//
// Volontairement TRÈS prudent : le contenu (actualités, carnet du
// quartier...) changera souvent une fois le CMS branché (Phase 7+), donc ce
// service worker ne met PAS les pages en cache de façon agressive — l'objectif
// ici est seulement de rendre l'app installable et de fournir un minimum de
// résilience hors-ligne, pas un mode hors-ligne complet.

const CACHE_NAME = "orgemont-connect-shell-v1";
const SHELL_URL = "/";
const PRECACHE_URLS = [SHELL_URL, "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {
      // Ne bloque jamais l'installation si le précache échoue (ex. hors-ligne au premier chargement).
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // On ne gère que les requêtes GET same-origin ; tout le reste passe directement au réseau.
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  // Navigation (changement de page) : réseau en priorité, repli sur le shell en cache si hors-ligne.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(SHELL_URL).then((cached) => cached ?? Response.error()))
    );
    return;
  }

  // Assets statiques (icônes, manifest) : cache en priorité, réseau en repli, mise à jour du cache ensuite.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => cached ?? Response.error());
    })
  );
});
