import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import FilterPanel from "@/components/FilterPanel";
import type { Filters } from "@/components/FilterPanel";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/types/property";

const properties = propertiesData as Property[];

const Properties = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [filters, setFilters] = useState<Filters>({
    location: "All",
    bhk: "All",
    type: "All",
    category: initialCategory,
    mode: "buy",
    priceRange: [1500000, 300000000],
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.mode === "buy" && !p.forSale) return false;
      if (filters.mode === "rent" && !p.forRent) return false;
      if (filters.location !== "All" && p.location !== filters.location) return false;
      if (filters.bhk !== "All" && p.bhk !== parseInt(filters.bhk)) return false;
      if (filters.type !== "All" && p.type !== filters.type) return false;
      if (filters.category !== "All" && p.category !== filters.category) return false;
      if (p.priceNum < filters.priceRange[0] || p.priceNum > filters.priceRange[1]) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">Discover</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Our Properties</h1>
        </motion.div>

        <FilterPanel filters={filters} setFilters={setFilters} />

        <div className="mt-8">
          <p className="text-muted-foreground text-sm mb-6">{filtered.length} properties found</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No properties match your criteria.</p>
              <button
                onClick={() => setFilters({ location: "All", bhk: "All", type: "All", category: "All", mode: "buy", priceRange: [1500000, 300000000] })}
                className="text-primary underline mt-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
