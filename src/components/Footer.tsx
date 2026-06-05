"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Fatsah TACHERFIOUT. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-sm text-[var(--muted)] hover:text-primary-500 transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              className="text-sm text-[var(--muted)] hover:text-primary-500 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#experience"
              className="text-sm text-[var(--muted)] hover:text-primary-500 transition-colors"
            >
              {t.nav.experience}
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--muted)] hover:text-primary-500 transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
