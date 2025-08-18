import { Card } from "@/components/ui/card";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital?: string[];
  flags: {
    svg: string;
    png: string;
  };
  cca3: string;
}

interface CountryCardProps {
  country: Country;
  onClick?: () => void;
}

export const CountryCard = ({ country, onClick }: CountryCardProps) => {
  const formatPopulation = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-card border-border"
      onClick={onClick}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-lg font-bold text-card-foreground mb-4">
          {country.name.common}
        </h3>
        <div className="space-y-1 text-sm text-card-foreground">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {formatPopulation(country.population)}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>
        </div>
      </div>
    </Card>
  );
};