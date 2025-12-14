const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-foreground/40">
            © Skalator · Botan Barwary
          </p>
          <p className="text-sm text-foreground/40">
            DACH Region
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
