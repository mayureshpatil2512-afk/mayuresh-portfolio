"use client";

import Image from "next/image";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  }
}

const trackEvent = (
  eventName: string,
  parameters?: Record<string, string>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-100"
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-blue-600">
            👋 Hello, I am
          </p>

          <h1 className="mt-5 text-5xl font-bold text-slate-900 md:text-7xl">
            Mayuresh Patil
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-slate-700">
            SEO Analyst & Frontend Developer
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-slate-600">
            I build fast, SEO-optimized websites using Next.js,
            React, Technical SEO, Google Search Console,
            Google Analytics 4, and Core Web Vitals.
          </p>

          {/* BUTTONS */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            {/* HIRE ME */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Hire Me
            </motion.a>

            {/* DOWNLOAD RESUME */}
            <motion.a
              href="/resume.pdf"
              download
              onClick={() =>
                trackEvent("resume_download", {
                  file_name: "resume.pdf",
                })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Download Resume
            </motion.a>

          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="mt-10 flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-blue-600 shadow-2xl md:h-[450px] md:w-[450px]">

            <Image
              src="/images/profile.png"
              alt="Mayuresh Patil"
              fill
              priority
              className="object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}