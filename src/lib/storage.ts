import { HighScore } from '@/types/game';

const STORAGE_KEY = 'zenTetrisScores';

export function saveHighScore(entry: Omit<HighScore, 'date'>): void {
  if (typeof window === 'undefined') return;

  let highScores: HighScore[] = getHighScores();

  highScores.push({
    ...entry,
    date: new Date().toLocaleDateString()
  });

  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 5);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(highScores));
}

export function getHighScores(): HighScore[] {
  if (typeof window === 'undefined') return [];

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
