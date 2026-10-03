"use client";

import React from "react";
import TestimonialCarousel from "../ui/TestimonialCarousel";

const TESTIMONIALS = [
  {
    id: "1",
    quote: "PixelPulse tripled our acquisition volume in 6 months while lowering our customer acquisition cost (CAC) by 32%. Their technical SEO and creative Meta Ads strategy completely transformed our business.",
    author: "Marcus Sterling",
    role: "VP of Marketing",
    company: "Aura FinTech",
    rating: 5,
    logo: "Aura FinTech",
  },
  {
    id: "2",
    quote: "The team at PixelPulse acts like an extension of our own growth squad. They design fast, code beautifully, and report metrics with absolute transparency. Highly recommended for any D2C brand.",
    author: "Clara Thorne",
    role: "CEO & Founder",
    company: "Velo Fashion Group",
    rating: 5,
    logo: "Velo Retail",
  },
  {
    id: "3",
    quote: "We had issues attributing ROI across multiple ad networks. PixelPulse sorted our data tracking stack, built custom attribution models, and scaled our enterprise sales pipelines by 84%.",
    author: "Jonathan Miller",
    role: "Director of Growth",
    company: "Solas Health",
    rating: 5,
    logo: "Solas Health",
  },
];

const LOGOS = ["Aura FinTech", "Velo Retail", "Solas MedTech", "Pulse Saas", "Linear Clone", "Stripe Mock"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Trusted by Innovators and Market Leaders
          </h2>
          <p className="text-muted text-base leading-relaxed">
            See how we help startups scale up their conversion efficiency and generate measurable bottom-line growth.
          </p>
        </div>

        {/* Testimonials Slide Carousel */}
        <TestimonialCarousel testimonials={TESTIMONIALS} />

        {/* Company Logos Grid */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <p className="text-center text-xs font-bold text-muted uppercase tracking-widest mb-8">
            Scaling Brands Worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {LOGOS.map((logo, idx) => (
              <span
                key={logo}
                className="font-extrabold text-gray-400 text-sm md:text-base select-none uppercase tracking-wider hover:text-primary transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
