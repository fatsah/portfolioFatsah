"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:tacherfiout.fatsah@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--card)]/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">{t.contact.info}</h3>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <Mail className="text-primary-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">{t.contact.email}</p>
                <a
                  href="mailto:tacherfiout.fatsah@gmail.com"
                  className="font-medium hover:text-primary-500 transition-colors"
                >
                  tacherfiout.fatsah@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <Phone className="text-primary-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">{t.contact.phone}</p>
                <a
                  href="tel:+33757633795"
                  className="font-medium hover:text-primary-500 transition-colors"
                >
                  07 57 63 37 95
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <MapPin className="text-primary-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">{t.contact.location}</p>
                <p className="font-medium">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/fatsah-tacherfiout-9aa9278b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              >
                <Linkedin className="text-primary-500" size={20} />
              </a>
              <a
                href="https://github.com/fatsah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              >
                <Github className="text-primary-500" size={20} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {sent && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm">
                <CheckCircle size={18} />
                <span>{t.contact.sent}</span>
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                {t.contact.subjectLabel}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
