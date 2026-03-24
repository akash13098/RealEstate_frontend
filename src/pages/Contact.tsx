import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import EnquiryForm from "@/components/EnquiryForm";

const contactInfo = [
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: FiMail, label: "Email", value: "info@wisdomstone.in", href: "mailto:info@wisdomstone.in" },
  { icon: FiMapPin, label: "Address", value: "Worli, Mumbai 400018, Maharashtra, India" },
  { icon: FiClock, label: "Working Hours", value: "Mon - Sat: 10AM - 7PM" },
];

const Contact = () => (
  <div className="bg-background min-h-screen pt-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">Get in Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Ready to find your dream home? Our team is here to help you every step of the way.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg"
              >
                <c.icon className="text-primary mb-3" size={24} />
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-foreground text-sm hover:text-primary transition-colors">{c.value}</a>
                ) : (
                  <p className="text-foreground text-sm">{c.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-lg overflow-hidden aspect-video"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WisdomStone Realty Location"
            />
          </motion.div>
        </div>

        <EnquiryForm />
      </div>
    </div>
  </div>
);

export default Contact;
