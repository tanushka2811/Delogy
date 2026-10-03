"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {Send, Check } from "lucide-react";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "growth",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        website: "",
        service: "growth",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-14 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blob */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Book Your Free Growth Strategy Audit
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Let&apos;s evaluate your existing marketing channels. We&apos;ll analyze your search rankings, conversion rates, and paid ad funnels, free of charge.
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center">
          
          {/*  Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-bg-dark uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-bg-dark uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="website" className="text-xs font-bold text-bg-dark uppercase tracking-wider">
                    Website URL
                  </label>
                  <input
                    id="website"
                    type="url"
                    required
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://company.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold text-bg-dark uppercase tracking-wider">
                    Desired Strategy
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark cursor-pointer"
                  >
                    <option value="seo">SEO Optimization</option>
                    <option value="ppc">Paid Acquisition (Google/Meta)</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="brand">Brand Identity & Design</option>
                    <option value="growth">Accelerator (Full Growth Plan)</option>
                    <option value="custom">Enterprise Consulting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-bg-dark uppercase tracking-wider">
                  What is your primary scaling bottleneck?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your conversion rates, lead pipelines, or current ad spend challenges..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark resize-none"
                />
              </div>

              <Button
                variant={isSubmitted ? "glass" : "primary"}
                className="w-full"
                type="submit"
                icon={isSubmitted ? Check : Send}
              >
                {isSubmitted ? "Audit Booking Sent!" : "Book Free Strategy Call"}
              </Button>
            </form>
          </motion.div>

         

        </div>

      </div>
    </section>
  );
}
