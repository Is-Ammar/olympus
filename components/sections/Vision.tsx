"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, FlaskConical } from 'lucide-react';

export const Vision = () => {
  return (
    <section id="vision" className="bg-frost py-32 px-6 md:px-12 lg:px-24">
      <SectionHeading eyebrow="OUR VISION" title="The North Star" align="center" />
      
      <motion.p 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="font-display font-normal italic text-[clamp(20px,2.5vw,28px)] text-ink/70 leading-[1.6] max-w-3xl mx-auto text-center mt-12"
      >
        "To establish Olympus as a reliable and recognized space within UM6P for scientific development and collaborative research — an ecosystem that supports technical excellence, encourages innovation, and integrates theory with practice."
      </motion.p>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-20 grid lg:grid-cols-3 gap-6"
      >
        {[
          {
            title: "Technical Excellence",
            body: "Rigorous methods, computational depth, and methodological discipline in everything we build and study.",
            icon: <Target className="w-8 h-8 text-accent" />
          },
          {
            title: "Collaborative Innovation",
            body: "Interdisciplinary work connecting physics, computation, biology, and engineering perspectives.",
            icon: <Users className="w-8 h-8 text-accent" />
          },
          {
            title: "Theory × Practice",
            body: "From abstract models to working simulations, tools, and real scientific contributions.",
            icon: <FlaskConical className="w-8 h-8 text-accent" />
          }
        ].map((pillar) => (
          <motion.div key={pillar.title} variants={fadeUp}>
            <Card className="h-full border-sky/60 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="bg-sky/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <CardTitle className="font-display font-bold text-[18px] text-navy">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-[15px] text-slate leading-relaxed">
                  {pillar.body}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
