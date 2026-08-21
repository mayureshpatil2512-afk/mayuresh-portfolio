import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayuresh Patil | SEO Analyst & Frontend Developer",
  description:
    "Mayuresh Patil - SEO Analyst and Frontend Developer specializing in Technical SEO, Next.js, React, Google Search Console and Google Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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

        {children}
      </body>
    </html>
  );
}