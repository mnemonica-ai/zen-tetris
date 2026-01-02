'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-4S4T89NLEN';
const CONSENT_KEY = 'zenTetrisCookieConsent';

export default function GoogleAnalytics() {
  // Check if user has already consented
  const getInitialConsent = () => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(CONSENT_KEY);
      return consent === 'accepted' ? 'granted' : 'denied';
    }
    return 'denied';
  };

  return (
    <>
      <Script id="google-consent-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Default consent to denied until user accepts
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          
          // Check if already consented
          if (localStorage.getItem('${CONSENT_KEY}') === 'accepted') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted'
            });
          }
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
