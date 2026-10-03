"use client";

import React from "react";
import Accordion from "../ui/Accordion";

const FAQ_ITEMS = [
  
  {
    id: "1",
    question: "How do you attribute ROI to paid campaign channels?",
    answer: "We integrate advanced server-side conversion tracking (including Meta Conversions API and Google Tag Manager Server-Side) and custom Looker Studio attributions. This ensures we capture conversions accurately, bypassing ad-blockers and Safari cookie limitations, and showing you exactly where sales originate.",
  },
  {
    id: "2",
    question: "What services do you offer as a freelancer?",
    answer: "I specialize in building responsive websites, integrating APIs, optimizing UI/UX with Tailwind CSS, and creating dynamic React applications. My goal is to deliver scalable and modern solutions tailored to your business needs.",
  },
  {
    id: "3",
    question: "How do you ensure website performance and security?",
    answer: "I implement best practices such as code splitting, lazy loading, secure authentication flows, and HTTPS enforcement. Additionally, I use modern frameworks and server-side optimizations to ensure fast load times and robust security.",
  },
  {
    id: "4",
    question: "Do you provide ongoing support after project delivery?",
    answer: "Yes, I offer maintenance packages that include bug fixes, performance monitoring, and feature updates. This ensures your website continues to run smoothly and stays aligned with evolving business goals.",
  },
  {
    id: "5",
    question: "How do you handle payments and contracts?",
    answer: "I provide clear contracts outlining scope, timelines, and deliverables. Payments can be processed securely through trusted gateways like Razorpay or PayPal, ensuring transparency and reliability.",
  },
  {
    id: "6",
    question: "Can you customize websites for specific industries?",
    answer: "Absolutely. I tailor designs and functionality to match industry-specific requirements, whether it's real estate, e-commerce, SaaS, or personal portfolios. Each project is customized to reflect your brand identity and goals.",
  }


];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Everything you need to know about our growth frameworks, client onboarding, support channels, and performance guarantees.
          </p>
        </div>

        {/* FAQs Accordion */}
        <Accordion items={FAQ_ITEMS} />

      </div>
    </section>
  );
}
