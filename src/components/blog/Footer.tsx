const Footer = () => {
  return (
    <footer className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground md:flex-row">
        <p className="font-serif text-base text-foreground">Marginalia</p>
        <p>© {new Date().getFullYear()} Marginalia. Made with care.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-smooth hover:text-foreground">Twitter</a>
          <a href="#" className="transition-smooth hover:text-foreground">RSS</a>
          <a href="#" className="transition-smooth hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
