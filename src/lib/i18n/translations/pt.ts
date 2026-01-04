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
    links: {
      about: "Sobre",
      howToPlay: "Como jogar",
      benefits: "Benefícios",
      backToGame: "Voltar ao jogo",
      zenInvaders: "Zen Invaders",
    },
  },

  pages: {
    about: {
      title: "Sobre Zen Tetris - Experiência de jogo consciente",
      metaDescription: "Conheça Zen Tetris, um jogo de quebra-cabeça único que combina a jogabilidade clássica de Tetris com exercícios de mindfulness para alívio do estresse e bem-estar mental.",
      heading: "Sobre Zen Tetris",
      sections: {
        what: {
          title: "O que é Zen Tetris?",
          content: "Zen Tetris reimagina o clássico jogo de quebra-cabeça como uma ferramenta de mindfulness e relaxamento. Em vez de perseguir pontuações altas sob pressão, você joga em um ritmo constante e tranquilo. A cada poucas linhas, o jogo pausa para exercícios de respiração guiados, ajudando você a desenvolver uma prática de parar, respirar e se reconectar com o momento presente."
        },
        why: {
          title: "Por que o jogo consciente?",
          content: "Em nosso mundo sempre conectado, encontrar momentos de calma pode ser difícil. Zen Tetris preenche a lacuna entre entretenimento e bem-estar transformando o tempo de tela em uma oportunidade para aliviar o estresse. A mecânica familiar de Tetris fornece engajamento suficiente para acalmar pensamentos acelerados, enquanto os exercícios de respiração integrados ensinam técnicas valiosas de relaxamento."
        },
        how: {
          title: "Como funciona",
          content: "O jogo apresenta uma paleta de cores terrosas relaxante e peças que se dissolvem como areia quando linhas são completadas. Não há aceleração de velocidade—o ritmo permanece suave durante todo o jogo. A cada 5 linhas, você é guiado através de um exercício de respiração como a respiração 4-7-8, respiração quadrada ou escaneamentos corporais. Uma tigela tibetana marca o início da sua prática."
        },
        who: {
          title: "Para quem é?",
          content: "Zen Tetris é para qualquer pessoa que busca uma pausa consciente: aqueles lidando com ansiedade, pessoas aprendendo meditação, trabalhadores precisando de um reset mental, ou qualquer um que queira transformar jogos em uma prática de bem-estar. Nenhuma experiência com meditação é necessária—o jogo guia você através de cada exercício."
        }
      }
    },
    howToPlay: {
      title: "Como jogar Zen Tetris - Controles e guia",
      metaDescription: "Aprenda a jogar Zen Tetris com nosso guia completo. Domine os controles, entenda os exercícios de mindfulness e descubra dicas para uma experiência relaxante.",
      heading: "Como jogar",
      intro: "Zen Tetris segue as regras clássicas de Tetris com um toque consciente. Organize as peças que caem para completar linhas horizontais, mas lembre-se—o objetivo não é velocidade, é presença.",
      controls: {
        title: "Controles",
        items: [
          { key: "← →", action: "Mover peça para esquerda ou direita" },
          { key: "↑", action: "Girar peça" },
          { key: "↓", action: "Queda suave (descer mais rápido)" },
          { key: "Espaço", action: "Queda rápida (queda instantânea)" },
          { key: "C", action: "Guardar peça para depois" },
          { key: "P", action: "Pausar o jogo" }
        ]
      },
      tips: {
        title: "Dicas para uma experiência consciente",
        items: [
          "Não se apresse—não há aumento de velocidade no Zen Tetris",
          "Use a peça fantasma (prévia transparente) para planejar sua colocação",
          "A função Reserva permite guardar uma peça para quando precisar",
          "Durante os exercícios de respiração, realmente siga as instruções—eles são projetados para ajudar",
          "Se você se sentir estressado, pause o jogo e respire fundo algumas vezes",
          "Jogue com som para ouvir a tigela tibetana relaxante e os sinos"
        ]
      },
      mindfulness: {
        title: "As pausas de mindfulness",
        content: "A cada 5 linhas, o jogo pausa para um exercício de respiração. Estas não são interrupções—são o coração da experiência. Você praticará técnicas como a respiração 4-7-8 (inspire 4 segundos, segure 7, expire 8), respiração quadrada, escaneamentos corporais e consciência do momento presente. Cada exercício leva aproximadamente 30-60 segundos e deixa você mais calmo e focado."
      }
    },
    benefits: {
      title: "Benefícios do jogo consciente - Por que jogar Zen Tetris",
      metaDescription: "Descubra os benefícios para a saúde mental de jogar Zen Tetris. Da redução do estresse ao melhor foco, aprenda como o jogo consciente pode melhorar seu bem-estar.",
      heading: "Benefícios do jogo consciente",
      intro: "Jogar Zen Tetris não é apenas entretenimento—é uma prática que pode melhorar seu bem-estar mental. Aqui está o que o jogo regular pode oferecer:",
      benefits: [
        {
          title: "Redução do estresse",
          description: "A combinação de jogabilidade focada e exercícios de respiração ativa seu sistema nervoso parassimpático, reduzindo os níveis de cortisol e promovendo relaxamento."
        },
        {
          title: "Alívio da ansiedade",
          description: "Tetris foi estudado por sua capacidade de reduzir pensamentos intrusivos. O raciocínio espacial necessário ocupa os centros de processamento visual do seu cérebro, deixando menos espaço para ruminação que produz ansiedade."
        },
        {
          title: "Melhor foco",
          description: "A prática regular de mindfulness fortalece sua capacidade de concentração. Os exercícios de respiração no Zen Tetris treinam sua atenção, facilitando o foco na vida diária."
        },
        {
          title: "Melhores hábitos de respiração",
          description: "Muitas pessoas respiram superficialmente sem perceber. Os exercícios guiados ensinam técnicas como respiração diafragmática que você pode usar sempre que se sentir estressado."
        },
        {
          title: "Mindfulness acessível",
          description: "A meditação tradicional pode parecer intimidante. Zen Tetris oferece estrutura e engajamento, tornando o mindfulness acessível para iniciantes."
        },
        {
          title: "Tempo de tela saudável",
          description: "Transforme a rolagem passiva em bem-estar ativo. Zen Tetris oferece os benefícios de uma pausa de jogo enquanto desenvolve habilidades que melhoram sua saúde mental."
        }
      ],
      cta: "Pronto para experimentar o jogo consciente?"
    }
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
