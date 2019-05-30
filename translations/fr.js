export default {
  presentationTitle: 'CSS 2019:<br/> 23 ans plus tard, la guerre continue...',
  base: {
    seo: {
      title: 'CSS 2019: 23 ans plus tard, la guerre continue... | Naomi Hauret | Web2Day 2019',
    },
  },
  whoAmI: {
    role: "Front-end ~ %experience% ans 👌",
    talk: "On va parler CSS ✨ "
  },
  introduction: {
    title: 'CSS 2019: 23 ans plus tard, la guerre continue...',
    storytime: "Petit retour en arrière...",
    onceUponATime: "Il y a %number% ans...",
    birthOnTheBattleField: "<small>17 décembre 1996</small> <br /> alors que la guerre des navigateurs fait rage, une naissance a lieu au milieu du champ de bataille...",
    hope: "L'espoir...",
    slowly: "...qui au fil des ans...",
    turnsIntoDeception: "...mute en déception...",
    thenIntoWar: "...puis en une nouvelle guerre.",
  },
  stylingWar: {
    oneDaySomeGuySaid: "Parce qu'un jour, quelqu'un a dit...",
    anotherGuyCreated: "Un autre quelqu'un a créé",
    tools: "Les outils",
    preprocessors: "Les pré-processeurs",
    postprocessors: "Les post-processeurs",
    uiKit: "Les UI Kit",
    microFrameworks: "Les micro frameworks",
    atomicCssApproach: "L'approche atomique",
    generators: "Les générateurs",
    rulesAndConventions: "Les conventions d'écriture et d'architecture",
    cssModules: "Les CSS Modules",
    cssInJs: "Le CSS-in-JS",
    preprocessorsBecause : "CSS ça manque quand même de fonctionnalités",
    postprocessorsBecause : "J'ai envie d'utiliser les dernières fonctionnalités maaaaais tout en pouvant faire des choses en plus...",
    uiKitBecause : "Créer toute une UI cohérente c'est long et compliqué.",
    microFrameworksBecause : "Les UI Kits c'est quand même trop lourd, j'ai pas besoin de tout ça ",
    rulesAndConventionsBecause : "Quand on écrit du CSS, on s'y perd !",
    generatorsBecause: "Les thèmes et les variations d'éléments, c'est long à écrire !",
    atomicBecause: "Trouver des noms de classes et les écrire, c'est long et lourd...",
    cssModulesBecause: "J'en ai marre, je modifie cet élément ici, ça pète une autre page...",
    cssInJsBecause: "... bah tout ce qu'on a dit juste avant en fait.",
  },
  peopleAgainstTools: {
    warIsntOver: "La guerre n'est pas terminée... elle est partout.",
  },
  stylingPeace: {
    makePeace: "Faire la paix.",
    askGoodQuestions: "Commencez par vous poser les bonnes questions",
    whatDoYouWant: "Qu'est ce que VOUS avez envie de faire ?",
    choiceMade: "Votre choix est fait ?",
    testRespectTriforce: "Une dernière vérification avec la Triforce du respect",
    respect: {
      me: 'Respecte moi en tant qu\'individu',
      team: 'Respecte mon équipe',
      client: 'Respecte le client',
    },
    questions: {
      projectType: 'Type de projet ?',
      projectSize: 'Taille du projet ?',
      projectTeam: 'Équipe (combien de personnes, quelle est maîtrise du style?)',
      sharedStyles: 'le style va t-il etre partagé ? (éléments et/ou charte graphique communes entre plusieurs sites, applications mobiles, slides...)',
      theming: 'Y-a t-il des thèmes, des variations visuelles des éléments graphiques ?',
      isStyleImportant: "Le style est-il important ?",
      roadmap: 'La roadmap prévoit-elle des évolutions graphiques ou de nouveaux éléments ?',
      statefulComponent: 'certains éléments ont-il un style différent selon leur état? (ex: panier vide vs panier 5 articles)',
      templatingLanguage: 'Dans quel langage sont écrits les templates ?',
      rendering: 'Comment sont rendues les pages ? Côté serveur ? Côté client ? en pre-rendering ?',
      browsers: 'Quels navigateurs dois-je supporter ?',
      doILikeIt: 'Suis-je confortable avec la syntaxe de l\'outil/de la méthodologie  ?'
    },
    workflow: {
      label: 'Workflow',
      steroidWorkflow: 'Adoptez des outils qui vont améliorer la qualité de votre CSS en production: PurgeCSS, Browserslist, CSSNano, brotli...',
      useDesignTokens: 'Renseignez vos design tokens et servez-vous en comme source unique de vérité pour votre style',
      useStyleguide: 'Maintenez un styleguide et mettez-le en ligne (Storybook, Docz, Fractal, Styleguidist...)',
      goMobileFirst: 'Adoptez une démarche mobile-first',
      goProgressive: 'Adoptez une démarche d\'amélioration progressive',
    }
  },
  myExperience: {
    title: 'La guerre ? Finie pour moi.',
    designTokens: 'Je renseigne mes design tokens depuis les maquettes',
    designTokensTailwind: 'Ces design tokens vont nourrir la config Tailwind',
    baseCSS: 'Je crée mon architecture de bootstrap de projet (normalize, définition règles typographiques...)',
    styleguide: 'Je crée mes composants',
    withAtomic: 'J\'utilise le style atomique le plus souvent possible.',
    withModules: 'Si besoin (pseudo éléments, sélecteurs plus complexe), je crée un fichier de style local.',
    withCssInJs: 'Si le style du composant dépend de son état, j\'utilise du CSS in JS.',
    theming: 'Pour le theming, j\'utilise une association clé-valeur.',
    prod: 'En production, les classes non utilisées sont nettoyées par PurgeCSS. Les fichiers sont préfixés, minifiés et compressé (brotli).',
  },

  conclusion: {
    peace: 'Faites la paix.',

  }
}