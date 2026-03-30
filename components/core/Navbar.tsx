"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const { isScrolled } = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          boxShadow: isScrolled ? '0 1px 0 rgba(214,234,248,0.8)' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 h-[88px] md:h-[110px] flex items-center px-6 md:px-12 lg:px-24"
      >
        <div className="w-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group -ml-4 sm:-ml-6 md:-ml-8">
            <img 
              src="/olympus-removebg-preview.png" 
              alt="Olympus Logo" 
              className="h-[60px] sm:h-[70px] md:h-[110px] w-auto object-contain"
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a key={link.name} href={link.href} className="relative font-body font-medium text-[14px] text-ink/70 hover:text-accent transition-colors group py-2">
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-200 ease-out group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="ml-4">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-semibold">
                Join Us
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-ink relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col justify-between w-5 h-4">
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[88px] left-0 right-0 bg-white border-b border-sky px-6 py-8 z-40 shadow-xl md:hidden"
          >
            <div className="flex flex-col">
              {links.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-display font-bold text-[20px] text-ink py-4 border-b border-sky/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
