"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "../ui/Button";
import {api} from "@/lib/api";
import { ContactFormPayload, ContactFormResponse } from "@/feature/contact/types.contact";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormPayload>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    serviceNeeded: "seo",
    projectDescription: "",
  });
 const [showPopup, setShowPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    try {
      const response = await api<ContactFormResponse>("/project-enquiries", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.success) {
        setIsSubmitted(true);
        setShowPopup(true);
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          serviceNeeded: "seo",
          projectDescription: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMsg(response.error || "Failed to submit enquiry");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
    setErrorMsg(err.message);
  } else {
    setErrorMsg("An unexpected error occurred");
  }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section
      id="contact"
      className="py-14 bg-bg-light relative overflow-hidden grid-dots"
    >
      {/* Decorative Blob */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Let&apos;s Work Together
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-bg-dark tracking-tight">
            Let&apos;s Build Something That Grows
          </h2>

          <p className="text-muted text-base leading-relaxed">
            Tell us about your business, your goals, and what you&apos;re
            looking to improve. We&apos;ll explore how Delogy can help
            strengthen your digital presence.
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-bg-dark uppercase tracking-wider"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-bg-dark uppercase tracking-wider"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>
              </div>

              {/* Phone Number + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-bg-dark uppercase tracking-wider"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-bold text-bg-dark uppercase tracking-wider"
                  >
                    What Do You Need?
                  </label>

                  <select
                    id="service"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark cursor-pointer"
                  >
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Google PPC Ads">Google PPC Ads</option>
                    <option value="Meta Social Ads">Meta Social Ads</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-bg-dark uppercase tracking-wider"
                >
                  Tell Us About Your Project
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business, goals, current website, or the challenge you'd like us to help with..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-bg-dark resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white rounded-xl py-3 text-sm font-medium hover:bg-primary/90 transition-all"
              >
                Send Project Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
       {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 text-center relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-bg-dark mb-3">
              Thank You for Contacting Us!
            </h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We will reach you soon with more details.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}