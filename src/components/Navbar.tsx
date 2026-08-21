"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          Mayuresh Patil
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden gap-8 md:flex">

          {navItems.map((item) => (

            <li key={item.name}>

              <Link
                href={item.href}
                className="rounded-md px-3 py-2 font-medium text-gray-700 transition duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}

        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
>
  {menuOpen ? (
    <X size={28} />
  ) : (
    <Menu size={28} />
  )}
</button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="border-t bg-white md:hidden">

          <ul className="flex flex-col">

            {navItems.map((item) => (

              <li
                key={item.name}
                className="border-b"
              >

                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 font-medium transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      )}

    </header>
  );
}