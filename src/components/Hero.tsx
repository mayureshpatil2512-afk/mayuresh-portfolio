"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-br from-blue-50 via-white to-indigo-100"
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-xl font-semibold text-blue-600"
          >
            👋 Hello, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-5 text-5xl font-bold text-slate-900 md:text-7xl"
          >
            Mayuresh Patil
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-5 text-3xl font-semibold text-slate-700"
          >
            SEO Analyst & Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-10 max-w-3xl text-lg leading-8 text-slate-600"
          >
            I build fast, SEO-optimized websites using Next.js,
            React, Technical SEO, Google Search Console,
            Google Analytics 4, and Core Web Vitals.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
              rotate: 2,
            }}
            transition={{ duration: 0.3 }}
            className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-blue-600 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          >
            <Image
              src="/images/profile.jpg"
              alt="Mayuresh Patil - SEO Analyst and Frontend Developer"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}