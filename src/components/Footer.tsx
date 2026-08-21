import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <p className="text-lg font-semibold text-slate-900">
              Mayuresh Patil
            </p>

            <p className="mt-1 text-sm text-slate-600">
              SEO Analyst & Frontend Developer
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-5 text-sm"
          >
            <Link
              href="#home"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="text-slate-600 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t pt-6 text-center">
          <p className="text-sm text-slate-600">
            © {year} Mayuresh Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}