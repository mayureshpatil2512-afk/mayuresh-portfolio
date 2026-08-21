export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SEO Portfolio Website",
    description:
      "Professional portfolio built using Next.js, Tailwind CSS and Technical SEO best practices.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "SEO"
    ],
    github: "https://github.com/",
    live: "https://example.com",
    image: "/images/projects/portfolio.png",
  },

  {
    id: 2,
    title: "Google Search Console Audit",
    description:
      "Technical SEO audit demonstrating indexing, sitemap submission and performance improvements.",
    technologies: [
      "SEO",
      "GSC",
      "Schema",
      "Core Web Vitals"
    ],
    github: "https://github.com/",
    live: "https://example.com",
    image: "/images/projects/seo-audit.png",
  },

  {
    id: 3,
    title: "Power BI Dashboard",
    description:
      "Interactive dashboard with business KPIs and data visualization.",
    technologies: [
      "Power BI",
      "SQL",
      "Excel"
    ],
    github: "https://github.com/",
    live: "https://example.com",
    image: "/images/projects/dashboard.png",
  },
];