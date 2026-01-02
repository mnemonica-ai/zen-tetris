import { Metadata } from 'next';
import { en } from '@/lib/i18n/translations/en';
import BenefitsContent from '@/components/content/BenefitsContent';

export const metadata: Metadata = {
  title: en.pages.benefits.title,
  description: en.pages.benefits.metaDescription,
};

export default function BenefitsPage() {
  return <BenefitsContent />;
}
