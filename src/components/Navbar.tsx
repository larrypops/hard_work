"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-primary/95 py-4 shadow-lg" : "bg-transparent py-6"
      }`}
      id="main-nav"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="overflow-hidden rounded-lg border border-white/20 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Logo ETS HARD WORK"
                width={48}
                height={48}
                className="h-12 w-12 object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-white">HARD WORK</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                Techno-Services
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.path
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <a
                href="tel:+237687882290"
                className="flex items-center gap-1 text-sm text-white transition-colors hover:text-accent"
                id="header-phone"
              >
                <Phone className="h-4 w-4" />
                <span>687 882 290</span>
              </a>
              <a
                href="https://wa.me/237687882290"
                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent-hover hover:shadow-accent/40"
                id="header-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/whatsapp-official.svg"
                  alt="WhatsApp"
                  className="h-4 w-4"
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-white"
              aria-label="Ouvrir le menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-primary p-8 md:hidden"
            id="mobile-menu-container"
          >
            <div className="mb-12 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="overflow-hidden rounded-lg border border-white/20 bg-white">
                  <Image
                    src="/images/logo.jpg"
                    alt="Logo ETS HARD WORK"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">HARD WORK</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Fermer le menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-display text-2xl font-bold ${
                    pathname === link.path ? "text-accent" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <a
                href="tel:+237687882290"
                className="flex items-center gap-3 text-lg text-white"
              >
                <Phone className="h-6 w-6 text-secondary" />
                <span>687 882 290</span>
              </a>
              <a
                href="https://wa.me/237687882290"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent py-4 text-lg font-bold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/whatsapp-official.svg"
                  alt="WhatsApp"
                  className="h-6 w-6"
                />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
