"use client";

import { motion as m } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
}

const Fadeup = ({ children, delay = 0 }: FadeUpProps) => {
  return (
    <m.div
      initial={{ y: 20, opacity: 0 }}
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

export default Fadeup;
