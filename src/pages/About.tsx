import { motion } from "framer-motion";
import { BsShieldCheck, BsEye, BsTrophy, BsPeople } from "react-icons/bs";

const values = [
  { icon: BsShieldCheck, title: "Trust", text: "We prioritize transparency and honesty in every transaction, building lasting relationships with our clients." },
  { icon: BsEye, title: "Vision", text: "To be Mumbai's most trusted luxury real estate brand, connecting discerning buyers with extraordinary homes." },
  { icon: BsTrophy, title: "Excellence", text: "We set the highest standards in service, curation, and client experience across every interaction." },
  { icon: BsPeople, title: "Experience", text: "15+ years of deep market knowledge and an extensive network of Mumbai's finest properties." },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <div className="bg-background min-h-screen pt-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground font-bold">About WisdomStone</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div {...fadeUp}>
          <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800" alt="Mumbai Skyline" className="w-full aspect-[4/3] object-cover rounded-lg" />
        </motion.div>
        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="flex flex-col justify-center">
          <h2 className="font-heading text-3xl text-foreground mb-4">Mumbai's Premier Luxury Real Estate Consultancy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded with a passion for extraordinary living spaces, WisdomStone Realty has been at the forefront of Mumbai's luxury real estate market for over 15 years. We curate only the finest properties across the city's most prestigious addresses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of seasoned professionals brings deep market expertise, an extensive developer network, and an unwavering commitment to client satisfaction. From sea-facing penthouses in Worli to heritage homes in Malabar Hill, we help you find not just a property — but a lifestyle.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-lg text-center">
            <v.icon className="text-primary mx-auto mb-4" size={36} />
            <h3 className="font-heading text-xl text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
