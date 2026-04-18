import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 font-mono text-xs text-muted-foreground md:flex-row">
        <p className="flex items-center gap-2 text-foreground">
          <Terminal className="h-4 w-4 text-primary" />
          kernel.log
        </p>
        <p>© {new Date().getFullYear()} kernel.log — built by engineers, for engineers.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-smooth hover:text-primary">GitHub</a>
          <a href="#" className="transition-smooth hover:text-primary">RSS</a>
          <a href="#" className="transition-smooth hover:text-primary">Mastodon</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
