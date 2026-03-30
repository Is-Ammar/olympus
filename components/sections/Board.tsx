"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code2, Microscope, MessageSquare } from 'lucide-react';

export const Board = () => {
  const roles = [
    {
      label: "ROLE I",
      title: "Software Engineer Lead",
      desc: "Develops and maintains the computational tools used by the circle, oversees coding standards, and supports members in implementing simulations, algorithms, and technical workflows.",
      icon: <Code2 className="w-6 h-6 text-accent" />
    },
    {
      label: "ROLE II",
      title: "Scientific Lead",
      desc: "Guides the scientific direction of the circle, ensures methodological rigor, supervises research-oriented projects, and supports members in physics, modeling, and analytical work.",
      icon: <Microscope className="w-6 h-6 text-accent" />
    },
    {
      label: "ROLE III",
      title: "Communication Lead",
      desc: "Manages internal and external communication, oversees public relations, prepares event materials, and ensures Olympus maintains a clear and professional university presence.",
      icon: <MessageSquare className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section id="team" className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <SectionHeading 
        eyebrow="THE BOARD" 
        title="Leadership Structure" 
        align="center" 
        subtitle="Three roles define Olympus's operational backbone." 
      />

      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <Card className="h-full relative bg-white border-sky/60 shadow-sm hover:shadow-md hover:border-accent/50 transition-all overflow-hidden group">

              <CardHeader className="relative z-10 pb-2">
                <div className="w-12 h-12 bg-sky rounded-lg flex items-center justify-center mb-4">
                  {role.icon}
                </div>

                <span className="font-mono text-[11px] text-accent/60 tracking-widest uppercase block">
                  {role.label}
                </span>

                <CardTitle className="font-display font-bold text-[19px] text-navy mt-2">
                  {role.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="font-body text-[15px] text-slate leading-[1.7]">
                  {role.desc}
                </CardDescription>
              </CardContent>

              <div className="h-[2px] bg-accent absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
