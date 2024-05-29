export const navbarItems = [
  {
    title: "Accueil",
    link: "/",
  },
  {
    title: "Mon profil",
    link: "/profil",
  },
  {
    title: "Mes projets",
    link: "/projets",
  },
]

export const currentItems = [
  {
    image: "floax-logo.svg",
    link: "/experience",
    title: "Stage développement web",
    place: "Floax, 44100 Vertou",
    date: "Depuis avril 2023",
  },
  {
    image: "mds-logo.svg",
    link: "/etudes",
    title: "Bachelor Cycle Web et Multimédia ",
    place: "MyDigitalSchool, 44800 Saint Herblain",
    date: "Depuis septembre 2022",
  },
]

export const timelineItems = [
  {
    img: "floax-logo.svg",
    title: "Stage développement web",
    school: "Studio Floax",
    city: "Vertou",
    date: "2023-2024",
    skills: ["Vue.js", "Sass", "Strapi", "GraphQL", "Angular"],
  },

  {
    img: "mds-logo.svg",
    title: "Bachelor Cycle Web et Multimédia",
    school: "MyDigitalSchool",
    city: "Nantes",
    date: "2022-2027",
    skills: [
      "Développement web",
      "Gestion de projets",
      "Webdesign",
      "Design Graphique",
      "Marketing Digital",
      "Communication digitale",
      "Motion Design",
      "Photo/Vidéo",
    ],
  },
  {
    img: "chirec-delta-logo.svg",
    title: "Stage maternité",
    school: "Groupe CHIREC, Hôpital Delta",
    city: "Bruxelles",
    date: "2021",
    skills: [
      "Soins post-partum",
      "Conseils allaitement",
      "Accompagnement soin bébés",
      "Gestion dossiers patients",
      "Distribution repas",
    ],
  },
  {
    img: "HEFF-logo.svg",
    title: "Bachelier Sage Femme",
    school: "Haute École Francisco Ferrer",
    city: "Bruxelles",
    date: "2019-2021",
    skills: [
      "Physiologie de la grossesse",
      "Puériculture",
      "Premiers secours",
      "Hygiène et Prophylaxie",
      "Soins infirmiers",
    ],
  },
  {
    img: "fac-lille-logo.svg",
    title: "PACES",
    school: "Faculté de médecine Henri Warembourg",
    city: "Lille",
    date: "2018-2019",
    skills: [
      "Anatomie",
      "Sciences humaines et sociales",
      "Biologie cellulaire",
      "Histologie-Embryologie",
      "Chimie/Biochimie",
      "Biostatistiques",
    ],
  },
  {
    img: "ste-claire-logo.svg",
    title: "Bac Général Scientifique",
    school: "Institution Sainte-Claire",
    city: "Lille",
    date: "2014-2018",
    skills: ["Spécialité SVT", "Anglais LV1", "Allemand LV2", "Italien LV3"],
  },
  {
    img: "trace-logo.svg",
    title: "Stage architecture",
    school: "Trace architectes",
    city: "Hem",
    date: "2014-2018",
    skills: ["Réalisation de plan", "Visite de chantier", "Création de maquette de bâtiments"],
  },
]

