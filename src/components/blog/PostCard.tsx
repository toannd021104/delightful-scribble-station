import type { Post } from "@/data/posts";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group cursor-pointer">
      <div className="mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-muted shadow-card">
        <img
          src={post.image}
          alt={post.title}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {post.category}
        </span>
        <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground transition-smooth group-hover:text-accent">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{post.author}</span>
          <span aria-hidden>·</span>
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
