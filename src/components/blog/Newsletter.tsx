import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="container py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold text-foreground md:text-4xl">
          A slow, thoughtful letter. Once a week.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Essays, recommendations, and questions worth sitting with — delivered Sunday morning.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 bg-background"
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
