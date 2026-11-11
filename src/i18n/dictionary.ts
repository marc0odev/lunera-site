// Idiomas do site. Padrão: inglês. Traduções feitas com apoio de IA

export const LANGUAGES = [
  { code: "EN", name: "English", htmlLang: "en" },
  { code: "PT", name: "Português", htmlLang: "pt-BR" },
  { code: "ES", name: "Español", htmlLang: "es" },
  { code: "FR", name: "Français", htmlLang: "fr-CH" },
  { code: "DE", name: "Deutsch", htmlLang: "de-CH" },
] as const;
export type Lang = (typeof LANGUAGES)[number]["code"];
type Dict = Record<string, string>;

const EN: Dict = {
  "lang.label": "Language",
  "nav.problem": "The problem",
  "nav.platform": "The platform",
  "nav.how": "How it works",
  "cta.download": "Download the app",
  "cta.short": "Download app",
  "store.note":
    "Illustrative only: the Lunera app is a prototype and is not available for download yet.",
  "hero.title": "Advancing Women’s Precision Health",
  "hero.lead":
    "Lunera brings a wearable Patch, a one-minute daily symptom log and a clinical dashboard together, so perimenopause is understood through continuous data instead of guesswork.",
  "hero.alt":
    "The Lunera Patch box, open, with three patches in a violet tray and the Lunera logo inside the lid",
  "problem.title": "Perimenopause is still diagnosed late",
  "problem.sub":
    "Women are told to wait and see. Doctors rely on symptom reports and isolated tests, and there is no continuous record to reason from.",
  "problem.alt": "A woman wearing a Lunera Patch on her upper arm",
  "p1.t": "Late diagnosis",
  "p1.d":
    "Perimenopause is underdiagnosed and poorly understood, so care starts later than it should.",
  "p2.t": "Misinterpreted symptoms",
  "p2.d":
    "Brain fog, fatigue and mood changes are often mistaken for anxiety or normal aging.",
  "p3.t": "No objective biomarkers",
  "p3.d": "Without continuous monitoring, treatment becomes trial and error.",
  "platform.title": "One platform, from sensor to clinical insight",
  "platform.sub":
    "Three connected parts turn everyday signals into hormonal digital biomarkers.",
  "c1.t": "Lunera Patch",
  "c1.d":
    "A wearable that monitors skin temperature, heart rate variability, sleep and metabolism around the clock.",
  "c2.t": "Lunera App",
  "c2.d":
    "Collects your data and your daily log, generates digital biomarkers and builds reports you can share with your doctor.",
  "c3.t": "Clinical Dashboard",
  "c3.d":
    "Physicians see hormonal patterns, metabolic risk and progression in one clear view.",
  flow: "Patch → App → Clinical Dashboard, continuously",
  "how.title": "Simple enough to do every day",
  "how.sub":
    "No manual data entry from the device, and a symptom log that takes seconds.",
  "s1.t": "Wear the Patch",
  "s1.d":
    "Place it on the upper chest, below the breast or on the upper back. It syncs with the app on its own.",
  "s2.t": "Log how you feel",
  "s2.d": "Tap an intensity for each symptom. Try it:",
  "demo.label": "Hot Flashes",
  "level.none": "None",
  "level.mild": "Mild",
  "level.moderate": "Moderate",
  "level.severe": "Severe",
  "s3.t": "See your patterns",
  "s3.d":
    "Temperature, HRV, sleep and symptoms appear side by side, ready to discuss with your clinician.",
  "moon.title": "The era of cycles",
  "moon.text":
    "Lunera comes from Luna, the moon, and the suffix –era: cycle, continuity, time. It stands for science applied to women’s cycles, from biology to continuous care across life.",
  "footer.copy":
    "© 2026 Lunera Healthcare. Prototype for presentation purposes.",
};

