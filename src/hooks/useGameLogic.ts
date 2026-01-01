'use client';

import { useCallback, useRef } from 'react';
import { Piece, PieceType, GameState, SandParticle } from '@/types/game';
import { COLS, ROWS, BLOCK_SIZE, SHAPES, COLORS, LINES_BETWEEN_EXERCISES } from '@/lib/constants';
import { playSoftChime } from '@/lib/audio';

export function useGameLogic() {
  const gameStateRef = useRef<GameState>({
    board: [],
    currentPiece: null,
    nextPiece: null,
    holdPiece: null,
    canHold: true,
    score: 0,
    level: 1,
    lines: 0,
    gameOver: false,
    isPaused: false,
    isAnimatingClear: false,
    isDoingExercise: false,
    linesSinceLastExercise: 0
  });

  const createBoard = useCallback((): (string | 0)[][] => {
    const board: (string | 0)[][] = [];
    for (let row = 0; row < ROWS; row++) {
      board[row] = [];
      for (let col = 0; col < COLS; col++) {
        board[row][col] = 0;
      }
    }
    return board;
  }, []);

  const getRandomType = useCallback((): PieceType => {
    const types: PieceType[] = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    return types[Math.floor(Math.random() * types.length)];
  }, []);

  const createPiece = useCallback((type: PieceType): Piece => {
    return {
      type,
      shape: SHAPES[type].map(row => [...row]),
      color: COLORS[type],
      x: Math.floor(COLS / 2) - Math.ceil(SHAPES[type][0].length / 2),
      y: 0
    };
  }, []);

  const checkCollision = useCallback((
    board: (string | 0)[][],
    piece: Piece,
    offsetX: number,
    offsetY: number,
    newShape?: number[][]
  ): boolean => {
    const shape = newShape || piece.shape;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const newX = piece.x + col + offsetX;
          const newY = piece.y + row + offsetY;

          if (newX < 0 || newX >= COLS || newY >= ROWS) {
            return true;
          }

          if (newY >= 0 && board[newY][newX]) {
            return true;
          }
        }
      }
    }
    return false;
  }, []);

  const rotatePiece = useCallback((piece: Piece): number[][] => {
    const shape = piece.shape;
    const n = shape.length;
    const rotated: number[][] = [];

    for (let i = 0; i < n; i++) {
      rotated[i] = [];
      for (let j = 0; j < n; j++) {
        rotated[i][j] = shape[n - 1 - j][i];
      }
    }

    return rotated;
  }, []);

  const getGhostY = useCallback((board: (string | 0)[][], piece: Piece): number => {
    let ghostY = piece.y;
    while (!checkCollision(board, { ...piece, y: ghostY }, 0, 1)) {
      ghostY++;
    }
    return ghostY;
  }, [checkCollision]);

  const createSandParticles = useCallback((
    board: (string | 0)[][],
    row: number,
    delayOffset: number = 0
  ): SandParticle[] => {
    const particles: SandParticle[] = [];
    const y = row * BLOCK_SIZE;

    for (let col = 0; col < COLS; col++) {
      const color = board[row][col];
      if (color && typeof color === 'string') {
        const x = col * BLOCK_SIZE;

        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
          const startX = x + Math.random() * BLOCK_SIZE;
          const startY = y + Math.random() * BLOCK_SIZE;

          const distFromCenter = Math.abs(col - COLS / 2) / (COLS / 2);
          const columnDelay = Math.random() * 10 + distFromCenter * 5;

          particles.push({
            x: startX,
            y: startY,
            originalX: startX,
            originalY: startY,
            vx: (Math.random() - 0.5) * 1.5,
            vy: -Math.random() * 2,
            size: Math.random() * 2.5 + 0.5,
            color: color,
            alpha: 1,
            colorVariation: 0.9 + Math.random() * 0.2,
            delay: columnDelay + Math.random() * 8 + delayOffset,
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
            color: color,
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
  }, []);

  const findLinesToClear = useCallback((board: (string | 0)[][]): number[] => {
    const lines: number[] = [];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row].every(cell => cell !== 0)) {
        lines.push(row);
      }
    }
    return lines;
  }, []);

  const clearLines = useCallback((board: (string | 0)[][], linesToClear: number[]): (string | 0)[][] => {
    const newBoard = board.map(row => [...row]);
    linesToClear.sort((a, b) => b - a).forEach(row => {
      newBoard.splice(row, 1);
      newBoard.unshift(new Array(COLS).fill(0));
    });
    return newBoard;
  }, []);

  const calculateScore = useCallback((linesCleared: number, level: number): number => {
    const points = [0, 100, 300, 500, 800];
    return points[linesCleared] * level;
  }, []);

  const shouldTriggerExercise = useCallback((linesSinceLastExercise: number): boolean => {
    return linesSinceLastExercise >= LINES_BETWEEN_EXERCISES;
  }, []);

  return {
    createBoard,
    getRandomType,
    createPiece,
    checkCollision,
    rotatePiece,
    getGhostY,
    createSandParticles,
    findLinesToClear,
    clearLines,
    calculateScore,
    shouldTriggerExercise,
    playSoftChime
  };
}
