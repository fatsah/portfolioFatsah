"use client";

import { useState, useEffect } from "react";
import { Database, Cloud, GitBranch, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

function Typewriter({ texts, speed = 80, pause = 2000 }: { texts: string[]; speed?: number; pause?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="typewriter-cursor">{displayed}</span>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();

  const roles = [
    "Data Engineer",
    "Cloud GCP & AWS",
    "Pipeline Architect",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary-500/30 shadow-xl transition-transform duration-300 hover:scale-110 hover:ring-primary-500/60 hover:shadow-2xl">
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
            <Database className="text-primary-500 animate-float" size={32} />
            <Cloud className="text-primary-400 animate-float-delayed" size={32} />
            <GitBranch className="text-primary-600 animate-float-delayed-2" size={32} />
          </div>

          <p className="text-primary-500 font-semibold text-lg mb-4">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Fatsah{" "}
            <span className="text-primary-500">TACHERFIOUT</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[var(--muted)] mb-8 h-8">
            <Typewriter texts={roles} />
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
            <a
              href={language === "fr" ? "/Fatsah_TACHERFIOUT_CV_FR.pdf" : "/Fatsah_TACHERFIOUT_CV_EN.pdf"}
              download
              className="px-8 py-3 border border-[var(--card-border)] hover:bg-[var(--card)] rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} />
              {t.hero.downloadCV}
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
              <p className="text-3xl font-bold text-primary-500">5</p>
              <p className="text-sm text-[var(--muted)]">{t.hero.stats.certifications}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
