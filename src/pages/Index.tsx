import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { BsBuilding, BsShieldCheck, BsTrophy, BsPeople } from "react-icons/bs";
import PropertyCard from "@/components/PropertyCard";
import ReviewCard from "@/components/ReviewCard";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/types/property";
import heroImg1 from "@/assets/hero-mumbai-12.jpg";
import heroImg2 from "@/assets/hero-mumbai-2.jpg";
import heroImg3 from "@/assets/hero-mumbai-3.jpg";

const heroImages = [heroImg1, heroImg2, heroImg3];

const properties = propertiesData as Property[];
const featured = properties.slice(0, 6);

const categories = [
  { name: "Sea Facing", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", count: 3 },
  { name: "Penthouse", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600", count: 2 },
  { name: "Duplex", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", count: 1 },
  { name: "Luxury Villas", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600", count: 1 },
  { name: "Ready to Move", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600", count: 3 },
];

const developers = ["Lodha Group", "Oberoi Realty", "Godrej Properties", "Runwal Group", "Kalpataru"];

const stats = [
  { icon: BsBuilding, value: "8000+", label: "Properties Sold" },
  { icon: BsShieldCheck, value: "15+", label: "Years Experience" },
  { icon: BsTrophy, value: "50+", label: "Awards Won" },
  { icon: BsPeople, value: "12000+", label: "Happy Clients" },
];

const reviews = [
  { name: "Parth Tate-Deshmukh", time: "5 months ago", rating: 5, text: "I highly recommend WisdomStone Realty for property buying. Their team was incredibly professional and helped us find our dream home in Worli with stunning sea views." },
  { name: "Ananya Sharma", time: "3 months ago", rating: 5, text: "Exceptional service! They understood exactly what we were looking for and showed us properties that matched our requirements perfectly. We found our ideal penthouse in Bandra." },
  { name: "Rajesh Mehta", time: "2 months ago", rating: 5, text: "The best real estate consultancy in Mumbai. Their knowledge of the luxury market is unparalleled. Helped us invest in a prime Malabar Hill property." },
  { name: "Priya Kapoor", time: "1 month ago", rating: 5, text: "From start to finish, the experience was seamless. They handled all paperwork and negotiations brilliantly. Highly recommend for anyone looking for premium properties." },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
  <div className="bg-background">
    {/* HERO */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={heroImages[currentSlide]}
          alt="Mumbai Skyline"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-16 h-[1px] gold-gradient-bg mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary tracking-[0.5em] uppercase text-xs md:text-sm mb-4 font-light"
        >
          Mumbai's Finest Properties
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground font-bold leading-tight"
        >
          Luxury Living<br />
          <span className="gold-gradient-text">in Mumbai</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-foreground/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light"
        >
          Discover the most exclusive residences across Mumbai's most prestigious addresses
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link to="/properties" className="gold-gradient-bg text-primary-foreground px-10 py-4 tracking-widest uppercase text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
            Explore Properties <FiArrowRight />
          </Link>
          <a href="tel:+919876543210" className="border border-foreground/20 text-foreground px-10 py-4 tracking-widest uppercase text-sm font-medium hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center gap-2">
            <FiPhone /> Call Now
          </a>
        </motion.div>
        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-3 justify-center mt-12"
        >
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === currentSlide ? "w-10 bg-primary" : "w-6 bg-foreground/20"
              }`}
            />
          ))}
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* FEATURED PROPERTIES */}
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Handpicked</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Featured Properties</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/properties" className="border border-primary text-primary px-10 py-3 tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center gap-2">
          View All Properties <FiArrowRight />
        </Link>
      </div>
    </section>

    {/* BROWSE BY CATEGORY */}
    <section className="section-padding bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Explore</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Browse by Category</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/properties?category=${encodeURIComponent(cat.name)}`} className="group block relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-lg text-foreground">{cat.name}</h3>
                  <p className="text-primary text-sm">{cat.count} Properties</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* DEVELOPERS */}
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Trusted Partners</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Top Developers</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {developers.map((dev, i) => (
          <motion.div
            key={dev}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass px-8 py-6 rounded-lg text-center hover:border-primary/30 transition-colors"
          >
            <p className="font-heading text-lg text-foreground/80">{dev}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* STATS */}
    <section className="section-padding bg-dark-card">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <stat.icon className="text-primary mx-auto mb-3" size={32} />
            <p className="font-heading text-3xl md:text-4xl gold-gradient-text font-bold">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* REVIEWS */}
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div {...fadeUp} className="text-center mb-16">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Testimonials</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Google Reviews</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, i) => (
          <ReviewCard key={review.name} review={review} index={i} />
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto text-center glass-gold p-12 md:p-20 rounded-lg"
      >
        <h2 className="font-heading text-4xl md:text-5xl text-foreground font-bold mb-4">
          Find Your Dream Home<br /><span className="gold-gradient-text">in Mumbai</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Let our experts guide you to the perfect luxury residence. Schedule a private consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/properties" className="gold-gradient-bg text-primary-foreground px-10 py-4 tracking-widest uppercase text-sm font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
            Browse Properties <FiArrowRight />
          </Link>
          <Link to="/contact" className="border border-primary text-primary px-10 py-4 tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center gap-2">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  </div>
  );
};

export default Index;
