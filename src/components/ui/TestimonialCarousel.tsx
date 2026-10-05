"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  logo: string; // Plain text or small markup representing the logo
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const current = testimonials[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12 ">
      {/* Background quote mark decoration */}
      <Quote className="absolute top-0 left-0 w-24 h-24 text-primary/5 -translate-x-4 -translate-y-4 pointer-events-none select-none" />

      {/* Main Slide Container */}
      <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col items-center text-center px-4"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < current.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-sm md:text-xl font-medium text-bg-dark leading-relaxed mb-8 max-w-3xl">
              "{current.quote}"
            </blockquote>

            {/* Client Bio */}
            <div>
              <cite className="not-italic block font-bold text-sm text-bg-dark">
                {current.author}
              </cite>
              <span className="text-muted text-sm block mt-1">
                {current.role} &middot; <span className="font-semibold text-primary">{current.company}</span>
              </span>
            </div>

            {/* Styled Logo Indicator
            <div className="mt-8 text-sm tracking-widest font-black text-gray-300 uppercase select-none">
              {current.logo}
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
        <button
          onClick={prevSlide}
          className="sm:w-10 sm:h-10 w-7 h-7 rounded-full border border-gray-100 bg-white shadow-sm flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 pointer-events-auto transition-all cursor-pointer focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="sm:w-10 sm:h-10 w-7 h-7 rounded-full border border-gray-100 bg-white shadow-sm flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 pointer-events-auto transition-all cursor-pointer focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? "w-8 bg-primary" : "w-2.5 bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
