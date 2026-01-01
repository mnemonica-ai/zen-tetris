'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

export default function SupportWidget() {
  const initKofi = () => {
    if (window.kofiWidgetOverlay) {
      window.kofiWidgetOverlay.draw('zentetris', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support',
        'floating-chat.donateButton.background-color': '#c9a86c',
        'floating-chat.donateButton.text-color': '#1a1510'
      });
    }
  };

  return (
    <Script
      src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      strategy="lazyOnload"
      onLoad={initKofi}
    />
  );
}
