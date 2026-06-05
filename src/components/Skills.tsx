import {
  Cloud,
  Database,
  Code,
  GitBranch,
  Server,
  Workflow,
  FileText,
  Users,
} from "lucide-react";

const skillCategories = [
  {
    title: "Google Cloud (GCP)",
    icon: Cloud,
    skills: ["BigQuery", "Composer", "Cloud Storage", "Firestore", "Dataflow", "Container Registry"],
  },
  {
    title: "Amazon Web Services",
    icon: Server,
    skills: ["Athena", "Glue", "S3", "Data Catalog"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Talend", "Airflow", "PySpark", "PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "Développement",
    icon: Code,
    skills: ["Python", "Java", "KSH", "SQL"],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: ["GitLab CI/CD", "Docker", "Git"],
  },
  {
    title: "Pipelines & Orchestration",
    icon: Workflow,
    skills: [
      "Conception de pipelines",
      "Orchestration de workflows",
      "Automatisation ETL",
    ],
  },
  {
    title: "Data & Modélisation",
    icon: FileText,
    skills: [
      "Modélisation de données",
      "Migration de données",
      "Optimisation des performances",
    ],
  },
  {
    title: "Méthodologie",
    icon: Users,
    skills: [
      "Agile / Scrum",
      "Documentation technique",
      "Résolution de problèmes",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--card)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Compétences</h2>
          <p className="section-subtitle">
            Technologies et expertises acquises au fil de mes missions en Data Engineering
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-primary-500" size={24} />
                <h3 className="font-semibold text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
