"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BackToTop from "@/components/layout/BackToTop";

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Utilities */}
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
