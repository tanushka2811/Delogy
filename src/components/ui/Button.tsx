"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "glass" | "dark-outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-opacity-90 shadow-md shadow-primary/20 focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-opacity-90 shadow-md shadow-secondary/20 focus:ring-secondary",
    accent:
      "bg-accent text-bg-dark hover:bg-opacity-90 shadow-md shadow-accent/20 focus:ring-accent",
    outline:
      "border border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    "dark-outline":
      "border border-white/20 text-white hover:bg-white/10 focus:ring-white",
    glass:
      "glass text-primary border border-primary/20 hover:bg-primary/10 shadow-sm focus:ring-primary",
    white:
      "bg-white text-bg-dark hover:bg-gray-100 shadow-lg shadow-black/5 focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5 mr-2 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5 ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
}
