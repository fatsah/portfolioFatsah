"use client";

import { useState } from "react";
import { Calendar, Building2, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techStacks = [
  ["GCP", "Airflow", "Docker", "GitLab", "Python", "BigQuery", "Agile"],
  ["AWS", "Talend", "Python", "Spark", "Glue", "Athena", "S3", "GitLab"],
  ["MATLAB", "Simulink", "Data Analysis", "Algorithmes"],
];

export default function Experience() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollAnimation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto stagger-children">
          {t.experience.jobs.map((exp, index) => (
            <div
              key={index}
              className="card cursor-pointer transition-all hover:border-primary-500/50"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-primary-500 text-xs font-medium mb-1">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-[var(--muted)] text-xs mt-1">
                    <Building2 size={12} />
                    <span>{exp.company}</span>
                    <MapPin size={12} className="ml-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[var(--muted)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-[var(--card-border)]">
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
                    {techStacks[index]?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-primary-500/10 text-primary-500 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
