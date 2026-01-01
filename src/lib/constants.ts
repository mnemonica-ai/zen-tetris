import { PieceType } from '@/types/game';

export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const PREVIEW_BLOCK_SIZE = 20;
export const DROP_INTERVAL = 1200;
export const LINES_BETWEEN_EXERCISES = 5;

export const COLORS: Record<PieceType, string> = {
  I: '#c9a86c',
  O: '#a89076',
  T: '#8b7355',
  S: '#b5a18e',
  Z: '#9c8b7a',
  J: '#7a6b5a',
  L: '#d4c4a8'
};

export const SHAPES: Record<PieceType, number[][]> = {
  I: [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  O: [[1, 1], [1, 1]],
  T: [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  S: [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  Z: [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  J: [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  L: [[0, 0, 1], [1, 1, 1], [0, 0, 0]]
};
