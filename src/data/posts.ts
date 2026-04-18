import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export const featuredPost: Post = {
  id: "0",
  title: "The quiet craft of writing well in a noisy world",
  excerpt:
    "On the discipline of slow thinking, the joy of revision, and why the best ideas often arrive when you stop chasing them.",
  category: "Essay",
  author: "Eleanor Ash",
  date: "Apr 14, 2026",
  readTime: "8 min read",
  image: post2,
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Building a workspace that thinks with you",
    excerpt:
      "A look at the small rituals and tools that turn an ordinary desk into a place where ideas actually happen.",
    category: "Workflow",
    author: "Marcus Hale",
    date: "Apr 10, 2026",
    readTime: "6 min read",
    image: post1,
  },
  {
    id: "2",
    title: "Notes from a year of reading deeply",
    excerpt:
      "What I learned by trading a hundred half-finished books for twelve I read three times each.",
    category: "Books",
    author: "Iris Penn",
    date: "Apr 6, 2026",
    readTime: "5 min read",
    image: post3,
  },
  {
    id: "3",
    title: "Going slow through the Dolomites",
    excerpt:
      "Six days, no itinerary, and the quiet realization that the best trips don't fit on a list.",
    category: "Travel",
    author: "Theo Marchetti",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    image: post4,
  },
];
