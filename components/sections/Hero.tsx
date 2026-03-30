"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { RevealText } from '@/components/ui/RevealText';
import { AnimatedDNA } from '@/components/ui/AnimatedDNA';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Cpu, Dna, FlaskConical } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-frost relative overflow-hidden flex items-center pt-[120px] pb-24 px-6 md:px-12 lg:px-24">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(45,107,228,0.06) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(93,122,153,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px] items-center w-full relative z-10 gap-12 lg:gap-0">
        
        {/* LEFT COLUMN */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUp} className="font-mono text-label uppercase tracking-widest bg-sky text-accent rounded px-3 py-1.5 border border-sky/60 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            UM6P · Science Circle
          </motion.div>

          <h1 className="font-display font-extrabold text-hero text-navy tracking-tight leading-[1.05] mt-6 flex flex-col uppercase">
            <RevealText text="Olympus" />
          </h1>

          <motion.p variants={fadeUp} className="font-body text-lead text-slate max-w-[480px] mt-6 leading-relaxed">
            An interdisciplinary circle at UM6P uniting physics, computation, biology, and applied sciences — through structured learning and real project execution.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 mt-10 flex-wrap">
            <a href="#about" className="group">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                Explore Olympus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            
            <a href="#projects">
              <Button size="lg" variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-white font-semibold">
                Our Projects
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3 mt-10 flex-wrap">
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate/80 border border-slate/20 bg-white/50 rounded-md px-3 py-1.5">
              <Activity className="w-3.5 h-3.5" /> Physics
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate/80 border border-slate/20 bg-white/50 rounded-md px-3 py-1.5">
              <Cpu className="w-3.5 h-3.5" /> Computation
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate/80 border border-slate/20 bg-white/50 rounded-md px-3 py-1.5">
              <Dna className="w-3.5 h-3.5" /> Biology
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[12px] text-slate/80 border border-slate/20 bg-white/50 rounded-md px-3 py-1.5">
              <FlaskConical className="w-3.5 h-3.5" /> Applied Sciences
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block relative h-[500px] lg:h-full min-h-[400px] bg-transparent w-full">
          <AnimatedDNA className="absolute inset-0" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-slate/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48], opacity: [1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-accent absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};
