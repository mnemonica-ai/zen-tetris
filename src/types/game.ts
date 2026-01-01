export interface Piece {
  type: PieceType;
  shape: number[][];
  color: string;
  x: number;
  y: number;
}

export type PieceType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export interface SandParticle {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  colorVariation: number;
  delay: number;
  active: boolean;
  rotation: number;
  rotationSpeed: number;
  isDust: boolean;
  isChunk?: boolean;
  drift: number;
}

export interface MindfulnessStep {
  instruction: string;
  duration: number;
  breath: 'inhale' | 'exhale' | 'hold' | 'calm';
}

export interface MindfulnessExercise {
  title: string;
  steps: MindfulnessStep[];
  hint: string;
  cycles: number;
}

export interface HighScore {
  name: string;
  score: number;
  level: number;
  lines: number;
  date: string;
}

export interface GameState {
  board: (string | 0)[][];
  currentPiece: Piece | null;
  nextPiece: Piece | null;
  holdPiece: { type: PieceType } | null;
  canHold: boolean;
  score: number;
  level: number;
  lines: number;
  gameOver: boolean;
  isPaused: boolean;
  isAnimatingClear: boolean;
  isDoingExercise: boolean;
  linesSinceLastExercise: number;
}
