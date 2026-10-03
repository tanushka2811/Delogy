"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Trophy, Award } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const STATS = [
  {
    id: "years",
    target: 8,
    suffix: "+",
    label: "Years of Growth",
    icon: Trophy,
    color: "text-primary bg-primary/5",
  },
  {
    id: "clients",
    target: 250,
    suffix: "+",
    label: "Brands Scaled",
    icon: Users,
    color: "text-accent bg-accent/5",
  },
  {
    id: "projects",
    target: 400,
    suffix: "+",
    label: "Successful Projects",
    icon: Award,
    color: "text-secondary bg-secondary/5",
  },
  {
    id: "countries",
    target: 18,
    suffix: "+",
    label: "Global Markets",
    icon: Globe,
    color: "text-amber-500 bg-amber-500/5",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-10"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
              Scaling Digital Presence With Creative Intelligence
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-bold text-lg text-bg-dark mb-2">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To engineer impactful digital marketing solutions that yield predictable revenue, cultivate deep customer connections, and launch brands to the forefront of their industries.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4 py-2">
              <h3 className="font-bold text-lg text-bg-dark mb-2">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed">
                To build a world where creative visionaries and analytical thinkers collaborate to push the boundaries of brand growth, crafting experiences that define the digital economy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 grid grid-cols-2 gap-6"
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary/10 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-bg-dark tracking-tight">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-muted text-xs font-semibold mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
