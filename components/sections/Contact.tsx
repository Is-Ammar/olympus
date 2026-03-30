"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LissajousCanvas } from '@/components/ui/LissajousCanvas';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 pointer-events-none">
        <LissajousCanvas 
          opacity={0.04} 
          color="#2D6BE4" 
          trailColor="rgba(7,17,30,0.08)"
          className="w-full h-full" 
        />
      </div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(27,58,107,0.4), transparent)'
        }}
      />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-16">
          
          {/* COLUMN 1 */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="4" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="4" cy="12" r="2" fill="currentColor" opacity="0.6" />
                <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.6" />
                <path d="M12 7V9M12 15V17M7 12H9M15 12H17" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="font-display font-bold text-[22px] text-white tracking-tight">Olympus</span>
            </div>
            
            <p className="font-body text-[15px] text-white/40 mt-3 max-w-sm">
              Where Scientific Curiosity Meets Technical Execution
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-white/10 rounded px-3 py-2">
              <span className="font-mono text-[11px] text-white/40">UM6P · Mohammed VI Polytechnic</span>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h5 className="font-mono text-[11px] text-white/30 tracking-widest mb-6 uppercase">
              Get in Touch
            </h5>
            <div className="flex flex-col gap-5">
              <a href="tel:+212653538131" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                <span className="font-body text-[15px] text-white/60 group-hover:text-white transition-colors">+212-6535-38131</span>
              </a>
              <a href="mailto:Olympus.Science@hotmail.com" className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                <span className="font-body text-[15px] text-white/60 group-hover:text-white transition-colors">Olympus.Science@hotmail.com</span>
              </a>
              <div className="flex items-center gap-3 group">
                <MapPin className="w-4 h-4 text-white/40" />
                <span className="font-body text-[15px] text-white/60">Mohammed VI Polytechnic University, Morocco</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h5 className="font-mono text-[11px] text-white/30 tracking-widest mb-6 uppercase">
              Navigate
            </h5>
            <div className="flex flex-col gap-4 items-start">
              {['About', 'Vision', 'Projects', 'Team', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="font-body text-[15px] text-white/50 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 mb-8 h-[1px] bg-white/10" />

        <div className="flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[12px] text-white/25">
            © 2025 Olympus Science Circle · UM6P
          </span>
          <span className="font-mono text-[12px] text-white/25">
            Olympus.Science@hotmail.com
          </span>
        </div>
      </div>
    </section>
  );
};
