/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Le PWA (manifest + service worker) est géré manuellement dans /public et
  // components/pwa/ServiceWorkerRegister.tsx, sans dépendance tierce, pour
  // garder le projet léger et facile à auditer en Phase 2.
};

export default nextConfig;
