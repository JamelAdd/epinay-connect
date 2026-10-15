import { Card } from "@/components/ui/Card";
import type { WeatherSnapshot } from "@/lib/types/weather";

export interface LocalServicesBarProps {
  weather: WeatherSnapshot;
}

const conditionLabel: Record<WeatherSnapshot["condition"], string> = {
  sunny: "Ensoleillé", cloudy: "Nuageux", rainy: "Pluvieux", stormy: "Orageux", snowy: "Neigeux",
};

export function LocalServicesBar({ weather }: LocalServicesBarProps) {
  return (
    <Card className="px-3 py-3">
      <p className="text-[12px] text-ink-secondary">Météo à Orgemont</p>
      <p className="text-[18px] font-bold text-ink">
        {weather.temperatureC}°C <span className="font-normal text-ink-secondary">· {conditionLabel[weather.condition]}</span>
      </p>
    </Card>
  );
}
