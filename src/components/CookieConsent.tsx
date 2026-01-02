'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const CONSENT_KEY = 'zenTetrisCookieConsent';

const translations = {
  en: {
    message: 'We use cookies and similar technologies to enhance your experience, analyze traffic, and show personalized ads.',
    accept: 'Accept All',
    decline: 'Decline',
    learnMore: 'Learn More',
  },
  es: {
    message: 'Usamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y mostrar anuncios personalizados.',
    accept: 'Aceptar Todo',
    decline: 'Rechazar',
    learnMore: 'Más Información',
  },
  fr: {
    message: 'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, analyser le trafic et afficher des publicités personnalisées.',
    accept: 'Tout Accepter',
    decline: 'Refuser',
    learnMore: 'En Savoir Plus',
  },
  pt: {
    message: 'Usamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego e exibir anúncios personalizados.',
    accept: 'Aceitar Tudo',
    decline: 'Recusar',
    learnMore: 'Saiba Mais',
  },
  de: {
    message: 'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern, den Verkehr zu analysieren und personalisierte Werbung anzuzeigen.',
    accept: 'Alle Akzeptieren',
    decline: 'Ablehnen',
    learnMore: 'Mehr Erfahren',
  },
  it: {
    message: 'Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza, analizzare il traffico e mostrare annunci personalizzati.',
    accept: 'Accetta Tutto',
    decline: 'Rifiuta',
    learnMore: 'Saperne di Più',
  },
};

export default function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const t = translations[language] || translations.en;

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setShowBanner(false);
    // Enable analytics/ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
    // Disable analytics/ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-[#1a1510]/98 border-t border-[#c9a86c]/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#8b7355] text-center sm:text-left flex-1">
          {t.message}
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-[#8b7355] border border-[#8b7355]/30 rounded hover:border-[#8b7355] transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-[#c9a86c] text-[#1a1510] rounded hover:bg-[#e8d5b0] transition-colors font-medium"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
