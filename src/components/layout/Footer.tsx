"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

const SERVICES_LINKS = [
  { name: "SEO Optimization", href: "#services" },
  { name: "Google PPC Ads", href: "#services" },
  { name: "Meta Social Ads", href: "#services" },
  { name: "Brand Strategy", href: "#services" },
  { name: "Web Design & Development", href: "#services" },
];

const RESOURCES_LINKS = [
  { name: "About Delogy", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Why Choose Delogy", href: "#why-choose-us" },
  { name: "Client Experiences", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-bg-dark text-white border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo.png"
              alt="Delogy Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />

            <span className="font-extrabold text-xl tracking-tight text-gradient">
              DELOGY
            </span>
          </a>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Delogy helps businesses build stronger digital brands through
            strategy, creative design, modern technology, and performance-focused
            digital marketing.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/delogy-ai-b447a43a9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center transition-colors text-gray-400 cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/delogy.ai?stkn=bnowY2IyOTYwMGpk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center transition-colors text-gray-400 cursor-pointer"
              aria-label="Instagram"
            >
              <svg
                className="w-4 h-4 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19ePpCZNjU/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 flex items-center justify-center transition-colors text-gray-400 cursor-pointer"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        {/* <div className="flex flex-col gap-6 max-md:flex-row"> */}
        <div >
          <h3 className="font-bold text-lg mb-6 border-l-2 border-primary pl-3">
            Services
          </h3>

          <ul className="space-y-4">
            {SERVICES_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div >
          <h3 className="font-bold text-lg mb-6 border-l-2 border-accent pl-3">
            Explore
          </h3>

          <ul className="space-y-4">
            {RESOURCES_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg border-l-2 border-secondary pl-3">
            Stay Connected
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Stay connected with Delogy for useful insights, digital trends,
            branding ideas, and updates from the world of digital growth.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder-gray-500"
              />
            </div>

            <Button
              variant="secondary"
              className="w-full"
              size="sm"
              type="submit"
            >
              {subscribed ? "You're Connected!" : "Stay Updated"}
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-4 relative z-10">
        <div>
          &copy; {new Date().getFullYear()} DELOGY. All rights reserved.
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}