const PT: Dict = {
  "lang.label": "Idioma",
  "nav.problem": "O problema",
  "nav.platform": "A plataforma",
  "nav.how": "Como funciona",
  "cta.download": "Baixar o app",
  "cta.short": "Baixar app",
  "store.note":
    "Apenas ilustrativo: o app da Lunera é um protótipo e ainda não está disponível para download.",
  "hero.title": "Avançando a saúde de precisão da mulher",
  "hero.lead":
    "A Lunera une um Patch vestível, um diário de sintomas de um minuto e um painel clínico, para que a perimenopausa seja compreendida por dados contínuos, e não por suposições.",
  "hero.alt":
    "A caixa do Lunera Patch aberta, com três patches em uma bandeja violeta e a logo da Lunera na tampa",
  "problem.title": "A perimenopausa ainda é diagnosticada tarde",
  "problem.sub":
    "Muitas mulheres ouvem para esperar e ver. Os médicos dependem de relatos de sintomas e exames isolados, e não existe um registro contínuo para embasar decisões.",
  "problem.alt": "Mulher usando um Lunera Patch na parte superior do braço",
  "p1.t": "Diagnóstico tardio",
  "p1.d":
    "A perimenopausa é subdiagnosticada e pouco compreendida, e o cuidado começa mais tarde do que deveria.",
  "p2.t": "Sintomas mal interpretados",
  "p2.d":
    "Névoa mental, cansaço e mudanças de humor costumam ser confundidos com ansiedade ou envelhecimento normal.",
  "p3.t": "Sem biomarcadores objetivos",
  "p3.d": "Sem monitoramento contínuo, o tratamento vira tentativa e erro.",
  "platform.title": "Uma plataforma, do sensor ao insight clínico",
  "platform.sub":
    "Três partes conectadas transformam sinais do dia a dia em biomarcadores digitais hormonais.",
  "c1.t": "Lunera Patch",
  "c1.d":
    "Um dispositivo vestível que monitora temperatura da pele, variabilidade da frequência cardíaca, sono e metabolismo o tempo todo.",
  "c2.t": "Lunera App",
  "c2.d":
    "Reúne seus dados e seu diário, gera biomarcadores digitais e monta relatórios para compartilhar com seu médico.",
  "c3.t": "Painel clínico",
  "c3.d":
    "Médicos veem padrões hormonais, risco metabólico e progressão em uma única visão clara.",
  flow: "Patch → App → Painel clínico, continuamente",
  "how.title": "Simples o bastante para fazer todo dia",
  "how.sub":
    "Sem digitar dados do dispositivo e com um diário de sintomas que leva segundos.",
  "s1.t": "Use o Patch",
  "s1.d":
    "Coloque na parte superior do peito, abaixo do seio ou na parte superior das costas. Ele sincroniza com o app sozinho.",
  "s2.t": "Registre como se sente",
  "s2.d": "Toque em uma intensidade para cada sintoma. Experimente:",
  "demo.label": "Ondas de calor",
  "level.none": "Nenhum",
  "level.mild": "Leve",
  "level.moderate": "Moderado",
  "level.severe": "Intenso",
  "s3.t": "Veja seus padrões",
  "s3.d":
    "Temperatura, VFC, sono e sintomas aparecem lado a lado, prontos para conversar com seu médico.",
  "moon.title": "A era dos ciclos",
  "moon.text":
    "Lunera vem de Luna, a lua, e do sufixo –era: ciclo, continuidade, tempo. Representa a ciência aplicada aos ciclos da mulher, da biologia ao cuidado contínuo ao longo da vida.",
  "footer.copy":
    "© 2026 Lunera Healthcare. Protótipo para fins de apresentação.",
};

const ES: Dict = {
  "lang.label": "Idioma",
  "nav.problem": "El problema",
  "nav.platform": "La plataforma",
  "nav.how": "Cómo funciona",
  "cta.download": "Descargar la app",
  "cta.short": "Descargar app",
  "store.note":
    "Solo ilustrativo: la app de Lunera es un prototipo y aún no está disponible para descargar.",
  "hero.title": "Avanzando en la salud de precisión de la mujer",
  "hero.lead":
    "Lunera reúne un Patch portátil, un registro diario de síntomas de un minuto y un panel clínico, para entender la perimenopausia con datos continuos y no con conjeturas.",
  "hero.alt":
    "La caja del Lunera Patch abierta, con tres parches en una bandeja violeta y el logotipo de Lunera en la tapa",
  "problem.title": "La perimenopausia todavía se diagnostica tarde",
  "problem.sub":
    "A muchas mujeres se les dice que esperen y vean. Los médicos dependen de relatos de síntomas y pruebas aisladas, y no existe un registro continuo en el que apoyarse.",
  "problem.alt": "Una mujer con un Lunera Patch en la parte superior del brazo",
  "p1.t": "Diagnóstico tardío",
  "p1.d":
    "La perimenopausia está infradiagnosticada y poco comprendida, por lo que la atención empieza más tarde de lo debido.",
  "p2.t": "Síntomas mal interpretados",
  "p2.d":
    "La niebla mental, la fatiga y los cambios de humor suelen confundirse con ansiedad o con el envejecimiento normal.",
  "p3.t": "Sin biomarcadores objetivos",
  "p3.d": "Sin monitoreo continuo, el tratamiento se vuelve ensayo y error.",
  "platform.title": "Una plataforma, del sensor al conocimiento clínico",
  "platform.sub":
    "Tres partes conectadas convierten las señales cotidianas en biomarcadores digitales hormonales.",
  "c1.t": "Lunera Patch",
  "c1.d":
    "Un dispositivo portátil que monitoriza la temperatura de la piel, la variabilidad de la frecuencia cardíaca, el sueño y el metabolismo las 24 horas.",
  "c2.t": "Lunera App",
  "c2.d":
    "Reúne tus datos y tu diario, genera biomarcadores digitales y crea informes que puedes compartir con tu médico.",
  "c3.t": "Panel clínico",
  "c3.d":
    "Los médicos ven patrones hormonales, riesgo metabólico y evolución en una sola vista clara.",
  flow: "Patch → App → Panel clínico, de forma continua",
  "how.title": "Tan simple que se puede hacer cada día",
  "how.sub":
    "Sin introducir datos del dispositivo y con un registro de síntomas que lleva segundos.",
  "s1.t": "Colócate el Patch",
  "s1.d":
    "Colócalo en la parte superior del pecho, debajo del busto o en la parte alta de la espalda. Se sincroniza con la app automáticamente.",
  "s2.t": "Registra cómo te sientes",
  "s2.d": "Toca una intensidad para cada síntoma. Pruébalo:",
  "demo.label": "Sofocos",
  "level.none": "Ninguno",
  "level.mild": "Leve",
  "level.moderate": "Moderado",
  "level.severe": "Intenso",
  "s3.t": "Descubre tus patrones",
  "s3.d":
    "Temperatura, VFC, sueño y síntomas aparecen juntos, listos para comentar con tu médico.",
  "moon.title": "La era de los ciclos",
  "moon.text":
    "Lunera viene de Luna, la luna, y del sufijo –era: ciclo, continuidad, tiempo. Representa la ciencia aplicada a los ciclos de la mujer, de la biología al cuidado continuo a lo largo de la vida.",
  "footer.copy":
    "© 2026 Lunera Healthcare. Prototipo con fines de presentación.",
};

