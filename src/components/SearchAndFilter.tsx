import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

export const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
}: SearchAndFilterProps) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 py-4 bg-card text-card-foreground border-border shadow-sm"
          />
        </div>
        
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-full md:w-48 py-4 bg-card text-card-foreground border-border shadow-sm">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {regions.map((region) => (
              <SelectItem 
                key={region} 
                value={region}
                className="text-card-foreground hover:bg-muted"
              >
                {region === "All" ? "Filter by Region" : region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};