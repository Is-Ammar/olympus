"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LissajousCanvas } from '@/components/ui/LissajousCanvas';

export const Roadmap = () => {
  const steps = [
    {
      label: "STEP 01",
      title: "Launch Official Technical Challenge",
      body: "The first Olympus challenge open to the entire UM6P student community — testing scientific and computational skills."
    },
    {
      label: "STEP 02",
      title: "Scientific Modeling & Simulation Project",
      body: "A representative project centered on building rigorous models and running meaningful scientific simulations."
    },
    {
      label: "STEP 03",
      title: "Computational & Algorithmic Project",
      body: "A software-focused project exploring algorithms, data structures, and computational problem-solving at depth."
    },
    {
      label: "STEP 04",
      title: "Institutional Collaborations",
      body: "Establishing formal collaborations with UM6P departments, research laboratories, and external scientific partners."
    },
    {
      label: "STEP 05",
      title: "Circle Expansion",
      body: "Recruiting committed new members who can contribute to Olympus's long-term projects and culture of rigor."
    }
  ];

  return (
    <section id="roadmap" className="relative overflow-hidden bg-navy py-32 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 pointer-events-none">
        <LissajousCanvas 
          opacity={0.05} 
          color="#2D6BE4" 
          trailColor="rgba(27, 58, 107, 0.08)"
          className="w-full h-full" 
        />
      </div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(45,107,228,0.15), transparent)'
        }}
      />

      <div className="relative z-10">
        <SectionHeading eyebrow="NEXT GOALS" title="Where We're Headed" light={true} />

        <div className="mt-16 max-w-2xl relative pl-8">
          <div 
            className="absolute left-0 top-0 bottom-0 w-[1px]"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, rgba(45,107,228,0.4) 0, rgba(45,107,228,0.4) 4px, transparent 4px, transparent 12px)'
            }}
          />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-8 top-1 w-4 h-4 border border-accent/50 rounded-full bg-navy flex items-center justify-center -ml-[7.5px]">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: (i * 0.15) + 0.3 }}
                  className="w-1.5 h-1.5 bg-accent rounded-full"
                />
              </div>

              <span className="font-mono text-[11px] text-accent/60 uppercase tracking-widest block">
                {step.label}
              </span>
              <h4 className="font-display font-bold text-[18px] text-white mt-1">
                {step.title}
              </h4>
              <p className="font-body text-[14px] text-white/50 mt-2 leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
