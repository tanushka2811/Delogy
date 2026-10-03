"use client";

import React from "react";
import TestimonialCarousel from "../ui/TestimonialCarousel";

const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Delogy understood what we wanted to build and turned our ideas into a clear and professional digital presence. The combination of strategy, design, and development made the entire process simple.",
    author: "Client Feedback",
    role: "Business Owner",
    company: "Delogy Client",
    rating: 5,
    logo: "Client",
  },
  {
    id: "2",
    quote:
      "What stood out about Delogy was their approach to our brand. They focused on understanding our business first and then created a digital direction that felt consistent, modern, and aligned with our goals.",
    author: "Client Feedback",
    role: "Founder",
    company: "Delogy Client",
    rating: 4,
    logo: "Client",
  },
  {
    id: "3",
    quote:
      "From website development to digital marketing, Delogy brings everything together under one roof. Their focus on creating a strong digital foundation made the experience smooth and straightforward.",
    author: "Client Feedback",
    role: "Business Owner",
    company: "Delogy Client",
    rating: 5,
    logo: "Client",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 bg-bg-light relative overflow-hidden grid-dots">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-4">
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


      </div>
    </section>
  );
}
