"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">
            {t.about.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              {t.about.description2}
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <MapPin size={18} className="text-primary-500" />
              <span>{t.about.location}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto stagger-children">
            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.about.education1}</h3>
                  <p className="text-sm text-[var(--muted)]">{t.about.education1Details}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">
                    {t.about.education2}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {t.about.education2Details}
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.about.education3}</h3>
                  <p className="text-sm text-[var(--muted)]">
                    {t.about.education3Details}
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <Briefcase className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">{t.about.languages}</h3>
                  <p className="text-sm text-[var(--muted)]">
                    {t.about.languagesDetails}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
