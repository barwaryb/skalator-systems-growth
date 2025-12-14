const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-lg uppercase">
            Skalator
          </span>
          <p className="text-sm text-primary-foreground/60">
            © 2024 · Botan Barwary · DACH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
