import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="container py-20 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          // newsletter
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold text-foreground md:text-4xl">
          One deep-dive on infra & ops. Every Tuesday.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Postmortems, runbooks and tooling notes from engineers running real production systems.
          Free, no fluff.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            required
            placeholder="you@company.dev"
            className="h-11 bg-background font-mono text-sm"
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          $ unsubscribe --anytime
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
