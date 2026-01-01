'use client';

import { useLanguage } from '@/context/LanguageContext';

interface MobileControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMoveDown: () => void;
  onRotate: () => void;
  onHardDrop: () => void;
  onHold: () => void;
  onPause: () => void;
  isPaused: boolean;
}

export default function MobileControls({
  onMoveLeft,
  onMoveRight,
  onMoveDown,
  onRotate,
  onHardDrop,
  onHold,
  onPause,
  isPaused,
}: MobileControlsProps) {
  const { t } = useLanguage();

  const buttonBase = "active:scale-95 transition-transform touch-manipulation select-none";
  const buttonStyle = `${buttonBase} w-12 h-12 rounded-full bg-[#2d2418]/80 border border-[#c9a86c]/30 flex items-center justify-center text-[#c9a86c]`;
  const smallButtonStyle = `${buttonBase} w-9 h-9 rounded-full bg-[#2d2418]/60 border border-[#c9a86c]/20 flex items-center justify-center text-[#c9a86c]/80 text-xs`;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 pb-4 bg-gradient-to-t from-[#1a1510] via-[#1a1510]/95 to-transparent pointer-events-none md:hidden">
      <div className="flex justify-between items-end max-w-sm mx-auto pointer-events-auto">
        {/* Left side - Movement */}
        <div className="flex flex-col gap-2">
          {/* Rotate button */}
          <button
            onClick={onRotate}
            className={buttonStyle}
            aria-label="Rotate"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          
          {/* Left/Right row */}
          <div className="flex gap-2">
            <button
              onClick={onMoveLeft}
              className={buttonStyle}
              aria-label="Move left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onMoveRight}
              className={buttonStyle}
              aria-label="Move right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center - Utility buttons */}
        <div className="flex gap-3 mb-2">
          <button
            onClick={onHold}
            className={smallButtonStyle}
            aria-label="Hold"
          >
            H
          </button>
          <button
            onClick={onPause}
            className={smallButtonStyle}
            aria-label="Pause"
          >
            {isPaused ? '▶' : '❚❚'}
          </button>
        </div>

        {/* Right side - Down and Drop */}
        <div className="flex flex-col gap-2 items-end">
          {/* Hard drop */}
          <button
            onClick={onHardDrop}
            className={buttonStyle}
            aria-label="Hard drop"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          {/* Soft drop */}
          <button
            onClick={onMoveDown}
            className={buttonStyle}
            aria-label="Move down"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
