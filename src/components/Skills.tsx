"use client";

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
import { useLanguage } from "./LanguageProvider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: t.skills.categories.gcp,
      icon: Cloud,
      skills: ["BigQuery", "Composer", "Cloud Storage", "Firestore", "Dataflow", "Container Registry"],
    },
    {
      title: t.skills.categories.aws,
      icon: Server,
      skills: ["Athena", "Glue", "S3", "Data Catalog"],
    },
    {
      title: t.skills.categories.dataEng,
      icon: Database,
      skills: ["Talend", "Airflow", "PySpark", "PostgreSQL", "MySQL", "SQL Server"],
    },
    {
      title: t.skills.categories.dev,
      icon: Code,
      skills: ["Python", "Java", "KSH", "SQL"],
    },
    {
      title: t.skills.categories.devops,
      icon: GitBranch,
      skills: ["GitLab CI/CD", "Docker", "Git"],
    },
    {
      title: t.skills.categories.pipelines,
      icon: Workflow,
      skills: [
        t.skills.items.pipelineDesign,
        t.skills.items.workflowOrch,
        t.skills.items.etlAuto,
      ],
    },
    {
      title: t.skills.categories.data,
      icon: FileText,
      skills: [
        t.skills.items.dataModeling,
        t.skills.items.dataMigration,
        t.skills.items.perfOptim,
      ],
    },
    {
      title: t.skills.categories.methodology,
      icon: Users,
      skills: [
        t.skills.items.agile,
        t.skills.items.techDoc,
        t.skills.items.problemSolving,
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--card)]/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
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
