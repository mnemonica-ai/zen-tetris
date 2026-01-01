'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Piece, PieceType, SandParticle } from '@/types/game';
import {
  COLS, ROWS, BLOCK_SIZE, PREVIEW_BLOCK_SIZE, DROP_INTERVAL,
  SHAPES, COLORS, LINES_BETWEEN_EXERCISES
} from '@/lib/constants';
import { playTibetanBowl, playSoftChime } from '@/lib/audio';
import { saveHighScore } from '@/lib/storage';
import { useLanguage } from '@/context/LanguageContext';
import { 
  trackGameOver, 
  trackLinesCleared, 
  trackPlayerNameChange, 
  trackMindfulnessStart, 
  trackMindfulnessComplete,
  trackHoldPiece,
  trackPauseGame 
} from '@/lib/analytics';
import { useTouchControls } from '@/hooks/useTouchControls';
import MobileControls from './MobileControls';

const PLAYER_NAME_KEY = 'zenTetrisPlayerName';
import StartScreen from './StartScreen';
import MindfulnessOverlay from './MindfulnessOverlay';
import GameMenu from './GameMenu';

export default function ZenTetris() {
  const { t, interpolate } = useLanguage();
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showExercise, setShowExercise] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [zenQuote, setZenQuote] = useState('');
  const [linesSinceExercise, setLinesSinceExercise] = useState(0);
  const [zenMessage, setZenMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [, forceUpdate] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nextCanvasRef = useRef<HTMLCanvasElement>(null);
  const holdCanvasRef = useRef<HTMLCanvasElement>(null);
  const nextCanvasMobileRef = useRef<HTMLCanvasElement>(null);
  const holdCanvasMobileRef = useRef<HTMLCanvasElement>(null);
  const isEditingNameRef = useRef(false);
  const isMenuOpenRef = useRef(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  // Game state refs
  const gameRef = useRef({
    board: [] as (string | 0)[][],
    currentPiece: null as Piece | null,
    nextPiece: null as Piece | null,
    holdPiece: null as { type: PieceType } | null,
    canHold: true,
    lastDropTime: 0,
    animationId: null as number | null,
    isAnimating: false,
    linesToClear: [] as number[],
    sandParticles: [] as SandParticle[],
    isPaused: false,
    gameOver: false,
    showExercise: false,
    score: 0,
    level: 1,
    lines: 0,
    linesSinceExercise: 0,
  });

  // Helper functions
  const createBoard = (): (string | 0)[][] => {
    return Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
  };

  const getRandomType = (): PieceType => {
    const types: PieceType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    return types[Math.floor(Math.random() * types.length)];
  };

  const createPiece = (type: PieceType): Piece => ({
    type,
    shape: SHAPES[type].map(row => [...row]),
    color: COLORS[type],
    x: Math.floor(COLS / 2) - Math.ceil(SHAPES[type][0].length / 2),
    y: 0
  });

  const checkCollision = (
    piece: Piece,
    offsetX: number,
    offsetY: number,
    newShape?: number[][]
  ): boolean => {
    const shape = newShape || piece.shape;
    const board = gameRef.current.board;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = piece.x + col + offsetX;
          const newY = piece.y + row + offsetY;
          if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
          if (newY >= 0 && board[newY] && board[newY][newX]) return true;
        }
      }
    }
    return false;
  };

  const shadeColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  };

  const varyColor = (hexColor: string, factor: number): string => {
    const num = parseInt(hexColor.replace('#', ''), 16);
    const R = Math.min(255, Math.max(0, Math.floor((num >> 16) * factor)));
    const G = Math.min(255, Math.max(0, Math.floor(((num >> 8) & 0x00FF) * factor)));
    const B = Math.min(255, Math.max(0, Math.floor((num & 0x0000FF) * factor)));
    return `rgb(${R}, ${G}, ${B})`;
  };

  const drawBlock = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    size: number = BLOCK_SIZE
  ) => {
    const gradient = ctx.createLinearGradient(x, y, x + size, y + size);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, shadeColor(color, -15));
    ctx.fillStyle = gradient;

    const radius = 3;
    ctx.beginPath();
    ctx.roundRect(x + 2, y + 2, size - 4, size - 4, radius);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.roundRect(x + 3, y + 3, size - 8, (size - 8) / 3, radius);
    ctx.fill();

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x + 2, y + 2, size - 4, size - 4, radius);
    ctx.stroke();
  };

  const drawBoard = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.strokeStyle = 'rgba(201, 168, 108, 0.05)';
    ctx.lineWidth = 1;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        ctx.strokeRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }

    const board = gameRef.current.board;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (board[row] && board[row][col]) {
          drawBlock(ctx, col * BLOCK_SIZE, row * BLOCK_SIZE, board[row][col] as string);
        }
      }
    }
  };

  const getGhostY = (piece: Piece): number => {
    let ghostY = piece.y;
    while (!checkCollision({ ...piece, y: ghostY }, 0, 1)) {
      ghostY++;
    }
    return ghostY;
  };

  const drawGhostPiece = (ctx: CanvasRenderingContext2D, piece: Piece) => {
    const ghostY = getGhostY(piece);
    ctx.globalAlpha = 0.2;
    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col]) {
          drawBlock(ctx, (piece.x + col) * BLOCK_SIZE, (ghostY + row) * BLOCK_SIZE, piece.color);
        }
      }
    }
    ctx.globalAlpha = 1;
  };

  const drawCurrentPiece = (ctx: CanvasRenderingContext2D, piece: Piece) => {
    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col]) {
          drawBlock(ctx, (piece.x + col) * BLOCK_SIZE, (piece.y + row) * BLOCK_SIZE, piece.color);
        }
      }
    }
  };

  const drawPreviewPiece = (ctx: CanvasRenderingContext2D, type: PieceType | null, blockSize: number = PREVIEW_BLOCK_SIZE) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (!type) return;

    const shape = SHAPES[type];
    const color = COLORS[type];
    const pieceWidth = shape[0].length * blockSize;
    const pieceHeight = shape.length * blockSize;
    const offsetX = (ctx.canvas.width - pieceWidth) / 2;
    const offsetY = (ctx.canvas.height - pieceHeight) / 2;

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          drawBlock(ctx, offsetX + col * blockSize, offsetY + row * blockSize, color, blockSize);
        }
      }
    }
  };

  const drawHoldPiece = (type: PieceType | null) => {
    const ctx = holdCanvasRef.current?.getContext('2d');
    const ctxMobile = holdCanvasMobileRef.current?.getContext('2d');
    if (ctx) drawPreviewPiece(ctx, type);
    if (ctxMobile) drawPreviewPiece(ctxMobile, type, 15);
  };

  const drawNextPiece = (type: PieceType | null) => {
    const ctx = nextCanvasRef.current?.getContext('2d');
    const ctxMobile = nextCanvasMobileRef.current?.getContext('2d');
    if (ctx) drawPreviewPiece(ctx, type);
    if (ctxMobile) drawPreviewPiece(ctxMobile, type, 15);
  };

  const spawnPiece = () => {
    const game = gameRef.current;
    const next = game.nextPiece || createPiece(getRandomType());
    game.currentPiece = {
      ...next,
      x: Math.floor(COLS / 2) - Math.ceil(next.shape[0].length / 2),
      y: 0
    };
    game.nextPiece = createPiece(getRandomType());
    game.canHold = true;

    if (checkCollision(game.currentPiece, 0, 0)) {
      endGame();
      return;
    }

    drawNextPiece(game.nextPiece.type);
  };

  const createSandParticles = (row: number, delayOffset: number = 0): SandParticle[] => {
    const particles: SandParticle[] = [];
    const y = row * BLOCK_SIZE;
    const board = gameRef.current.board;

    for (let col = 0; col < COLS; col++) {
      const color = board[row][col];
      if (color && typeof color === 'string') {
        const x = col * BLOCK_SIZE;
        const distFromCenter = Math.abs(col - COLS / 2) / (COLS / 2);

        for (let i = 0; i < 40; i++) {
          const startX = x + Math.random() * BLOCK_SIZE;
          const startY = y + Math.random() * BLOCK_SIZE;
          particles.push({
            x: startX, y: startY,
            originalX: startX, originalY: startY,
            vx: (Math.random() - 0.5) * 1.5,
            vy: -Math.random() * 2,
            size: Math.random() * 2.5 + 0.5,
            color,
            alpha: 1,
            colorVariation: 0.9 + Math.random() * 0.2,
            delay: Math.random() * 10 + distFromCenter * 5 + Math.random() * 8 + delayOffset,
            active: false,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            isDust: Math.random() > 0.7,
            drift: (Math.random() - 0.5) * 0.3
          });
        }

        for (let i = 0; i < 5; i++) {
          particles.push({
            x: x + Math.random() * BLOCK_SIZE,
            y: y + Math.random() * BLOCK_SIZE,
            originalX: x + Math.random() * BLOCK_SIZE,
            originalY: y + Math.random() * BLOCK_SIZE,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 1.5,
            size: Math.random() * 4 + 3,
            color,
            alpha: 1,
            colorVariation: 0.85 + Math.random() * 0.15,
            delay: Math.random() * 5,
            active: false,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
            isDust: false,
            isChunk: true,
            drift: (Math.random() - 0.5) * 0.2
          });
        }
      }
    }
    return particles;
  };

  const animateSandClear = (callback: () => void) => {
    const game = gameRef.current;
    game.isAnimating = true;
    let frame = 0;
    const totalFrames = 90;

    game.sandParticles = [];
    game.linesToClear.forEach((row, index) => {
      game.sandParticles = game.sandParticles.concat(createSandParticles(row, index * 5));
    });

    const blockOpacity: Record<string, number> = {};
    game.linesToClear.forEach(row => {
      for (let col = 0; col < COLS; col++) {
        blockOpacity[`${row}-${col}`] = 1;
      }
    });

    playSoftChime();

    const animate = () => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      if (frame >= totalFrames) {
        game.linesToClear.sort((a, b) => b - a).forEach(row => {
          game.board.splice(row, 1);
          game.board.unshift(new Array(COLS).fill(0));
        });
        game.sandParticles = [];
        game.linesToClear = [];
        game.isAnimating = false;
        callback();
        return;
      }

      game.sandParticles.forEach(p => {
        if (frame >= p.delay && !p.active) {
          p.active = true;
          const blockRow = Math.floor(p.originalY / BLOCK_SIZE);
          const blockCol = Math.floor(p.originalX / BLOCK_SIZE);
          const key = `${blockRow}-${blockCol}`;
          if (blockOpacity[key] !== undefined) {
            blockOpacity[key] = Math.max(0, blockOpacity[key] - 0.025);
          }
        }

        if (p.active) {
          p.vy += 0.12;
          p.vx += p.drift;
          p.vx *= 0.99;
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;

          const fadeStart = p.isDust ? 0.4 : 0.6;
          const progress = (frame - p.delay) / (totalFrames - p.delay);
          if (progress > fadeStart) {
            p.alpha = 1 - ((progress - fadeStart) / (1 - fadeStart));
          }
          if (p.isDust) p.alpha *= 0.97;
        }
      });

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.strokeStyle = 'rgba(201, 168, 108, 0.05)';
      ctx.lineWidth = 1;
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          ctx.strokeRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
      }

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (game.board[row] && game.board[row][col]) {
            const key = `${row}-${col}`;
            if (blockOpacity[key] !== undefined) {
              if (blockOpacity[key] > 0.05) {
                ctx.globalAlpha = blockOpacity[key];
                drawBlock(ctx, col * BLOCK_SIZE, row * BLOCK_SIZE, game.board[row][col] as string);
                ctx.globalAlpha = 1;
              }
            } else {
              drawBlock(ctx, col * BLOCK_SIZE, row * BLOCK_SIZE, game.board[row][col] as string);
            }
          }
        }
      }

      if (frame < 15) {
        const glowAlpha = (1 - frame / 15) * 0.4;
        game.linesToClear.forEach(row => {
          const gradient = ctx.createLinearGradient(0, row * BLOCK_SIZE, 0, row * BLOCK_SIZE + BLOCK_SIZE);
          gradient.addColorStop(0, `rgba(255, 220, 150, ${glowAlpha})`);
          gradient.addColorStop(0.5, `rgba(255, 200, 100, ${glowAlpha * 1.5})`);
          gradient.addColorStop(1, `rgba(255, 220, 150, ${glowAlpha})`);
          ctx.fillStyle = gradient;
          ctx.fillRect(0, row * BLOCK_SIZE, ctx.canvas.width, BLOCK_SIZE);
        });
      }

      game.sandParticles.forEach(p => {
        if (!p.active || p.alpha <= 0) return;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = varyColor(p.color, p.colorVariation);

        if (p.isChunk) {
          ctx.beginPath();
          ctx.moveTo(-p.size/2, -p.size/3);
          ctx.lineTo(p.size/3, -p.size/2);
          ctx.lineTo(p.size/2, p.size/4);
          ctx.lineTo(-p.size/4, p.size/2);
          ctx.closePath();
          ctx.fill();
        } else if (p.isDust) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      ctx.globalAlpha = 1;
      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  };

  const lockPiece = () => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece) return;

    for (let row = 0; row < piece.shape.length; row++) {
      for (let col = 0; col < piece.shape[row].length; col++) {
        if (piece.shape[row][col]) {
          const y = piece.y + row;
          const x = piece.x + col;
          if (y >= 0 && game.board[y]) {
            game.board[y][x] = piece.color;
          }
        }
      }
    }

    const toClear: number[] = [];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (game.board[row] && game.board[row].every(cell => cell !== 0)) {
        toClear.push(row);
      }
    }

    if (toClear.length > 0) {
      game.linesToClear = toClear;
      const points = [0, 100, 300, 500, 800];
      const newScore = game.score + points[toClear.length] * game.level;
      const newLines = game.lines + toClear.length;
      const newLevel = Math.floor(newLines / 10) + 1;
      const newLinesSinceExercise = game.linesSinceExercise + toClear.length;

      game.score = newScore;
      game.lines = newLines;
      game.level = newLevel;
      game.linesSinceExercise = newLinesSinceExercise;

      setScore(newScore);
      setLines(newLines);
      setLevel(newLevel);
      setLinesSinceExercise(newLinesSinceExercise);
      trackLinesCleared(toClear.length, newLines, newLevel);

      animateSandClear(() => {
        if (newLinesSinceExercise >= LINES_BETWEEN_EXERCISES) {
          game.linesSinceExercise = 0;
          game.showExercise = true;
          setLinesSinceExercise(0);
          setShowExercise(true);
          trackMindfulnessStart(exerciseIndex);
        } else {
          spawnPiece();
          game.lastDropTime = performance.now();
          requestAnimationFrame(gameLoop);
        }
      });
    } else {
      spawnPiece();
      game.lastDropTime = performance.now();
      requestAnimationFrame(gameLoop);
    }
  };

  const gameLoop = (currentTime: number = 0) => {
    const game = gameRef.current;

    if (game.gameOver || game.isPaused || game.isAnimating || game.showExercise) {
      return;
    }

    const ctx = canvasRef.current?.getContext('2d');
    const piece = game.currentPiece;

    if (!ctx || !piece) {
      return;
    }

    const deltaTime = currentTime - game.lastDropTime;

    if (deltaTime >= DROP_INTERVAL) {
      if (!checkCollision(piece, 0, 1)) {
        piece.y++;
      } else {
        lockPiece();
        return;
      }
      game.lastDropTime = currentTime;
    }

    drawBoard(ctx);
    drawGhostPiece(ctx, piece);
    drawCurrentPiece(ctx, piece);

    game.animationId = requestAnimationFrame(gameLoop);
  };

  const endGame = () => {
    const game = gameRef.current;
    game.gameOver = true;
    setGameOver(true);

    if (game.animationId) {
      cancelAnimationFrame(game.animationId);
    }

    const messageTemplate = t.gameOverMessages[Math.floor(Math.random() * t.gameOverMessages.length)];
    setZenMessage(interpolate(messageTemplate, { name: playerName }));

    saveHighScore({ name: playerName, score: game.score, level: game.level, lines: game.lines });
    trackGameOver(game.score, game.level, game.lines, playerName);
  };

  const resetGame = () => {
    const game = gameRef.current;
    game.board = createBoard();
    game.currentPiece = null;
    game.nextPiece = null;
    game.holdPiece = null;
    game.canHold = true;
    game.score = 0;
    game.level = 1;
    game.lines = 0;
    game.linesSinceExercise = 0;
    game.gameOver = false;
    game.isPaused = false;
    game.showExercise = false;
    game.isAnimating = false;

    setScore(0);
    setLevel(1);
    setLines(0);
    setLinesSinceExercise(0);
    setGameOver(false);
    setIsPaused(false);
    setShowExercise(false);
    setZenQuote(t.zenQuotes[Math.floor(Math.random() * t.zenQuotes.length)]);

    const holdCtx = holdCanvasRef.current?.getContext('2d');
    if (holdCtx) holdCtx.clearRect(0, 0, holdCtx.canvas.width, holdCtx.canvas.height);

    spawnPiece();
    game.lastDropTime = performance.now();
    requestAnimationFrame(gameLoop);
  };

  const handleStart = (name: string) => {
    setPlayerName(name);
    playTibetanBowl();

    setTimeout(() => {
      setGameStarted(true);
      setTimeout(() => {
        resetGame();
        // Enfocar el contenedor del juego para capturar eventos de teclado
        gameContainerRef.current?.focus();
      }, 100);
    }, 2000);
  };

  const handleExerciseComplete = () => {
    const game = gameRef.current;
    game.showExercise = false;
    setShowExercise(false);
    trackMindfulnessComplete(exerciseIndex);
    setExerciseIndex(prev => prev + 1);
    spawnPiece();
    game.lastDropTime = performance.now();
    requestAnimationFrame(gameLoop);
  };

  const handleNameClick = () => {
    const game = gameRef.current;
    if (game.showExercise || game.isAnimating) return;
    
    // Pausar el juego si está activo
    if (!game.isPaused && !game.gameOver) {
      game.isPaused = true;
      setIsPaused(true);
    }
    
    setEditedName(playerName);
    setIsEditingName(true);
    isEditingNameRef.current = true;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleNameSave = () => {
    const trimmedName = editedName.trim();
    if (trimmedName && trimmedName !== playerName) {
      trackPlayerNameChange(playerName, trimmedName);
      setPlayerName(trimmedName);
      localStorage.setItem(PLAYER_NAME_KEY, trimmedName);
    }
    setIsEditingName(false);
    isEditingNameRef.current = false;
    // Recuperar el foco en el contenedor del juego
    gameContainerRef.current?.focus();
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setIsEditingName(false);
      isEditingNameRef.current = false;
      gameContainerRef.current?.focus();
    }
  };

  const handleMenuOpen = () => {
    const game = gameRef.current;
    if (!game.gameOver && !game.isPaused) {
      game.isPaused = true;
      setIsPaused(true);
    }
    isMenuOpenRef.current = true;
  };

  const handleMenuClose = () => {
    isMenuOpenRef.current = false;
    gameContainerRef.current?.focus();
  };

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile control handlers
  const handleMoveLeft = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise) return;
    if (!checkCollision(piece, -1, 0)) {
      piece.x--;
      forceUpdate(n => n + 1);
    }
  }, []);

  const handleMoveRight = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise) return;
    if (!checkCollision(piece, 1, 0)) {
      piece.x++;
      forceUpdate(n => n + 1);
    }
  }, []);

  const handleMoveDown = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise) return;
    if (!checkCollision(piece, 0, 1)) {
      piece.y++;
      game.score++;
      setScore(game.score);
      forceUpdate(n => n + 1);
    }
  }, []);

  const handleRotate = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise) return;
    
    const shape = piece.shape;
    const n = shape.length;
    const rotated: number[][] = [];
    for (let i = 0; i < n; i++) {
      rotated[i] = [];
      for (let j = 0; j < n; j++) {
        rotated[i][j] = shape[n - 1 - j][i];
      }
    }
    const kicks = [0, -1, 1, -2, 2];
    for (const kick of kicks) {
      if (!checkCollision(piece, kick, 0, rotated)) {
        piece.shape = rotated;
        piece.x += kick;
        forceUpdate(n => n + 1);
        break;
      }
    }
  }, []);

  const handleHardDrop = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise) return;
    
    let dropDistance = 0;
    while (!checkCollision(piece, 0, 1)) {
      piece.y++;
      dropDistance++;
    }
    game.score += dropDistance * 2;
    setScore(game.score);
    lockPiece();
  }, []);

