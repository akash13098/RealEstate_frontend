import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import type { Property } from "@/types/property";

const PropertyCard = ({ property }: { property: Property }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <Link to={`/property/${property.id}`} className="group block">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="glass-gold px-3 py-1 text-xs tracking-widest uppercase text-primary font-medium">
            {property.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-primary font-heading text-xl font-bold">{property.price}</p>
          <h3 className="text-foreground font-heading text-lg mt-1">{property.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <FiMapPin className="text-primary" size={12} />
            {property.address}
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-foreground/80">
            <span>{property.bhk} BHK</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>{property.area} sq.ft</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="flex items-center gap-1"><BsBuilding size={12} /> {property.tower}</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default PropertyCard;
