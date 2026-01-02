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
    links: {
      about: "About",
      howToPlay: "How to Play",
      benefits: "Benefits",
      backToGame: "Back to Game",
    },
  },

  pages: {
    about: {
      title: "About Zen Tetris - Mindful Gaming Experience",
      metaDescription: "Learn about Zen Tetris, a unique puzzle game that combines classic Tetris gameplay with mindfulness exercises for stress relief and mental wellness.",
      heading: "About Zen Tetris",
      sections: {
        what: {
          title: "What is Zen Tetris?",
          content: "Zen Tetris reimagines the classic puzzle game as a tool for mindfulness and relaxation. Instead of chasing high scores under pressure, you play at a constant, peaceful pace. Every few lines, the game pauses for guided breathing exercises, helping you develop a practice of stopping, breathing, and reconnecting with the present moment."
        },
        why: {
          title: "Why Mindful Gaming?",
          content: "In our always-connected world, finding moments of calm can be challenging. Zen Tetris bridges the gap between entertainment and wellness by transforming screen time into an opportunity for stress relief. The familiar mechanics of Tetris provide just enough engagement to quiet racing thoughts, while the built-in breathing exercises teach valuable relaxation techniques."
        },
        how: {
          title: "How It Works",
          content: "The game features a soothing earth-tone palette and pieces that dissolve like sand when lines are cleared. There's no speed acceleration—the pace remains gentle throughout. Every 5 lines, you're guided through a breathing exercise like 4-7-8 breathing, box breathing, or body scans. A Tibetan singing bowl marks the beginning of your practice."
        },
        who: {
          title: "Who Is It For?",
          content: "Zen Tetris is for anyone seeking a mindful break: those dealing with anxiety, people learning meditation, workers needing a mental reset, or anyone who wants to transform gaming into a wellness practice. No experience with meditation is needed—the game guides you through each exercise."
        }
      }
    },
    howToPlay: {
      title: "How to Play Zen Tetris - Controls & Guide",
      metaDescription: "Learn how to play Zen Tetris with our complete guide. Master the controls, understand the mindfulness exercises, and discover tips for a relaxing gaming experience.",
      heading: "How to Play",
      intro: "Zen Tetris follows the classic Tetris rules with a mindful twist. Arrange falling pieces to complete horizontal lines, but remember—the goal isn't speed, it's presence.",
      controls: {
        title: "Controls",
        items: [
          { key: "← →", action: "Move piece left or right" },
          { key: "↑", action: "Rotate piece" },
          { key: "↓", action: "Soft drop (move down faster)" },
          { key: "Space", action: "Hard drop (instant drop)" },
          { key: "C", action: "Hold piece for later" },
          { key: "P", action: "Pause the game" }
        ]
      },
      tips: {
        title: "Tips for a Mindful Experience",
        items: [
          "Don't rush—there's no speed increase in Zen Tetris",
          "Use the ghost piece (transparent preview) to plan your placement",
          "The Hold feature lets you save a piece for when you need it",
          "During breathing exercises, actually follow along—they're designed to help",
          "If you feel stressed, pause the game and take a few breaths",
          "Play with sound on to hear the calming Tibetan bowl and chimes"
        ]
      },
      mindfulness: {
        title: "The Mindfulness Pauses",
        content: "Every 5 lines, the game pauses for a breathing exercise. These aren't interruptions—they're the heart of the experience. You'll practice techniques like 4-7-8 breathing (inhale 4 seconds, hold 7, exhale 8), box breathing, body scans, and present-moment awareness. Each exercise takes about 30-60 seconds and leaves you feeling calmer and more focused."
      }
    },
    benefits: {
      title: "Benefits of Mindful Gaming - Why Play Zen Tetris",
      metaDescription: "Discover the mental health benefits of playing Zen Tetris. From stress reduction to improved focus, learn how mindful gaming can enhance your wellbeing.",
      heading: "Benefits of Mindful Gaming",
      intro: "Playing Zen Tetris isn't just entertainment—it's a practice that can improve your mental wellbeing. Here's what regular play can offer:",
      benefits: [
        {
          title: "Stress Reduction",
          description: "The combination of focused gameplay and breathing exercises activates your parasympathetic nervous system, reducing cortisol levels and promoting relaxation."
        },
        {
          title: "Anxiety Relief",
          description: "Tetris has been studied for its ability to reduce intrusive thoughts. The spatial reasoning required occupies the visual processing centers of your brain, leaving less room for anxiety-producing rumination."
        },
        {
          title: "Improved Focus",
          description: "Regular mindfulness practice strengthens your ability to concentrate. The breathing exercises in Zen Tetris train your attention, making it easier to focus in daily life."
        },
        {
          title: "Better Breathing Habits",
          description: "Many people breathe shallowly without realizing it. The guided exercises teach techniques like diaphragmatic breathing that you can use anytime you feel stressed."
        },
        {
          title: "Mindfulness Made Accessible",
          description: "Traditional meditation can feel intimidating. Zen Tetris provides structure and engagement, making mindfulness approachable for beginners."
        },
        {
          title: "Healthy Screen Time",
          description: "Transform passive scrolling into active wellness. Zen Tetris gives you the benefits of a game break while building skills that improve your mental health."
        }
      ],
      cta: "Ready to experience mindful gaming?"
    }
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
