import { Calendar, Building2 } from "lucide-react";

const experiences = [
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
    tech: ["GCP", "Airflow", "Docker", "GitLab", "Python", "BigQuery", "Agile"],
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
    tech: ["AWS", "Talend", "Python", "Spark", "Glue", "Athena", "S3", "GitLab"],
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
    tech: ["MATLAB", "Simulink", "Data Analysis", "Algorithmes"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Expérience</h2>
          <p className="section-subtitle">
            Mon parcours professionnel en Data Engineering et analyse de données
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-500/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 mt-6 ring-4 ring-[var(--background)]" />

                <div className="md:w-1/2" />

                <div className="md:w-1/2 ml-6 md:ml-0">
                  <div className="card">
                    <div className="flex items-center gap-2 text-primary-500 text-sm font-medium mb-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>

                    <div className="flex items-center gap-2 text-[var(--muted)] text-sm mb-4">
                      <Building2 size={14} />
                      <span>
                        {exp.company}, {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--muted)] flex items-start gap-2"
                        >
                          <span className="text-primary-500 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded bg-primary-500/10 text-primary-500 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
