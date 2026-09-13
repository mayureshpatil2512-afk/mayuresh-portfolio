import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayureshpatil0310.in"),

  title: {
    default: "Mayuresh Patil | SEO Analyst & Frontend Developer",
    template: "%s | Mayuresh Patil",
  },

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
    "Schema Markup",
  ],

  authors: [
    {
      name: "Mayuresh Patil",
    },
  ],

  creator: "Mayuresh Patil",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.mayureshpatil0310.in/",
  },

  openGraph: {
    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4 and Core Web Vitals.",

    url: "https://www.mayureshpatil0310.in/",

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
};

/* ================================
   PERSON STRUCTURED DATA
================================ */

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Mayuresh Patil",

  url: "https://www.mayureshpatil0310.in/",

  image: "https://www.mayureshpatil0310.in/images/profile.png",

  jobTitle: "SEO Analyst & Frontend Developer",

  description:
    "Mayuresh Patil is an SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4 and Core Web Vitals.",

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
    "https://github.com/",
    "https://www.linkedin.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Website */}
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PPVMQ97SLK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-PPVMQ97SLK');
          `}
        </Script>

      </body>
    </html>
  );
}