export const worksItems = [
  //EQUINOX // OK
  {
    id: "0",
    path: "equinox",
    category: ["DEVELOPPEMENT", "DESIGN GRAPHIQUE", "MARKETING"],
    title: "Equinox",
    description: "Création d'un jeu vidéo lors d'une Game Jam",
    image: "equinox/equinox.jpg",
    softwares: ["godot.svg", "aseprite.svg"],
    banner: "equinox/equinox-banner.jpg",
    hashtag: "#GameJam #PitchDeck",
    big_description:
      "Cette année Atlangames nous proposaient une Game Jam sur le thème “𝗳𝗿𝗼𝗻𝘁𝗶𝗲̀𝗿𝗲𝘀”. Le but ? Créer un jeu vidéo et en faire sa promotion en 4 jours, le tout en concurrence avec 17 autres écoles. De cette Game Jam est né “𝗘𝗾𝘂𝗶𝗻𝗼𝘅”, notre jeu de plateforme 2D. Il met en scène 𝗡𝗼𝘅, un petit chat décédé qui essaie de récupérer ses 8 vies restantes en traversant la frontière entre paradis et enfer. Avec ce jeu, nous remportons pour MyDigitalSchool Nantes, l’𝗔𝘄𝗮𝗿𝗱 𝗱𝗲 𝗹𝗮 𝗠𝗲𝗶𝗹𝗹𝗲𝘂𝗿𝗲 𝗗𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗔𝗿𝘁𝗶𝘀𝘁𝗶𝗾𝘂𝗲 ! À vous de jouer désormais ! 🎮",
    first_image: "",
    second_image: "equinox/equinox-2.jpg",
    details: {
      softwares: ["godot.svg", "aseprite.svg"],
      role: ["Pitch Deck Manager", "Game Design"],
      team: ["Erwan Duchêne", "Erwann Michaud de Perier", "Matilin Noël"],
      teamLink: [
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/matilin-noel/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://margouillat.itch.io/equinox",
        title: "Tester le jeu",
        color: "verdigris",
      },
    ],
    date: 8,
  },
  // MAPEACH // OK
  {
    id: "1",
    path: "mapeach",
    category: ["DEVELOPPEMENT", "WEBDESIGN", "MARKETING"],
    title: "MaPeach",
    description: "Application de rendez-vous pour couple",
    image: "mapeach/mapeach.jpg",
    softwares: ["figma.svg", "wordpress.svg"],
    banner: "mapeach/mapeach-banner.jpg",
    hashtag: "#Innovation #RendezVous",
    big_description:
      "Le sujet ? Proposer un produit ou service innovant. Voici, MaPeach, une application recensant des lieux de rendez-vous à destination des couples perdus dans la routine. Elle permet de vivre de nouvelles aventures ludiquement grâce à une roue vous proposant un choix de lieu. Elle vous mettra au défi pour gagner de superbes badges. Grâce à notre galerie, il sera possible de figer ces moments en de merveilleuses photos et pourquoi pas donner l'envie à d'autres couples de l'utiliser ! ",
    first_image: "",
    second_image: "mapeach/mapeach-2.jpg",
    details: {
      softwares: ["figma.svg", "wordpress.svg"],
      role: ["Maquettage", "Création Affiches", "Rédaction de contenus", "Gestion de projet"],
      team: ["Erwann Michaud de Perier", "Arthur Ploteau", "Louka Lemonnier", "Mathéo Lebéhot"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/arthur-ploteau-314110234/",
        "https://www.linkedin.com/in/louka-lemonnier/",
        "https://www.linkedin.com/in/matheolebehot/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://oriane-frouin.mds-nantes.yt/mapeach/",
        title: "Visiter le site",
        color: "verdigris",
      },
    ],
    date: 12,
  },
  // FLOAX // OK
  {
    id: "2",
    path: "studio-floax",
    category: ["DEVELOPPEMENT"],
    title: "Floax",
    description: "Site vitrine de Floax",
    image: "floax/floax.jpg",
    softwares: ["html.svg", "sass.svg", "vue.svg", "typescript.svg"],
    banner: "floax/floax-banner.jpg",
    hashtag: "#IntégrationWeb #FrontEnd ",
    big_description:
      "Floax est un site vitrine réalisé pour l'entreprise où j'ai effectué mon stage. J'ai pris en charge l'intégration et le développement front-end du site en compagnie d'autres collègues. Il met en valeur les services et compétences de l'entreprise.",
    first_image: "floax/floax-1.jpg",
    second_image: "floax/floax-2.jpg",
    details: {
      softwares: ["html.svg", "sass.svg", "vue.svg", "typescript.svg"],
      role: ["Intégration web", "Développement front"],
      team: ["Loïc Vanderschooten", "Clara Le Meur", "Vincent Ramaye", "Brice Le Gallo-Tastet"],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://floax.fr",
        title: "Visiter le site",
        color: "verdigris",
      },
    ],
    date: 2,
  },
  // PSS
  // {
  //   id: "3",
  //   path: "prepa-sup-sante",
  //   category: ["DEVELOPPEMENT"],
  //   title: "Prépa Sup Santé",
  //   description: "Coucou",
  //   image: "pss.jpg",
  //   softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
  //   banner: "plantopia-banner.jpg",
  //   hashtag: "#IntégrationWeb #Maquettage",
  //   big_description:
  //     "Plantopia est un site e-commerce de plantes et fleurs réalisé en duo dans le cadre du cours d’Intégration web. Il présente une page d'accueil, une page avec toutes les plantes et fleurs, une page détail du produit et une page panier",
  //   first_image: "pss.jpg",
  //   second_image: "pss.jpg",
  //   details: {
  //     softwares: ["html.svg", "sass.svg", "vue.svg"],
  //     role: ["Travail d’équipe", "Développement web"],
  //     team: [
  //       "Loïc Vanderschooten",
  //       "Adrien Vaucard",
  //       "Clara Le Meur",
  //       "Brice Le Gallo-Tastet",
  //       "Vincent Ramaye",
  //     ],
  //     school_year: "Bachelor Cycle Web et Multimédia - Année 2",
  //   },
  //   date: 3,
  // },
  // PLANTOPIA // OK
  {
    id: "4",
    path: "plantopia",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    title: "Plantopia",
    description: "Site e-commerce de plantes",
    image: "plantopia/plantopia.jpg",
    softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
    banner: "plantopia/plantopia-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé en duo dans le cadre du cours d’Intégration web. Il présente une page d'accueil, une page recensant toutes les plantes et fleurs, une page détail du produit et une page panier.",
    first_image: "plantopia/plantopia-1.jpg",
    second_image: "plantopia/plantopia-2.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Développement web", "Maquettage"],
      team: ["Erwann Michaud de Perier"],
      teamLink: ["https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/"],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 4,
  },
  // LE DÉDALE
  {
    id: "5",
    path: "le-dedale",
    title: "Le Dédale",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site boutique-café d'un client",
    image: "dedale/le-dedale.jpg",
    softwares: ["figma.svg", "wordpress.svg", "elementor.svg", ".svg"],
    banner: "dedale/dedale-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Le Dédale, boutique-café ludique à Rezé est notre client actuel pour notre projet Fil rouge de deuxième année de formation. Au vu de leur installation récente, nous leur avons proposé de créer leur site. Désormais, au-delà d'un simple site vitrine, il s'agit également de leur créer un espace boutique contenant tous leurs produits le tout d'un un univers steampunk !",
    first_image: "dedale/dedale-banner.jpg",
    second_image: "dedale/dedale-banner.jpg",
    details: {
      softwares: ["figma.svg", "wordpress.svg", "elementor.svg", "woo.svg"],
      role: ["Gestion de Projet", "Développement web", "Maquettage"],
      team: ["Erwan Duchêne", "Audrey Norvez", "Valentin Renaud"],
      teamLink: [
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
        "https://www.linkedin.com/in/audrey-norvez-a25673253/",
        "https://www.linkedin.com/in/valentin-renaud/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 9,
  },
  //LOTR
  {
    id: "6",
    path: "le-seigneur-des-anneaux",
    title: "Le Seigneur des Anneaux",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site de films",
    image: "LOTR.jpg",
    softwares: ["figma.svg", "wordpress.svg", "elementor.svg"],
    banner: "dedale-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Le Dédale, boutique-café ludique à Rezé est notre client actuel pour notre projet Fil rouge de deuxième année de formation. Au vu de leur installation récente, nous leur avons proposé de créer leur site. Désormais, au-delà d'un simple site vitrine, il s'agit également de leur créer un espace boutique contenant tous leurs produits le tout d'un un univers steampunk !",
    first_image: "plantopia-1.jpg",
    second_image: "plantopia-1.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Travail d’équipe", "Développement web", "Maquettage"],
      team: [""],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 10,
  },
  // PAUSE CONNECT
  {
    id: "7",
    path: "pause-connect",
    title: "Pause Connect",
    category: ["DEVELOPPEMENT", "WEBDESIGN"],
    description: "Site de sensibilisation addiction",
    image: "pause-connect/pause-connect.jpg",
    softwares: ["figma.svg", "html.svg", "css.svg", "vue.svg"],
    banner: "pause-connect/pause-connect-banner.jpg",
    hashtag: "#DéveloppementFront #Maquettage #Marketing",
    big_description:
      "Pause Connect est un projet de sensibilisation à l'addiction aux écrans, réalisé dans le cadre de partiels. Ce site propose des données chiffrées, des conseils pratiques, des défis pour réduire l'utilisation des écrans, ainsi qu'un quiz interactif pour évaluer la dépendance potentielle.",
    first_image: "pause-connect/pause-connect-2.jpg",
    second_image: "pause-connect/pause-connect-2.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "vue.svg"],
      role: ["Travail d’équipe", "Développement web", "Maquettage"],
      team: ["Erwann Michaud de Perier", "Erwan Duchêne"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/erwan-duch%C3%AAne/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    buttons: [
      {
        href: "https://develop--magenta-torrone-ae14a6.netlify.app",
        title: "Visiter le site",
        color: "verdigris",
      },
    ],
    date: 5,
  },
  //Ghibli
  {
    id: "8",
    title: "Ghibli",
    path: "ghibli",
    category: ["DEVELOPPEMENT"],
    description: "Site de films",
    image: "ghibli/ghibli.jpg",
    softwares: ["figma.svg", "html.svg", "css.svg", "vue.svg"],
    banner: "ghibli/ghibli-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web.",
    first_image: "ghibli/ghibli-1.jpg",
    second_image: "ghibli/ghibli-2.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Développement front", "Maquettage"],
      team: [""],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 6,
  },
  //NIKE X TAKASHI
  {
    id: "9",
    path: "nike-takashi",
    category: ["DESIGN GRAPHIQUE"],
    title: "Nike x Takashi",
    description: "Collab et affiches",
    image: "nike/nike-1.jpg",
    softwares: ["illustrator.svg", "photoshop.svg"],
    banner: "takashi-2.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web.",
    first_image: "nike/nike-1.jpg",
    second_image: "nike/nike-2.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Travail d’équipe", "Développement web", "Maquettage"],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 1,
  },
  // MAGDIEL
  {
    id: "10",
    path: "magdiel-lopez",
    title: "Magdiel Lopez",
    category: ["DESIGN GRAPHIQUE"],
    description: "Application de dates en couple",
    image: "magdiel-lopez.jpg",
    softwares: ["figma.svg", "html.svg", "css.svg", "vue.svg"],
    banner: "ghibli-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web.",
    first_image: "ghibli-1.jpg",
    second_image: "ghibli-2.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Développement front", "Maquettage"],
      team: [""],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 7,
  },
  //BUMBLE
  {
    id: "11",
    path: "bumble",
    category: ["MARKETING"],
    title: "Bumble",
    description: "Inspiration d'un artiste",
    image: "bumble/bumble.jpg",
    softwares: ["photoshop.svg"],
    banner: "bumble/bumble-banner.jpg",
    hashtag: "#IntégrationWeb #Maquettage",
    big_description:
      "Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web. Plantopia est un site e-commerce de plantes et fleurs réalisé dans le cadre du cours d’Intégration web.",
    first_image: "plantopia-1.jpg",
    second_image: "plantopia-1.jpg",
    details: {
      softwares: ["figma.svg", "html.svg", "css.svg", "js.svg"],
      role: ["Travail d’équipe", "Développement web", "Maquettage"],
      team: ["Erwann Michaud de Perier", "Arthur Ploteau", "Valentin Renaud"],
      teamLink: [
        "https://www.linkedin.com/in/erwann-michaud-de-perier-149282268/",
        "https://www.linkedin.com/in/arthur-ploteau-314110234/",
        "https://www.linkedin.com/in/valentin-renaud/",
      ],
      school_year: "Bachelor Cycle Web et Multimédia - Année 2",
    },
    date: 11,
  },
]

