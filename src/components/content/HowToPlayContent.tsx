'use client';

import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

export default function HowToPlayContent() {
    const { t } = useLanguage();
    const { howToPlay } = t.pages;

    return (
        <PageLayout>
            <article className="prose prose-invert prose-zen max-w-none">
                <h1 className="text-4xl font-light text-[#c9a86c] tracking-wider mb-8 text-center">
                    {howToPlay.heading}
                </h1>

                {/* Zen Circle */}
                <div className="w-20 h-20 border-2 border-[#c9a86c]/40 rounded-full mx-auto mb-12 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#c9a86c] rounded-full" />
                </div>

                <p className="text-[#8b7355] leading-relaxed text-center mb-12 text-lg">
                    {howToPlay.intro}
                </p>

                {/* Controls */}
                <section className="mb-12">
                    <h2 className="text-2xl font-light text-[#c9a86c] mb-6">
                        {howToPlay.controls.title}
                    </h2>
                    <div className="bg-[#1a1510]/60 border border-[#c9a86c]/15 p-6">
                        <ul className="space-y-3">
                            {howToPlay.controls.items.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <span className="bg-[#c9a86c]/10 px-3 py-1.5 text-sm text-[#c9a86c] font-mono min-w-[80px] text-center">
                                        {item.key}
                                    </span>
                                    <span className="text-[#8b7355]">{item.action}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-10" />

                {/* Tips */}
                <section className="mb-12">
                    <h2 className="text-2xl font-light text-[#c9a86c] mb-6">
                        {howToPlay.tips.title}
                    </h2>
                    <ul className="space-y-4">
                        {howToPlay.tips.items.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-[#c9a86c] mt-1">•</span>
                                <span className="text-[#8b7355] leading-relaxed">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="w-16 h-px bg-[#c9a86c]/30 mx-auto my-10" />

                {/* Mindfulness */}
                <section className="mb-12">
                    <h2 className="text-2xl font-light text-[#c9a86c] mb-4">
                        {howToPlay.mindfulness.title}
                    </h2>
                    <p className="text-[#8b7355] leading-relaxed">
                        {howToPlay.mindfulness.content}
                    </p>
                </section>
            </article>
        </PageLayout>
    );
}
