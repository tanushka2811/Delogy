"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Megaphone,
  Share2,
  Compass,
  Laptop,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Improve your search visibility and connect with the right audience. We optimize your website, content, and search strategy to build a stronger organic presence and support long-term growth.",
    icon: Search,
    color: "text-accent bg-accent/5 hover:bg-accent/15",
  },
  {
    id: "google-ads",
    title: "Google Pay-Per-Click Ads",
    description: "Reach people actively searching for your products or services. We create focused Google Ads campaigns with the right targeting, messaging, and optimization to help turn clicks into meaningful business opportunities.",
    icon: TrendingUp,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  {
    id: "meta-ads",
    title: "Meta Social Ads",
    description: "Put your brand in front of the right audience across Facebook and Instagram. We combine audience targeting, creative campaigns, and continuous optimization to build awareness and generate valuable leads.",
    icon: Megaphone,
    color: "text-secondary bg-secondary/5 hover:bg-secondary/15",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Cultivate community and organic reach. We curate content schedules, trend-jacking vertical clips, and influencer partnerships that spark viral interest.",
    icon: Share2,
    color: "text-accent bg-accent/5 hover:bg-accent/15",
  },
  {
    id: "brand",
    title: "Brand Identity & Strategy",
    description:  "Build a brand that people can recognize, remember, and trust. We develop clear brand positioning, visual direction, messaging, and strategy that give your business a consistent digital identity.",
    icon: Compass,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  
  {
    id: "web",
    title: "High-Converting Web Design",
    description: "Create a website that represents your brand and supports your business goals. We design and develop modern, responsive, and user-focused websites that deliver a smooth experience across every device.",
    icon: Laptop,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function Services() {
  const handleScrollToContact = (serviceTitle: string) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
      // Optionally prefill consultation details, but as it's static we just scroll
    }
  };

  return (
    <section id="services" className="py-14 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Tailored Marketing Services Designed to Scale
          </h2>
          <p className="text-muted text-base leading-relaxed">
            We don&apos;t offer generic templates. We construct targeted omnichannel growth formulas designed specifically for your target audience and budget.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="sm:p-8 p-5 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`sm:w-12 sm:h-12 w-10 h-10 rounded-2xl flex items-center justify-center sm:mb-6 mb-3 transition-all duration-300 ${service.color}`}>
                    <Icon className="sm:w-5 sm:h-5 w-4 h-4" />
                  </div>
                  <h3 className="sm:text-lg text-sm font-bold text-bg-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted sm:text-sm text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => handleScrollToContact(service.title)}
                  className="inline-flex items-center text-xs font-bold tracking-wide uppercase text-primary hover:text-secondary transition-colors duration-200 cursor-pointer group/btn"
                >
                  Discuss Strategy
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
