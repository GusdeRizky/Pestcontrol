"use client";
import React from "react";
import { motion as m } from "framer-motion";
import { ReactNode } from "react";

interface FadeDownProps {
  children: ReactNode;
  delay?: number;
}

const Fadedown = ({ children, delay = 0 }: FadeDownProps) => {
  return (
    <m.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
    >
      {children}
    </m.div>
  );
};

export default Fadedown;
