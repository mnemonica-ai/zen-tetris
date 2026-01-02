'use client';

import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

export default function BenefitsPage() {
  const { t } = useLanguage();
  const { benefits } = t.pages;

  return (
    <PageLayout>
      <article className="prose prose-invert prose-zen max-w-none">
        <h1 className="text-4xl font-light text-[#c9a86c] tracking-wider mb-8 text-center">
          {benefits.heading}
        </h1>

        {/* Zen Circle */}
        <div className="w-20 h-20 border-2 border-[#c9a86c]/40 rounded-full mx-auto mb-12 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#c9a86c] rounded-full" />
        </div>

        <p className="text-[#8b7355] leading-relaxed text-center mb-12 text-lg">
          {benefits.intro}
        </p>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1a1510]/60 border border-[#c9a86c]/15 p-6"
            >
              <h3 className="text-xl font-light text-[#c9a86c] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#8b7355] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-12" />

        {/* CTA */}
        <p className="text-center text-xl text-[#c9a86c] font-light">
          {benefits.cta}
        </p>
      </article>
    </PageLayout>
  );
}
