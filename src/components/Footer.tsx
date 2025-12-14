import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:info@skalator.de", label: "E-Mail" },
];

const legalLinks = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Elegant dark background with subtle gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] bg-gradient-to-tl from-violet-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container py-12 md:py-16 relative z-10">
        <div className="flex flex-col gap-10">
          {/* Main Footer Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                Skalator
              </span>
              <p className="text-white/40 text-sm mt-1">Growth Operator</p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-white/10 pt-8 text-center"
          >
            <p className="text-sm text-white/30">
              © 2025 · Botan Barwary · <span className="font-serif italic">Skalator</span> · DACH
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
