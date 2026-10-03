"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle, TrendingUp } from "lucide-react";
import Button from "../ui/Button";

const PROJECTS = [
  {
    id: "fintech",
    title: "Aura FinTech",
    category: "Financial Technology",
    description: "Built and scaled Aura's organic presence, combined with surgical search campaigns to capture high-value customer acquisitions.",
    results: [
      { label: "Traffic Growth", value: "+142%" },
      { label: "Conversion Rate", value: "+38%" },
      { label: "Acquisition ROI", value: "4.2x" },
    ],
    gradient: "from-primary to-accent",
    chartDots: [30, 45, 40, 60, 55, 78, 90],
  },
  {
    id: "ecommerce",
    title: "Velo Fashion Group",
    category: "E-Commerce & Retail",
    description: "Re-engineered Velo's Meta Ads funnel and landing page architecture to unlock maximum direct-to-consumer purchase conversions.",
    results: [
      { label: "Traffic Growth", value: "+310%" },
      { label: "Conversion Rate", value: "+76%" },
      { label: "Sales Revenue ROI", value: "5.8x" },
    ],
    gradient: "from-accent to-secondary",
    chartDots: [20, 35, 50, 45, 68, 80, 95],
  },
  {
    id: "saas",
    title: "Solas Health Tech",
    category: "B2B SaaS / MedTech",
    description: "Created a comprehensive SEO cluster strategy coupled with localized LinkedIn ads to capture enterprise accounts.",
    results: [
      { label: "Traffic Growth", value: "+88%" },
      { label: "Lead Conversions", value: "+45%" },
      { label: "Contract Value ROI", value: "3.5x" },
    ],
    gradient: "from-secondary to-primary",
    chartDots: [40, 42, 55, 48, 62, 70, 85],
  },
];

export default function Projects() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
              Featured Client Campaigns and Real Performance Results
            </h2>
          </div>
          <Button
            variant="outline"
            icon={ArrowRight}
            onClick={handleScrollToContact}
            className="group"
          >
            Start Your Case Study
          </Button>
        </div>

        {/* Case Studies Card List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Graphic Header Block */}
              <div className={`h-48 bg-gradient-to-tr ${project.gradient} p-6 relative overflow-hidden flex items-end shrink-0`}>
                {/* SVG Mock chart background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <path
                      d={`M 0 100 ${project.chartDots.map((val, i) => `L ${(200 / 6) * i} ${100 - val}`).join(" ")} L 200 100 Z`}
                      fill="rgba(255,255,255,0.4)"
                    />
                    <path
                      d={`M 0 ${100 - project.chartDots[0]} ${project.chartDots.map((val, i) => `S ${(200 / 6) * i} ${100 - val}`).join(" ")}`}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Categories Badge */}
                <div className="relative z-10 glass-dark text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Text Description */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-bg-dark group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Performance Metrics Block */}
                <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-gray-100 text-center">
                  {project.results.map((res) => (
                    <div key={res.label} className="space-y-1">
                      <div className="text-lg font-black text-bg-dark tracking-tight">{res.value}</div>
                      <div className="text-[10px] font-bold text-muted uppercase tracking-wider leading-none">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
