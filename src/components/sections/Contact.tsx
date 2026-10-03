"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
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
    <section id="contact" className="py-24 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blob */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
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

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm flex flex-col justify-between"
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

          {/* Column 2: Maps and Office Details
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm space-y-6">
              <h3 className="font-bold text-lg text-bg-dark border-l-2 border-primary pl-3">
                PixelPulse HQ
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-sm">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-bg-dark">Address</span>
                    <span className="text-muted text-xs">285 Fulton St, New York, NY 10007</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-bg-dark">General Queries</span>
                    <a href="mailto:hello@pixelpulse.digital" className="text-muted text-xs hover:text-primary transition-colors">
                      hello@pixelpulse.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-bg-dark">Phone Contact</span>
                    <a href="tel:+12125550198" className="text-muted text-xs hover:text-primary transition-colors">
                      +1 (212) 555-0198
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-bg-dark">Business Hours</span>
                    <span className="text-muted text-xs">Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>

           
          </motion.div> */}

        </div>

      </div>
    </section>
  );
}
