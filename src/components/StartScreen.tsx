'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { trackPlayerNameSet, trackGameStart } from '@/lib/analytics';
import AdBanner from './AdBanner';

const PLAYER_NAME_KEY = 'zenTetrisPlayerName';

interface StartScreenProps {
  onStart: (playerName: string) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [hasSavedName, setHasSavedName] = useState(false);
  const originalNameRef = useRef<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(PLAYER_NAME_KEY);
    if (savedName) {
      setName(savedName);
      setHasSavedName(true);
      originalNameRef.current = savedName;
    }
  }, []);

  const handleStart = () => {
    if (!name.trim()) return;
    const trimmedName = name.trim();
    const isNewPlayer = !originalNameRef.current;
    
    // Track player name
    trackPlayerNameSet(trimmedName, isNewPlayer);
    trackGameStart(trimmedName);
    
    localStorage.setItem(PLAYER_NAME_KEY, trimmedName);
    onStart(trimmedName);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      handleStart();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setHasSavedName(false);
  };

  const canStart = name.trim().length > 0;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1a1510] via-[#2d2418] to-[#1a1510] flex justify-center items-center z-50 animate-fade-in">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="text-center animate-float-in px-4">
        {/* Zen Circle */}
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-[3px] border-[#c9a86c] rounded-full mx-auto mb-6 md:mb-8 relative animate-breathe">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#c9a86c] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <h1 className="text-4xl md:text-5xl font-light tracking-[6px] md:tracking-[8px] text-[#c9a86c] mb-3 uppercase">
          {t.startScreen.title}
        </h1>
        <p className="text-lg text-[#8b7355] mb-8 md:mb-10 italic">
          {t.startScreen.subtitle}
        </p>

        {/* Name Input or Display */}
        <div className="mb-8">
          {hasSavedName && !isEditing ? (
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm text-[#8b7355] tracking-wider">{t.startScreen.welcomeBack}</span>
              <span className="text-2xl text-[#c9a86c]">{name}</span>
              <button
                onClick={handleEdit}
                className="text-xs text-[#6b5d4d] hover:text-[#c9a86c] transition-colors underline"
              >
                {t.startScreen.changeName}
              </button>
            </div>
          ) : (
            <>
              <label className="block text-sm text-[#8b7355] mb-3 tracking-wider">
                {t.startScreen.askName}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.startScreen.namePlaceholder}
                maxLength={20}
                autoComplete="off"
                autoFocus
                className="bg-transparent border-0 border-b-2 border-[#c9a86c]/40 py-2 px-1 text-xl text-[#c9a86c] text-center w-[200px] outline-none font-inherit transition-colors focus:border-[#c9a86c] placeholder:text-[#c9a86c]/40"
              />
              {!canStart && (
                <p className="text-xs text-[#6b5d4d] mt-2">{t.startScreen.enterNameHint}</p>
              )}
            </>
          )}
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          disabled={!canStart}
          className={`bg-transparent border-2 py-4 px-10 text-lg tracking-[3px] transition-all duration-400 inline-flex items-center gap-4 group
            ${canStart
              ? 'border-[#c9a86c] text-[#c9a86c] cursor-pointer hover:bg-[#c9a86c] hover:text-[#1a1510] hover:shadow-[0_0_30px_rgba(201,168,108,0.3)]'
              : 'border-[#6b5d4d]/50 text-[#6b5d4d]/50 cursor-not-allowed'
            }`}
        >
          <span>{t.startScreen.startButton}</span>
          <svg className={`w-10 h-6 transition-transform ${canStart ? 'group-hover:scale-110' : ''}`} viewBox="0 0 100 60">
            <ellipse cx="50" cy="45" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M 5 45 Q 5 20, 50 15 Q 95 20, 95 45" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <p className="mt-8 text-sm text-[#6b5d4d]">
          {t.startScreen.breatheHint}
        </p>

        {/* Ad Banner */}
        <div className="mt-8 w-full max-w-md">
          <AdBanner slot="2557954886" format="horizontal" />
        </div>
      </div>
    </div>
  );
}
