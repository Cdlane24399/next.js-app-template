'use client';

import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {/* Wave Layer 1 - Cyan */}
      <div className='aurora-wave aurora-wave-1'>
        <svg
          className='h-full w-full'
          preserveAspectRatio='none'
          viewBox='0 0 1200 600'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='rgba(6, 182, 212, 0)' />
              <stop offset='50%' stopColor='rgba(6, 182, 212, 0.4)' />
              <stop offset='100%' stopColor='rgba(6, 182, 212, 0)' />
            </linearGradient>
          </defs>
          <path
            d='M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z'
            fill='url(#gradient1)'
          />
        </svg>
      </div>

      {/* Wave Layer 2 - Purple */}
      <div className='aurora-wave aurora-wave-2'>
        <svg
          className='h-full w-full'
          preserveAspectRatio='none'
          viewBox='0 0 1200 600'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='rgba(147, 51, 234, 0)' />
              <stop offset='50%' stopColor='rgba(147, 51, 234, 0.5)' />
              <stop offset='100%' stopColor='rgba(147, 51, 234, 0)' />
            </linearGradient>
          </defs>
          <path
            d='M0,200 Q300,400 600,200 T1200,200 L1200,600 L0,600 Z'
            fill='url(#gradient2)'
          />
        </svg>
      </div>

      {/* Wave Layer 3 - Pink */}
      <div className='aurora-wave aurora-wave-3'>
        <svg
          className='h-full w-full'
          preserveAspectRatio='none'
          viewBox='0 0 1200 600'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='gradient3' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='rgba(236, 72, 153, 0)' />
              <stop offset='50%' stopColor='rgba(236, 72, 153, 0.3)' />
              <stop offset='100%' stopColor='rgba(236, 72, 153, 0)' />
            </linearGradient>
          </defs>
          <path
            d='M0,400 Q300,200 600,400 T1200,400 L1200,600 L0,600 Z'
            fill='url(#gradient3)'
          />
        </svg>
      </div>

      {/* Wave Layer 4 - Green */}
      <div className='aurora-wave aurora-wave-4'>
        <svg
          className='h-full w-full'
          preserveAspectRatio='none'
          viewBox='0 0 1200 600'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='gradient4' x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='rgba(16, 185, 129, 0)' />
              <stop offset='50%' stopColor='rgba(16, 185, 129, 0.35)' />
              <stop offset='100%' stopColor='rgba(16, 185, 129, 0)' />
            </linearGradient>
          </defs>
          <path
            d='M0,350 Q300,150 600,350 T1200,350 L1200,600 L0,600 Z'
            fill='url(#gradient4)'
          />
        </svg>
      </div>
    </div>
  );
}
