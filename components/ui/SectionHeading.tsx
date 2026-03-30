"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, underlineReveal } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow, title, subtitle, align = 'left', light = false
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className={`font-mono text-label tracking-widest uppercase mb-4 ${light ? 'text-white/50' : 'text-accent'}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display font-extrabold text-heading tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      <motion.div
        variants={underlineReveal}
        className="h-[3px] w-10 bg-accent mt-3"
      />
      {subtitle && (
        <p className={`font-body text-lead mt-6 max-w-2xl ${light ? 'text-white/60' : 'text-slate'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
