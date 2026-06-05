import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">À propos</h2>
          <p className="section-subtitle">
            Data Engineer passionné par la transformation des données en valeur business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              Data Engineer avec plus de 5 ans d&apos;expérience dans la conception et
              l&apos;optimisation de pipelines de données en environnement cloud. Expert en
              migration de systèmes de données complexes et en mise en œuvre de solutions
              cloud sur GCP et AWS.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              Doté de solides compétences techniques et fonctionnelles, ainsi que
              d&apos;une capacité éprouvée à collaborer dans des environnements agiles.
              Issu d&apos;un parcours ingénieur en mécatronique, j&apos;apporte une
              rigueur analytique et une vision système à chaque projet data.
            </p>
            <div className="flex items-center gap-2 text-[var(--muted)]">
              <MapPin size={18} className="text-primary-500" />
              <span>Bondy (93), Île-de-France</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Concepteur Big Data / Cloud</h3>
                  <p className="text-sm text-[var(--muted)]">Fitec — 2021</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">
                    Master 2 Mécatronique &amp; Mécanique Avancée
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    Université de Technologie de Compiègne — 2016
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Master 2 Électrotechnique</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Université de Béjaïa — 2014
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <Briefcase className="text-primary-500 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Langues</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Français (C2) • Anglais (B1) • Arabe (C2) • Kabyle (natif)
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
