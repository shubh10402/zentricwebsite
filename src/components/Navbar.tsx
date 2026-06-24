"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 relative backdrop-blur-md bg-white/80 border-b border-blue-100 flex justify-between items-center px-5 py-2.5">
      <h1 className="font-bold px-3 text-blue-600">Zentric Logo</h1>

      <div className="flex items-center space-x-4">
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact button - always visible */}
        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
            Contact
          </button>
        </Link>

        {/* Hamburger - mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-blue-100 shadow-md md:hidden">
          <div className="flex flex-col px-5 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="hover:text-blue-600 transition text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
