import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-obsidian-light border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold tracking-wide text-gradient-gold">
              CHRONOS
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#destinations" className="nav-link text-sm uppercase tracking-widest">
              Destinations
            </a>
            <a href="#about" className="nav-link text-sm uppercase tracking-widest">
              About
            </a>
            <a href="#contact" className="nav-link text-sm uppercase tracking-widest">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TimeTravel Agency. All eras reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
