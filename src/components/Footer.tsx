const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/30">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="font-heading text-xl font-bold text-foreground block mb-2">
              SKALATOR
            </span>
            <p className="text-sm text-foreground-muted">
              © 2024 · Botan Barwary · DACH
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="mailto:kontakt@skalator.de"
              className="text-sm text-foreground-muted hover:text-accent transition-colors duration-300"
            >
              kontakt@skalator.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
