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
    links: {
      about: "Acerca de",
      howToPlay: "Cómo jugar",
      benefits: "Beneficios",
      backToGame: "Volver al juego",
      zenInvaders: "Zen Invaders",
    },
  },

  pages: {
    about: {
      title: "Acerca de Zen Tetris - Experiencia de juego consciente",
      metaDescription: "Conoce Zen Tetris, un juego de puzzles único que combina la jugabilidad clásica de Tetris con ejercicios de mindfulness para aliviar el estrés y el bienestar mental.",
      heading: "Acerca de Zen Tetris",
      sections: {
        what: {
          title: "¿Qué es Zen Tetris?",
          content: "Zen Tetris reimagina el clásico juego de puzzles como una herramienta de mindfulness y relajación. En lugar de perseguir puntajes altos bajo presión, juegas a un ritmo constante y tranquilo. Cada pocas líneas, el juego se pausa para ejercicios de respiración guiados, ayudándote a desarrollar una práctica de detenerte, respirar y reconectar con el momento presente."
        },
        why: {
          title: "¿Por qué el juego consciente?",
          content: "En nuestro mundo siempre conectado, encontrar momentos de calma puede ser difícil. Zen Tetris cierra la brecha entre entretenimiento y bienestar transformando el tiempo de pantalla en una oportunidad para aliviar el estrés. La mecánica familiar de Tetris proporciona el compromiso justo para calmar pensamientos acelerados, mientras los ejercicios de respiración integrados enseñan técnicas valiosas de relajación."
        },
        how: {
          title: "Cómo funciona",
          content: "El juego presenta una paleta de colores tierra relajante y piezas que se disuelven como arena cuando se completan líneas. No hay aceleración de velocidad—el ritmo permanece suave durante todo el juego. Cada 5 líneas, te guiamos a través de un ejercicio de respiración como la respiración 4-7-8, respiración cuadrada o escaneos corporales. Un cuenco tibetano marca el inicio de tu práctica."
        },
        who: {
          title: "¿Para quién es?",
          content: "Zen Tetris es para cualquiera que busque una pausa consciente: quienes lidian con ansiedad, personas aprendiendo meditación, trabajadores que necesitan un reinicio mental, o cualquiera que quiera transformar el juego en una práctica de bienestar. No se necesita experiencia con meditación—el juego te guía en cada ejercicio."
        }
      }
    },
    howToPlay: {
      title: "Cómo jugar Zen Tetris - Controles y guía",
      metaDescription: "Aprende a jugar Zen Tetris con nuestra guía completa. Domina los controles, entiende los ejercicios de mindfulness y descubre consejos para una experiencia relajante.",
      heading: "Cómo jugar",
      intro: "Zen Tetris sigue las reglas clásicas de Tetris con un giro consciente. Organiza las piezas que caen para completar líneas horizontales, pero recuerda—el objetivo no es la velocidad, es la presencia.",
      controls: {
        title: "Controles",
        items: [
          { key: "← →", action: "Mover pieza izquierda o derecha" },
          { key: "↑", action: "Rotar pieza" },
          { key: "↓", action: "Caída suave (bajar más rápido)" },
          { key: "Espacio", action: "Caída dura (caída instantánea)" },
          { key: "C", action: "Guardar pieza para después" },
          { key: "P", action: "Pausar el juego" }
        ]
      },
      tips: {
        title: "Consejos para una experiencia consciente",
        items: [
          "No te apresures—no hay aumento de velocidad en Zen Tetris",
          "Usa la pieza fantasma (vista previa transparente) para planificar tu colocación",
          "La función Reserva te permite guardar una pieza para cuando la necesites",
          "Durante los ejercicios de respiración, realmente sigue las instrucciones—están diseñados para ayudar",
          "Si te sientes estresado, pausa el juego y toma unas respiraciones",
          "Juega con sonido para escuchar el relajante cuenco tibetano y campanillas"
        ]
      },
      mindfulness: {
        title: "Las pausas de mindfulness",
        content: "Cada 5 líneas, el juego se pausa para un ejercicio de respiración. Estas no son interrupciones—son el corazón de la experiencia. Practicarás técnicas como la respiración 4-7-8 (inhala 4 segundos, mantén 7, exhala 8), respiración cuadrada, escaneos corporales y conciencia del momento presente. Cada ejercicio toma aproximadamente 30-60 segundos y te deja sintiéndote más calmado y enfocado."
      }
    },
    benefits: {
      title: "Beneficios del juego consciente - Por qué jugar Zen Tetris",
      metaDescription: "Descubre los beneficios para la salud mental de jugar Zen Tetris. Desde reducción del estrés hasta mejor enfoque, aprende cómo el juego consciente puede mejorar tu bienestar.",
      heading: "Beneficios del juego consciente",
      intro: "Jugar Zen Tetris no es solo entretenimiento—es una práctica que puede mejorar tu bienestar mental. Esto es lo que el juego regular puede ofrecerte:",
      benefits: [
        {
          title: "Reducción del estrés",
          description: "La combinación de juego enfocado y ejercicios de respiración activa tu sistema nervioso parasimpático, reduciendo los niveles de cortisol y promoviendo la relajación."
        },
        {
          title: "Alivio de la ansiedad",
          description: "Tetris ha sido estudiado por su capacidad de reducir pensamientos intrusivos. El razonamiento espacial requerido ocupa los centros de procesamiento visual de tu cerebro, dejando menos espacio para la rumiación que produce ansiedad."
        },
        {
          title: "Mejor enfoque",
          description: "La práctica regular de mindfulness fortalece tu capacidad de concentración. Los ejercicios de respiración en Zen Tetris entrenan tu atención, facilitando el enfoque en la vida diaria."
        },
        {
          title: "Mejores hábitos de respiración",
          description: "Muchas personas respiran superficialmente sin darse cuenta. Los ejercicios guiados enseñan técnicas como la respiración diafragmática que puedes usar cada vez que te sientas estresado."
        },
        {
          title: "Mindfulness accesible",
          description: "La meditación tradicional puede sentirse intimidante. Zen Tetris proporciona estructura y compromiso, haciendo el mindfulness accesible para principiantes."
        },
        {
          title: "Tiempo de pantalla saludable",
          description: "Transforma el scroll pasivo en bienestar activo. Zen Tetris te da los beneficios de un descanso de juego mientras construyes habilidades que mejoran tu salud mental."
        }
      ],
      cta: "¿Listo para experimentar el juego consciente?"
    }
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
