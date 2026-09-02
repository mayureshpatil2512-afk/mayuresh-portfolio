export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Mayuresh Patil",

    url: "https://mayureshpatil0310.in",

    image: "https://mayureshpatil0310.in/images/profile.png",

    jobTitle: "SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4, and website performance.",

    knowsAbout: [
      "Technical SEO",
      "Google Search Console",
      "Google Analytics 4",
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Core Web Vitals",
      "Schema Markup",
    ],

    sameAs: [
      "https://github.com/YOUR-GITHUB-USERNAME",
      "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}