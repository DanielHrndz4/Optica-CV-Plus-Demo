"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedSectionProps {
  className?: string;
}

export default function AnimatedSection({ children, className = "" }: PropsWithChildren<AnimatedSectionProps>) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
