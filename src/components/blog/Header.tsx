import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = ["Essays", "Workflow", "Books", "Travel", "About"];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Marginalia
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-muted-foreground transition-smooth hover:text-foreground"
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
