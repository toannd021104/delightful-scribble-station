import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Writing", href: "#writing" },
  { label: "Projects", href: "#" },
  { label: "Notes", href: "#" },
  { label: "About", href: "#about" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Sam Okafor<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-smooth hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            Follow
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