export const passionItems = [
  {
    image: "f1-passion.png",
    title: "Automobile",
    texts:
      "Je suis passionnée d’automobile en général mais la Formule 1 est ma plus grande passion. Depuis 2 ans, je suis également une grande fan d’endurance.",
    tags: ["Formule 1", "Endurance"],
    color: "color-f1",
  },
  {
    image: "movie-passion.png",
    title: "Films & Séries",
    texts:
      "J’apprécie fantasy et science-fiction, il est donc tout naturel d’être une grande fan du Seigneur des Anneaux et de Star Wars !",
    tags: ["Fantasy", "Science Fiction"],
    color: "color-movie",
  },
  {
    image: "jdr-passion.png",
    title: "Jeux de rôle",
    texts: "Depuis peu, je participe à des jeux de rôle avec des amis.",
    tags: ["Donjons & Dragons", "Vermine 2047"],
    color: "color-jdr",
  },
  {
    image: "f1-passion.png",
    title: "Mangas & animes",
    texts: "coucou",
    tags: ["One Piece", "Berserk", "Jojo's Bizarre Adventure"],
    color: "color-f1",
  },
]

export const persosItems = [
  {
    titleStart: "Informations",
    titleEnd: "personnelles",
    data: [
      {
        icon: "icon-cake",
        subtitle: "Âge",
        content: "24 ans",
      },
      {
        icon: "icon-location",
        subtitle: "Adresse",
        content: "44800, Saint-Herblain",
      },
      {
        icon: "icon-car",
        subtitle: "Transport",
        content: "Permis B + Voiture",
      },
    ],
  },
]

