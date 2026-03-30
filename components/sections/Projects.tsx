"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      chip: "Bioinformatics Tool",
      name: "Athena",
      desc: "A command-line tool for genomic data processing and analysis. Automates key bioinformatics workflows — quality control, trimming, and annotation.",
      tags: ["CLI", "Genomics", "Quality Control", "Annotation"]
    },
    {
      chip: "Computational Physics",
      name: "Chaos",
      desc: "A molecular dynamics simulator developed to strengthen Olympus's computational methodology and explore simulation techniques at the molecular scale.",
      tags: ["Simulation", "Molecular Dynamics", "Python", "C++"]
    }
  ];

  return (
    <section id="projects" className="bg-frost py-32 px-6 md:px-12 lg:px-24">
      <SectionHeading eyebrow="WHAT WE'VE BUILT" title="Projects & Achievements" />

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <motion.div
            key={proj.name}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <Card className="h-full border-sky/60 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group bg-white">

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[11px] bg-sky text-accent rounded px-2.5 py-1 uppercase tracking-wide">
                    {proj.chip}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate/40 group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-display font-extrabold text-[clamp(32px,4vw,48px)] text-navy">
                  {proj.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="font-body text-[16px] text-slate leading-relaxed mb-8">
                  {proj.desc}
                </CardDescription>

                <div className="flex gap-2 flex-wrap">
                  {proj.tags.map(tag => (
                    <span 
                      key={tag}
                      className="font-mono text-[11px] border border-slate/20 text-slate rounded px-2.5 py-1 group-hover:border-accent/30 group-hover:text-accent/80 transition-colors bg-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {[
          {
            title: "Problem-Solving Sessions",
            sub: "Organized internal scientific and computational problem-solving sessions for member development"
          },
          {
            title: "Academic Support",
            sub: "Supported students with physics and engineering academic topics and coursework"
          }
        ].map((achieve, i) => (
          <Card key={i} className="border-sky/60 shadow-sm bg-white">
            <CardContent className="p-6 flex gap-6 items-start">
              <div className="w-10 h-10 bg-sky flex items-center justify-center rounded-lg flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-body font-medium text-[16px] text-ink">{achieve.title}</h4>
                <p className="font-body text-[14px] text-slate mt-1">{achieve.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
