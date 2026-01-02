import { Translations } from '../types';

export const en: Translations = {
  languageName: 'English',
  
  startScreen: {
    title: 'Zen Tetris',
    subtitle: 'A moment of calm',
    welcomeBack: 'Welcome back,',
    changeName: 'Change name',
    askName: "What's your name?",
    namePlaceholder: 'Your name',
    enterNameHint: 'Enter your name to begin',
    startButton: 'Begin',
    breatheHint: 'Take a breath before starting',
  },
  
  game: {
    hold: 'HOLD',
    holdKey: '[C]',
    next: 'NEXT',
    controls: 'CONTROLS',
    score: 'Grains',
    level: 'Flow',
    lines: 'Lines',
    nextBreak: 'Next break',
    linesUnit: 'lines',
    edit: 'edit',
    editNameTitle: 'Click to edit name',
    
    controlSlide: 'Slide',
    controlRotate: 'Rotate',
    controlDown: 'Down',
    controlDrop: 'Drop',
    controlHold: 'Hold',
    controlPause: 'Pause',
    
    gameOverTitle: 'Time to rest',
    gameOverScore: 'Grains collected',
    continueButton: 'Continue practicing',
    
    pauseTitle: 'Mindful pause',
    pauseMessage: 'Observe your breathing',
    pauseHint: '[P] to continue',
  },
  
  mindfulness: {
    preparing: 'Prepare...',
    wellDone: 'Well done.',
    greetings: [
      "{name}, let's take a moment...",
      "Well done, {name}. Breathe.",
      "{name}, connect with yourself.",
      "A gift for you, {name}.",
      "{name}, you are present.",
    ],
  },
  
  gameOverMessages: [
    "{name}, every ending is a new beginning.",
    "Practice is the path, {name}.",
    "{name}, tomorrow is another opportunity.",
    "You cultivated peace today, {name}.",
    "{name}, the journey matters more than the destination.",
    "Well done, {name}. Rest.",
  ],
  
  zenQuotes: [
    '"Calm is the cradle of power."',
    '"Breathe. Release. Be."',
    '"The present is the only moment that exists."',
    '"In stillness, find your strength."',
    '"Every moment is a new beginning."',
    '"Peace comes from within."',
    '"Observe without judging."',
    '"Flow like water."',
    '"Simplicity is the ultimate sophistication."',
    '"Here and now, all is well."',
  ],
  
  menu: {
    welcome: "Welcome, {name}",
    aboutTitle: "About Zen Tetris",
    aboutText: [
      "Zen Tetris transforms a classic game into a mindfulness tool. Every few lines, the game pauses for a breathing exercise, inviting you to stop and reconnect. With sand-inspired visuals and pieces that dissolve like grains in the wind, play not to win—but to find a moment of peace."
    ],
    languageTitle: "Language",
    close: "Close",
  },

  exercises: [
    {
      title: "4-7-8 Breathing",
      steps: [
        { instruction: "Inhale through your nose...", duration: 4000, breath: "inhale" },
        { instruction: "Hold your breath...", duration: 7000, breath: "hold" },
        { instruction: "Exhale slowly...", duration: 8000, breath: "exhale" }
      ],
      hint: "This technique calms the nervous system",
      cycles: 2
    },
    {
      title: "Box Breathing",
      steps: [
        { instruction: "Inhale...", duration: 4000, breath: "inhale" },
        { instruction: "Hold...", duration: 4000, breath: "hold" },
        { instruction: "Exhale...", duration: 4000, breath: "exhale" },
        { instruction: "Hold empty...", duration: 4000, breath: "hold" }
      ],
      hint: "Imagine drawing a square with your breath",
      cycles: 2
    },
    {
      title: "Body Scan",
      steps: [
        { instruction: "Feel your feet on the ground...", duration: 5000, breath: "calm" },
        { instruction: "Relax your shoulders...", duration: 5000, breath: "calm" },
        { instruction: "Soften your jaw...", duration: 5000, breath: "calm" },
        { instruction: "Breathe deeply...", duration: 5000, breath: "inhale" }
      ],
      hint: "Notice sensations without changing them",
      cycles: 1
    },
    {
      title: "Present Moment",
      steps: [
        { instruction: "Name 3 things you see...", duration: 6000, breath: "calm" },
        { instruction: "Notice 2 sounds...", duration: 5000, breath: "calm" },
        { instruction: "Feel 1 texture...", duration: 5000, breath: "calm" }
      ],
      hint: "Anchor your attention to now",
      cycles: 1
    },
    {
      title: "Natural Breathing",
      steps: [
        { instruction: "Just observe your breath...", duration: 4000, breath: "calm" },
        { instruction: "Without changing it...", duration: 4000, breath: "calm" },
        { instruction: "Just notice the air entering...", duration: 4000, breath: "inhale" },
        { instruction: "And leaving...", duration: 4000, breath: "exhale" }
      ],
      hint: "There is no right or wrong way",
      cycles: 2
    }
  ],
};
