import type { Metadata } from "next";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayureshpatil0310.in"),

  title: {
    default: "Mayuresh Patil | SEO Analyst & Frontend Developer",
    template: "%s | Mayuresh Patil",
  },

  description:
    "Mayuresh Patil is an SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4, and website performance.",

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
    canonical: "https://mayureshpatil0310.in",
  },

  openGraph: {
    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console, Google Analytics 4, and website performance.",

    url: "https://mayureshpatil0310.in",

    siteName: "Mayuresh Patil Portfolio",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Mayuresh Patil",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

    description:
      "SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Analytics 4, and website performance.",

    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Structured Data / JSON-LD */}
        <JsonLd />

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
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PPVMQ97SLK');
          `}
        </Script>
      </body>
    </html>
  );
}