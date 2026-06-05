# Portfolio — Fatsah TACHERFIOUT

Portfolio personnel de Fatsah TACHERFIOUT, Data Engineer avec +5 ans d'expérience en environnement cloud (GCP, AWS).

🔗 **Live** : [portfolio-fatsah.vercel.app](https://portfolio-fatsah.vercel.app/)

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## Fonctionnalités

- 🌙 Thème clair / sombre (persisté en localStorage)
- 🌐 Bilingue français / anglais avec bouton de bascule
- 💬 Chat widget IA (assistant virtuel intégré)
- 📱 Responsive (mobile, tablette, desktop)
- ⚡ Performance optimisée (SSR, lazy loading images)

## Structure du projet

```
src/
├── app/
│   ├── globals.css        # Variables CSS et styles globaux
│   ├── layout.tsx         # Layout principal (providers, navbar, footer)
│   └── page.tsx           # Page d'accueil
├── components/
│   ├── Hero.tsx           # Section d'accueil avec photo et stats
│   ├── About.tsx          # Présentation et formations
│   ├── Skills.tsx         # Compétences techniques par catégorie
│   ├── Experience.tsx     # Expériences professionnelles (accordéon)
│   ├── Contact.tsx        # Formulaire de contact et coordonnées
│   ├── ChatWidget.tsx     # Assistant IA intégré
│   ├── Navbar.tsx         # Navigation avec thème et langue
│   ├── Footer.tsx         # Pied de page
│   ├── ThemeProvider.tsx  # Context pour le thème clair/sombre
│   └── LanguageProvider.tsx # Context pour l'internationalisation
└── lib/
    └── translations.ts    # Traductions FR/EN
```

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Build & Déploiement

```bash
npm run build
npm start
```

Le déploiement se fait automatiquement sur Vercel à chaque push sur la branche principale.

## Auteur

**Fatsah TACHERFIOUT** — Data Engineer  
📧 tacherfiout.fatsah@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/fatsah-tacherfiout-9aa9278b)
