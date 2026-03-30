'use client'

import React from 'react'

export const AnimatedDNA = ({ className = '' }: { className?: string }) => {
  const n = 28; // Number of strands
  const elements = Array.from({ length: n });
  
  return (
    <div className={`flex flex-col items-center justify-center w-full h-full overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{__html: `
        .dna-wrapper {
          perspective: 1000px;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Rotate 90deg to make it vertical */
          transform: rotate(90deg);
        }
        .dna-ele {
          width: 2px;
          height: 160px;
          margin: 0 10px;
          border-left: 2px dashed rgba(11, 25, 44, 0.2); /* Subtle navy dashed line */
          position: relative;
          transform: rotateX(-360deg);
          animation: dna-run 4s linear infinite;
        }
        .dna-ele::before,
        .dna-ele::after {
          content: '';
          width: 14px;
          height: 14px;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .dna-ele::before {
          top: -7px;
          background: #0B192C; /* Navy color from design */
        }
        .dna-ele::after {
          bottom: -7px;
          background: #2D6BE4; /* Sky/Accent blue color from design */
        }
        @keyframes dna-run {
          to {
            transform: rotateX(0deg);
          }
        }
      `}} />
      <div className="dna-wrapper">
        {elements.map((_, i) => (
          <div 
            key={i} 
            className="dna-ele"
            style={{ animationDelay: `${(4 / n) * (i + 1) * -1}s` }}
          />
        ))}
      </div>
    </div>
  )
}
