import { Metadata } from 'next';
import ZenInvaders from '@/components/ZenInvaders';

export const metadata: Metadata = {
    title: "Zen Invaders - Mindful Arcade Shooter",
    description: "A relaxing twist on the classic arcade game. Use focused breathing and calm precision to clear mental blocks in this mindful shooter experience.",
    keywords: ["zen invaders", "mindful game", "relaxing shooter", "meditation game", "zen arcade", "calm gaming"],
};

export default function ZenInvadersPage() {
    return (
        <div className="min-h-screen bg-[#1a1510] font-sans text-[#d4c4a8] overflow-hidden selection:bg-[#c9a86c]/30">
            <ZenInvaders />
        </div>
    );
}
