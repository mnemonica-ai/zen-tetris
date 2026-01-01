'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [breathePhase, setBreathePhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [dots, setDots] = useState('');

  useEffect(() => {
    const phases: ('inhale' | 'hold' | 'exhale')[] = ['inhale', 'hold', 'exhale'];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setBreathePhase(phases[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const breatheText = {
    inhale: 'Breathe in',
    hold: 'Hold',
    exhale: 'Breathe out',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1510] via-[#2d2418] to-[#1a1510] flex flex-col justify-center items-center p-6 text-center">
      {/* Zen Circle with 404 */}
      <div className="relative w-40 h-40 mb-8">
        <div 
          className={`absolute inset-0 border-2 border-[#c9a86c]/40 rounded-full transition-transform duration-[3000ms] ease-in-out ${
            breathePhase === 'inhale' ? 'scale-110' : breathePhase === 'exhale' ? 'scale-90' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-light text-[#c9a86c] tracking-wider">404</span>
        </div>
      </div>

      {/* Message */}
      <h1 className="text-2xl md:text-3xl font-light text-[#c9a86c] mb-4 tracking-wide">
        This page has found peace
      </h1>
      
      <p className="text-[#8b7355] mb-8 max-w-md leading-relaxed">
        Like a fallen Tetris piece, this page has settled into the void. 
        But every ending is a new beginning.
      </p>

      {/* Breathing exercise */}
      <div className="mb-10 h-16">
        <p className="text-[#6b5d4d] text-sm mb-2">While you&apos;re here, take a moment:</p>
        <p className="text-[#c9a86c] text-lg italic animate-pulse">
          {breatheText[breathePhase]}{dots}
        </p>
      </div>

      {/* Floating pieces decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-8 h-8 bg-[#c9a86c]/5 rounded animate-float-slow" />
        <div className="absolute top-[25%] right-[15%] w-6 h-6 bg-[#c9a86c]/5 rounded animate-float-medium" />
        <div className="absolute bottom-[20%] left-[20%] w-10 h-10 bg-[#c9a86c]/5 rounded animate-float-fast" />
        <div className="absolute bottom-[30%] right-[10%] w-5 h-5 bg-[#c9a86c]/5 rounded animate-float-slow" />
      </div>

      {/* CTA */}
      <Link
        href="/"
        className="relative z-10 bg-transparent border-2 border-[#c9a86c] text-[#c9a86c] py-3 px-8 text-sm tracking-[3px] transition-all hover:bg-[#c9a86c] hover:text-[#1a1510] hover:shadow-[0_0_30px_rgba(201,168,108,0.3)]"
      >
        RETURN TO PEACE
      </Link>

      {/* Zen quote */}
      <p className="mt-12 text-[#6b5d4d] text-xs italic max-w-sm">
        &ldquo;The obstacle is the path.&rdquo;
        <span className="block mt-1 text-[#5a4d3d]">— Zen Proverb</span>
      </p>
    </div>
  );
}
