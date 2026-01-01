'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { languages, Language } from '@/lib/i18n';

interface GameMenuProps {
  playerName: string;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function GameMenu({ playerName, onOpen, onClose }: GameMenuProps) {
  const { t, interpolate, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const currentLang = languages.find(l => l.code === language);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 bg-[#2d2418]/80 border border-[#c9a86c]/30 rounded-full flex flex-col items-center justify-center gap-1.5 hover:bg-[#2d2418] hover:border-[#c9a86c]/60 transition-all group"
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

            {/* Welcome */}
            <h2 className="text-2xl text-[#c9a86c] text-center mb-8 font-light tracking-wide">
              {interpolate(t.menu.welcome, { name: playerName })}
            </h2>

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

            {/* Language Section */}
            <div className="mb-6">
              <div className="flex justify-center">
                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center gap-3 px-4 py-2 border border-[#c9a86c]/30 bg-[#1a1510]/60 text-[#c9a86c] hover:border-[#c9a86c]/60 transition-colors min-w-[160px] justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{currentLang?.flag}</span>
                      <span className="text-sm">{currentLang?.name}</span>
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isLangDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsLangDropdownOpen(false)}
                      />
                      <div className="absolute left-0 right-0 mt-1 py-1 bg-[#2d2418] border border-[#c9a86c]/30 shadow-lg z-50">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code as Language);
                              setIsLangDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-[#c9a86c]/10 transition-colors
                              ${language === lang.code ? 'text-[#c9a86c]' : 'text-[#8b7355]'}`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.name}</span>
                            {language === lang.code && (
                              <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

                      </div>
        </div>
      )}
    </>
  );
}
