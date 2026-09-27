import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayureshpatil0310.in"),

  title: {
    default: "Mayuresh Patil | SEO Analyst & Digital Marketing Executive",
    template: "%s | Mayuresh Patil",
  },

  description:
    "Mayuresh Patil is a B.Com. graduate and SEO Analyst with 1 year of experience in Social Media Marketing, SEO, Google Search Console, Google Analytics 4, keyword research and digital marketing.",

  keywords: [
    "Mayuresh Patil",
    "SEO Analyst",
    "Digital Marketing Executive",
    "Digital Marketing",
    "Social Media Marketing",
    "SEO",
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Google Search Console",
    "Google Analytics 4",
    "Google Business Profile",
    "SEO Content Optimization",
    "Competitor Analysis",
    "Social Media Management",
    "Meta Business Suite",
    "Canva",
    "SEO Reporting",
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
    title: "Mayuresh Patil | SEO Analyst & Digital Marketing Executive",

    description:
      "B.Com. graduate with 1 year of experience in Social Media Marketing, SEO and Digital Marketing.",

    url: "https://www.mayureshpatil0310.in/",

    siteName: "Mayuresh Patil Portfolio",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Mayuresh Patil - SEO Analyst & Digital Marketing Executive",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mayuresh Patil | SEO Analyst & Digital Marketing Executive",

    description:
      "B.Com. graduate with 1 year of experience in Social Media Marketing, SEO and Digital Marketing.",

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

  jobTitle: "SEO Analyst & Digital Marketing Executive",

  description:
    "Mayuresh Patil is a B.Com. graduate and SEO Analyst with 1 year of experience in Social Media Marketing, SEO and Digital Marketing.",

  knowsAbout: [
    "SEO",
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Google Search Console",
    "Google Analytics 4",
    "Google Business Profile",
    "SEO Content Optimization",
    "Competitor Analysis",
    "Social Media Marketing",
    "Social Media Management",
    "Meta Business Suite",
    "Content Planning",
    "Canva",
    "Excel",
    "SEO Reporting",
    "Digital Marketing",
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