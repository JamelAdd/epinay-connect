"use client";

import { useEffect } from "react";

/**
 * Enregistre le service worker minimal (public/sw.js) côté client uniquement.
 * Ne bloque jamais le rendu : en cas d'échec (ex. navigateur non compatible),
 * l'application continue de fonctionner normalement sans PWA.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Échec silencieux volontaire : l'absence de service worker ne doit
      // jamais empêcher l'utilisation de l'application.
    });
  }, []);

  return null;
}
