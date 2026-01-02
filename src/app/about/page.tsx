import { Metadata } from 'next';
import { en } from '@/lib/i18n/translations/en';
import AboutContent from '@/components/content/AboutContent';

export const metadata: Metadata = {
  title: en.pages.about.title,
  description: en.pages.about.metaDescription,
};

export default function AboutPage() {
  return <AboutContent />;
}
