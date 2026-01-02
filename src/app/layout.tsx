import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import SupportWidget from "@/components/SupportWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAdsense from "@/components/GoogleAdsense";
import CookieConsent from "@/components/CookieConsent";
import FloatingLanguageSelector from "@/components/FloatingLanguageSelector";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zentetris.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Basic Meta
  title: {
    default: "Zen Tetris - Mindful Puzzle Game for Relaxation",
    template: "%s | Zen Tetris",
  },
  description: "Play Zen Tetris, a calming puzzle game that combines classic Tetris gameplay with mindfulness breathing exercises. Reduce stress, improve focus, and find your moment of peace.",
  keywords: [
    "zen tetris",
    "mindfulness game",
    "relaxation game",
    "meditation game",
    "calm tetris",
    "breathing exercises",
    "stress relief game",
    "puzzle game",
    "mindful gaming",
    "relaxing puzzle",
    "zen puzzle",
    "tetris meditation",
    "mental wellness game",
    "focus game",
    "anxiety relief game",
  ],
  authors: [{ name: "Mnemonica AI" }],
  creator: "Mnemonica AI",
  publisher: "Mnemonica AI",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES", "fr_FR", "pt_BR"],
    url: siteUrl,
    siteName: "Zen Tetris",
    title: "Zen Tetris - Mindful Puzzle Game for Relaxation",
    description: "A calming puzzle game that combines classic Tetris with mindfulness breathing exercises. Find peace while you play.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zen Tetris - Mindful Puzzle Game",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Zen Tetris - Mindful Puzzle Game",
    description: "A calming puzzle game with breathing exercises. Reduce stress and find your moment of peace.",
    creator: "@mnemonica_ai",
    images: ["/opengraph-image.jpg"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/manifest.json",
  
  // App specific
  applicationName: "Zen Tetris",
  category: "games",
  
  // Verification (add your IDs when available)
  // verification: {
  //   google: "your-google-verification-code",
  // },
  
  // Other
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Zen Tetris",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#1a1510",
    "msapplication-tap-highlight": "no",
    "google-adsense-account": "ca-pub-1422077668654301",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c9a86c" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1510" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              name: "Zen Tetris",
              description: "A calming puzzle game that combines classic Tetris gameplay with mindfulness breathing exercises.",
              url: siteUrl,
              image: `${siteUrl}/opengraph-image.jpg`,
              author: {
                "@type": "Organization",
                name: "Mnemonica AI",
              },
              genre: ["Puzzle", "Casual", "Relaxation"],
              gamePlatform: ["Web Browser"],
              applicationCategory: "Game",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "120",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <GoogleAdsense />
        <Providers>
          {children}
          <FloatingLanguageSelector />
          <CookieConsent />
        </Providers>
        <SupportWidget />
      </body>
    </html>
  );
}
