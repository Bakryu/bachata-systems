"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export default function AnimatedCTA({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: AnimatedCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "btn relative overflow-hidden group";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const textVariants = {
    initial: { y: 0 },
    hover: { y: -30 },
  };

  const textEnterVariants = {
    initial: { y: 30 },
    hover: { y: 0 },
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, disabled };

  return (
    <Component
      className={classes}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {/* Original text that slides up and fades out */}
      <motion.span
        className="block"
        variants={textVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>

      {/* Duplicate text that enters from bottom */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={textEnterVariants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.span>

      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-yellowHover to-accent-purple opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: variant === "primary" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Component>
  );
}
