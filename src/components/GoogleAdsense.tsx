'use client';

import Script from 'next/script';

const ADSENSE_CLIENT_ID = 'ca-pub-1422077668654301';

export default function GoogleAdsense() {
  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
