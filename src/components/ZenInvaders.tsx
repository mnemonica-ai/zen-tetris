'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { playTibetanBowl, playSoftChime } from '@/lib/audio';
import MindfulnessOverlay from './MindfulnessOverlay';
import { trackMindfulnessStart, trackMindfulnessComplete } from '@/lib/analytics';

// Constants
const CANVAS_WIDTH = 600; // Fixed internal game width
const CANVAS_HEIGHT = 800; // Fixed internal game height
const PLAYER_SIZE = 40;
const PROJECTILE_SIZE = 6;
const ENEMY_SIZE = 30;
const ENEMY_PADDING = 20;
const PLAYER_SPEED = 5;
const PROJECTILE_SPEED = 7;
const ENEMY_SPEED_X = 1;
const ENEMY_SPEED_Y = 20; // Drop amount

// Types
interface Point { x: number; y: number; }
interface Projectile { x: number; y: number; active: boolean; }
interface Enemy { x: number; y: number; active: boolean; type: number; }
interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    life: number; maxLife: number;
    size: number; color: string;
    alpha: number;
}
interface FloatingText {
    x: number; y: number;
    text: string;
    life: number;
    opacity: number;
}

export default function ZenInvaders() {
    const { t } = useLanguage();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Game State
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false); // To show "Press Start"
    const [showExercise, setShowExercise] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);

    // Refs for loop
    const gameState = useRef({
        playerX: CANVAS_WIDTH / 2,
        moveLeft: false,
        moveRight: false,
        projectiles: [] as Projectile[],
        enemyProjectiles: [] as Projectile[],
        enemies: [] as Enemy[],
        particles: [] as Particle[],
        floatingTexts: [] as FloatingText[],
        enemyDirection: 1, // 1 = right, -1 = left
        lastTime: 0,
        animationId: 0,
        isGameOver: false,
        isPaused: false,
    });

    // --- Audio (Reusing existing from Tetris if available, otherwise just calling functions) ---
    // Using imports from start of file

    // --- Initialization ---
    const initGame = () => {
        const state = gameState.current;
        state.playerX = CANVAS_WIDTH / 2;
        state.projectiles = [];
        state.enemyProjectiles = [];
        state.particles = [];
        state.floatingTexts = [];
        state.enemies = [];
        state.isGameOver = false;
        state.enemyDirection = 1;
        setScore(0);
        setGameOver(false);

        // Spawn Enemies
        const rows = 5;
        const cols = 8;
        const startX = (CANVAS_WIDTH - (cols * (ENEMY_SIZE + ENEMY_PADDING))) / 2;
        const startY = 80;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                state.enemies.push({
                    x: startX + c * (ENEMY_SIZE + ENEMY_PADDING),
                    y: startY + r * (ENEMY_SIZE + ENEMY_PADDING),
                    active: true,
                    type: r % 2 // Alternating types for visuals
                });
            }
        }
    };

    // --- Game Loop ---
    const update = (time: number) => {
        const state = gameState.current;
        if (state.isPaused || showExercise) {
            state.animationId = requestAnimationFrame(update);
            return;
        }

        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        // Clear
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Background (Subtle Zen Gradient)
        const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
        gradient.addColorStop(0, '#1a1510');
        gradient.addColorStop(1, '#2d2418');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        if (!gameStarted) {
            // Draw Start Screen
            ctx.fillStyle = '#c9a86c';
            ctx.font = '30px "Segoe UI"';
            ctx.textAlign = 'center';
            ctx.fillText('ZEN INVADERS', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40);
            ctx.font = '16px "Segoe UI"';
            ctx.fillStyle = '#8b7355';
            ctx.fillText('Press SPACE or TAP to Focus', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 10);
            state.animationId = requestAnimationFrame(update);
            return;
        }

        if (state.isGameOver) {
            // Draw Game Over
            ctx.fillStyle = '#c9a86c';
            ctx.font = '30px "Segoe UI"';
            ctx.textAlign = 'center';
            ctx.fillText('MEDITATION COMPLETE', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 40);
            ctx.font = '20px "Segoe UI"';
            ctx.fillStyle = '#8b7355';
            ctx.fillText(`Clarity Achieved: ${score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 10);
            state.animationId = requestAnimationFrame(update);
            return;
        }

        // 1. Move Player
        if (state.moveLeft && state.playerX > PLAYER_SIZE / 2) state.playerX -= PLAYER_SPEED;
        if (state.moveRight && state.playerX < CANVAS_WIDTH - PLAYER_SIZE / 2) state.playerX += PLAYER_SPEED;

        // 2. Move Projectiles
        state.projectiles.forEach(p => {
            if (p.active) p.y -= PROJECTILE_SPEED;
            if (p.y < 0) p.active = false;
        });

        state.enemyProjectiles.forEach(p => {
            if (p.active) p.y += PROJECTILE_SPEED * 0.6; // Slower enemy shots
            if (p.y > CANVAS_HEIGHT) p.active = false;
        });

        // 3. Move Enemies
        let hitEdge = false;
        // Check edges
        state.enemies.forEach(e => {
            if (!e.active) return;
            if ((e.x + ENEMY_SIZE > CANVAS_WIDTH - 20 && state.enemyDirection === 1) ||
                (e.x < 20 && state.enemyDirection === -1)) {
                hitEdge = true;
            }
        });

        if (hitEdge) {
            state.enemyDirection *= -1;
            state.enemies.forEach(e => e.y += ENEMY_SPEED_Y);
        } else {
            state.enemies.forEach(e => e.x += state.enemyDirection * ENEMY_SPEED_X);
        }

        // Check Enemy Invasion (Game Over)
        state.enemies.forEach(e => {
            if (e.active && e.y + ENEMY_SIZE > CANVAS_HEIGHT - 60) { // Player level
                state.isGameOver = true;
                setGameOver(true);
                playSoftChime();
            }
        });

        // Enemy Shooting
        if (Math.random() < 0.02) { // 2% chance per frame (approx once per second at 60fps)
            const activeEnemies = state.enemies.filter(e => e.active);
            if (activeEnemies.length > 0) {
                const shooter = activeEnemies[Math.floor(Math.random() * activeEnemies.length)];
                state.enemyProjectiles.push({
                    x: shooter.x + ENEMY_SIZE / 2,
                    y: shooter.y + ENEMY_SIZE,
                    active: true
                });
            }
        }

        // 4. Collisions
        // Player hits Enemy
        state.projectiles.forEach(p => {
            if (!p.active) return;
            state.enemies.forEach(e => {
                if (!e.active) return;
                if (p.x > e.x && p.x < e.x + ENEMY_SIZE &&
                    p.y > e.y && p.y < e.y + ENEMY_SIZE) {
                    // Hit!
                    e.active = false;
                    p.active = false;
                    createParticles(e.x + ENEMY_SIZE / 2, e.y + ENEMY_SIZE / 2, '#c9a86c');

                    // Floating Score
                    state.floatingTexts.push({
                        x: e.x,
                        y: e.y,
                        text: '+100',
                        life: 40,
                        opacity: 1
                    });

                    setScore(prev => prev + 100);
                    playSoftChime(); // Gentle sound
                }
            });
        });

        // Enemy hits Player
        state.enemyProjectiles.forEach(p => {
            if (!p.active) return;
            if (p.x > state.playerX - 20 && p.x < state.playerX + 20 &&
                p.y > CANVAS_HEIGHT - 40 && p.y < CANVAS_HEIGHT - 10) {
                state.isGameOver = true;
                setGameOver(true);
                playSoftChime();
            }
        });

        // 5. Update Particles
        state.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            p.alpha = p.life / p.maxLife;
        });
        // Cleanup arrays
        state.projectiles = state.projectiles.filter(p => p.active);
        state.enemyProjectiles = state.enemyProjectiles.filter(p => p.active);
        state.particles = state.particles.filter(p => p.life > 0);

        // Update Floating Texts
        state.floatingTexts.forEach(t => {
            t.y -= 1;
            t.life--;
            t.opacity = t.life / 40;
        });
        state.floatingTexts = state.floatingTexts.filter(t => t.life > 0);

        // Determine victory
        if (state.enemies.every(e => !e.active) && gameStarted) {
            // Respawn / New Level (Simple for now: reset enemies)
            initGame();
            // Enhance: Increase speed?
        }


        // --- Draw ---
        // Player
        ctx.fillStyle = '#c9a86c';
        ctx.beginPath();
        ctx.moveTo(state.playerX, CANVAS_HEIGHT - 40);
        ctx.lineTo(state.playerX - 20, CANVAS_HEIGHT - 10);
        ctx.lineTo(state.playerX + 20, CANVAS_HEIGHT - 10);
        ctx.closePath();
        ctx.fill();
        // Player Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#c9a86c';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Projectiles
        ctx.fillStyle = '#fff8e7'; // Bright light
        state.projectiles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, PROJECTILE_SIZE / 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Enemy Projectiles
        ctx.fillStyle = '#ff6b6b'; // Reddish/Orange threat
        state.enemyProjectiles.forEach(p => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - 3, p.y - 6);
            ctx.lineTo(p.x + 3, p.y - 6);
            ctx.closePath();
            ctx.fill();
        });

        // Enemies
        state.enemies.forEach(e => {
            if (!e.active) return;
            ctx.fillStyle = e.type === 0 ? '#8b7355' : '#6b5d4d'; // Zen tones
            // Rounded Rects
            roundRect(ctx, e.x, e.y, ENEMY_SIZE, ENEMY_SIZE, 5);
            ctx.fill();
            // Inner detail
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(e.x + 5, e.y + 5, ENEMY_SIZE - 10, ENEMY_SIZE - 10);
        });

        // Particles
        state.particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
        });

        // Floating Texts
        ctx.font = '14px "Segoe UI"';
        ctx.textAlign = 'center';
        state.floatingTexts.forEach(t => {
            ctx.fillStyle = `rgba(201, 168, 108, ${t.opacity})`;
            ctx.fillText(t.text, t.x + ENEMY_SIZE / 2, t.y);
        });

        state.animationId = requestAnimationFrame(update);
    };

    // --- Helpers ---
    const roundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    const createParticles = (x: number, y: number, color: string) => {
        const state = gameState.current;
        for (let i = 0; i < 15; i++) {
            state.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                life: 40 + Math.random() * 20,
                maxLife: 60,
                size: Math.random() * 3 + 1,
                color: color,
                alpha: 1
            });
        }
    };

    const fireProjectile = () => {
        const state = gameState.current;
        // Simple cooldown or limit could go here
        state.projectiles.push({
            x: state.playerX,
            y: CANVAS_HEIGHT - 40,
            active: true
        });
        // Sound?
    };

    // --- Input ---
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!gameStarted && (e.code === 'Space' || e.code === 'Enter')) {
                setGameStarted(true);
                initGame();
                return;
            }
            if (gameState.current.isGameOver && (e.code === 'Space' || e.code === 'Enter')) {
                initGame(); // Restart
                return;
            }

            if (e.code === 'ArrowLeft') gameState.current.moveLeft = true;
            if (e.code === 'ArrowRight') gameState.current.moveRight = true;
            if (e.code === 'Space') fireProjectile();
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'ArrowLeft') gameState.current.moveLeft = false;
            if (e.code === 'ArrowRight') gameState.current.moveRight = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Start loop
        gameState.current.animationId = requestAnimationFrame(update);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(gameState.current.animationId);
        };
    }, [gameStarted]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="bg-[#1a1510] border-2 border-[#c9a86c]/30 shadow-2xl rounded-sm max-w-[100vw] max-h-[90vh] touch-none"
                    style={{ aspectRatio: '3/4' }}
                />

                {/* Mobile Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 flex gap-4 p-4 opacity-50 md:hidden touch-none">
                    <div
                        className="flex-1 bg-white/5 rounded-lg active:bg-white/20"
                        onTouchStart={(e) => { e.preventDefault(); gameState.current.moveLeft = true; }}
                        onTouchEnd={(e) => { e.preventDefault(); gameState.current.moveLeft = false; }}
                    />
                    <div
                        className="flex-1 bg-white/5 rounded-lg active:bg-white/20"
                        onTouchStart={(e) => { e.preventDefault(); fireProjectile(); }}
                    />
                    <div
                        className="flex-1 bg-white/5 rounded-lg active:bg-white/20"
                        onTouchStart={(e) => { e.preventDefault(); gameState.current.moveRight = true; }}
                        onTouchEnd={(e) => { e.preventDefault(); gameState.current.moveRight = false; }}
                    />
                </div>
                {showExercise && (
                    <div className="absolute inset-0 z-20">
                        <MindfulnessOverlay
                            playerName="Player"
                            exerciseIndex={exerciseIndex}
                            onComplete={() => {
                                setShowExercise(false);
                                gameState.current.isPaused = false;
                                setExerciseIndex(prev => prev + 1);
                                trackMindfulnessComplete(exerciseIndex);
                            }}
                        />
                    </div>
                )}

                {gameOver && !showExercise && (
                    <div className="absolute top-[60%] left-0 right-0 flex justify-center z-10">
                        <button
                            onClick={() => {
                                setShowExercise(true);
                                gameState.current.isPaused = true; // Pause game when exercise starts
                                trackMindfulnessStart(exerciseIndex);
                            }}
                            className="bg-[#c9a86c]/10 border border-[#c9a86c]/30 text-[#c9a86c] py-2 px-6 rounded-sm hover:bg-[#c9a86c]/20 transition-colors text-sm tracking-widest uppercase backdrop-blur-sm"
                        >
                            Mindful Breath
                        </button>
                    </div>
                )}
                {/* Score Display */}
                <div className="absolute top-4 right-4 text-[#c9a86c] text-xl font-light tracking-widest z-10 pointer-events-none">
                    {score}
                </div>
            </div>

            <div className="mt-4 text-[#8b7355] text-sm hidden md:block">
                Arrows to Move • Space to Focus
            </div>
        </div>
    );
}
