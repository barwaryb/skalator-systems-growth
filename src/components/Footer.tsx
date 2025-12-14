import { Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:kontakt@skalator.de", label: "E-Mail" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            Skalator
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © 2024 · Botan Barwary · DACH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;