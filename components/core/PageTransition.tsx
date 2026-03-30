"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9998] bg-navy flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center p-4"
          >
            <img 
              src="/olympus-removebg-preview.png" 
              alt="Olympus Logo" 
              className="h-auto w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] max-w-[600px] object-contain brightness-0 invert" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
