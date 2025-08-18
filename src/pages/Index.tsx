import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { CountryGrid } from "@/components/CountryGrid";
import { useCountries } from "@/hooks/useCountries";

const Index = () => {
  const { countries, loading, error } = useCountries();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const matchesRegion = 
        selectedRegion === "All" || country.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchTerm, selectedRegion]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <CountryGrid 
        countries={filteredCountries} 
        loading={loading} 
        error={error}
      />
    </div>
  );
};

export default Index;
