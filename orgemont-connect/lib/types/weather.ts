export type WeatherCondition = "sunny" | "cloudy" | "rainy" | "stormy" | "snowy";

export interface WeatherSnapshot {
  temperatureC: number;
  condition: WeatherCondition;
  updatedAt: string; // ISO date
  /** Source des données — utile pour distinguer un futur appel API réel des données mock. */
  source: "mock" | "open-meteo";
}
