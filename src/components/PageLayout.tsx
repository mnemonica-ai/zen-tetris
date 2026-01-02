'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { languages, Language } from '@/lib/i18n';

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#8b7355] hover:text-[#c9a86c] transition-colors"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 py-1 bg-[#2d2418] border border-[#c9a86c]/30 shadow-lg z-50 rounded-lg overflow-hidden min-w-[140px]">
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

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1510] via-[#2d2418] to-[#1a1510] text-[#d4c4a8] overflow-y-auto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1510]/90 backdrop-blur-sm border-b border-[#c9a86c]/20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-[#c9a86c] hover:text-[#e8d5b0] transition-colors flex items-center gap-2"
          >
            <div className="w-8 h-8 border border-[#c9a86c]/40 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-[#c9a86c] rounded-full" />
            </div>
            <span className="font-light tracking-wider">Zen Tetris</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-6 text-sm">
            <Link
              href="/about"
              className="text-[#8b7355] hover:text-[#c9a86c] transition-colors hidden sm:block"
            >
              {t.menu.links.about}
            </Link>
            <Link
              href="/how-to-play"
              className="text-[#8b7355] hover:text-[#c9a86c] transition-colors hidden sm:block"
            >
              {t.menu.links.howToPlay}
            </Link>
            <Link
              href="/benefits"
              className="text-[#8b7355] hover:text-[#c9a86c] transition-colors hidden sm:block"
            >
              {t.menu.links.benefits}
            </Link>
            {/* Language Selector inline */}
            <LanguageDropdown />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer with CTA */}
      <footer className="border-t border-[#c9a86c]/20 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block bg-transparent border-2 border-[#c9a86c] text-[#c9a86c] py-3 px-8 text-sm tracking-[3px] transition-all hover:bg-[#c9a86c] hover:text-[#1a1510]"
          >
            {t.menu.links.backToGame}
          </Link>
          <p className="mt-6 text-xs text-[#5a4d3d]">
            Zen Tetris - A mindful gaming experience
          </p>
        </div>
      </footer>
    </div>
  );
}
