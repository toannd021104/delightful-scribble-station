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
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Latest
              </span>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Recent essays
              </h2>
            </div>
            <a
              href="#"
              className="hidden text-sm text-muted-foreground transition-smooth hover:text-foreground sm:inline"
            >
              View all →
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
