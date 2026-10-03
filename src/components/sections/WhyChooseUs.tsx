"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BarChart3, Eye, Zap, Cpu, UserCheck } from "lucide-react";

const WHY_ITEMS = [
  {
    id: "team",
    title: "Experienced Team",
    description: "Our strategists, designers, and developers have led campaigns for high-growth tech companies and global retail brands.",
    icon: Users,
    glow: "group-hover:border-primary/40",
    iconBg: "text-primary bg-primary/10",
  },
  {
    id: "data",
    title: "Data-Driven Decisions",
    description: "We don't guess what creative works. We look at conversion metrics, heatmaps, and user recordings to build strategies that convert.",
    icon: BarChart3,
    glow: "group-hover:border-accent/40",
    iconBg: "text-accent bg-accent/10",
  },
  {
    id: "reporting",
    title: "Transparent Reporting",
    description: "Log into your custom web dashboard anytime. Track CTR, CPM, ROI, and spend attribution in real time, no marketing jargon.",
    icon: Eye,
    glow: "group-hover:border-secondary/40",
    iconBg: "text-secondary bg-secondary/10",
  },
  {
    id: "support",
    title: "Fast Support",
    description: "Communication is our strength. Access your dedicated Slack channel for general answers in under 2 hours, day or night.",
    icon: Zap,
    glow: "group-hover:border-amber-500/40",
    iconBg: "text-amber-400 bg-amber-400/10",
  },
  {
    id: "tools",
    title: "Modern Tools",
    description: "We use the latest data tracking setups, generative design software, A/B testing infrastructure, and tracking automation APIs.",
    icon: Cpu,
    glow: "group-hover:border-emerald-500/40",
    iconBg: "text-emerald-400 bg-emerald-400/10",
  },
  {
    id: "managers",
    title: "Dedicated Managers",
    description: "Get one point of contact who understands your business strategy intimately. No passing you off to junior account executives.",
    icon: UserCheck,
    glow: "group-hover:border-rose-500/40",
    iconBg: "text-rose-400 bg-rose-400/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-bg-dark text-white relative overflow-hidden grid-dots-dark">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            We Focus on Metrics That Drive Bottom-Line Business Revenue
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
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
                className={`p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group ${item.glow}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
