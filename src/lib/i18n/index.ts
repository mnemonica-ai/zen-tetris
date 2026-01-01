import { Language, Translations } from './types';
import { en } from './translations/en';
import { es } from './translations/es';
import { fr } from './translations/fr';
import { pt } from './translations/pt';

export type { Language, Translations };

export const translations: Record<Language, Translations> = {
  en,
  es,
  fr,
  pt,
};

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export const defaultLanguage: Language = 'en';

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations[defaultLanguage];
}

export function interpolate(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
}
