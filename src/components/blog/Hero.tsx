import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredPost } from "@/data/posts";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container relative grid gap-12 py-20 md:grid-cols-5 md:items-center md:py-28">
        <div className="space-y-6 md:col-span-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-glow" />
            featured · {featuredPost.category}
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            {featuredPost.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {featuredPost.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            <span className="text-foreground">{featuredPost.author}</span>
            <span aria-hidden>//</span>
            <span>{featuredPost.date}</span>
            <span aria-hidden>//</span>
            <span>{featuredPost.readTime}</span>
          </div>
          <Button size="lg" className="group">
            Read the post
            <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">~/deploy.sh</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-foreground/90">
{`$ kubectl rollout status \\
    deploy/api -n prod
Waiting for rollout to finish...
deployment "api" `}<span className="text-primary">successfully rolled out</span>
{`

$ argo rollouts get rollout api
Status:    `}<span className="text-primary">✔ Healthy</span>
{`
Strategy:  Canary
  Step:    8/8
  Weight:  100`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
