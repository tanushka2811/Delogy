"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM = [
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Founder & Growth Director",
    experience: "12+ Years (Ex-Stripe Growth)",
    linkedin: "https://linkedin.com",
    initials: "SJ",
    gradient: "from-primary to-accent",
  },
  {
    id: "david",
    name: "David Chen",
    role: "Head of Paid Acquisition",
    experience: "9+ Years (Managed $50M+ Spend)",
    linkedin: "https://linkedin.com",
    initials: "DC",
    gradient: "from-accent to-secondary",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Creative Director & Brand Lead",
    experience: "8+ Years (Awwwards Jury Member)",
    linkedin: "https://linkedin.com",
    initials: "ER",
    gradient: "from-secondary to-primary",
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "Technical SEO & Data Architect",
    experience: "7+ Years (Ex-Linear SEO lead)",
    linkedin: "https://linkedin.com",
    initials: "MV",
    gradient: "from-amber-500 to-primary",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Meet the Growth Leadership Team
          </h2>
          <p className="text-muted text-base leading-relaxed">
            We are a compact group of senior strategists, copywriters, and paid acquisition specialists who work directly on your accounts.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-gray-100 bg-white hover:border-primary/10 hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
            >
              {/* Profile Avatar Initials with Gradient */}
              <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${member.gradient} flex items-center justify-center text-white text-3xl font-extrabold shadow-md mb-6 transition-transform duration-300 group-hover:scale-105 select-none relative`}>
                {member.initials}
                {/* Floating shine effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 overflow-hidden" />
              </div>

              {/* Bio Details */}
              <h3 className="font-bold text-lg text-bg-dark mb-1">{member.name}</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">
                {member.role}
              </p>
              
              <div className="w-full h-[1px] bg-gray-100 my-3" />
              
              <p className="text-muted text-xs font-semibold mb-6">
                {member.experience}
              </p>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-100 hover:border-primary/20 hover:text-primary flex items-center justify-center transition-colors text-muted cursor-pointer"
                aria-label={`${member.name} LinkedIn Profile`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
