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
      "A professional portfolio website focused on SEO, digital presence, website performance and search visibility. The project includes technical SEO configuration, structured data, Google Search Console integration, Google Analytics 4 tracking, sitemap and robots.txt configuration.",
    technologies: [
      "SEO",
      "Google Search Console",
      "Google Analytics 4",
      "Technical SEO",
      "Schema Markup",
      "Sitemap",
      "Robots.txt",
    ],
    github: "https://www.mayureshpatil0310.in/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/portfolio.png",
  },

  {
    id: 2,
    title: "Google Search Console SEO Audit",
    description:
      "An SEO audit and monitoring project covering URL inspection, indexing status, sitemap submission, canonical URLs, robots.txt, search performance, impressions, clicks, CTR and average search position.",
    technologies: [
      "Google Search Console",
      "Technical SEO",
      "URL Inspection",
      "Indexing",
      "Sitemap",
      "Robots.txt",
      "Canonical SEO",
    ],
    github: "https://www.mayureshpatil0310.in/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/seo-audit.png",
  },

  {
    id: 3,
    title: "Google Analytics 4 Website Tracking",
    description:
      "A website analytics implementation using Google Analytics 4 to monitor website activity and measure user interactions. The implementation includes Google tag configuration and custom tracking for resume downloads.",
    technologies: [
      "Google Analytics 4",
      "GA4 Events",
      "Google Tag",
      "Website Analytics",
      "Event Tracking",
    ],
    github: "https://www.mayureshpatil0310.in/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/analytics.png",
  },

  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "A digital marketing project focused on social media management, content planning, audience engagement and maintaining a consistent online presence across social media platforms.",
    technologies: [
      "Social Media Marketing",
      "Social Media Management",
      "Content Planning",
      "Audience Engagement",
      "Digital Marketing",
    ],
    github: "https://www.mayureshpatil0310.in/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/social-media.png",
  },

  {
    id: 5,
    title: "Keyword Research & Content Optimization",
    description:
      "A practical SEO project focused on identifying relevant search terms, organizing keywords and optimizing website content around user search intent and digital marketing objectives.",
    technologies: [
      "Keyword Research",
      "Search Intent",
      "SEO Content",
      "On-Page SEO",
      "Content Optimization",
    ],
    github: "https://www.mayureshpatil0310.in/",
    live: "https://www.mayureshpatil0310.in/",
    image: "/images/projects/keyword-research.png",
  },
];