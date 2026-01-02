import { Translations } from '../types';

export const pt: Translations = {
  languageName: 'Português',
  
  startScreen: {
    title: 'Zen Tetris',
    subtitle: 'Um momento de calma',
    welcomeBack: 'Bem-vindo de volta,',
    changeName: 'Mudar nome',
    askName: 'Qual é o seu nome?',
    namePlaceholder: 'Seu nome',
    enterNameHint: 'Digite seu nome para começar',
    startButton: 'Começar',
    breatheHint: 'Respire fundo antes de começar',
  },
  
  game: {
    hold: 'RESERVA',
    holdKey: '[C]',
    next: 'PRÓXIMO',
    controls: 'CONTROLES',
    score: 'Grãos',
    level: 'Fluxo',
    lines: 'Linhas',
    nextBreak: 'Próxima pausa',
    linesUnit: 'linhas',
    edit: 'editar',
    editNameTitle: 'Clique para editar nome',
    
    controlSlide: 'Deslizar',
    controlRotate: 'Girar',
    controlDown: 'Descer',
    controlDrop: 'Soltar',
    controlHold: 'Reservar',
    controlPause: 'Pausar',
    
    gameOverTitle: 'Momento de descanso',
    gameOverScore: 'Grãos coletados',
    continueButton: 'Continuar praticando',
    
    pauseTitle: 'Pausa consciente',
    pauseMessage: 'Observe sua respiração',
    pauseHint: '[P] para continuar',
  },
  
  mindfulness: {
    preparing: 'Prepare-se...',
    wellDone: 'Muito bem.',
    greetings: [
      "{name}, vamos tirar um momento...",
      "Muito bem, {name}. Respire.",
      "{name}, conecte-se consigo mesmo.",
      "Um presente para você, {name}.",
      "{name}, você está presente.",
    ],
  },
  
  gameOverMessages: [
    "{name}, cada final é um novo começo.",
    "A prática é o caminho, {name}.",
    "{name}, amanhã é outra oportunidade.",
    "Você cultivou paz hoje, {name}.",
    "{name}, a jornada importa mais que o destino.",
    "Muito bem, {name}. Descanse.",
  ],
  
  zenQuotes: [
    '"A calma é o berço do poder."',
    '"Respire. Solte. Seja."',
    '"O presente é o único momento que existe."',
    '"Na quietude, encontre sua força."',
    '"Cada momento é um novo começo."',
    '"A paz vem de dentro."',
    '"Observe sem julgar."',
    '"Flua como a água."',
    '"A simplicidade é a sofisticação suprema."',
    '"Aqui e agora, tudo está bem."',
  ],
  
  menu: {
    welcome: "Bem-vindo, {name}",
    aboutTitle: "Sobre Zen Tetris",
    aboutText: [
      "Zen Tetris transforma um jogo clássico em uma ferramenta de mindfulness. A cada poucas linhas, o jogo pausa para um exercício de respiração, convidando você a parar e se reconectar. Com visuais inspirados em areia e peças que se dissolvem como grãos ao vento, jogue não para ganhar—mas para encontrar um momento de paz."
    ],
    languageTitle: "Idioma",
    close: "Fechar",
  },

  exercises: [
    {
      title: "Respiração 4-7-8",
      steps: [
        { instruction: "Inspire pelo nariz...", duration: 4000, breath: "inhale" },
        { instruction: "Segure o ar...", duration: 7000, breath: "hold" },
        { instruction: "Expire lentamente...", duration: 8000, breath: "exhale" }
      ],
      hint: "Esta técnica acalma o sistema nervoso",
      cycles: 2
    },
    {
      title: "Respiração quadrada",
      steps: [
        { instruction: "Inspire...", duration: 4000, breath: "inhale" },
        { instruction: "Segure...", duration: 4000, breath: "hold" },
        { instruction: "Expire...", duration: 4000, breath: "exhale" },
        { instruction: "Segure vazio...", duration: 4000, breath: "hold" }
      ],
      hint: "Imagine desenhar um quadrado com sua respiração",
      cycles: 2
    },
    {
      title: "Escaneamento corporal",
      steps: [
        { instruction: "Sinta seus pés no chão...", duration: 5000, breath: "calm" },
        { instruction: "Relaxe seus ombros...", duration: 5000, breath: "calm" },
        { instruction: "Suavize sua mandíbula...", duration: 5000, breath: "calm" },
        { instruction: "Respire profundamente...", duration: 5000, breath: "inhale" }
      ],
      hint: "Note as sensações sem mudá-las",
      cycles: 1
    },
    {
      title: "Momento presente",
      steps: [
        { instruction: "Nomeie 3 coisas que você vê...", duration: 6000, breath: "calm" },
        { instruction: "Note 2 sons...", duration: 5000, breath: "calm" },
        { instruction: "Sinta 1 textura...", duration: 5000, breath: "calm" }
      ],
      hint: "Ancore sua atenção ao agora",
      cycles: 1
    },
    {
      title: "Respiração natural",
      steps: [
        { instruction: "Apenas observe sua respiração...", duration: 4000, breath: "calm" },
        { instruction: "Sem mudá-la...", duration: 4000, breath: "calm" },
        { instruction: "Apenas note o ar entrando...", duration: 4000, breath: "inhale" },
        { instruction: "E saindo...", duration: 4000, breath: "exhale" }
      ],
      hint: "Não há forma certa ou errada",
      cycles: 2
    }
  ],
};