const handleHold = useCallback(() => {
    const game = gameRef.current;
    const piece = game.currentPiece;
    if (!piece || game.isPaused || game.gameOver || game.showExercise || !game.canHold) return;

    game.canHold = false;
    trackHoldPiece();
    if (!game.holdPiece) {
      game.holdPiece = { type: piece.type };
      spawnPiece();
    } else {
      const tempType = game.holdPiece.type;
      game.holdPiece = { type: piece.type };
      game.currentPiece = createPiece(tempType);
    }
    drawHoldPiece(game.holdPiece.type);
    forceUpdate(n => n + 1);
  }, []);

const handlePauseToggle = useCallback(() => {
    const game = gameRef.current;
    if (game.gameOver) return;

    game.isPaused = !game.isPaused;
    setIsPaused(game.isPaused);
    trackPauseGame(game.isPaused);
    if (!game.isPaused) {
      game.lastDropTime = performance.now();
      requestAnimationFrame(gameLoop);
    }
  }, []);

  // Touch controls hook
  useTouchControls(canvasRef, {
    onMoveLeft: handleMoveLeft,
    onMoveRight: handleMoveRight,
    onMoveDown: handleMoveDown,
    onRotate: handleRotate,
    onHardDrop: handleHardDrop,
    enabled: gameStarted && !isPaused && !gameOver && !showExercise,
  });

  // Input handling
  useEffect(() => {
    if (!gameStarted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const game = gameRef.current;

      // Prevenir scroll con flechas y espacio siempre (excepto si estamos editando)
      if (!isEditingNameRef.current) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
          e.preventDefault();
        }
      }

      // Ignorar eventos de teclado cuando se está editando el nombre o el menú está abierto
      if (isEditingNameRef.current || isMenuOpenRef.current) return;

      if (game.showExercise) return;
      if (game.gameOver && e.code !== 'Enter') return;

      const piece = game.currentPiece;
      if (!piece && !game.gameOver) return;

      switch (e.code) {
        case 'ArrowLeft':
          if (!game.isPaused && piece && !checkCollision(piece, -1, 0)) {
            piece.x--;
            forceUpdate(n => n + 1);
          }
          break;
        case 'ArrowRight':
          if (!game.isPaused && piece && !checkCollision(piece, 1, 0)) {
            piece.x++;
            forceUpdate(n => n + 1);
          }
          break;
        case 'ArrowDown':
          if (!game.isPaused && piece && !checkCollision(piece, 0, 1)) {
            piece.y++;
            game.score++;
            setScore(game.score);
            forceUpdate(n => n + 1);
          }
          break;
        case 'ArrowUp':
          if (!game.isPaused && piece) {
            const shape = piece.shape;
            const n = shape.length;
            const rotated: number[][] = [];
            for (let i = 0; i < n; i++) {
              rotated[i] = [];
              for (let j = 0; j < n; j++) {
                rotated[i][j] = shape[n - 1 - j][i];
              }
            }
            const kicks = [0, -1, 1, -2, 2];
            for (const kick of kicks) {
              if (!checkCollision(piece, kick, 0, rotated)) {
                piece.shape = rotated;
                piece.x += kick;
                forceUpdate(n => n + 1);
                break;
              }
            }
          }
          break;
        case 'Space':
          if (!game.isPaused && piece) {
            let dropDistance = 0;
            while (!checkCollision(piece, 0, 1)) {
              piece.y++;
              dropDistance++;
            }
            game.score += dropDistance * 2;
            setScore(game.score);
            lockPiece();
          }
          break;
        case 'KeyC':
          if (!game.isPaused && piece && game.canHold) {
            game.canHold = false;
            if (!game.holdPiece) {
              game.holdPiece = { type: piece.type };
              spawnPiece();
            } else {
              const tempType = game.holdPiece.type;
              game.holdPiece = { type: piece.type };
              game.currentPiece = createPiece(tempType);
            }
            drawHoldPiece(game.holdPiece.type);
            forceUpdate(n => n + 1);
          }
          break;
        case 'KeyP':
          if (!game.gameOver) {
            game.isPaused = !game.isPaused;
            setIsPaused(game.isPaused);
            if (!game.isPaused) {
              game.lastDropTime = performance.now();
              requestAnimationFrame(gameLoop);
            }
          }
          break;
        case 'Enter':
          if (game.gameOver) resetGame();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, playerName]);

  if (!gameStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div
      ref={gameContainerRef}
      tabIndex={0}
      onClick={() => !isEditingName && gameContainerRef.current?.focus()}
      className="min-h-screen bg-gradient-to-b from-[#1a1510] via-[#2d2418] to-[#1a1510] flex justify-center items-start md:items-center outline-none p-2 pt-20 pb-48 md:pb-4 md:pt-4"
    >
      {showExercise && (
        <MindfulnessOverlay
          playerName={playerName}
          exerciseIndex={exerciseIndex}
          onComplete={handleExerciseComplete}
        />
      )}

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 p-3 md:p-5 bg-[#2d2418]/50 border border-[#c9a86c]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-full">
        
        {/* Mobile Top Bar */}
        <div className="flex md:hidden justify-between items-center gap-2 w-full">
          {/* Hold piece - compact */}
          <div className="bg-[#1a1510]/60 p-2 border border-[#c9a86c]/15 flex items-center gap-2">
            <canvas ref={holdCanvasMobileRef} width={60} height={60} className="block bg-[#1a1510]/80 border border-[#c9a86c]/10 w-[50px] h-[50px]" />
          </div>
          
          {/* Score/Level - compact */}
          <div className="bg-[#1a1510]/60 p-2 border border-[#c9a86c]/15 flex-1 text-center">
            <div className="flex justify-center gap-4 text-sm">
              <span className="text-[#c9a86c]">{score}</span>
              <span className="text-[#6b5d4d]">|</span>
              <span className="text-[#8b7355]">L{level}</span>
            </div>
          </div>
          
          {/* Next piece - compact */}
          <div className="bg-[#1a1510]/60 p-2 border border-[#c9a86c]/15 flex items-center gap-2">
            <canvas ref={nextCanvasMobileRef} width={60} height={60} className="block bg-[#1a1510]/80 border border-[#c9a86c]/10 w-[50px] h-[50px]" />
          </div>
        </div>

        {/* Desktop Left Panel */}
        <div className="hidden md:flex w-40 flex-col gap-5">
          {/* Player Name */}
          <div className="bg-[#1a1510]/60 p-3 border border-[#c9a86c]/15 text-center group">
            {isEditingName ? (
              <input
                type="text"
                value={editedName}
                onChange={handleNameChange}
                onBlur={handleNameSave}
                onKeyDown={handleNameKeyDown}
                maxLength={20}
                autoFocus
                className="bg-transparent border-0 border-b border-[#c9a86c]/50 text-[#c9a86c] text-sm text-center w-full outline-none focus:border-[#c9a86c]"
              />
            ) : (
              <span
                onClick={handleNameClick}
                title={t.game.editNameTitle}
                className="text-[#c9a86c] text-sm block cursor-pointer hover:text-[#e8d5b0] transition-colors"
              >
                {playerName}
                <span className="block text-[10px] text-[#6b5d4d] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  {t.game.edit}
                </span>
              </span>
            )}
          </div>

          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15">
            <h3 className="text-center text-xs tracking-[3px] mb-2 text-[#8b7355] font-normal">{t.game.hold}</h3>
            <canvas ref={holdCanvasRef} width={100} height={100} className="block mx-auto bg-[#1a1510]/80 border border-[#c9a86c]/10" />
            <p className="text-center text-[11px] text-[#5a4d3d] mt-2">{t.game.holdKey}</p>
          </div>

          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15">
            <div className="flex justify-between py-2 border-b border-[#c9a86c]/10">
              <span className="text-[#8b7355] text-sm">{t.game.score}</span>
              <span className="text-[#c9a86c] text-base">{score}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#c9a86c]/10">
              <span className="text-[#8b7355] text-sm">{t.game.level}</span>
              <span className="text-[#c9a86c] text-base">{level}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#8b7355] text-sm">{t.game.lines}</span>
              <span className="text-[#c9a86c] text-base">{lines}</span>
            </div>
          </div>

          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15 text-center">
            <span className="block text-[#6b5d4d] text-[11px] mb-1">{t.game.nextBreak}</span>
            <span className="text-[#c9a86c] text-sm">{LINES_BETWEEN_EXERCISES - linesSinceExercise} {t.game.linesUnit}</span>
          </div>
        </div>

        {/* Game Board */}
        <div className="relative mx-auto md:mx-0">
          <canvas
            ref={canvasRef}
            width={300}
            height={600}
            className="block bg-gradient-to-b from-[#1a1510]/90 to-[#2d2418]/90 border-2 border-[#c9a86c]/30 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] max-h-[50vh] md:max-h-none w-auto touch-none"
            style={{ aspectRatio: '1/2' }}
          />

          {gameOver && (
            <div className="absolute inset-0 bg-[#1a1510]/90 flex flex-col justify-center items-center backdrop-blur-sm">
              <h2 className="text-3xl text-[#c9a86c] mb-5 tracking-[3px] font-light">{t.game.gameOverTitle}</h2>
              <p className="text-base mb-4 text-[#8b7355]">{t.game.gameOverScore}: {score}</p>
              <p className="italic max-w-[250px] text-center leading-relaxed my-5 text-[#8b7355]">{zenMessage}</p>
              <button
                onClick={resetGame}
                className="mt-5 bg-transparent border-2 border-[#c9a86c] text-[#c9a86c] py-3 px-8 text-sm tracking-[3px] cursor-pointer transition-all hover:bg-[#c9a86c] hover:text-[#1a1510]"
              >
                {t.game.continueButton}
              </button>
            </div>
          )}

          {isPaused && !gameOver && (
            <div className="absolute inset-0 bg-[#1a1510]/90 flex flex-col justify-center items-center backdrop-blur-sm">
              <h2 className="text-3xl text-[#c9a86c] mb-5 tracking-[3px] font-light">{t.game.pauseTitle}</h2>
              <p className="text-base text-[#8b7355]">{t.game.pauseMessage}</p>
              <p className="text-[11px] text-[#5a4d3d] mt-4">{t.game.pauseHint}</p>
            </div>
          )}
        </div>

        {/* Desktop Right Panel */}
        <div className="hidden md:flex w-40 flex-col gap-5">
          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15">
            <h3 className="text-center text-xs tracking-[3px] mb-2 text-[#8b7355] font-normal">{t.game.next}</h3>
            <canvas ref={nextCanvasRef} width={100} height={100} className="block mx-auto bg-[#1a1510]/80 border border-[#c9a86c]/10" />
          </div>

          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15">
            <h3 className="text-center text-xs tracking-[3px] mb-2 text-[#8b7355] font-normal">{t.game.controls}</h3>
            <ul className="text-xs">
              {[
                ['←→', t.game.controlSlide],
                ['↑', t.game.controlRotate],
                ['↓', t.game.controlDown],
                ['Space', t.game.controlDrop],
                ['C', t.game.controlHold],
                ['P', t.game.controlPause]
              ].map(([key, action]) => (
                <li key={key} className="flex justify-between py-1 text-[#6b5d4d]">
                  <span className="bg-[#c9a86c]/10 px-2 py-0.5 text-[11px] text-[#8b7355]">{key}</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a1510]/60 p-4 border border-[#c9a86c]/15 italic text-center">
            <p className="text-xs text-[#8b7355] leading-relaxed">{zenQuote}</p>
          </div>
        </div>
      </div>

      {/* Game Menu */}
      <GameMenu
        playerName={playerName}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
      />

      {/* Mobile Controls */}
      {isMobile && (
        <MobileControls
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
          onMoveDown={handleMoveDown}
          onRotate={handleRotate}
          onHardDrop={handleHardDrop}
          onHold={handleHold}
          onPause={handlePauseToggle}
          isPaused={isPaused}
        />
      )}
    </div>
  );
}
