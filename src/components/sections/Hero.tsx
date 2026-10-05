"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Sparkles, Target, Zap, Megaphone, MousePointerClick, Search } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const { scrollY } = useScroll();
  // Hero Parallax Scroll effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-bg-light grid-dots"
    >
      {/* Premium Animated Blob Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-blob-spin pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent/15 blur-[120px] animate-blob-spin pointer-events-none [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Sparkle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/10 text-primary font-semibold text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Your Digital Growth Partner
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-bg-dark leading-[1.1] sm:leading-[1.05]">
            Build Your Brand.{" "}
            <span className="text-gradient font-black md:text-5xl sm:text-5xl text-3xl">
             Grow Your Business.
            </span>
           
          </h1>

          <p className="text-muted text-sm sm:text-xl leading-relaxed max-w-xl">
          Delogy helps ambitious businesses build a stronger digital presence through powerful branding, high-performing websites, SEO, and result-focused advertising.
          </p>
          {/* Supporting Text */} 
          <div className="flex flex-wrap gap-x-6  text-sm font-medium text-bg-dark"> 
            <span className="flex items-center gap-2"> 
              <Search className="w-4 h-4 text-primary" /> SEO Optimization </span>
               <span className="flex items-center gap-2"> <MousePointerClick className="w-4 h-4 text-accent" /> Google PPC </span>
                <span className="flex items-center gap-2"> <Megaphone className="w-4 h-4 text-secondary" /> Meta Ads </span> 
            </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => handleScrollTo("#contact")}
              className="max-sm:px-3 max-sm:py-3 max-sm:text-sm"
            >
              Start Your Project
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => handleScrollTo("#projects")}
                className="max-sm:px-4 max-sm:py-2 max-sm:text-sm"
            >
              Explore Services
            </Button>
          </div>

          {/* Quick trust metrics */}
          <div className="pt-2 border-t border-gray-100 flex items-center gap-8 text-sm text-muted">
            <div>
              <span className="block text-2xl font-bold text-bg-dark">360°</span>
              Digital Growth Solutions
            </div>
            <div className="w-[1px] h-10 bg-gray-200" />
            <div>
              <span className="block text-2xl font-bold text-bg-dark">5+</span>
               Core Digital Services
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Marketing Dashboards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-6 relative w-full aspect-[4/3] max-w-xl mx-auto flex items-center justify-center"
        >
          {/* Main central dashboard */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="w-[85%] bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 relative z-10"
          >
            {/* Window bar header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] text-muted font-mono tracking-widest uppercase">
                DELOGY / GROWTH
              </div>
            </div>

            {/* Header metrics */}
            <div className="mb-6">
              <span className="text-xs text-muted font-medium"> Digital Growth Services</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-bg-dark tracking-tight">5 services</span>
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Growth Focused
                </span>
              </div>
            </div>

            {/* Custom SVG line chart */}
            <div className="w-full h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="3" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="3" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="3" />
                {/* Chart Path */}
                <path
                  d="M 0 85 Q 30 75 60 40 T 120 50 T 180 20 T 240 30 T 300 10"
                  fill="none"
                  stroke="#6D28D9"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 85 Q 30 75 60 40 T 120 50 T 180 20 T 240 30 T 300 10 L 300 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>
            
            {/* Chart footer labels */}
            <div className="flex justify-between items-center text-[10px] text-muted font-mono mt-4">
              <span>Brand</span>
              <span>Website</span>
              <span>Growth</span>
              <span>Reach</span>
            </div>
          </motion.div>

          {/* Floating Card 1: Traffic Acquisition (Donut chart representation) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
            className="absolute top-0 right-[-10px] w-[50%] bg-white rounded-2xl border border-gray-100 shadow-xl p-4 z-20"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-bg-dark mb-3">
              <BarChart3 className="w-4 h-4 text-accent" />
             Our Growth Channels
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-medium text-muted">
                  <span>Google Ads</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[42%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-medium text-muted">
                  <span>Meta PPC</span>
                  <span>35%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[35%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-medium text-muted">
                  <span>SEO (Organic)</span>
                  <span>23%</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[23%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Conversion Growth */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1.0 }}
            className="absolute bottom-[-15px] left-0 w-[48%] bg-white rounded-2xl border border-gray-100 shadow-xl p-4 z-20"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-bg-dark mb-2">
              <Target className="w-4 h-4 text-secondary" />
               Growth Strategy
            </div>
            <div className="text-xl font-black text-bg-dark tracking-tight"> Data + Creativity</div>
            <span className="text-[10px] text-muted flex items-center gap-1 mt-1 font-medium">
              <Zap className="w-3 h-3 text-amber-500 fill-amber-500" /> Built for digital growth
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