export const contactItems = [
  {
    titleStart: "Contact &",
    titleEnd: "réseaux",
    data: [
      {
        icon: "icon-mail-olive.svg",
        subtitle: "Email",
        content: "ori.frouin@gmail.com",
      },
      {
        icon: "icon-tel.svg",
        subtitle: "Téléphone",
        content: "07 70 35 45 69",
      },
    ],
  },
]

export const devItems = [
  {
    color: "#F9DAD2",
    image: "html.svg",
    title: "HTML",
  },
  {
    color: "#D2DAF9",
    image: "css.svg",
    title: "CSS",
  },
  {
    color: "#FDF8CE",
    image: "js.svg",
    title: "Javascript",
  },
  {
    color: "#D9F2E7",
    image: "vue.svg",
    title: "Vue.js",
  },
  {
    color: "#F7E2D4",
    image: "sql.svg",
    title: "SQL",
  },
  {
    color: "#F2D9E5",
    image: "sass.svg",
    title: "Sass",
  },
  {
    color: "#DCE3EF",
    image: "php.svg",
    title: "PHP",
  },
  {
    color: "#CFEAFC",
    image: "vscode.svg",
    title: "VS Code",
  },
  {
    color: "#FCD6CF",
    image: "git.svg",
    title: "Git",
  },
  {
    color: "#FFCCD8",
    image: "angular.svg",
    title: "Angular",
    inProgress: true,
  },
  {
    color: "#E1F8FE",
    image: "react.svg",
    title: "React",
    inProgress: true,
  },
  {
    color: "#D9E7F2",
    image: "godot.svg",
    title: "Godot",
    inProgress: true,
  },
  {
    color: "#E6E0FF",
    image: "strapi.svg",
    title: "Strapi",
    inProgress: true,
  },
  {
    color: "#E6E0FF",
    image: "tailwind.svg",
    title: "Tailwind",
    inProgress: true,
  },
  {
    color: "#E6E0FF",
    image: "typescript.svg",
    title: "Typescript",
    inProgress: true,
  },
]

