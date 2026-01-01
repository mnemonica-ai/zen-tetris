import { Translations } from '../types';

export const fr: Translations = {
  languageName: 'Français',
  
  startScreen: {
    title: 'Zen Tetris',
    subtitle: 'Un moment de calme',
    welcomeBack: 'Bon retour,',
    changeName: 'Changer de nom',
    askName: 'Comment vous appelez-vous ?',
    namePlaceholder: 'Votre nom',
    enterNameHint: 'Entrez votre nom pour commencer',
    startButton: 'Commencer',
    breatheHint: 'Prenez une respiration avant de commencer',
  },
  
  game: {
    hold: 'RÉSERVE',
    holdKey: '[C]',
    next: 'SUIVANT',
    controls: 'CONTRÔLES',
    score: 'Grains',
    level: 'Flux',
    lines: 'Lignes',
    nextBreak: 'Prochaine pause',
    linesUnit: 'lignes',
    edit: 'modifier',
    editNameTitle: 'Cliquez pour modifier le nom',
    
    controlSlide: 'Glisser',
    controlRotate: 'Tourner',
    controlDown: 'Descendre',
    controlDrop: 'Lâcher',
    controlHold: 'Réserver',
    controlPause: 'Pause',
    
    gameOverTitle: 'Moment de repos',
    gameOverScore: 'Grains récoltés',
    continueButton: 'Continuer à pratiquer',
    
    pauseTitle: 'Pause consciente',
    pauseMessage: 'Observez votre respiration',
    pauseHint: '[P] pour continuer',
  },
  
  mindfulness: {
    preparing: 'Préparez-vous...',
    wellDone: 'Bien joué.',
    greetings: [
      "{name}, prenons un moment...",
      "Bien joué, {name}. Respirez.",
      "{name}, connectez-vous avec vous-même.",
      "Un cadeau pour vous, {name}.",
      "{name}, vous êtes présent.",
    ],
  },
  
  gameOverMessages: [
    "{name}, chaque fin est un nouveau départ.",
    "La pratique est le chemin, {name}.",
    "{name}, demain est une autre opportunité.",
    "Vous avez cultivé la paix aujourd'hui, {name}.",
    "{name}, le voyage compte plus que la destination.",
    "Bien joué, {name}. Reposez-vous.",
  ],
  
  zenQuotes: [
    '"Le calme est le berceau du pouvoir."',
    '"Respirez. Relâchez. Soyez."',
    '"Le présent est le seul moment qui existe."',
    '"Dans le calme, trouvez votre force."',
    '"Chaque moment est un nouveau départ."',
    '"La paix vient de l\'intérieur."',
    '"Observez sans juger."',
    '"Coulez comme l\'eau."',
    '"La simplicité est la sophistication suprême."',
    '"Ici et maintenant, tout va bien."',
  ],
  
  menu: {
    welcome: "Bienvenue, {name}",
    aboutTitle: "À propos de Zen Tetris",
    aboutText: [
      "Zen Tetris est né d'une idée simple : et si un jeu classique pouvait devenir un outil de pleine conscience ?",
      "Dans un monde plein de distractions, nous oublions souvent de faire une pause et de respirer. Ce jeu vous invite à faire exactement cela—toutes les quelques lignes, le jeu se met en pause pour un bref exercice de respiration.",
      "L'esthétique visuelle s'inspire des tons de sable et de terre, évoquant le calme d'un jardin zen. Les pièces qui tombent sont comme des grains de sable, et quand les lignes sont complétées, elles se dissolvent comme du sable dans le vent.",
      "Jouez non pas pour gagner, mais pour trouver un moment de paix."
    ],
    languageTitle: "Langue",
    close: "Fermer",
  },

  exercises: [
    {
      title: "Respiration 4-7-8",
      steps: [
        { instruction: "Inspirez par le nez...", duration: 4000, breath: "inhale" },
        { instruction: "Retenez votre souffle...", duration: 7000, breath: "hold" },
        { instruction: "Expirez lentement...", duration: 8000, breath: "exhale" }
      ],
      hint: "Cette technique calme le système nerveux",
      cycles: 2
    },
    {
      title: "Respiration carrée",
      steps: [
        { instruction: "Inspirez...", duration: 4000, breath: "inhale" },
        { instruction: "Retenez...", duration: 4000, breath: "hold" },
        { instruction: "Expirez...", duration: 4000, breath: "exhale" },
        { instruction: "Retenez à vide...", duration: 4000, breath: "hold" }
      ],
      hint: "Imaginez dessiner un carré avec votre respiration",
      cycles: 2
    },
    {
      title: "Scan corporel",
      steps: [
        { instruction: "Sentez vos pieds sur le sol...", duration: 5000, breath: "calm" },
        { instruction: "Détendez vos épaules...", duration: 5000, breath: "calm" },
        { instruction: "Relâchez votre mâchoire...", duration: 5000, breath: "calm" },
        { instruction: "Respirez profondément...", duration: 5000, breath: "inhale" }
      ],
      hint: "Remarquez les sensations sans les changer",
      cycles: 1
    },
    {
      title: "Moment présent",
      steps: [
        { instruction: "Nommez 3 choses que vous voyez...", duration: 6000, breath: "calm" },
        { instruction: "Remarquez 2 sons...", duration: 5000, breath: "calm" },
        { instruction: "Ressentez 1 texture...", duration: 5000, breath: "calm" }
      ],
      hint: "Ancrez votre attention au présent",
      cycles: 1
    },
    {
      title: "Respiration naturelle",
      steps: [
        { instruction: "Observez simplement votre respiration...", duration: 4000, breath: "calm" },
        { instruction: "Sans la changer...", duration: 4000, breath: "calm" },
        { instruction: "Remarquez l'air qui entre...", duration: 4000, breath: "inhale" },
        { instruction: "Et qui sort...", duration: 4000, breath: "exhale" }
      ],
      hint: "Il n'y a pas de bonne ou mauvaise façon",
      cycles: 2
    }
  ],
};
