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
  title: "Zero-downtime deploys with progressive delivery on Kubernetes",
  excerpt:
    "How we replaced our blue/green pipeline with Argo Rollouts and Flagger — cutting incident MTTR by 60% and shipping 12x more often.",
  category: "Kubernetes",
  author: "Priya Raman",
  date: "Apr 14, 2026",
  readTime: "12 min read",
  image: post2,
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Taming the noisy on-call: a practical SLO playbook",
    excerpt:
      "Burn-rate alerts, error budgets and the queries we actually use to keep pages meaningful at 3am.",
    category: "SRE",
    author: "Marcus Hale",
    date: "Apr 10, 2026",
    readTime: "9 min read",
    image: post1,
  },
  {
    id: "2",
    title: "Our migration from Jenkins to GitHub Actions, by the numbers",
    excerpt:
      "Six months, 1,400 pipelines, and the surprises we hit moving a monorepo CI off self-hosted runners.",
    category: "CI/CD",
    author: "Iris Penn",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    image: post3,
  },
  {
    id: "3",
    title: "Terraform at scale: workspaces, drift and the cost of clever",
    excerpt:
      "What we learned managing 80+ AWS accounts with a single Terraform monorepo — and what we'd do differently.",
    category: "IaC",
    author: "Theo Marchetti",
    date: "Mar 28, 2026",
    readTime: "11 min read",
    image: post4,
  },
];
