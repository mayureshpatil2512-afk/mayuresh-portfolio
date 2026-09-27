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
      "Personal professional portfolio focused on SEO, digital presence, website performance, structured data, Google Search Console and Google Analytics 4.",
    technologies: [
      "SEO",
      "Google Search Console",
      "Google Analytics 4",
      "Schema Markup",
      "Core Web Vitals",
    ],
    github: "https://github.com/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/portfolio.png",
  },

  {
    id: 2,
    title: "Google Search Console SEO Audit",
    description:
      "SEO audit project covering indexing, sitemap configuration, robots.txt, canonical URLs, structured data, search performance and technical SEO checks.",
    technologies: [
      "Technical SEO",
      "Google Search Console",
      "Sitemap",
      "Robots.txt",
      "Schema Markup",
      "Core Web Vitals",
    ],
    github: "https://github.com/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/seo-audit.png",
  },

  {
    id: 3,
    title: "Business Analytics Dashboard",
    description:
      "Interactive business dashboard focused on presenting KPIs, trends and business insights using data visualization and reporting tools.",
    technologies: [
      "Power BI",
      "Microsoft Excel",
      "Data Visualization",
      "Business Analytics",
    ],
    github: "https://github.com/",
    live: "https://example.com",
    image: "/images/projects/dashboard.png",
  },
];