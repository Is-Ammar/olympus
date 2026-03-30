"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideLeft, scaleIn } from '@/lib/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Activity, Cpu, Dna, FlaskConical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const WhoWeAre = () => {
  return (
    <section id="about" className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-[420px_1fr] gap-16 lg:gap-24">
        
        {/* LEFT */}
        <div className="lg:sticky lg:top-32 self-start">
          <blockquote className="font-display font-bold italic text-[clamp(26px,3vw,36px)] text-navy leading-snug pl-6 border-l-[3px] border-accent">
            "Scientific rigor, interdisciplinary collaboration, practical innovation."
          </blockquote>
          
          <Card className="mt-8 border-sky/60 shadow-sm">
            <CardContent className="p-6 flex flex-col gap-4">
              {[
                { name: 'Physics', icon: <Activity className="w-5 h-5" /> },
                { name: 'Computation', icon: <Cpu className="w-5 h-5" /> },
                { name: 'Biology', icon: <Dna className="w-5 h-5" /> },
                { name: 'Applied Sciences', icon: <FlaskConical className="w-5 h-5" /> }
              ].map((discipline, i) => (
                <motion.div 
                  key={discipline.name}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 py-3 border-b border-sky last:border-0 last:pb-0"
                >
                  <div className="text-accent bg-sky/50 p-2 rounded-md">
                    {discipline.icon}
                  </div>
                  <span className="font-mono text-[14px] text-ink font-medium">{discipline.name}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT */}
        <div>
          <SectionHeading eyebrow="WHO WE ARE" title="About Olympus" />
          
          <p className="font-body text-[17px] text-ink/80 leading-[1.75] max-w-[600px] mt-8">
            Olympus is an academic and technical circle dedicated to scientific rigor, interdisciplinary collaboration, and practical innovation. We bring together future scientists and researchers with interests in physics, computation, biology, and applied sciences.
          </p>
          
          <p className="font-body text-[17px] text-ink/80 leading-[1.75] max-w-[600px] mt-6">
            Our environment emphasizes structured learning, problem-solving, and project execution. Olympus serves as a platform where motivated members develop strong analytical skills and contribute to meaningful scientific and technical initiatives.
          </p>

          <div className="flex gap-12 flex-wrap mt-12">
            {[
              { num: "3", label: "Leadership Roles" },
              { num: "2", label: "Projects Shipped" },
              { num: "4", label: "Disciplines United" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col"
              >
                <span className="font-display font-extrabold text-[clamp(40px,5vw,64px)] text-accent leading-none">{stat.num}</span>
                <span className="font-body text-[13px] text-slate mt-1 uppercase tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
