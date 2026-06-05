"use client";

import { Database, Cloud, GitBranch } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary-500/30 shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Fatsah TACHERFIOUT"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <Database className="text-primary-500" size={32} />
            <Cloud className="text-primary-400" size={32} />
            <GitBranch className="text-primary-600" size={32} />
          </div>

          <p className="text-primary-500 font-semibold text-lg mb-4">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Fatsah{" "}
            <span className="text-primary-500">TACHERFIOUT</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[var(--muted)] mb-8">
            {t.hero.subtitle}
          </h2>

          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-12">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              {t.hero.cta}
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500/10 rounded-lg font-medium transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[var(--card-border)]">
            <div>
              <p className="text-3xl font-bold text-primary-500">5+</p>
              <p className="text-sm text-[var(--muted)]">{t.hero.stats.years}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-500">3</p>
              <p className="text-sm text-[var(--muted)]">{t.hero.stats.missions}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-500">GCP</p>
              <p className="text-sm text-[var(--muted)]">{t.hero.stats.cloud}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-500">20+</p>
              <p className="text-sm text-[var(--muted)]">{t.hero.stats.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
