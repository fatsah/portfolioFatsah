export const translations = {
  fr: {
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      certifications: "Certifications",
      experience: "Expérience",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Bonjour, je suis",
      subtitle: "Data Engineer | Cloud GCP & AWS",
      description:
        "+5 ans d'expérience dans la conception et l'optimisation de pipelines de données en environnement cloud. Expert en migration de systèmes de données complexes.",
      cta: "Me contacter",
      ctaSecondary: "Voir mon parcours",
      downloadCV: "Télécharger CV",
      stats: {
        years: "Années d'expérience",
        missions: "Missions majeures",
        cloud: "& AWS",
        certifications: "Certifications",
      },
    },
    // About
    about: {
      title: "À propos",
      subtitle: "Data Engineer passionné par la transformation des données en valeur business",
      description1:
        "Data Engineer avec plus de 5 ans d'expérience dans la conception et l'optimisation de pipelines de données en environnement cloud. Expert en migration de systèmes de données complexes et en mise en œuvre de solutions cloud sur GCP et AWS.",
      description2:
        "Doté de solides compétences techniques et fonctionnelles, ainsi qu'une capacité éprouvée à collaborer dans des environnements agiles. Issu d'un parcours ingénieur en mécatronique, j'apporte une rigueur analytique et une vision système à chaque projet data.",
      location: "Bondy (93), Île-de-France",
      education1: "Concepteur Big Data / Cloud",
      education1Details: "Fitec — 2021",
      education2: "Master 2 Mécatronique & Mécanique Avancée",
      education2Details: "Université de Technologie de Compiègne — 2016",
      education3: "Master 2 Électrotechnique",
      education3Details: "Université de Béjaïa — 2014",
      languages: "Langues",
      languagesDetails: "Français (C2) • Anglais (B1) • Arabe (C2) • Kabyle (natif)",
    },
    // Skills
    skills: {
      title: "Compétences",
      subtitle: "Technologies et expertises acquises au fil de mes missions en Data Engineering",
      categories: {
        gcp: "Google Cloud (GCP)",
        aws: "Amazon Web Services",
        dataEng: "Data Engineering",
        dev: "Développement",
        devops: "DevOps & CI/CD",
        pipelines: "Pipelines & Orchestration",
        data: "Data & Modélisation",
        methodology: "Méthodologie",
      },
      items: {
        pipelineDesign: "Conception de pipelines",
        workflowOrch: "Orchestration de workflows",
        etlAuto: "Automatisation ETL",
        dataModeling: "Modélisation de données",
        dataMigration: "Migration de données",
        perfOptim: "Optimisation des performances",
        agile: "Agile / Scrum",
        techDoc: "Documentation technique",
        problemSolving: "Résolution de problèmes",
      },
    },
    // Certifications
    certifications: {
      title: "Certifications",
      subtitle: "Certifications professionnelles validant mes compétences cloud et data",
    },
    // Experience
    experience: {
      title: "Expérience",
      subtitle: "Mon parcours professionnel en Data Engineering et analyse de données",
      today: "Aujourd'hui",
      jobs: [
        {
          title: "Consultant Data Engineer",
          company: "Orange France",
          location: "Arcueil",
          period: "Nov. 2022 — Aujourd'hui",
          description: [
            "Analyse de l'existant et collecte des scripts legacy",
            "Configuration de l'environnement GCP et migration des scripts SQL de Teradata vers BigQuery",
            "Développement de scripts Python à partir des scripts KSH existants",
            "Développement des pipelines de migration en Python et orchestration via Airflow",
            "Qualification technique et fonctionnelle, vérification de l'iso-prod",
            "Mise en production et bascule technique",
            "Documentation et présentation des livrables",
          ],
        },
        {
          title: "Consultant Data Engineer",
          company: "LISI Aerospace",
          location: "Paris",
          period: "Juin 2022 — Nov. 2022",
          description: [
            "Remontée de données sur AWS S3 avec Talend DI",
            "Paramétrage du Crawler pour déduire le format et schéma des données",
            "Développement de jobs d'analyse et traitement avec AWS Glue",
            "Enrichissement du catalogue de données AWS avec les métadonnées",
            "Interrogation et analyse des données avec AWS Athena en SQL",
          ],
        },
        {
          title: "Consultant Data & Analyste Algorithmique",
          company: "Renault-Nissan-Mitsubishi",
          location: "Lardy",
          period: "Mai 2017 — Mars 2020",
          description: [
            "Analyse des données issues des simulations pour évaluer les performances",
            "Conception et modélisation d'algorithmes sous MATLAB/Simulink",
            "Développement de tests de qualification et de validation",
            "Analyse des régressions et comparaison des données",
            "Documentation des processus et rapports techniques",
          ],
        },
      ],
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Intéressé par une collaboration ? N'hésitez pas à me contacter",
      info: "Mes coordonnées",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Bondy (93), Île-de-France",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Sujet du message",
      messageLabel: "Message",
      messagePlaceholder: "Votre message...",
      send: "Envoyer le message",
      sent: "Votre client email s'est ouvert avec le message pré-rempli !",
    },
    // Footer
    footer: {
      rights: "Tous droits réservés.",
    },
    // Chat
    chat: {
      title: "Assistant IA",
      subtitle: "Posez vos questions",
      placeholder: "Votre question...",
      open: "Ouvrir le chat",
      welcome: "Bonjour ! 👋 Je suis l'assistant de Fatsah. Posez-moi vos questions sur son parcours, compétences ou expériences.",
      fallback: "Je peux vous renseigner sur le parcours de Fatsah, ses compétences techniques, sa formation ou ses coordonnées. Que souhaitez-vous savoir ?",
      responses: {
        hello: "Bonjour ! Je suis l'assistant virtuel de Fatsah. Comment puis-je vous aider ? Vous pouvez me poser des questions sur son parcours, ses compétences ou ses expériences.",
        experience: "Fatsah a plus de 5 ans d'expérience en Data Engineering. Il travaille actuellement chez Orange France sur la migration de données vers GCP (BigQuery, Airflow). Avant ça, il a travaillé chez LISI Aerospace (AWS) et Renault-Nissan-Mitsubishi.",
        skills: "Ses compétences principales : GCP (BigQuery, Composer, Dataflow), AWS (Athena, Glue, S3), Python, Airflow, Docker, PySpark, SQL, Talend, GitLab CI/CD. Il maîtrise aussi la modélisation de données et les méthodologies Agile.",
        education: "Fatsah a une formation de Concepteur Big Data/Cloud (Fitec, 2021), un Master 2 en Mécatronique de l'UTC Compiègne (2016) et un Master 2 en Électrotechnique de l'Université de Béjaïa (2014).",
        contact: "Vous pouvez contacter Fatsah par email : tacherfiout.fatsah@gmail.com ou par téléphone : 07 57 63 37 95. Il est basé en Île-de-France (Bondy, 93).",
        available: "Fatsah est actuellement en poste chez Orange France en tant que Consultant Data Engineer. N'hésitez pas à le contacter pour discuter d'opportunités.",
      },
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      certifications: "Certifications",
      experience: "Experience",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Data Engineer | Cloud GCP & AWS",
      description:
        "5+ years of experience in designing and optimizing data pipelines in cloud environments. Expert in complex data system migrations.",
      cta: "Contact me",
      ctaSecondary: "View my journey",
      downloadCV: "Download CV",
      stats: {
        years: "Years of experience",
        missions: "Major missions",
        cloud: "& AWS",
        certifications: "Certifications",
      },
    },
    // About
    about: {
      title: "About",
      subtitle: "Data Engineer passionate about transforming data into business value",
      description1:
        "Data Engineer with over 5 years of experience in designing and optimizing data pipelines in cloud environments. Expert in complex data system migrations and implementing cloud solutions on GCP and AWS.",
      description2:
        "Equipped with strong technical and functional skills, along with a proven ability to collaborate in agile environments. With a background in mechatronics engineering, I bring analytical rigor and a systems perspective to every data project.",
      location: "Bondy (93), Île-de-France",
      education1: "Big Data / Cloud Designer",
      education1Details: "Fitec — 2021",
      education2: "Master's in Mechatronics & Advanced Mechanics",
      education2Details: "Compiègne University of Technology — 2016",
      education3: "Master's in Electrical Engineering",
      education3Details: "University of Béjaïa — 2014",
      languages: "Languages",
      languagesDetails: "French (C2) • English (B1) • Arabic (C2) • Kabyle (native)",
    },
    // Skills
    skills: {
      title: "Skills",
      subtitle: "Technologies and expertise acquired through my Data Engineering missions",
      categories: {
        gcp: "Google Cloud (GCP)",
        aws: "Amazon Web Services",
        dataEng: "Data Engineering",
        dev: "Development",
        devops: "DevOps & CI/CD",
        pipelines: "Pipelines & Orchestration",
        data: "Data & Modeling",
        methodology: "Methodology",
      },
      items: {
        pipelineDesign: "Pipeline design",
        workflowOrch: "Workflow orchestration",
        etlAuto: "ETL automation",
        dataModeling: "Data modeling",
        dataMigration: "Data migration",
        perfOptim: "Performance optimization",
        agile: "Agile / Scrum",
        techDoc: "Technical documentation",
        problemSolving: "Problem solving",
      },
    },
    // Certifications
    certifications: {
      title: "Certifications",
      subtitle: "Professional certifications validating my cloud and data expertise",
    },
    // Experience
    experience: {
      title: "Experience",
      subtitle: "My professional journey in Data Engineering and data analysis",
      today: "Present",
      jobs: [
        {
          title: "Consultant Data Engineer",
          company: "Orange France",
          location: "Arcueil",
          period: "Nov. 2022 — Present",
          description: [
            "Analysis of existing systems and legacy script collection",
            "GCP environment configuration and SQL script migration from Teradata to BigQuery",
            "Python script development from existing KSH scripts",
            "Migration pipeline development in Python and orchestration via Airflow",
            "Technical and functional qualification, iso-prod verification",
            "Production deployment and technical switchover",
            "Documentation and deliverable presentations",
          ],
        },
        {
          title: "Consultant Data Engineer",
          company: "LISI Aerospace",
          location: "Paris",
          period: "Jun. 2022 — Nov. 2022",
          description: [
            "Data upload to AWS S3 using Talend DI",
            "Crawler configuration to infer data format and schema",
            "Analysis and processing job development with AWS Glue",
            "AWS data catalog enrichment with metadata",
            "Data querying and analysis with AWS Athena using SQL",
          ],
        },
        {
          title: "Consultant Data & Algorithm Analyst",
          company: "Renault-Nissan-Mitsubishi",
          location: "Lardy",
          period: "May 2017 — Mar. 2020",
          description: [
            "Simulation data analysis to evaluate performance",
            "Algorithm design and modeling in MATLAB/Simulink",
            "Qualification and validation test development",
            "Regression analysis and data comparison",
            "Process documentation and technical reports",
          ],
        },
      ],
    },
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Interested in collaborating? Don't hesitate to reach out",
      info: "My contact details",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Bondy (93), Île-de-France",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Message subject",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      send: "Send message",
      sent: "Your email client has opened with the pre-filled message!",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
    },
    // Chat
    chat: {
      title: "AI Assistant",
      subtitle: "Ask your questions",
      placeholder: "Your question...",
      open: "Open chat",
      welcome: "Hello! 👋 I'm Fatsah's assistant. Feel free to ask me about his background, skills, or experience.",
      fallback: "I can tell you about Fatsah's background, technical skills, education, or contact details. What would you like to know?",
      responses: {
        hello: "Hello! I'm Fatsah's virtual assistant. How can I help you? You can ask me about his background, skills, or experiences.",
        experience: "Fatsah has over 5 years of experience in Data Engineering. He currently works at Orange France on data migration to GCP (BigQuery, Airflow). Previously, he worked at LISI Aerospace (AWS) and Renault-Nissan-Mitsubishi.",
        skills: "His main skills: GCP (BigQuery, Composer, Dataflow), AWS (Athena, Glue, S3), Python, Airflow, Docker, PySpark, SQL, Talend, GitLab CI/CD. He also masters data modeling and Agile methodologies.",
        education: "Fatsah holds a Big Data/Cloud Designer certification (Fitec, 2021), a Master's in Mechatronics from UTC Compiègne (2016), and a Master's in Electrical Engineering from the University of Béjaïa (2014).",
        contact: "You can reach Fatsah by email: tacherfiout.fatsah@gmail.com or by phone: 07 57 63 37 95. He's based in Île-de-France (Bondy, 93).",
        available: "Fatsah is currently working at Orange France as a Consultant Data Engineer. Don't hesitate to contact him to discuss opportunities.",
      },
    },
  },
};

export type Language = "fr" | "en";
export type Translations = (typeof translations)["fr"];
