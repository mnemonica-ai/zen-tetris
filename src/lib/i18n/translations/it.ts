import { Translations } from '../types';

export const it: Translations = {
    languageName: 'Italiano',

    startScreen: {
        title: 'Zen Tetris',
        subtitle: 'Un momento di calma',
        welcomeBack: 'Bentornato,',
        changeName: 'Cambia nome',
        askName: "Come ti chiami?",
        namePlaceholder: 'Il tuo nome',
        enterNameHint: 'Inserisci il tuo nome per iniziare',
        startButton: 'Inizia',
        breatheHint: 'Fai un respiro profondo prima di iniziare',
    },

    game: {
        hold: 'TIENI',
        holdKey: '[C]',
        next: 'PROSSIMO',
        controls: 'COMANDI',
        score: 'Grani',
        level: 'Flusso',
        lines: 'Linee',
        nextBreak: 'Prossima pausa',
        linesUnit: 'linee',
        edit: 'modifica',
        editNameTitle: 'Clicca per modificare',

        controlSlide: 'Sposta',
        controlRotate: 'Ruota',
        controlDown: 'Giù',
        controlDrop: 'Caduta',
        controlHold: 'Tieni',
        controlPause: 'Pausa',

        gameOverTitle: 'Tempo di riposare',
        gameOverScore: 'Grani raccolti',
        continueButton: 'Continua a praticare',

        pauseTitle: 'Pausa consapevole',
        pauseMessage: 'Osserva il tuo respiro',
        pauseHint: '[P] per continuare',
    },

    mindfulness: {
        preparing: 'Preparazione...',
        wellDone: 'Ben fatto.',
        greetings: [
            "{name}, prenditi un momento...",
            "Ben fatto, {name}. Respira.",
            "{name}, connettiti con te stesso.",
            "Un dono per te, {name}.",
            "{name}, sei nel presente.",
        ],
    },

    gameOverMessages: [
        "{name}, ogni fine è un nuovo inizio.",
        "La pratica è il sentiero, {name}.",
        "{name}, domani è una nuova opportunita.",
        "Hai coltivato la pace oggi, {name}.",
        "{name}, il viaggio conta più della destinazione.",
        "Ben fatto, {name}. Riposa.",
    ],

    zenQuotes: [
        '"La calma è la culla del potere."',
        '"Respira. Lascia andare. Sii."',
        '"Il presente è l\'unico momento che esiste."',
        '"Nella quiete trovi la tua forza."',
        '"Ogni momento è un nuovo inizio."',
        '"La pace viene da dentro."',
        '"Osserva senza giudicare."',
        '"Fluisci come l\'acqua."',
        '"La semplicità è la suprema raffinatezza."',
        '"Qui e ora, tutto va bene."',
    ],

    menu: {
        welcome: "Benvenuto, {name}",
        aboutTitle: "Su Zen Tetris",
        aboutText: [
            "Zen Tetris trasforma un gioco classico in uno strumento per la consapevolezza. Ogni poche righe, il gioco fa una pausa per un esercizio di respirazione, invitandoti a fermarti. Con immagini simili alla sabbia e pezzi che si dissolvono come granelli al vento, gioca non per vincere, ma per trovare la pace."
        ],
        languageTitle: "Lingua",
        close: "Chiudi",
        links: {
            about: "Chi siamo",
            howToPlay: "Come giocare",
            benefits: "Benefici",
            backToGame: "Torna al gioco",
            zenInvaders: "Zen Invaders",
        },
    },

    pages: {
        about: {
            title: "Su Zen Tetris - Esperienza di Gioco Consapevole",
            metaDescription: "Scopri Zen Tetris, un puzzle game unico che combina il classico gameplay di Tetris con esercizi di consapevolezza per il sollievo dallo stress.",
            heading: "Su Zen Tetris",
            sections: {
                what: {
                    title: "Cos'è Zen Tetris?",
                    content: "Zen Tetris reinventa il classico puzzle game come strumento di consapevolezza e relax. Invece di inseguire punteggi alti sotto pressione, giochi a un ritmo costante e pacifico. Ogni poche righe, il gioco fa una pausa per esercizi di respirazione guidati, aiutandoti a sviluppare una pratica di riconnessione con il momento presente."
                },
                why: {
                    title: "Perché il gioco consapevole?",
                    content: "Nel nostro mondo sempre connesso, trovare momenti di calma può essere difficile. Zen Tetris colma il divario tra intrattenimento e benessere trasformando il tempo davanti allo schermo in un'opportunità di sollievo dallo stress. Le meccaniche familiari calmano i pensieri, mentre gli esercizi di respirazione insegnano tecniche di rilassamento."
                },
                how: {
                    title: "Come funziona",
                    content: "Il gioco presenta una tavolozza di colori rilassanti e pezzi che si dissolvono come sabbia. Non c'è accelerazione: il ritmo rimane dolce. Ogni 5 righe, vieni guidato attraverso un esercizio di respirazione come la respirazione 4-7-8 o il body scan. Una campana tibetana segna l'inizio della tua pratica."
                },
                who: {
                    title: "Per chi è?",
                    content: "Zen Tetris è per chiunque cerchi una pausa consapevole: persone con ansia, principianti della meditazione, lavoratori che necessitano di un reset mentale o chiunque voglia trasformare il gioco in una pratica di benessere."
                }
            }
        },
        howToPlay: {
            title: "Come giocare a Zen Tetris - Guida e controlli",
            metaDescription: "Impara a giocare a Zen Tetris con la nostra guida completa. Padroneggia i controlli e scopri suggerimenti per un'esperienza di gioco rilassante.",
            heading: "Come giocare",
            intro: "Zen Tetris segue le regole classiche con un tocco consapevole. Disponi i pezzi che cadono per completare le linee, ma ricorda: l'obiettivo non è la velocità, è la presenza.",
            controls: {
                title: "Controlli",
                items: [
                    { key: "← →", action: "Sposta a sinistra/destra" },
                    { key: "↑", action: "Ruota pezzo" },
                    { key: "↓", action: "Caduta dolce" },
                    { key: "Space", action: "Caduta istantanea" },
                    { key: "C", action: "Tieni pezzo" },
                    { key: "P", action: "Pausa" }
                ]
            },
            tips: {
                title: "Consigli per un'esperienza consapevole",
                items: [
                    "Non avere fretta: non c'è aumento di velocità in Zen Tetris",
                    "Usa il pezzo fantasma per pianificare",
                    "La funzione Tieni ti permette di salvare un pezzo",
                    "Durante gli esercizi, segui attivamente il respiro",
                    "Se senti stress, metti in pausa e respira",
                    "Gioca con l'audio per l'effetto calmante"
                ]
            },
            mindfulness: {
                title: "Le pause di consapevolezza",
                content: "Ogni 5 righe, il gioco fa una pausa per la respirazione. Non sono interruzioni, sono il cuore dell'esperienza. Praticherai tecniche come la respirazione 4-7-8, la respirazione quadrata e la scansione corporea. Ogni esercizio dura circa 30-60 secondi."
            }
        },
        benefits: {
            title: "Benefici del Gioco Consapevole",
            metaDescription: "Scopri i benefici per la salute mentale di Zen Tetris. Dalla riduzione dello stress al miglioramento della concentrazione.",
            heading: "Benefici del Gioco Consapevole",
            intro: "Giocare a Zen Tetris non è solo intrattenimento: è una pratica che può migliorare il tuo benessere mentale. Ecco cosa offre il gioco regolare:",
            benefits: [
                {
                    title: "Riduzione dello Stress",
                    description: "La combinazione di gioco focalizzato ed esercizi di respirazione attiva il sistema nervoso parasimpatico, riducendo i livelli di cortisolo."
                },
                {
                    title: "Sollievo dall'Ansia",
                    description: "Il Tetris è stato studiato per la sua capacità di ridurre i pensieri intrusivi, occupando i centri di elaborazione visiva del cervello."
                },
                {
                    title: "Miglioramento del Focus",
                    description: "La pratica regolare della consapevolezza rafforza la capacità di concentrazione nella vita quotidiana."
                },
                {
                    title: "Migliori Abitudini Respiratorie",
                    description: "Gli esercizi guidati insegnano tecniche come la respirazione diaframmatica che puoi usare ogni volta che ti senti stressato."
                },
                {
                    title: "Consapevolezza Accessibile",
                    description: "Zen Tetris offre struttura e coinvolgimento, rendendo la consapevolezza accessibile ai principianti."
                },
                {
                    title: "Tempo allo Schermo Sano",
                    description: "Trasforma lo scorrimento passivo in benessere attivo. Zen Tetris offre i benefici di una pausa di gioco costruendo forza mentale."
                }
            ],
            cta: "Pronto per il gioco consapevole?"
        }
    },

    exercises: [
        {
            title: "Respirazione 4-7-8",
            steps: [
                { instruction: "Inspira dal naso...", duration: 4000, breath: "inhale" },
                { instruction: "Trattieni il respiro...", duration: 7000, breath: "hold" },
                { instruction: "Espira lentamente...", duration: 8000, breath: "exhale" }
            ],
            hint: "Calma il sistema nervoso",
            cycles: 2
        },
        {
            title: "Respirazione Quadrata",
            steps: [
                { instruction: "Inspira...", duration: 4000, breath: "inhale" },
                { instruction: "Trattieni...", duration: 4000, breath: "hold" },
                { instruction: "Espira...", duration: 4000, breath: "exhale" },
                { instruction: "Trattieni vuoto...", duration: 4000, breath: "hold" }
            ],
            hint: "Immagina di disegnare un quadrato",
            cycles: 2
        },
        {
            title: "Scansione Corporea",
            steps: [
                { instruction: "Senti i tuoi piedi...", duration: 5000, breath: "calm" },
                { instruction: "Rilassa le spalle...", duration: 5000, breath: "calm" },
                { instruction: "Ammorbidisci la mascella...", duration: 5000, breath: "calm" },
                { instruction: "Respira profondamente...", duration: 5000, breath: "inhale" }
            ],
            hint: "Nota le sensazioni senza cambiarle",
            cycles: 1
        },
        {
            title: "Momento Presente",
            steps: [
                { instruction: "Nomina 3 cose che vedi...", duration: 6000, breath: "calm" },
                { instruction: "Nota 2 suoni...", duration: 5000, breath: "calm" },
                { instruction: "Senti 1 struttura...", duration: 5000, breath: "calm" }
            ],
            hint: "Ancorati al qui e ora",
            cycles: 1
        },
        {
            title: "Respirazione Naturale",
            steps: [
                { instruction: "Osserva il tuo respiro...", duration: 4000, breath: "calm" },
                { instruction: "Senza cambiarlo...", duration: 4000, breath: "calm" },
                { instruction: "Nota l'aria che entra...", duration: 4000, breath: "inhale" },
                { instruction: "E che esce...", duration: 4000, breath: "exhale" }
            ],
            hint: "Non c'è giusto o sbagliato",
            cycles: 2
        }
    ],
};
