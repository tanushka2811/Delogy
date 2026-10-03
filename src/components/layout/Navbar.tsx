"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
   {name:"Case Studies", href:"#projects"},
  { name: "Why Delogy", href: "#why-choose-us" },
  {name:"Team", href:"#team"},
  { name: "Testimonials", href: "#testimonials" },

 { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top:
          target.getBoundingClientRect().top +
          window.scrollY -
          80,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);

    scrollToSection(href);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    scrollToSection("#contact");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-md py-4 border-b border-gray-100"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Delogy Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />

            <span className="font-extrabold text-xl tracking-tight text-gradient group-hover:opacity-90 transition-opacity">
              DELOGY
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-muted hover:text-primary font-medium text-sm transition-colors relative group py-2"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={handleContactClick}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-bg-dark hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
            aria-label={
              isMobileMenuOpen ? "Close Menu" : "Open Menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 bg-white/95 backdrop-blur-lg lg:hidden flex flex-col p-6 border-t border-gray-100"
          >
            <div className="flex flex-col gap-6 my-auto items-center text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-bg-dark hover:text-primary font-semibold text-2xl transition-colors py-2 block w-full"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: NAV_LINKS.length * 0.05,
                }}
                className="w-full max-w-sm mt-8"
              >
                <Button
                  variant="primary"
                  className="w-full"
                  icon={ArrowRight}
                  onClick={handleContactClick}
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}