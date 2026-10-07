"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

const PROJECTS = [
  {
    id: "reader",
    title: "PageTurner Reader",
    category: "Web Reader & Publishing",
    description:
      "An immersive digital reading platform featuring customizable typography, dark mode synchronization, and offline reading capabilities.",
    link: "https://readerhere.netlify.app/",
    results: [
      { label: "Active Readers", value: "45K+" },
      { label: "Daily Sessions", value: "+115%" },
      { label: "Avg Read Time", value: "42m" },
    ],
    image: "/project-1.png",
  },
  {
    id: "task-management",
    title: "TaskFlow Pro",
    category: "Productivity & Collaboration",
    description:
      "A Kanban and list-based team productivity dashboard designed for fast-moving engineering and design teams with real-time syncing.",
    link: "https://task-management-frontend-uc76.onrender.com/",
    results: [
      { label: "Team Velocity", value: "+84%" },
      { label: "Task Completion", value: "94%" },
      { label: "Active Teams", value: "1.2K" },
    ],
    image: "/project-2.png",
  },
  {
    id: "property-listing",
    title: "EstateHub Marketplace",
    category: "Real Estate & PropTech",
    description:
      "An interactive property listing and discovery marketplace featuring advanced location filters, virtual tours, and agent scheduling.",
    link: "https://estate-hub-sooty.vercel.app/",
    results: [
      { label: "Property Views", value: "+210%" },
      { label: "Lead Conversions", value: "4.8x" },
      { label: "Agent Inquiries", value: "+65%" },
    ],
    image: "/project-3.png",
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
    <section id="projects" className="py-10 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Explore Our Live Production Applications & Platforms
            </h2>
          </div>
          <Button
            variant="outline"
            icon={ArrowRight}
            onClick={handleScrollToContact}
            className="group"
          >
            Start Your Project
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
              className="group rounded-xl p-3 border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Header Block */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-48 w-full overflow-hidden block cursor-pointer"
                aria-label={`View live demo of ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                  {project.category}
                </div>
              </a>

              {/* Text Description */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 flex items-center gap-2"
                    >
                      {project.title}
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition-colors duration-300"
                      aria-label={`External link to ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Performance Metrics Block */}
                <div className="grid grid-cols-3 gap-2 pt-6 mt-3 border-t border-gray-100 text-center">
                  {project.results.map((res) => (
                    <div key={res.label} className="space-y-1">
                      <div className="sm:text-lg text-sm font-black text-gray-900 tracking-tight">
                        {res.value}
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-none">
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
