import { useState, useEffect } from "react";
import { Country } from "@/components/CountryCard";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: Country[] = await response.json();
        
        // Sort countries alphabetically by name
        const sortedData = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        
        setCountries(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch countries");
        console.error("Error fetching countries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};