const FR: Dict = {
  "lang.label": "Langue",
  "nav.problem": "Le problème",
  "nav.platform": "La plateforme",
  "nav.how": "Comment ça marche",
  "cta.download": "Télécharger l’app",
  "cta.short": "Télécharger",
  "store.note":
    "À titre illustratif uniquement : l’app Lunera est un prototype et n’est pas encore disponible au téléchargement.",
  "hero.title": "Faire progresser la santé de précision des femmes",
  "hero.lead":
    "Lunera réunit un Patch portable, un journal quotidien de symptômes en une minute et un tableau de bord clinique, pour comprendre la périménopause grâce à des données continues plutôt qu’à des suppositions.",
  "hero.alt":
    "La boîte du Lunera Patch ouverte, avec trois patchs dans un plateau violet et le logo Lunera sur le couvercle",
  "problem.title": "La périménopause est encore diagnostiquée tardivement",
  "problem.sub":
    "On conseille souvent aux femmes d’attendre. Les médecins s’appuient sur des symptômes rapportés et des examens isolés, sans suivi continu sur lequel raisonner.",
  "problem.alt": "Une femme portant un Lunera Patch en haut du bras",
  "p1.t": "Diagnostic tardif",
  "p1.d":
    "La périménopause est sous-diagnostiquée et mal comprise, si bien que la prise en charge commence plus tard qu’elle ne le devrait.",
  "p2.t": "Symptômes mal interprétés",
  "p2.d":
    "Brouillard mental, fatigue et changements d’humeur sont souvent confondus avec de l’anxiété ou un vieillissement normal.",
  "p3.t": "Aucun biomarqueur objectif",
  "p3.d": "Sans suivi continu, le traitement relève de l’essai-erreur.",
  "platform.title": "Une plateforme, du capteur à l’analyse clinique",
  "platform.sub":
    "Trois éléments connectés transforment les signaux du quotidien en biomarqueurs numériques hormonaux.",
  "c1.t": "Lunera Patch",
  "c1.d":
    "Un dispositif portable qui surveille en continu la température cutanée, la variabilité de la fréquence cardiaque, le sommeil et le métabolisme.",
  "c2.t": "Lunera App",
  "c2.d":
    "Rassemble vos données et votre journal, génère des biomarqueurs numériques et prépare des rapports à partager avec votre médecin.",
  "c3.t": "Tableau de bord clinique",
  "c3.d":
    "Les médecins voient les profils hormonaux, le risque métabolique et la progression dans une vue claire.",
  flow: "Patch → App → Tableau de bord clinique, en continu",
  "how.title": "Assez simple pour s’y tenir chaque jour",
  "how.sub":
    "Aucune saisie manuelle pour l’appareil, et un journal de symptômes qui prend quelques secondes.",
  "s1.t": "Portez le Patch",
  "s1.d":
    "Placez-le sur le haut de la poitrine, sous le sein ou en haut du dos. Il se synchronise seul avec l’app.",
  "s2.t": "Notez comment vous vous sentez",
  "s2.d": "Touchez une intensité pour chaque symptôme. Essayez :",
  "demo.label": "Bouffées de chaleur",
  "level.none": "Aucun",
  "level.mild": "Léger",
  "level.moderate": "Modéré",
  "level.severe": "Sévère",
  "s3.t": "Découvrez vos tendances",
  "s3.d":
    "Température, VFC, sommeil et symptômes s’affichent côte à côte, prêts à être discutés avec votre médecin.",
  "moon.title": "L’ère des cycles",
  "moon.text":
    "Lunera vient de Luna, la lune, et du suffixe –era : cycle, continuité, temps. Le nom évoque la science appliquée aux cycles des femmes, de la biologie à un suivi continu tout au long de la vie.",
  "footer.copy":
    "© 2026 Lunera Healthcare. Prototype à des fins de présentation.",
};

