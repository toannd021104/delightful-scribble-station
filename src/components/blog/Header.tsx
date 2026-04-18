import { Search, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = ["Kubernetes", "SRE", "CI/CD", "IaC", "About"];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
          <Terminal className="h-5 w-5 text-primary" />
          <span>kernel<span className="text-primary">.</span>log</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="font-mono text-xs text-muted-foreground transition-smooth hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
