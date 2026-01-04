'use client';

import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import ZenInvaders from '@/components/ZenInvaders';

export default function ZenInvadersPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#1a1510] font-sans text-[#d4c4a8] overflow-hidden selection:bg-[#c9a86c]/30">
            <ZenInvaders />
        </div>
    );
}
