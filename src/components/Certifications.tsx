"use client";

import { Award } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "Associate Cloud Engineer",
    provider: "Google Cloud (GCP)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional Data Engineer",
    provider: "Google Cloud (GCP)",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "SAFe 5 Practitioner",
    provider: "Scaled Agile",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Developer Associate - PySpark",
    provider: "Databricks",
    color: "from-red-500 to-orange-500",
  },
];

export default function Certifications() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">{t.certifications.title}</h2>
          <p className="section-subtitle">
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {certifications.map((cert) => (
            <div key={cert.name} className="card group">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-[var(--muted)]">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
