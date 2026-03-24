import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const developersData = [
  { name: "Lodha Group", description: "India's largest real estate developer by sales. Known for iconic projects across Mumbai including World Towers, Altamount, and Park.", projects: 30 },
  { name: "Oberoi Realty", description: "Synonymous with luxury in Mumbai. Their projects in Worli, Goregaon, and Borivali set benchmarks in premium living.", projects: 15 },
  { name: "Godrej Properties", description: "Part of the 127-year-old Godrej Group. Delivering sustainable, world-class residential and commercial projects.", projects: 20 },
  { name: "Runwal Group", description: "Over 45 years of trust. Known for integrated townships and premium residential projects across Mumbai.", projects: 25 },
  { name: "Kalpataru", description: "A legacy of 50+ years in real estate. Renowned for quality construction and thoughtful designs across premium locations.", projects: 18 },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Developers = () => (
  <div className="bg-background min-h-screen pt-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">Our Partners</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Top Developers</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">We partner with Mumbai's most trusted and award-winning real estate developers to bring you only the finest properties.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developersData.map((dev, i) => (
          <motion.div key={dev.name} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-lg group hover:border-primary/30 transition-colors">
            <div className="w-16 h-16 rounded-lg gold-gradient-bg flex items-center justify-center text-primary-foreground font-heading text-2xl font-bold mb-4">
              {dev.name[0]}
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-2">{dev.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{dev.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary text-sm">{dev.projects}+ Projects</span>
              <Link to="/properties" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-1 transition-colors">
                View Properties <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Developers;
