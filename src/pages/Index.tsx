import Header from "@/components/blog/Header";
import Hero from "@/components/blog/Hero";
import PostCard from "@/components/blog/PostCard";
import Newsletter from "@/components/blog/Newsletter";
import Footer from "@/components/blog/Footer";
import { posts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <section className="container py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                // latest
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                Recent posts
              </h2>
            </div>
            <a
              href="#"
              className="hidden font-mono text-xs text-muted-foreground transition-smooth hover:text-primary sm:inline"
            >
              cat ./archive →
            </a>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
