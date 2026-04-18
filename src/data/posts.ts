import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const featuredPost: Post = {
  id: "0",
  slug: "year-of-shipping-small",
  title: "A year of shipping small things",
  excerpt:
    "I stopped chasing the big launch and started shipping tiny side projects every week. Here's what changed — in my code, my confidence, and my calendar.",
  category: "Reflections",
  date: "Apr 14, 2026",
  readTime: "8 min read",
  image: post2,
};

export const posts: Post[] = [
  {
    id: "1",
    slug: "home-lab-rabbit-hole",
    title: "Down the home-lab rabbit hole",
    excerpt:
      "What started as a Raspberry Pi running Pi-hole became three mini PCs, a Proxmox cluster, and a much louder closet.",
    category: "Tinkering",
    date: "Apr 10, 2026",
    readTime: "6 min read",
    image: post1,
  },
  {
    id: "2",
    slug: "notes-on-deep-work",
    title: "Notes on deep work, from someone who's bad at it",
    excerpt:
      "Two years of failed routines, one that finally stuck, and the small rules that protect my mornings.",
    category: "Notes",
    date: "Apr 6, 2026",
    readTime: "5 min read",
    image: post3,
  },
  {
    id: "3",
    slug: "rewriting-my-blog-again",
    title: "I rewrote my blog. Again.",
    excerpt:
      "The honest reasons (boredom, mostly) and the few things I actually learned moving from Next.js to a tiny custom stack.",
    category: "Code",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    image: post4,
  },
];
