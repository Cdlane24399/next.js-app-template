'use client';

import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      {/* Gradient orbs */}
      <div className='animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter' />
      <div className='animate-blob animation-delay-2000 absolute -right-4 top-0 h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter' />
      <div className='animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter' />

      {/* Grid overlay */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }}
      />
    </div>
  );
}