const DE: Dict = {
  "lang.label": "Sprache",
  "nav.problem": "Das Problem",
  "nav.platform": "Die Plattform",
  "nav.how": "So funktioniert es",
  "cta.download": "App herunterladen",
  "cta.short": "App laden",
  "store.note":
    "Nur zur Veranschaulichung: Die Lunera-App ist ein Prototyp und noch nicht zum Download verfügbar.",
  "hero.title": "Präzisionsmedizin für die Gesundheit der Frau",
  "hero.lead":
    "Lunera verbindet ein tragbares Patch, ein tägliches Symptomtagebuch in einer Minute und ein klinisches Dashboard, damit die Perimenopause anhand kontinuierlicher Daten statt durch Vermutungen verstanden wird.",
  "hero.alt":
    "Die geöffnete Box des Lunera Patch mit drei Patches in einer violetten Schale und dem Lunera-Logo im Deckel",
  "problem.title": "Die Perimenopause wird noch immer spät erkannt",
  "problem.sub":
    "Frauen wird oft geraten abzuwarten. Ärztinnen und Ärzte stützen sich auf berichtete Symptome und Einzelmessungen, eine kontinuierliche Datengrundlage fehlt.",
  "problem.alt": "Eine Frau mit einem Lunera Patch am Oberarm",
  "p1.t": "Späte Diagnose",
  "p1.d":
    "Die Perimenopause wird zu selten erkannt und ist wenig verstanden, sodass die Versorgung später beginnt als nötig.",
  "p2.t": "Fehlgedeutete Symptome",
  "p2.d":
    "Gehirnnebel, Erschöpfung und Stimmungsschwankungen werden oft mit Angst oder normalem Altern verwechselt.",
  "p3.t": "Keine objektiven Biomarker",
  "p3.d":
    "Ohne kontinuierliche Überwachung bleibt die Behandlung Versuch und Irrtum.",
  "platform.title": "Eine Plattform, vom Sensor bis zur klinischen Erkenntnis",
  "platform.sub":
    "Drei verbundene Bausteine machen aus Alltagssignalen hormonelle digitale Biomarker.",
  "c1.t": "Lunera Patch",
  "c1.d":
    "Ein tragbares Gerät, das Hauttemperatur, Herzfrequenzvariabilität, Schlaf und Stoffwechsel rund um die Uhr erfasst.",
  "c2.t": "Lunera App",
  "c2.d":
    "Sammelt Ihre Daten und Ihr Tagebuch, erzeugt digitale Biomarker und erstellt Berichte, die Sie mit Ihrer Ärztin oder Ihrem Arzt teilen können.",
  "c3.t": "Klinisches Dashboard",
  "c3.d":
    "Ärztinnen und Ärzte sehen hormonelle Muster, Stoffwechselrisiko und Verlauf in einer klaren Ansicht.",
  flow: "Patch → App → Klinisches Dashboard, kontinuierlich",
  "how.title": "Einfach genug für jeden Tag",
  "how.sub":
    "Keine manuelle Dateneingabe für das Gerät und ein Symptomtagebuch, das nur Sekunden dauert.",
  "s1.t": "Patch anbringen",
  "s1.d":
    "Bringen Sie es am oberen Brustkorb, unterhalb der Brust oder am oberen Rücken an. Es synchronisiert sich automatisch mit der App.",
  "s2.t": "Wie Sie sich fühlen",
  "s2.d":
    "Tippen Sie für jedes Symptom auf eine Intensität. Probieren Sie es aus:",
  "demo.label": "Hitzewallungen",
  "level.none": "Keine",
  "level.mild": "Leicht",
  "level.moderate": "Mittel",
  "level.severe": "Stark",
  "s3.t": "Muster erkennen",
  "s3.d":
    "Temperatur, HRV, Schlaf und Symptome erscheinen nebeneinander, bereit für das Gespräch mit Ihrem Arzt.",
  "moon.title": "Die Ära der Zyklen",
  "moon.text":
    "Lunera leitet sich von Luna, dem Mond, und der Endung –era ab: Zyklus, Kontinuität, Zeit. Der Name steht für Wissenschaft im Dienst der weiblichen Zyklen, von der Biologie bis zur kontinuierlichen Begleitung im Leben.",
  "footer.copy": "© 2026 Lunera Healthcare. Prototyp zu Präsentationszwecken.",
};

export const dictionary: Record<Lang, Dict> = { EN, PT, ES, FR, DE };

