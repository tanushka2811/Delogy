"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Megaphone,
  Share2,
  Compass,
  FileText,
  MailOpen,
  Laptop,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Rank #1 for high-intent search queries. We optimize technical infrastructure, content clusters, and high-authority links to scale organic revenue.",
    icon: Search,
    color: "text-accent bg-accent/5 hover:bg-accent/15",
  },
  {
    id: "google-ads",
    title: "Google Pay-Per-Click Ads",
    description: "Capture customers at the exact moment they search. We construct hyper-targeted search, shopping, and performance-max campaigns that convert.",
    icon: TrendingUp,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  {
    id: "meta-ads",
    title: "Meta Social Ads",
    description: "Interrupt the scroll with stunning visuals. We engineer custom creative pipelines and algorithmic scaling strategies across Facebook and Instagram.",
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
    description: "Carve out your unique market position. We shape modern logos, typographic rules, product messaging matrices, and cohesive visual styles.",
    icon: Compass,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  {
    id: "content",
    title: "Content Marketing",
    description: "Establish industry thought leadership. We write long-form data-driven reports, blog clusters, and creative copy designed to educate and capture leads.",
    icon: FileText,
    color: "text-secondary bg-secondary/5 hover:bg-secondary/15",
  },
  {
    id: "email",
    title: "Email & SMS Marketing",
    description: "Automate user lifetime value. We write customized checkout-recovery flows, welcome sequences, and weekly digests using advanced segmentation.",
    icon: MailOpen,
    color: "text-accent bg-accent/5 hover:bg-accent/15",
  },
  {
    id: "web",
    title: "High-Converting Web Design",
    description: "Speed, design, and code combined. We craft premium landing pages and Webflow/Next.js portals optimized for maximum load speed and conversions.",
    icon: Laptop,
    color: "text-primary bg-primary/5 hover:bg-primary/15",
  },
  {
    id: "analytics",
    title: "Advanced Data Analytics",
    description: "No guesswork, just absolute metrics. We integrate Server-Side Tracking, GA4 dashboards, and custom marketing attribution models for crystal-clear ROI.",
    icon: BarChart2,
    color: "text-secondary bg-secondary/5 hover:bg-secondary/15",
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
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Tailored Marketing Services Designed to Scale
          </h2>
          <p className="text-muted text-base leading-relaxed">
            We don't offer generic templates. We construct targeted omnichannel growth formulas designed specifically for your target audience and budget.
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
                className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${service.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-bg-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => handleScrollToContact(service.title)}
                  className="inline-flex items-center text-xs font-bold tracking-wide uppercase text-primary hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer group/btn"
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
