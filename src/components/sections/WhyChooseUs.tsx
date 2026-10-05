"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BarChart3, Eye, Zap, Cpu, UserCheck } from "lucide-react";

const WHY_ITEMS = [
    {
    id: "strategy",
    title: "Strategy-First Approach",
    description:
      "We start by understanding your business, audience, and goals before creating a digital strategy that fits your brand and growth objectives.",
    icon: Users,
    glow: "group-hover:border-primary/40",
    iconBg: "text-primary bg-primary/10",
  },
  {
    id: "results",
    title: "Growth-Focused Solutions",
    description:
      "From SEO and paid advertising to websites and branding, we focus on building digital solutions that support meaningful and sustainable business growth.",
    icon: BarChart3,
    glow: "group-hover:border-accent/40",
    iconBg: "text-accent bg-accent/10",
  },
  {
    id: "transparency",
    title: "Clear & Transparent",
    description:
      "We believe in straightforward communication and clear strategies, keeping you informed about the work being done and the direction of your digital growth.",
    icon: Eye,
    glow: "group-hover:border-secondary/40",
    iconBg: "text-secondary bg-secondary/10",
  },
  {
    id: "collaboration",
    title: "Collaborative Partnership",
    description:
      "Your business knows its audience best. We work closely with you to understand your vision and turn your ideas into effective digital experiences.",
    icon: Zap,
    glow: "group-hover:border-amber-500/40",
    iconBg: "text-amber-400 bg-amber-400/10",
  },
  {
    id: "technology",
    title: "Modern Technology",
    description:
      "We combine modern design practices, development technologies, analytics, and digital marketing tools to create experiences built for today's online world.",
    icon: Cpu,
    glow: "group-hover:border-emerald-500/40",
    iconBg: "text-emerald-400 bg-emerald-400/10",
  },
  {
    id: "support",
    title: "Dedicated Support",
    description:
      "We stay connected throughout the process, making it easier to discuss ideas, understand progress, and continuously improve your digital presence.",
    icon: UserCheck,
    glow: "group-hover:border-rose-500/40",
    iconBg: "text-rose-400 bg-rose-400/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-14 bg-bg-dark text-white relative overflow-hidden grid-dots-dark">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why Partner With Us
          </span>
          <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight text-white">
            We Focus on Metrics That Drive Bottom-Line Business Revenue
          </h2>
          <p className="text-gray-400 text-base leading-relaxed text-sm sm:text-lg">
            Many marketing agencies report vanity metrics. We measure our campaign performance in conversion rates, customer lifetime value, and ROI.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`sm:p-8 py-4 px-5 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group ${item.glow}`}
              >
                <div className={`sm:w-12 sm:h-12 w-10 h-10 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                  <Icon className="sm:w-5 sm:h-5 w-4 h-4" />
                </div>
                <h3 className="sm:text-lg  text-sm font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 sm:text-sm text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
