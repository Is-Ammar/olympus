"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

export const WhatWeWant = () => {
  const goals = [
    "Build a structured community capable of developing and managing scientific and computational projects",
    "Provide high-quality workshops, technical sessions, and training activities for students",
    "Encourage interdisciplinary work by connecting physics, computation, and engineering principles",
    "Create opportunities for members to develop practical skills through guided projects and technical challenges",
    "Position Olympus as a constructive contributor to the academic environment at UM6P"
  ];

  return (
    <section id="goals" className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-[1fr_520px] gap-24 items-start">
        
        {/* LEFT */}
        <div className="lg:sticky lg:top-32">
          <SectionHeading eyebrow="WHAT WE WANT" title="Five Objectives That Drive Us" />
          <p className="font-body text-[17px] text-slate mt-6 leading-relaxed max-w-sm">
            Every initiative Olympus undertakes ties back to one of these five core objectives.
          </p>
        </div>

        {/* RIGHT */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {goals.map((goal, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
            >
              <Card className="border-sky/60 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent transition-colors" />
                <CardContent className="p-6 flex items-center gap-6">
                  <span className="font-display font-extrabold text-4xl text-sky group-hover:text-accent/20 transition-colors select-none">
                    0{i + 1}
                  </span>
                  <p className="flex-1 font-body font-medium text-[16px] text-ink leading-snug">
                    {goal}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