// Textos da versão 2 (tema, telas do app, dados da pesquisa). Sobrescrevem chaves antigas quando repetidas.
const extra: Record<Lang, Dict> = {
  EN: {
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
    "hero.link": "See how it works",
    "s2.d":
      "Every morning and every evening, tap the glowing areas of the body. Try an intensity:",
    "tile3.t": "Your journey, ready for your doctor",
    "tile3.d":
      "See your patterns over 21 days and share a clear report. Physicians see hormonal patterns, metabolic risk and progression in one view.",
    "voice.title": "Built around what women told us",
    "voice.sub": "Lunera started with a survey of 42 women aged 40 and over.",
    "voice.a.t": "want a summary to take to the appointment",
    "voice.b.t": "want notifications only if they set them up",
    "voice.c.t":
      "would share records only with a health professional they choose",
    "voice.note": "Source: Lunera survey, women aged 40 and over.",
    "alt.today": "The Today screen of the Lunera app",
    "alt.checkin": "The Check-in screen with a female body and glowing areas",
    "alt.journey": "The Journey screen with a 21-day progress ring",
  },
  PT: {
    "theme.toLight": "Mudar para o modo claro",
    "theme.toDark": "Mudar para o modo escuro",
    "hero.link": "Veja como funciona",
    "s2.d":
      "Toda manhã e toda noite, toque nas áreas do corpo que brilham. Experimente uma intensidade:",
    "tile3.t": "Sua jornada, pronta para o seu médico",
    "tile3.d":
      "Veja seus padrões ao longo de 21 dias e compartilhe um relatório claro. Médicos veem padrões hormonais, risco metabólico e progressão em uma única visão.",
    "voice.title": "Feito a partir do que as mulheres nos contaram",
    "voice.sub":
      "A Lunera começou com uma pesquisa com 42 mulheres de 40 anos ou mais.",
    "voice.a.t": "querem um resumo para levar à consulta",
    "voice.b.t": "querem notificações apenas se elas mesmas configurarem",
    "voice.c.t":
      "compartilhariam os registros só com um profissional de saúde escolhido por elas",
    "voice.note": "Fonte: pesquisa da Lunera, mulheres de 40 anos ou mais.",
    "alt.today": "A tela Hoje do app Lunera",
    "alt.checkin":
      "A tela de registro com um corpo feminino e áreas que brilham",
    "alt.journey": "A tela Jornada com o anel de progresso de 21 dias",
  },
  ES: {
    "theme.toLight": "Cambiar a modo claro",
    "theme.toDark": "Cambiar a modo oscuro",
    "hero.link": "Descubre cómo funciona",
    "s2.d":
      "Cada mañana y cada noche, toca las zonas del cuerpo que brillan. Prueba una intensidad:",
    "tile3.t": "Tu recorrido, listo para tu médico",
    "tile3.d":
      "Mira tus patrones a lo largo de 21 días y comparte un informe claro. Los médicos ven patrones hormonales, riesgo metabólico y evolución en una sola vista.",
    "voice.title": "Construido a partir de lo que nos contaron las mujeres",
    "voice.sub":
      "Lunera comenzó con una encuesta a 42 mujeres de 40 años o más.",
    "voice.a.t": "quieren un resumen para llevar a la consulta",
    "voice.b.t": "quieren notificaciones solo si las configuran ellas",
    "voice.c.t":
      "compartirían sus registros solo con un profesional de la salud que elijan",
    "voice.note": "Fuente: encuesta de Lunera, mujeres de 40 años o más.",
    "alt.today": "La pantalla Hoy de la app Lunera",
    "alt.checkin":
      "La pantalla de registro con un cuerpo femenino y zonas que brillan",
    "alt.journey": "La pantalla Recorrido con el anillo de progreso de 21 días",
  },
  FR: {
    "theme.toLight": "Passer en mode clair",
    "theme.toDark": "Passer en mode sombre",
    "hero.link": "Voir comment ça marche",
    "s2.d":
      "Chaque matin et chaque soir, touchez les zones du corps qui brillent. Essayez une intensité :",
    "tile3.t": "Votre parcours, prêt pour votre médecin",
    "tile3.d":
      "Suivez vos tendances sur 21 jours et partagez un rapport clair. Les médecins voient les profils hormonaux, le risque métabolique et la progression dans une seule vue.",
    "voice.title": "Conçu à partir de ce que les femmes nous ont dit",
    "voice.sub":
      "Lunera est née d’une enquête auprès de 42 femmes de 40 ans et plus.",
    "voice.a.t": "veulent un résumé à emporter en consultation",
    "voice.b.t": "veulent des notifications seulement si elles les configurent",
    "voice.c.t":
      "ne partageraient leurs données qu’avec un professionnel de santé de leur choix",
    "voice.note": "Source : enquête Lunera, femmes de 40 ans et plus.",
    "alt.today": "L’écran Aujourd’hui de l’app Lunera",
    "alt.checkin":
      "L’écran de bilan avec un corps féminin et des zones lumineuses",
    "alt.journey": "L’écran Parcours avec l’anneau de progression sur 21 jours",
  },
  DE: {
    "theme.toLight": "Zum hellen Modus wechseln",
    "theme.toDark": "Zum dunklen Modus wechseln",
    "hero.link": "So funktioniert es",
    "s2.d":
      "Tippen Sie jeden Morgen und jeden Abend auf die leuchtenden Körperbereiche. Probieren Sie eine Intensität:",
    "tile3.t": "Ihr Verlauf, bereit für Ihren Arzt",
    "tile3.d":
      "Sehen Sie Ihre Muster über 21 Tage und teilen Sie einen klaren Bericht. Ärztinnen und Ärzte sehen hormonelle Muster, Stoffwechselrisiko und Verlauf in einer Ansicht.",
    "voice.title": "Entstanden aus dem, was Frauen uns erzählt haben",
    "voice.sub":
      "Lunera begann mit einer Umfrage unter 42 Frauen ab 40 Jahren.",
    "voice.a.t": "wünschen sich eine Zusammenfassung für den Arzttermin",
    "voice.b.t":
      "möchten Benachrichtigungen nur, wenn sie sie selbst einrichten",
    "voice.c.t":
      "würden ihre Aufzeichnungen nur mit einer von ihnen gewählten Fachperson teilen",
    "voice.note": "Quelle: Lunera-Umfrage, Frauen ab 40 Jahren.",
    "alt.today": "Der Heute-Bildschirm der Lunera-App",
    "alt.checkin":
      "Der Check-in-Bildschirm mit weiblichem Körper und leuchtenden Bereichen",
    "alt.journey": "Der Verlauf-Bildschirm mit dem 21-Tage-Fortschrittsring",
  },
};
(Object.keys(dictionary) as Lang[]).forEach((k) =>
  Object.assign(dictionary[k], extra[k]),
);

