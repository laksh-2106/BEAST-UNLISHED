import { CountryCard, Country } from "./CountryCard";
import { Skeleton } from "@/components/ui/skeleton";

interface CountryGridProps {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const CountrySkeleton = () => (
  <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
    <Skeleton className="aspect-[3/2] w-full" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  </div>
);

export const CountryGrid = ({ countries, loading, error }: CountryGridProps) => {
  if (error) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center text-red-500">
          <p>Error loading countries: {error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, index) => (
            <CountrySkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center text-muted-foreground">
          <p>No countries found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};