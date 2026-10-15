// ⚠️ DONNÉES FACTICES (MOCK) — Phase 2 uniquement.
// L'intégration réelle (Open-Meteo, via Cloud Function côté serveur) est prévue en Phase 12.

import type { WeatherSnapshot } from "@/lib/types/weather";

export const mockWeather: WeatherSnapshot = {
  temperatureC: 19,
  condition: "cloudy",
  updatedAt: "2026-09-13T08:00:00.000Z",
  source: "mock",
};
