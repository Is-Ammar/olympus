"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { heroText } from '@/lib/animations';

interface RevealTextProps {
  text: string;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className = "" }) => {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex mr-[0.25em] pb-1">
          <motion.span
            variants={heroText}
            className="inline-block origin-bottom"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
