import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredPost } from "@/data/posts";

const Hero = () => {
  return (
    <section className="bg-gradient-hero">
      <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24">
        <div className="space-y-6">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Featured · {featuredPost.category}
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            {featuredPost.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{featuredPost.author}</span>
            <span aria-hidden>·</span>
            <span>{featuredPost.date}</span>
            <span aria-hidden>·</span>
            <span>{featuredPost.readTime}</span>
          </div>
          <Button size="lg" className="group">
            Read the essay
            <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
