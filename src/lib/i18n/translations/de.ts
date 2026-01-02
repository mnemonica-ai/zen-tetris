import { Translations } from '../types';

export const de: Translations = {
    languageName: 'Deutsch',

    startScreen: {
        title: 'Zen Tetris',
        subtitle: 'Ein Moment der Ruhe',
        welcomeBack: 'Willkommen zurück,',
        changeName: 'Name ändern',
        askName: "Wie heißt du?",
        namePlaceholder: 'Dein Name',
        enterNameHint: 'Gib deinen Namen ein, um zu beginnen',
        startButton: 'Starten',
        breatheHint: 'Atme tief durch, bevor du beginnst',
    },

    game: {
        hold: 'HALTEN',
        holdKey: '[C]',
        next: 'NÄCHSTES',
        controls: 'STEUERUNG',
        score: 'Körner',
        level: 'Fluss',
        lines: 'Linien',
        nextBreak: 'Nächste Pause',
        linesUnit: 'Linien',
        edit: 'bearbeiten',
        editNameTitle: 'Klicken zum Bearbeiten',

        controlSlide: 'Schieben',
        controlRotate: 'Drehen',
        controlDown: 'Runter',
        controlDrop: 'Fallen',
        controlHold: 'Halten',
        controlPause: 'Pause',

        gameOverTitle: 'Zeit zum Ausruhen',
        gameOverScore: 'Gesammelte Körner',
        continueButton: 'Weiter üben',

        pauseTitle: 'Achtsame Pause',
        pauseMessage: 'Beobachte deinen Atem',
        pauseHint: '[P] zum Fortfahren',
    },

    mindfulness: {
        preparing: 'Vorbereiten...',
        wellDone: 'Gut gemacht.',
        greetings: [
            "{name}, nimm dir einen Moment...",
            "Gut gemacht, {name}. Atme.",
            "{name}, verbinde dich mit dir selbst.",
            "Ein Geschenk für dich, {name}.",
            "{name}, du bist im Hier und Jetzt.",
        ],
    },

    gameOverMessages: [
        "{name}, jedes Ende ist ein neuer Anfang.",
        "Übung ist der Weg, {name}.",
        "{name}, morgen ist eine neue Gelegenheit.",
        "Du hast heute Frieden kultiviert, {name}.",
        "{name}, der Weg ist wichtiger als das Ziel.",
        "Gut gemacht, {name}. Ruh dich aus.",
    ],

    zenQuotes: [
        '"Ruhe ist die Wiege der Kraft."',
        '"Atme. Loslassen. Sein."',
        '"Die Gegenwart ist der einzige Moment, der existiert."',
        '"In der Stille findest du deine Stärke."',
        '"Jeder Moment ist ein neuer Anfang."',
        '"Frieden kommt von innen."',
        '"Beobachte ohne zu urteilen."',
        '"Fließe wie Wasser."',
        '"Einfachheit ist die höchste Stufe der Vollendung."',
        '"Hier und jetzt ist alles gut."',
    ],

    menu: {
        welcome: "Willkommen, {name}",
        aboutTitle: "Über Zen Tetris",
        aboutText: [
            "Zen Tetris verwandelt ein klassisches Spiel in ein Werkzeug für Achtsamkeit. Alle paar Zeilen pausiert das Spiel für eine Atemübung und lädt dich ein, innezuhalten. Mit sandartigen Visuals und Teilen, die sich wie Körner im Wind auflösen, spiele nicht um zu gewinnen, sondern um Frieden zu finden."
        ],
        languageTitle: "Sprache",
        close: "Schließen",
        links: {
            about: "Über uns",
            howToPlay: "Spielanleitung",
            benefits: "Vorteile",
            backToGame: "Zurück zum Spiel",
        },
    },

    pages: {
        about: {
            title: "Über Zen Tetris - Achtsames Spielerlebnis",
            metaDescription: "Erfahre mehr über Zen Tetris, ein einzigartiges Puzzlespiel, das klassisches Tetris mit Achtsamkeitsübungen zur Stressbewältigung verbindet.",
            heading: "Über Zen Tetris",
            sections: {
                what: {
                    title: "Was ist Zen Tetris?",
                    content: "Zen Tetris denkt das klassische Puzzlespiel neu als Werkzeug für Achtsamkeit und Entspannung. Statt unter Druck Highscores zu jagen, spielst du in einem konstanten, friedlichen Tempo. Alle paar Zeilen pausiert das Spiel für geführte Atemübungen, die dir helfen, eine Praxis des Innehaltens und der Verbindung mit dem jetzigen Moment zu entwickeln."
                },
                why: {
                    title: "Warum achtsames Spielen?",
                    content: "In unserer vernetzten Welt ist es schwer, Ruhe zu finden. Zen Tetris überbrückt die Lücke zwischen Unterhaltung und Wellness, indem es Bildschirmzeit in eine Gelegenheit zum Stressabbau verwandelt. Die vertraute Mechanik beschäftigt die Gedanken gerade genug, um sie zu beruhigen, während die Atemübungen wertvolle Entspannungstechniken vermitteln."
                },
                how: {
                    title: "Wie es funktioniert",
                    content: "Das Spiel bietet eine beruhigende Farbpalette in Erdtönen und Teile, die sich wie Sand auflösen. Es gibt keine Geschwindigkeitssteigerung – das Tempo bleibt sanft. Alle 5 Zeilen wirst du durch eine Atemübung geführt, wie 4-7-8-Atmung oder Box-Atmung. Eine tibetische Klangschale markiert den Beginn deiner Praxis."
                },
                who: {
                    title: "Für wen ist es?",
                    content: "Zen Tetris ist für alle, die eine achtsame Pause suchen: Menschen mit Angstzuständen, Meditationsanfänger, Arbeitnehmer, die einen mentalen Reset brauchen, oder jeden, der Gaming in eine Wellness-Praxis verwandeln möchte. Keine Vorerfahrung nötig."
                }
            }
        },
        howToPlay: {
            title: "Spielanleitung Zen Tetris - Steuerung & Infos",
            metaDescription: "Lerne Zen Tetris zu spielen mit unserer kompletten Anleitung. Meistere die Steuerung und entdecke Tipps für ein entspannendes Spielerlebnis.",
            heading: "Spielanleitung",
            intro: "Zen Tetris folgt den klassischen Regeln mit einem achtsamen Twist. Ordne fallende Teile an, um Linien zu vervollständigen, aber denk daran: Das Ziel ist nicht Geschwindigkeit, sondern Präsenz.",
            controls: {
                title: "Steuerung",
                items: [
                    { key: "← →", action: "Bewegen nach links/rechts" },
                    { key: "↑", action: "Drehen" },
                    { key: "↓", action: "Sanfter Fall" },
                    { key: "Space", action: "Harter Fall (sofort)" },
                    { key: "C", action: "Teil halten" },
                    { key: "P", action: "Pause" }
                ]
            },
            tips: {
                title: "Tipps für ein achtsames Erlebnis",
                items: [
                    "Nicht hetzen – es gibt keine Geschwindigkeitserhöhung",
                    "Nutze das Geister-Teil zur Planung",
                    "Die Halte-Funktion speichert ein Teil für später",
                    "Folge den Atemübungen aktiv mit",
                    "Wenn du Stress spürst, pausiere und atme",
                    "Spiele mit Ton für die beruhigende Wirkung"
                ]
            },
            mindfulness: {
                title: "Die Achtsamkeitspausen",
                content: "Alle 5 Zeilen pausiert das Spiel für eine Atemübung. Das sind keine Unterbrechungen, sondern das Herzstück der Erfahrung. Du übst Techniken wie 4-7-8-Atmung, Box-Atmung und Bodyscan. Jede Übung dauert ca. 30-60 Sekunden und fördert Ruhe und Fokus."
            }
        },
        benefits: {
            title: "Vorteile des achtsamen Spielens",
            metaDescription: "Entdecke die mentalen Vorteile von Zen Tetris. Von Stressabbau bis zu besserem Fokus – erfahre, wie achtsames Spielen dein Wohlbefinden steigert.",
            heading: "Vorteile des achtsamen Spielens",
            intro: "Zen Tetris ist mehr als Unterhaltung – es ist eine Praxis, die dein mentales Wohlbefinden verbessern kann. Das bietet regelmäßiges Spielen:",
            benefits: [
                {
                    title: "Stressreduktion",
                    description: "Die Kombination aus fokussiertem Spiel und Atemübungen aktiviert das parasympathische Nervensystem und senkt den Cortisolspiegel."
                },
                {
                    title: "Angstlinderung",
                    description: "Tetris kann nachweislich intrusive Gedanken reduzieren. Das räumliche Denken belegt visuelle Verarbeitungszentren und lässt weniger Raum für Grübeln."
                },
                {
                    title: "Verbesserter Fokus",
                    description: "Regelmäßige Achtsamkeit stärkt die Konzentration. Die Übungen in Zen Tetris trainieren deine Aufmerksamkeit für den Alltag."
                },
                {
                    title: "Bessere Atemgewohnheiten",
                    description: "Die geführten Übungen lehren Techniken wie Zwerchfellatmung, die du jederzeit bei Stress anwenden kannst."
                },
                {
                    title: "Achtsamkeit leicht gemacht",
                    description: "Zen Tetris bietet Struktur und Engagement, was den Einstieg in die Achtsamkeit ohne die Hürden traditioneller Meditation erleichtert."
                },
                {
                    title: "Gesunde Bildschirmzeit",
                    description: "Verwandle passives Scrollen in aktive Wellness. Zen Tetris bietet die Pause eines Spiels bei gleichzeitigem Aufbau mentaler Stärke."
                }
            ],
            cta: "Bereit für achtsames Spielen?"
        }
    },

    exercises: [
        {
            title: "4-7-8 Atmung",
            steps: [
                { instruction: "Durch die Nase einatmen...", duration: 4000, breath: "inhale" },
                { instruction: "Atem anhalten...", duration: 7000, breath: "hold" },
                { instruction: "Langsam ausatmen...", duration: 8000, breath: "exhale" }
            ],
            hint: "Beruhigt das Nervensystem",
            cycles: 2
        },
        {
            title: "Box-Atmung",
            steps: [
                { instruction: "Einatmen...", duration: 4000, breath: "inhale" },
                { instruction: "Halten...", duration: 4000, breath: "hold" },
                { instruction: "Ausatmen...", duration: 4000, breath: "exhale" },
                { instruction: "Leer halten...", duration: 4000, breath: "hold" }
            ],
            hint: "Stell dir ein Quadrat vor",
            cycles: 2
        },
        {
            title: "Bodyscan",
            steps: [
                { instruction: "Spüre deine Füße...", duration: 5000, breath: "calm" },
                { instruction: "Entspanne die Schultern...", duration: 5000, breath: "calm" },
                { instruction: "Löse den Kiefer...", duration: 5000, breath: "calm" },
                { instruction: "Atme tief...", duration: 5000, breath: "inhale" }
            ],
            hint: "Nimm wahr ohne zu verändern",
            cycles: 1
        },
        {
            title: "Gegenwärtiger Moment",
            steps: [
                { instruction: "Nenne 3 Dinge, die du siehst...", duration: 6000, breath: "calm" },
                { instruction: "Höre 2 Geräusche...", duration: 5000, breath: "calm" },
                { instruction: "Spüre 1 Textur...", duration: 5000, breath: "calm" }
            ],
            hint: "Verankere dich im Jetzt",
            cycles: 1
        },
        {
            title: "Natürliche Atmung",
            steps: [
                { instruction: "Beobachte deinen Atem...", duration: 4000, breath: "calm" },
                { instruction: "Ohne ihn zu ändern...", duration: 4000, breath: "calm" },
                { instruction: "Spüre das Einatmen...", duration: 4000, breath: "inhale" },
                { instruction: "Und das Ausatmen...", duration: 4000, breath: "exhale" }
            ],
            hint: "Es gibt kein Richtig oder Falsch",
            cycles: 2
        }
    ],
};