export const designItems = [
  {
    color: "#FCD9CF",
    image: "figma.svg",
    title: "Figma",
  },
  {
    color: "#FFCCCC",
    image: "illustrator.svg",
    title: "Illustrator",
  },
  {
    color: "#CCCCFF",
    image: "after-effects.svg",
    title: "After Effects",
  },
  {
    color: "#CCE8FF",
    image: "photoshop.svg",
    title: "Photoshop",
  },
  {
    color: "#E8E3E7",
    image: "aseprite.svg",
    title: "Aseprite",
  },
]

export const othersItems = [
  {
    color: "#CCEEFF",
    image: "wordpress.svg",
    title: "Wordpress",
  },
  {
    color: "#FFCCE1",
    image: "elementor.svg",
    title: "Elementor",
  },
  {
    color: "#FFCCE1",
    image: "woo.svg",
    title: "Woo Commerce",
    inProgress: true,
  },
  {
    color: "#CCCCFF",
    image: "premiere.svg",
    title: "Premiere Pro",
  },
  {
    color: "#FFD9CC",
    image: "office.svg",
    title: "Suite Office",
  },
]

export const languagesItems = [
  {
    color: "#CCD8FF",
    image: "french-flag.svg",
    // title: "Maternelle",
  },
  {
    color: "#FBD0D7",
    image: "english-flag.svg",
    // title: "Niveau",
  },
]
