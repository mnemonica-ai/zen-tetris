'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AdBanner from './AdBanner';

interface GameMenuProps {
  playerName: string;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function GameMenu({ playerName, onOpen, onClose }: GameMenuProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={handleOpen}
        className="fixed top-4 left-4 z-40 w-12 h-12 bg-[#2d2418]/80 border border-[#c9a86c]/30 rounded-full flex flex-col items-center justify-center gap-1.5 hover:bg-[#2d2418] hover:border-[#c9a86c]/60 transition-all group"
        aria-label="Open menu"
      >
        <span className="w-5 h-0.5 bg-[#c9a86c] rounded transition-transform group-hover:scale-110" />
        <span className="w-5 h-0.5 bg-[#c9a86c] rounded transition-transform group-hover:scale-110" />
        <span className="w-5 h-0.5 bg-[#c9a86c] rounded transition-transform group-hover:scale-110" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1510]/98 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-lg w-full max-h-[90vh] overflow-y-auto bg-[#2d2418]/50 border border-[#c9a86c]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-8 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-[#c9a86c]/60 hover:text-[#c9a86c] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Zen Circle */}
            <div className="w-16 h-16 border-2 border-[#c9a86c]/40 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#c9a86c] rounded-full" />
            </div>

            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-lg text-[#c9a86c] mb-4 text-center tracking-wider">
                {t.menu.aboutTitle}
              </h3>
              <div className="space-y-4">
                {t.menu.aboutText.map((paragraph, index) => (
                  <p key={index} className="text-sm text-[#8b7355] leading-relaxed text-center">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-8" />

            {/* Ad Banner */}
            <div className="mb-6">
              <AdBanner slot="9677897006" format="rectangle" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
