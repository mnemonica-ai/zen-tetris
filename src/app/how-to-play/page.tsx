import { Metadata } from 'next';
import { en } from '@/lib/i18n/translations/en';
import HowToPlayContent from '@/components/content/HowToPlayContent';

export const metadata: Metadata = {
  title: en.pages.howToPlay.title,
  description: en.pages.howToPlay.metaDescription,
};

export default function HowToPlayPage() {
  return <HowToPlayContent />;
}
