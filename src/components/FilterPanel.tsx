import { motion } from "framer-motion";

interface Filters {
  location: string;
  bhk: string;
  type: string;
  category: string;
  mode: "buy" | "rent";
  priceRange: [number, number];
}

interface FilterPanelProps {
  filters: Filters;
  setFilters: (f: Filters) => void;
}

const locations = ["All", "Worli", "Bandra", "Malabar Hill", "Colaba", "Mahalaxmi", "Lower Parel", "Dadar", "Altamount Road", "Prabhadevi", "Juhu"];
const bhkOptions = ["All", "2", "3", "4", "5"];
const typeOptions = ["All", "Apartment", "Penthouse", "Duplex", "Villa"];
const categoryOptions = ["All", "Sea Facing", "Penthouse", "Duplex", "Luxury", "Luxury Villa", "Ready to Move"];

const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  const update = (key: string, value: string | [number, number]) =>
    setFilters({ ...filters, [key]: value } as Filters);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-lg space-y-6"
    >
      {/* Buy / Rent Toggle */}
      <div className="flex rounded-lg overflow-hidden border border-border">
        {(["buy", "rent"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => update("mode", mode)}
            className={`flex-1 py-2.5 text-sm tracking-widest uppercase transition-all ${
              filters.mode === mode
                ? "gold-gradient-bg text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Location", key: "location", options: locations },
          { label: "BHK", key: "bhk", options: bhkOptions },
          { label: "Type", key: "type", options: typeOptions },
          { label: "Category", key: "category", options: categoryOptions },
        ].map(({ label, key, options }) => (
          <div key={key}>
            <label className="text-muted-foreground text-xs tracking-widest uppercase mb-2 block">{label}</label>
            <select
              value={filters[key as keyof Filters] as string}
              onChange={(e) => update(key, e.target.value)}
              className="w-full bg-background/50 border border-border px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors rounded appearance-none"
            >
              {options.map((opt) => (
                <option key={opt} value={opt} className="bg-background">{opt === "All" ? `All ${label}s` : opt}{key === "bhk" && opt !== "All" ? " BHK" : ""}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between text-xs tracking-widest uppercase mb-2">
          <span className="text-muted-foreground">Price Range</span>
          <span className="text-primary">
            ₹{(filters.priceRange[0] / 10000000).toFixed(1)} Cr — ₹{(filters.priceRange[1] / 10000000).toFixed(1)} Cr
          </span>
        </div>
        <div className="flex gap-4">
          <input type="range" min={1500000} max={300000000} step={500000}
            value={filters.priceRange[0]}
            onChange={(e) => update("priceRange", [Math.min(+e.target.value, filters.priceRange[1]), filters.priceRange[1]])}
            className="w-full accent-primary" />
          <input type="range" min={1500000} max={300000000} step={500000}
            value={filters.priceRange[1]}
            onChange={(e) => update("priceRange", [filters.priceRange[0], Math.max(+e.target.value, filters.priceRange[0])])}
            className="w-full accent-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default FilterPanel;
export type { Filters };
