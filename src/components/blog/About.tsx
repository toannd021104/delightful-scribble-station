import avatar from "@/assets/avatar.jpg";

const About = () => {
  return (
    <section id="about" className="border-y border-border bg-secondary/30">
      <div className="container grid gap-10 py-20 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-border shadow-card md:mx-0">
          <img
            src={avatar}
            alt="Sam Okafor"
            width={768}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            // about
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            I build small things on the internet.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            By day I work on developer tools at a small startup. By night I tinker with my
            home lab, write the occasional essay, and try to learn one new thing every month.
            This blog is where I keep notes I'd want to find again later.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#" className="text-primary transition-smooth hover:underline">
              github →
            </a>
            <a href="#" className="text-primary transition-smooth hover:underline">
              twitter →
            </a>
            <a href="#" className="text-primary transition-smooth hover:underline">
              email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
