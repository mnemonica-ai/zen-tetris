// Google Analytics event tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Game events
export const trackGameStart = (playerName: string) => {
  trackEvent('game_start', {
    player_name: playerName,
    player_name_length: playerName.length,
  });
};

export const trackPlayerNameSet = (playerName: string, isNewPlayer: boolean) => {
  trackEvent('player_name_set', {
    player_name: playerName,
    is_new_player: isNewPlayer,
  });
};

export const trackPlayerNameChange = (oldName: string, newName: string) => {
  trackEvent('player_name_change', {
    old_name: oldName,
    new_name: newName,
  });
};

export const trackGameOver = (score: number, level: number, lines: number, playerName: string) => {
  trackEvent('game_over', {
    score,
    level,
    lines,
    player_name: playerName,
  });
};

export const trackLinesCleared = (linesCleared: number, totalLines: number, level: number) => {
  trackEvent('lines_cleared', {
    lines_cleared: linesCleared,
    total_lines: totalLines,
    level,
  });
};

export const trackMindfulnessStart = (exerciseIndex: number) => {
  trackEvent('mindfulness_start', {
    exercise_index: exerciseIndex,
  });
};

export const trackMindfulnessComplete = (exerciseIndex: number) => {
  trackEvent('mindfulness_complete', {
    exercise_index: exerciseIndex,
  });
};

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    language,
  });
};

export const trackHoldPiece = () => {
  trackEvent('hold_piece');
};

export const trackPauseGame = (isPaused: boolean) => {
  trackEvent('pause_toggle', {
    is_paused: isPaused,
  });
};

export const trackMenuOpen = () => {
  trackEvent('menu_open');
};

export const trackSupportClick = () => {
  trackEvent('support_click');
};
