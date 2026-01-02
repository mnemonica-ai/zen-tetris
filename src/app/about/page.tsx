'use client';

import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

export default function AboutPage() {
  const { t } = useLanguage();
  const { about } = t.pages;

  return (
    <PageLayout>
      <article className="prose prose-invert prose-zen max-w-none">
        <h1 className="text-4xl font-light text-[#c9a86c] tracking-wider mb-8 text-center">
          {about.heading}
        </h1>

        {/* Zen Circle */}
        <div className="w-20 h-20 border-2 border-[#c9a86c]/40 rounded-full mx-auto mb-12 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#c9a86c] rounded-full" />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-[#c9a86c] mb-4">
            {about.sections.what.title}
          </h2>
          <p className="text-[#8b7355] leading-relaxed">
            {about.sections.what.content}
          </p>
        </section>

        <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-10" />

        <section className="mb-12">
          <h2 className="text-2xl font-light text-[#c9a86c] mb-4">
            {about.sections.why.title}
          </h2>
          <p className="text-[#8b7355] leading-relaxed">
            {about.sections.why.content}
          </p>
        </section>

        <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-10" />

        <section className="mb-12">
          <h2 className="text-2xl font-light text-[#c9a86c] mb-4">
            {about.sections.how.title}
          </h2>
          <p className="text-[#8b7355] leading-relaxed">
            {about.sections.how.content}
          </p>
        </section>

        <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-10" />

        <section className="mb-12">
          <h2 className="text-2xl font-light text-[#c9a86c] mb-4">
            {about.sections.who.title}
          </h2>
          <p className="text-[#8b7355] leading-relaxed">
            {about.sections.who.content}
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
