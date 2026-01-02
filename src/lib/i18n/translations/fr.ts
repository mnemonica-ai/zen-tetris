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
      "Zen Tetris transforme un jeu classique en outil de pleine conscience. Toutes les quelques lignes, le jeu fait une pause pour un exercice de respiration, vous invitant à vous arrêter et vous reconnecter. Avec des visuels inspirés du sable et des pièces qui se dissolvent comme des grains dans le vent, jouez non pour gagner—mais pour trouver un moment de paix."
    ],
    languageTitle: "Langue",
    close: "Fermer",
    links: {
      about: "À propos",
      howToPlay: "Comment jouer",
      benefits: "Bienfaits",
      backToGame: "Retour au jeu",
    },
  },

  pages: {
    about: {
      title: "À propos de Zen Tetris - Expérience de jeu conscient",
      metaDescription: "Découvrez Zen Tetris, un jeu de puzzle unique qui combine le gameplay classique de Tetris avec des exercices de pleine conscience pour le soulagement du stress et le bien-être mental.",
      heading: "À propos de Zen Tetris",
      sections: {
        what: {
          title: "Qu'est-ce que Zen Tetris ?",
          content: "Zen Tetris réinvente le jeu de puzzle classique comme un outil de pleine conscience et de relaxation. Au lieu de poursuivre des scores élevés sous pression, vous jouez à un rythme constant et paisible. Toutes les quelques lignes, le jeu fait une pause pour des exercices de respiration guidés, vous aidant à développer une pratique de s'arrêter, respirer et se reconnecter au moment présent."
        },
        why: {
          title: "Pourquoi le jeu conscient ?",
          content: "Dans notre monde toujours connecté, trouver des moments de calme peut être difficile. Zen Tetris comble le fossé entre divertissement et bien-être en transformant le temps d'écran en opportunité de soulagement du stress. Les mécaniques familières de Tetris offrent juste assez d'engagement pour calmer les pensées qui s'emballent, tandis que les exercices de respiration intégrés enseignent des techniques de relaxation précieuses."
        },
        how: {
          title: "Comment ça marche",
          content: "Le jeu présente une palette de couleurs terre apaisante et des pièces qui se dissolvent comme du sable lorsque les lignes sont complétées. Il n'y a pas d'accélération de vitesse—le rythme reste doux tout au long du jeu. Toutes les 5 lignes, vous êtes guidé à travers un exercice de respiration comme la respiration 4-7-8, la respiration carrée ou les scans corporels. Un bol chantant tibétain marque le début de votre pratique."
        },
        who: {
          title: "Pour qui est-ce ?",
          content: "Zen Tetris est pour tous ceux qui cherchent une pause consciente : ceux qui gèrent l'anxiété, les personnes apprenant la méditation, les travailleurs ayant besoin d'un reset mental, ou quiconque souhaite transformer le jeu en pratique de bien-être. Aucune expérience de méditation n'est nécessaire—le jeu vous guide à travers chaque exercice."
        }
      }
    },
    howToPlay: {
      title: "Comment jouer à Zen Tetris - Contrôles et guide",
      metaDescription: "Apprenez à jouer à Zen Tetris avec notre guide complet. Maîtrisez les contrôles, comprenez les exercices de pleine conscience et découvrez des conseils pour une expérience relaxante.",
      heading: "Comment jouer",
      intro: "Zen Tetris suit les règles classiques de Tetris avec une touche consciente. Arrangez les pièces qui tombent pour compléter des lignes horizontales, mais rappelez-vous—l'objectif n'est pas la vitesse, c'est la présence.",
      controls: {
        title: "Contrôles",
        items: [
          { key: "← →", action: "Déplacer la pièce à gauche ou à droite" },
          { key: "↑", action: "Faire pivoter la pièce" },
          { key: "↓", action: "Descente douce (descendre plus vite)" },
          { key: "Espace", action: "Descente rapide (descente instantanée)" },
          { key: "C", action: "Garder une pièce pour plus tard" },
          { key: "P", action: "Mettre le jeu en pause" }
        ]
      },
      tips: {
        title: "Conseils pour une expérience consciente",
        items: [
          "Ne vous précipitez pas—il n'y a pas d'augmentation de vitesse dans Zen Tetris",
          "Utilisez la pièce fantôme (aperçu transparent) pour planifier votre placement",
          "La fonction Réserve vous permet de garder une pièce pour quand vous en avez besoin",
          "Pendant les exercices de respiration, suivez vraiment les instructions—ils sont conçus pour aider",
          "Si vous vous sentez stressé, mettez le jeu en pause et prenez quelques respirations",
          "Jouez avec le son pour entendre le bol tibétain apaisant et les carillons"
        ]
      },
      mindfulness: {
        title: "Les pauses de pleine conscience",
        content: "Toutes les 5 lignes, le jeu fait une pause pour un exercice de respiration. Ce ne sont pas des interruptions—c'est le cœur de l'expérience. Vous pratiquerez des techniques comme la respiration 4-7-8 (inspirez 4 secondes, retenez 7, expirez 8), la respiration carrée, les scans corporels et la conscience du moment présent. Chaque exercice prend environ 30-60 secondes et vous laisse plus calme et concentré."
      }
    },
    benefits: {
      title: "Bienfaits du jeu conscient - Pourquoi jouer à Zen Tetris",
      metaDescription: "Découvrez les bienfaits pour la santé mentale de jouer à Zen Tetris. De la réduction du stress à l'amélioration de la concentration, apprenez comment le jeu conscient peut améliorer votre bien-être.",
      heading: "Bienfaits du jeu conscient",
      intro: "Jouer à Zen Tetris n'est pas seulement un divertissement—c'est une pratique qui peut améliorer votre bien-être mental. Voici ce que le jeu régulier peut vous offrir :",
      benefits: [
        {
          title: "Réduction du stress",
          description: "La combinaison de gameplay concentré et d'exercices de respiration active votre système nerveux parasympathique, réduisant les niveaux de cortisol et favorisant la relaxation."
        },
        {
          title: "Soulagement de l'anxiété",
          description: "Tetris a été étudié pour sa capacité à réduire les pensées intrusives. Le raisonnement spatial requis occupe les centres de traitement visuel de votre cerveau, laissant moins de place à la rumination anxiogène."
        },
        {
          title: "Meilleure concentration",
          description: "La pratique régulière de la pleine conscience renforce votre capacité à vous concentrer. Les exercices de respiration dans Zen Tetris entraînent votre attention, facilitant la concentration dans la vie quotidienne."
        },
        {
          title: "Meilleures habitudes respiratoires",
          description: "Beaucoup de gens respirent superficiellement sans s'en rendre compte. Les exercices guidés enseignent des techniques comme la respiration diaphragmatique que vous pouvez utiliser chaque fois que vous vous sentez stressé."
        },
        {
          title: "Pleine conscience accessible",
          description: "La méditation traditionnelle peut sembler intimidante. Zen Tetris offre structure et engagement, rendant la pleine conscience accessible aux débutants."
        },
        {
          title: "Temps d'écran sain",
          description: "Transformez le défilement passif en bien-être actif. Zen Tetris vous offre les avantages d'une pause jeu tout en développant des compétences qui améliorent votre santé mentale."
        }
      ],
      cta: "Prêt à découvrir le jeu conscient ?"
    }
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
