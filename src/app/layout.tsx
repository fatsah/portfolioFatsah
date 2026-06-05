import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatsah TACHERFIOUT | Data Engineer",
  description:
    "Data Engineer avec plus de 5 ans d'expérience dans la conception et l'optimisation de pipelines de données en environnement cloud (GCP, AWS).",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "Fatsah TACHERFIOUT | Data Engineer",
    description:
      "Data Engineer avec plus de 5 ans d'expérience en cloud GCP & AWS. Expert en migration de systèmes de données complexes.",
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-fatsah.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatsah TACHERFIOUT | Data Engineer",
    description:
      "Data Engineer avec plus de 5 ans d'expérience en cloud GCP & AWS.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatWidget />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
