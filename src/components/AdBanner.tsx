'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdBanner({ slot, format = 'auto', className = '' }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only load ad once and only on client
    if (typeof window === 'undefined' || isLoaded.current) return;
    
    // Check if user has consented
    const consent = localStorage.getItem('zenTetrisCookieConsent');
    if (consent !== 'accepted') return;

    try {
      if (adRef.current && !adRef.current.getAttribute('data-ad-status')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Don't render if no consent
  const consent = typeof window !== 'undefined' 
    ? localStorage.getItem('zenTetrisCookieConsent') 
    : null;
  
  if (consent !== 'accepted') {
    return null;
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1422077668654301"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
