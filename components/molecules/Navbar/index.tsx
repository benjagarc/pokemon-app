"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const arrayRoutes = [
    { id: 1, label: "Games", href: "/game" },
    { id: 2, label: "Pokemon", href: "/pokemon" },
    { id: 3, label: "Favorites", href: "/favorites" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-0 w-full z-50  bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg text-white"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
          }}
          className="text-xl font-bold tracking-wide drop-shadow-md"
        >
          Pokédex App
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {arrayRoutes.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="hover:text-yellow-300 transition drop-shadow-md"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col  bg-white/20 border border-white/20 shadow-lgtext-white font-semibold text-center py-4 space-y-4 overflow-hidden"
        >
          {arrayRoutes.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                onClick={toggleMenu}
                href={href}
                className="hover:text-yellow-300 transition drop-shadow-md"
              >
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
};

export default Navbar;
