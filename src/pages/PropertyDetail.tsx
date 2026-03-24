import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiHome, FiMaximize, FiLayers, FiArrowLeft } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import ImageSlider from "@/components/ImageSlider";
import EMICalculator from "@/components/EMICalculator";
import EnquiryForm from "@/components/EnquiryForm";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/types/property";

const properties = propertiesData as Property[];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-primary underline">Back to Properties</Link>
        </div>
      </div>
    );
  }

  const details = [
    { icon: FiHome, label: "Configuration", value: `${property.bhk} BHK ${property.type}` },
    { icon: FiMaximize, label: "Area", value: `${property.area} sq.ft` },
    { icon: FiLayers, label: "Floor", value: property.floor },
    { icon: BsBuilding, label: "Tower", value: property.tower },
    { icon: FiMapPin, label: "Location", value: property.location },
  ];

  return (
    <div className="bg-background min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6">
          <FiArrowLeft /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            <ImageSlider images={property.images} alt={property.name} />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-heading text-3xl md:text-4xl text-foreground font-bold">{property.name}</h1>
                  <p className="text-muted-foreground flex items-center gap-2 mt-2">
                    <FiMapPin className="text-primary" /> {property.address}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-heading text-3xl gold-gradient-text font-bold">{property.price}</p>
                  {property.forRent && <p className="text-muted-foreground text-sm">Rent: {property.rent}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {details.map((d) => (
                  <div key={d.label} className="glass p-4 rounded-lg text-center">
                    <d.icon className="text-primary mx-auto mb-2" size={20} />
                    <p className="text-muted-foreground text-xs mb-1">{d.label}</p>
                    <p className="text-foreground text-sm font-medium">{d.value}</p>
                  </div>
                ))}
              </div>

              <div className="glass p-6 rounded-lg mb-8">
                <h3 className="font-heading text-xl text-foreground mb-3">About this Property</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                <p className="text-muted-foreground text-sm mt-3">Developer: <span className="text-primary">{property.developer}</span></p>
              </div>

              <div className="glass p-6 rounded-lg mb-8">
                <h3 className="font-heading text-xl text-foreground mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-lg">
                <h3 className="font-heading text-xl text-foreground mb-4">Nearby Places</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.nearby.map((n) => (
                    <div key={n} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <FiMapPin className="text-primary shrink-0" size={14} />
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Enquiry & EMI */}
          <div className="space-y-8">
            <EnquiryForm propertyName={property.name} />
            <EMICalculator defaultPrice={property.priceNum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
