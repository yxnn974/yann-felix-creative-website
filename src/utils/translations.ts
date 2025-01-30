export const translations = {
  fr: {
    // Hero
    subtitle: "Étudiant en BUT Réseaux et Télécommunications, passionné par l'innovation technologique.",
    learnMore: "En savoir plus",
    
    // About
    aboutTitle: "À propos de moi",
    aboutText1: "Actuellement étudiant en BUT Réseaux et Télécommunications à l'IUT de La Réunion, je suis passionné par les nouvelles technologies et particulièrement intéressé par la gestion des réseaux et la cybersécurité.",
    aboutText2: "Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles opportunités d'apprentissage et de défis techniques.",
    aboutText3: "Je suis enthousiaste à l'idée de collaborer sur des projets innovants et d'échanger des idées avec d'autres passionnés du domaine.",
    aboutText4: "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger sur nos passions communes dans le domaine des réseaux !",
    languages: "Langues",
    french: "Français",
    english: "Anglais",
    spanish: "Espagnol",
    nativeSpeaker: "Langue maternelle (Natif)",
    interests: "Centre d'intérêts",
    basketball: "Basketball",
    hiking: "Randonnée",
    music: "Musique",
    cinema: "Cinéma",
    mobility: "Déplacements",
    drivingLicense: "Permis B",
    vehicle: "Véhiculé",
    contactMe: "Me contacter",
    downloadCV: "Télécharger mon CV",
    
    // Education
    education: "Formation",
    degree: "BUT Réseaux et Télécommunications",
    degreeDesc: "Formation approfondie en protocoles réseau, sécurité, administration système et télécommunications.",
    bac: "Baccalauréat Scientifique",
    bacDesc: "Spécialités Mathématiques et Sciences de l'Ingénieur, obtenu avec mention.",
    
    // Skills
    skills: "Compétences",
    technicalSkills: "Compétences Techniques",
    softSkills: "Compétences Humaines",
    
    // Projects
    projects: "Mes Projets",
    all: "Tous",
    academic: "Académiques",
    professional: "Professionnels",
    personal: "Personnels",
    code: "Code",
    demo: "Demo",
    
    // Contact
    contact: "Contact",
    contactMe2: "Contactez-moi",
    email: "Email",
    address: "Adresse",
    name: "Votre nom",
    subject: "Sujet",
    message: "Votre message",
    send: "Envoyer",
    messageSent: "Message envoyé !",
    messageSuccess: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
  },
  en: {
    // Hero
    subtitle: "Networks and Telecommunications Student, passionate about technological innovation.",
    learnMore: "Learn more",
    
    // About
    aboutTitle: "About me",
    aboutText1: "Currently a Networks and Telecommunications student at IUT de La Réunion, I am passionate about new technologies and particularly interested in network management and cybersecurity.",
    aboutText2: "My goal is to specialize in these fields and obtain recognized certifications such as CCNA and CCNP. I am constantly looking for new learning opportunities and technical challenges.",
    aboutText3: "I am enthusiastic about collaborating on innovative projects and exchanging ideas with other passionate people in the field.",
    aboutText4: "Feel free to contact me to discuss projects, opportunities, or simply to exchange about our common passions in the networking field!",
    languages: "Languages",
    french: "French",
    english: "English",
    spanish: "Spanish",
    nativeSpeaker: "Native Speaker",
    interests: "Interests",
    basketball: "Basketball",
    hiking: "Hiking",
    music: "Music",
    cinema: "Cinema",
    mobility: "Mobility",
    drivingLicense: "Driver's License",
    vehicle: "Vehicle owner",
    contactMe: "Contact me",
    downloadCV: "Download CV",
    
    // Education
    education: "Education",
    degree: "Bachelor's in Networks and Telecommunications",
    degreeDesc: "Advanced training in network protocols, security, system administration, and telecommunications.",
    bac: "Scientific Baccalaureate",
    bacDesc: "Specialization in Mathematics and Engineering Sciences, obtained with honors.",
    
    // Skills
    skills: "Skills",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    
    // Projects
    projects: "My Projects",
    all: "All",
    academic: "Academic",
    professional: "Professional",
    personal: "Personal",
    code: "Code",
    demo: "Demo",
    
    // Contact
    contact: "Contact",
    contactMe2: "Contact me",
    email: "Email",
    address: "Address",
    name: "Your name",
    subject: "Subject",
    message: "Your message",
    send: "Send",
    messageSent: "Message sent!",
    messageSuccess: "Thank you for contacting me. I will get back to you as soon as possible.",
  }
};

export type Language = "fr" | "en";
export type TranslationKey = keyof typeof translations.fr;

export const getTranslation = (language: Language, key: TranslationKey): string => {
  return translations[language][key];
};
