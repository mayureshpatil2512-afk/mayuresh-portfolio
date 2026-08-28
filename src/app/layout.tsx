import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayuresh Patil | SEO Analyst & Frontend Developer",

  description:
    "Mayuresh Patil is an SEO Analyst and Frontend Developer specializing in Next.js, React, Technical SEO, Google Analytics, Google Search Console and modern web development.",

  keywords: [
    "Mayuresh Patil",
    "SEO Analyst",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Technical SEO",
    "Google Analytics",
    "Google Search Console",
    "Web Developer",
  ],

  metadataBase: new URL("https://mayureshpatil0310.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mayuresh Patil | SEO Analyst & Frontend Developer",
    description:
      "Portfolio of Mayuresh Patil — SEO Analyst and Frontend Developer.",
    url: "https://mayureshpatil0310.in",
    siteName: "Mayuresh Patil Portfolio",
    type: "website",
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
      <body>
        {children}

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