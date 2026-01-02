'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

export default function SupportWidget() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Listen for game start (when ZenTetris component mounts with game started)
    const observer = new MutationObserver(() => {
      const gameCanvas = document.querySelector('canvas[width="300"][height="600"]');
      setIsGameStarted(!!gameCanvas);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  // Initialize Ko-fi widget when game starts and script is loaded
  useEffect(() => {
    if (isGameStarted && scriptLoaded && window.kofiWidgetOverlay && !isMobile) {
      window.kofiWidgetOverlay.draw('zentetris', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support',
        'floating-chat.donateButton.background-color': '#c9a86c',
        'floating-chat.donateButton.text-color': '#1a1510'
      });
    }
  }, [isGameStarted, scriptLoaded, isMobile]);

  // Hide Ko-fi widget when on start screen or mobile
  useEffect(() => {
    const kofiButton = document.querySelector('.floatingchat-container-wrap');
    if (kofiButton) {
      (kofiButton as HTMLElement).style.display = (!isGameStarted || isMobile) ? 'none' : 'block';
    }
  }, [isGameStarted, isMobile]);

  const kofiUrl = 'https://ko-fi.com/zentetris';

  return (
    <>
      {/* Ko-fi Script for Desktop */}
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Custom Mobile Button */}
      {isGameStarted && isMobile && (
        <a
          href={kofiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-40 right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#c9a86c] rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Support on Ko-fi"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="#1a1510"
          >
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
          </svg>
        </a>
      )}
    </>
  );
}
