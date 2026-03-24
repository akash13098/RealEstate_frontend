import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-dark border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-2xl gold-gradient-text font-bold mb-4">WisdomStone</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mumbai's premier luxury real estate consultancy. We curate the finest properties across the city's most prestigious addresses.
          </p>
          <div className="flex gap-4 mt-6">
            {[FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Properties", "Developers", "About", "Contact"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg text-foreground mb-4">Locations</h4>
          <div className="flex flex-col gap-3">
            {["Worli", "Bandra", "Malabar Hill", "Colaba", "Juhu"].map((loc) => (
              <span key={loc} className="text-muted-foreground text-sm">{loc}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
              <FiPhone className="text-primary" /> +91 98765 43210
            </a>
            <a href="mailto:info@wisdomstone.in" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
              <FiMail className="text-primary" /> info@wisdomstone.in
            </a>
            <div className="flex items-start gap-3 text-muted-foreground text-sm">
              <FiMapPin className="text-primary mt-1 shrink-0" />
              <span>Worli, Mumbai 400018, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs">© 2024 WisdomStone Realty. All rights reserved.</p>
        <p className="text-muted-foreground text-xs">Luxury Real Estate in Mumbai</p>
      </div>
    </div>
  </footer>
);

export default Footer;
