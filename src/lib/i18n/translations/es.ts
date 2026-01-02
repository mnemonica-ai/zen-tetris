import { Translations } from '../types';

export const es: Translations = {
  languageName: 'Español',
  
  startScreen: {
    title: 'Zen Tetris',
    subtitle: 'Un momento de calma',
    welcomeBack: 'Bienvenido de nuevo,',
    changeName: 'Cambiar nombre',
    askName: '¿Cómo te llamas?',
    namePlaceholder: 'Tu nombre',
    enterNameHint: 'Ingresa tu nombre para comenzar',
    startButton: 'Comenzar',
    breatheHint: 'Tómate un respiro antes de comenzar',
  },
  
  game: {
    hold: 'RESERVA',
    holdKey: '[C]',
    next: 'SIGUIENTE',
    controls: 'MOVIMIENTOS',
    score: 'Granos',
    level: 'Flujo',
    lines: 'Líneas',
    nextBreak: 'Próxima pausa',
    linesUnit: 'líneas',
    edit: 'editar',
    editNameTitle: 'Clic para editar nombre',
    
    controlSlide: 'Deslizar',
    controlRotate: 'Girar',
    controlDown: 'Descender',
    controlDrop: 'Soltar',
    controlHold: 'Reservar',
    controlPause: 'Pausar',
    
    gameOverTitle: 'Momento de descanso',
    gameOverScore: 'Granos reunidos',
    continueButton: 'Continuar practicando',
    
    pauseTitle: 'Pausa consciente',
    pauseMessage: 'Observa tu respiración',
    pauseHint: '[P] para continuar',
  },
  
  mindfulness: {
    preparing: 'Prepárate...',
    wellDone: 'Bien hecho.',
    greetings: [
      "{name}, tomemos un momento...",
      "Bien hecho, {name}. Respira.",
      "{name}, conecta contigo.",
      "Un regalo para ti, {name}.",
      "{name}, estás presente.",
    ],
  },
  
  gameOverMessages: [
    "{name}, cada final es un nuevo comienzo.",
    "La práctica es el camino, {name}.",
    "{name}, mañana es otra oportunidad.",
    "Has cultivado paz hoy, {name}.",
    "{name}, el viaje importa más que el destino.",
    "Bien hecho, {name}. Descansa.",
  ],
  
  zenQuotes: [
    '"La calma es la cuna del poder."',
    '"Respira. Suelta. Sé."',
    '"El presente es el único momento que existe."',
    '"En la quietud, encuentra tu fuerza."',
    '"Cada momento es un nuevo comienzo."',
    '"La paz viene de adentro."',
    '"Observa sin juzgar."',
    '"Fluye como el agua."',
    '"La simplicidad es la sofisticación suprema."',
    '"Aquí y ahora, todo está bien."',
  ],
  
  menu: {
    welcome: "Bienvenido, {name}",
    aboutTitle: "Sobre Zen Tetris",
    aboutText: [
      "Zen Tetris transforma un juego clásico en una herramienta de mindfulness. Cada pocas líneas, el juego se pausa para un ejercicio de respiración, invitándote a detenerte y reconectar. Con visuales inspirados en arena y piezas que se disuelven como granos en el viento, juega no para ganar—sino para encontrar un momento de paz."
    ],
    languageTitle: "Idioma",
    close: "Cerrar",
  },

  exercises: [
    {
      title: "Respiración 4-7-8",
      steps: [
        { instruction: "Inhala por la nariz...", duration: 4000, breath: "inhale" },
        { instruction: "Mantén el aire...", duration: 7000, breath: "hold" },
        { instruction: "Exhala lentamente...", duration: 8000, breath: "exhale" }
      ],
      hint: "Esta técnica calma el sistema nervioso",
      cycles: 2
    },
    {
      title: "Respiración cuadrada",
      steps: [
        { instruction: "Inhala...", duration: 4000, breath: "inhale" },
        { instruction: "Mantén...", duration: 4000, breath: "hold" },
        { instruction: "Exhala...", duration: 4000, breath: "exhale" },
        { instruction: "Mantén vacío...", duration: 4000, breath: "hold" }
      ],
      hint: "Imagina dibujar un cuadrado con tu respiración",
      cycles: 2
    },
    {
      title: "Escaneo corporal",
      steps: [
        { instruction: "Siente tus pies en el suelo...", duration: 5000, breath: "calm" },
        { instruction: "Relaja tus hombros...", duration: 5000, breath: "calm" },
        { instruction: "Suaviza tu mandíbula...", duration: 5000, breath: "calm" },
        { instruction: "Respira profundo...", duration: 5000, breath: "inhale" }
      ],
      hint: "Nota las sensaciones sin cambiarlas",
      cycles: 1
    },
    {
      title: "Momento presente",
      steps: [
        { instruction: "Nombra 3 cosas que ves...", duration: 6000, breath: "calm" },
        { instruction: "Nota 2 sonidos...", duration: 5000, breath: "calm" },
        { instruction: "Siente 1 textura...", duration: 5000, breath: "calm" }
      ],
      hint: "Ancla tu atención al ahora",
      cycles: 1
    },
    {
      title: "Respiración natural",
      steps: [
        { instruction: "Solo observa tu respiración...", duration: 4000, breath: "calm" },
        { instruction: "Sin cambiarla...", duration: 4000, breath: "calm" },
        { instruction: "Solo nota el aire entrar...", duration: 4000, breath: "inhale" },
        { instruction: "Y salir...", duration: 4000, breath: "exhale" }
      ],
      hint: "No hay forma correcta o incorrecta",
      cycles: 2
    }
  ],
};