// Escala de 5 níveis da planilha da Ana (leve, moderado, forte, muito forte).
const levelExtra: Record<Lang, Dict> = {
  EN: {
    "level.strong": "Strong",
    "level.veryStrong": "Very strong",
  },
  PT: {
    "level.strong": "Forte",
    "level.veryStrong": "Muito forte",
  },
  ES: {
    "level.strong": "Fuerte",
    "level.veryStrong": "Muy fuerte",
  },
  FR: {
    "level.strong": "Fort",
    "level.veryStrong": "Très fort",
  },
  DE: {
    "level.strong": "Stark",
    "level.veryStrong": "Sehr stark",
  },
};
(Object.keys(dictionary) as Lang[]).forEach((k) =>
  Object.assign(dictionary[k], levelExtra[k]),
);

// Tom acolhedor (v2): novas seções e ajustes de texto. Em vez de "hormonal", usa "estados fisiológicos" (pedido da Ana).
const careExtra: Record<Lang, Dict> = {
  EN: {
    "nav.care": "Care",
    "hero.lead":
      "Lunera brings a wearable Patch, a one-minute daily log and a clinical dashboard together, so what you feel is heard and understood alongside continuous data. You don’t have to go through this alone.",
    "platform.sub":
      "Three connected parts turn everyday signals into digital biomarkers of physiological states.",
    "c1.d":
      "A wearable that senses sleep (through movement), heart rate, skin conductance and skin temperature, the signals used to look at hot flashes.",
    "c2.d":
      "Collects your daily log, syncs with your Patch, compares the two and builds a report you can review before sharing with your doctor.",
    "c3.d":
      "Physicians see physiological patterns, metabolic risk and progression in one clear view.",
    "tile3.d":
      "See how your records and your Patch signals line up over 21 days, and share a clear report. Physicians see physiological patterns, metabolic risk and progression in one view.",
    "s3.d":
      "Your Patch signals and your symptoms appear side by side, ready to talk through with your clinician.",
    "care.title": "Care that starts with listening",
    "care.sub":
      "Information that empowers, in a calm space that adapts to you.",
    "care1.t": "Made around you",
    "care1.d":
      "Your name, your look and your pace. You set up the Lunera App so it feels like yours.",
    "care2.t": "One day at a time",
    "care2.d":
      "About a minute, at the moment that suits you, with gentle reminders and messages that never blame.",
    "care3.t": "Your Patch, next to your diary",
    "care3.d":
      "One tap to sync. Sleep, heart rate, skin conductance and skin temperature appear beside what you recorded.",
    "care4.t": "Ready for your appointment",
    "care4.d":
      "Organize priorities and questions, review the report and choose what is included before anything is shared.",
  },
  PT: {
    "nav.care": "Cuidado",
    "hero.lead":
      "A Lunera une um Patch vestível, um diário de um minuto e um painel clínico, para que o que você sente seja escutado e compreendido junto com dados contínuos. Você não precisa passar por isso sozinha.",
    "platform.sub":
      "Três partes conectadas transformam sinais do dia a dia em biomarcadores digitais de estados fisiológicos.",
    "c1.d":
      "Um dispositivo vestível que percebe o sono (pelo movimento), o batimento cardíaco, a condutância e a temperatura da pele, sinais usados para observar os fogachos.",
    "c2.d":
      "Reúne seu diário, sincroniza com o Patch, compara os dois e monta um relatório que você revisa antes de compartilhar com seu médico.",
    "c3.d":
      "Médicos veem padrões fisiológicos, risco metabólico e progressão em uma única visão clara.",
    "tile3.d":
      "Veja como seus registros e os sinais do Patch se alinham ao longo de 21 dias e compartilhe um relatório claro. Médicos veem padrões fisiológicos, risco metabólico e progressão em uma única visão.",
    "s3.d":
      "Os sinais do Patch e seus sintomas aparecem lado a lado, prontos para conversar com seu médico.",
    "care.title": "Um cuidado que começa por escutar",
    "care.sub":
      "Informação que fortalece, em um espaço tranquilo que se adapta a você.",
    "care1.t": "Feito com o seu jeito",
    "care1.d":
      "Seu nome, seu visual e o seu ritmo. Você configura o Lunera App para que ele tenha a sua cara.",
    "care2.t": "Um dia de cada vez",
    "care2.d":
      "Cerca de um minuto, no momento que combina com você, com lembretes gentis e mensagens que nunca culpam.",
    "care3.t": "Seu Patch, ao lado do seu diário",
    "care3.d":
      "Um toque para sincronizar. Sono, batimento cardíaco, condutância e temperatura da pele aparecem ao lado do que você registrou.",
    "care4.t": "Pronta para a consulta",
    "care4.d":
      "Organize prioridades e perguntas, revise o relatório e escolha o que entra antes de qualquer compartilhamento.",
  },
  ES: {
    "nav.care": "Cuidado",
    "hero.lead":
      "Lunera une un Patch vestible, un diario de un minuto y un panel clínico, para que lo que sientes sea escuchado y comprendido junto con datos continuos. No tienes que pasar por esto sola.",
    "platform.sub":
      "Tres partes conectadas convierten las señales cotidianas en biomarcadores digitales de estados fisiológicos.",
    "c1.d":
      "Un dispositivo vestible que percibe el sueño (por el movimiento), el latido cardíaco, la conductancia y la temperatura de la piel, señales usadas para observar los sofocos.",
    "c2.d":
      "Reúne tu diario, se sincroniza con el Patch, compara ambos y arma un informe que revisas antes de compartirlo con tu médico.",
    "c3.d":
      "Los médicos ven patrones fisiológicos, riesgo metabólico y evolución en una sola vista clara.",
    "tile3.d":
      "Mira cómo se alinean tus registros y las señales del Patch a lo largo de 21 días y comparte un informe claro. Los médicos ven patrones fisiológicos, riesgo metabólico y evolución en una sola vista.",
    "s3.d":
      "Las señales del Patch y tus síntomas aparecen lado a lado, listos para conversar con tu médico.",
    "care.title": "Un cuidado que empieza por escuchar",
    "care.sub":
      "Información que empodera, en un espacio tranquilo que se adapta a ti.",
    "care1.t": "Hecho a tu manera",
    "care1.d":
      "Tu nombre, tu estilo y tu ritmo. Configuras Lunera App para que se sienta tuya.",
    "care2.t": "Un día a la vez",
    "care2.d":
      "Cerca de un minuto, en el momento que te convenga, con recordatorios amables y mensajes que nunca culpan.",
    "care3.t": "Tu Patch, junto a tu diario",
    "care3.d":
      "Un toque para sincronizar. Sueño, latido cardíaco, conductancia y temperatura de la piel aparecen junto a lo que registraste.",
    "care4.t": "Lista para tu consulta",
    "care4.d":
      "Organiza prioridades y preguntas, revisa el informe y elige qué incluye antes de compartir nada.",
  },
  FR: {
    "nav.care": "Soin",
    "hero.lead":
      "Lunera réunit un Patch connecté, un journal d’une minute et un tableau de bord clinique, pour que ce que vous ressentez soit entendu et compris avec des données continues. Vous n’avez pas à traverser cela seule.",
    "platform.sub":
      "Trois éléments connectés transforment les signaux du quotidien en biomarqueurs numériques d’états physiologiques.",
    "c1.d":
      "Un dispositif connecté qui mesure le sommeil (par le mouvement), le rythme cardiaque, la conductance et la température cutanées, des signaux utilisés pour observer les bouffées de chaleur.",
    "c2.d":
      "Réunit votre journal, se synchronise avec le Patch, compare les deux et prépare un rapport que vous relisez avant de le partager avec votre médecin.",
    "c3.d":
      "Les médecins voient les profils physiologiques, le risque métabolique et la progression dans une vue claire.",
    "tile3.d":
      "Voyez comment vos notes et les signaux du Patch s’alignent sur 21 jours et partagez un rapport clair. Les médecins voient les profils physiologiques, le risque métabolique et la progression dans une seule vue.",
    "s3.d":
      "Les signaux du Patch et vos symptômes apparaissent côte à côte, prêts à être discutés avec votre médecin.",
    "care.title": "Un soin qui commence par l’écoute",
    "care.sub":
      "Une information qui renforce, dans un espace calme qui s’adapte à vous.",
    "care1.t": "Fait à votre image",
    "care1.d":
      "Votre prénom, votre style et votre rythme. Vous configurez Lunera App pour qu’elle vous ressemble.",
    "care2.t": "Un jour à la fois",
    "care2.d":
      "Environ une minute, au moment qui vous convient, avec des rappels doux et des messages qui ne culpabilisent jamais.",
    "care3.t": "Votre Patch, à côté de votre journal",
    "care3.d":
      "Un geste pour synchroniser. Sommeil, rythme cardiaque, conductance et température cutanées apparaissent à côté de vos notes.",
    "care4.t": "Prête pour la consultation",
    "care4.d":
      "Organisez priorités et questions, relisez le rapport et choisissez ce qu’il contient avant tout partage.",
  },
  DE: {
    "nav.care": "Fürsorge",
    "hero.lead":
      "Lunera verbindet einen tragbaren Patch, ein Ein-Minuten-Tagebuch und ein klinisches Dashboard, damit das, was Sie fühlen, gehört und gemeinsam mit kontinuierlichen Daten verstanden wird. Sie müssen das nicht allein durchstehen.",
    "platform.sub":
      "Drei verbundene Bausteine machen aus Alltagssignalen digitale Biomarker physiologischer Zustände.",
    "c1.d":
      "Ein tragbares Gerät, das Schlaf (über Bewegung), Herzschlag, Hautleitfähigkeit und Hauttemperatur erfasst, Signale zur Beobachtung von Hitzewallungen.",
    "c2.d":
      "Sammelt Ihr Tagebuch, synchronisiert mit dem Patch, vergleicht beides und erstellt einen Bericht, den Sie prüfen, bevor Sie ihn mit Ihrer Ärztin oder Ihrem Arzt teilen.",
    "c3.d":
      "Ärztinnen und Ärzte sehen physiologische Muster, Stoffwechselrisiko und Verlauf in einer klaren Ansicht.",
    "tile3.d":
      "Sehen Sie, wie Ihre Einträge und die Patch-Signale über 21 Tage zusammenpassen, und teilen Sie einen klaren Bericht. Ärztinnen und Ärzte sehen physiologische Muster, Stoffwechselrisiko und Verlauf in einer Ansicht.",
    "s3.d":
      "Die Patch-Signale und Ihre Symptome erscheinen nebeneinander, bereit für das Gespräch mit Ihrer Ärztin oder Ihrem Arzt.",
    "care.title": "Fürsorge, die mit Zuhören beginnt",
    "care.sub":
      "Information, die stärkt, in einem ruhigen Raum, der sich Ihnen anpasst.",
    "care1.t": "Ganz nach Ihnen",
    "care1.d":
      "Ihr Name, Ihr Aussehen, Ihr Tempo. Sie richten die Lunera App so ein, dass sie sich nach Ihnen anfühlt.",
    "care2.t": "Ein Tag nach dem anderen",
    "care2.d":
      "Etwa eine Minute, zu der Zeit, die Ihnen passt, mit sanften Erinnerungen und Nachrichten, die nie Schuld zuweisen.",
    "care3.t": "Ihr Patch neben Ihrem Tagebuch",
    "care3.d":
      "Ein Tipp zum Synchronisieren. Schlaf, Herzschlag, Hautleitfähigkeit und Hauttemperatur erscheinen neben Ihren Einträgen.",
    "care4.t": "Bereit für Ihren Termin",
    "care4.d":
      "Ordnen Sie Prioritäten und Fragen, prüfen Sie den Bericht und wählen Sie, was enthalten ist, bevor etwas geteilt wird.",
  },
};
(Object.keys(dictionary) as Lang[]).forEach((k) =>
  Object.assign(dictionary[k], careExtra[k]),
);

import { copy } from "./copy";
// Texto
(Object.keys(dictionary) as Lang[]).forEach((k) =>
  Object.assign(dictionary[k], copy[k]),
);

const PRUNE =
  /^(cta\.download|store\.note|hero\.alt\.old|tile3\.|alt\.|flow$|voice\.|care|nav\.(platform|how|care)|platform\.|moon\.old|c1\.d\.old|level\.severe)/;
(Object.keys(dictionary) as Lang[]).forEach((k) =>
  Object.keys(dictionary[k]).forEach((key) => {
    if (PRUNE.test(key) && !(key in copy[k])) delete dictionary[k][key];
  }),
);
