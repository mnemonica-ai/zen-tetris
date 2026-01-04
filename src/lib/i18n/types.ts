import { MindfulnessExercise } from '@/types/game';

export type Language = 'en' | 'es' | 'fr' | 'pt' | 'de' | 'it';

export interface Translations {
  // Language info
  languageName: string;

  // Start Screen
  startScreen: {
    title: string;
    subtitle: string;
    welcomeBack: string;
    changeName: string;
    askName: string;
    namePlaceholder: string;
    enterNameHint: string;
    startButton: string;
    breatheHint: string;
  };

  // Game Panel
  game: {
    hold: string;
    holdKey: string;
    next: string;
    controls: string;
    score: string;
    level: string;
    lines: string;
    nextBreak: string;
    linesUnit: string;
    edit: string;
    editNameTitle: string;

    // Controls
    controlSlide: string;
    controlRotate: string;
    controlDown: string;
    controlDrop: string;
    controlHold: string;
    controlPause: string;

    // Game Over
    gameOverTitle: string;
    gameOverScore: string;
    continueButton: string;

    // Pause
    pauseTitle: string;
    pauseMessage: string;
    pauseHint: string;
  };

  // Mindfulness
  mindfulness: {
    preparing: string;
    wellDone: string;
    greetings: string[];
  };

  // Game Over Messages
  gameOverMessages: string[];

  // Zen Quotes
  zenQuotes: string[];

  // Mindfulness Exercises
  exercises: MindfulnessExercise[];

  // Menu
  menu: {
    welcome: string;
    aboutTitle: string;
    aboutText: string[];
    languageTitle: string;
    close: string;
    links: {
      about: string;
      howToPlay: string;
      benefits: string;
      backToGame: string;
      zenInvaders: string;
    };
  };

  // Pages
  pages: {
    about: {
      title: string;
      metaDescription: string;
      heading: string;
      sections: {
        what: { title: string; content: string };
        why: { title: string; content: string };
        how: { title: string; content: string };
        who: { title: string; content: string };
      };
    };
    howToPlay: {
      title: string;
      metaDescription: string;
      heading: string;
      intro: string;
      controls: {
        title: string;
        items: { key: string; action: string }[];
      };
      tips: {
        title: string;
        items: string[];
      };
      mindfulness: {
        title: string;
        content: string;
      };
    };
    benefits: {
      title: string;
      metaDescription: string;
      heading: string;
      intro: string;
      benefits: {
        title: string;
        description: string;
      }[];
      cta: string;
    };
  };
}
