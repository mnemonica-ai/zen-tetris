'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { languages, Language } from '@/lib/i18n';

export default function FloatingLanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-[#2d2418]/80 border border-[#c9a86c]/30 rounded-full flex items-center justify-center hover:bg-[#2d2418] hover:border-[#c9a86c]/60 transition-all text-2xl"
        aria-label="Change language"
      >
        {currentLang?.flag}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 py-1 bg-[#2d2418] border border-[#c9a86c]/30 shadow-lg z-50 rounded-lg overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 hover:bg-[#c9a86c]/10 transition-colors
                  ${language === lang.code ? 'text-[#c9a86c] bg-[#c9a86c]/5' : 'text-[#8b7355]'}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
