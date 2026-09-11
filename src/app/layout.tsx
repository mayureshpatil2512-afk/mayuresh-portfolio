import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

  description:
    "Mayuresh Patil is an SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4 and Core Web Vitals.",

  keywords: [
    "Mayuresh Patil",
    "SEO Analyst",
    "Frontend Developer",
    "Technical SEO",
    "Next.js Developer",
    "React Developer",
    "Google Search Console",
    "Google Analytics 4",
    "Core Web Vitals",
    "JavaScript",
    "TypeScript",
    "Html",
    "CSS3",
    "Tailwind CSS",
    "Schema Markup",
  ],

  authors: [
    {
      name: "Mayuresh Patil",
    },
  ],

  creator: "Mayuresh Patil",

  metadataBase: new URL("https://www.mayureshpatil0310.in"),

alternates: {
  canonical: "https://www.mayureshpatil0310.in/",
},

  openGraph: {
    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4 and Core Web Vitals.",

    url: "https://mayureshpatil0310.in/",

    siteName: "Mayuresh Patil Portfolio",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Mayuresh Patil - SEO Analyst & Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React and Core Web Vitals.",

    images: ["/images/profile.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}