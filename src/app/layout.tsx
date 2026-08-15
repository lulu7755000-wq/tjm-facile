import type { Metadata } from "next";
import "./globals.css";
import GoatCounter from "@/components/GoatCounter";

export const metadata: Metadata = {
  metadataBase: new URL("https://lulu7755000-wq.github.io/tjm-facile"),
  title: {
    default: "TJM Facile — Calculateur de TJM Freelance 2025",
    template: "%s | TJM Facile",
  },
  description:
    "Calculez votre TJM (Taux Journalier Moyen) en 30 secondes. Simulateur gratuit pour micro-entreprise, SASU, EURL et portage salarial. Mise à jour des taux 2025.",
  keywords: [
    "calculateur TJM",
    "TJM freelance",
    "taux journalier moyen",
    "simulateur freelance",
    "salaire net freelance",
    "micro-entreprise",
    "SASU",
    "EURL",
    "portage salarial",
  ],
  openGraph: {
    title: "TJM Facile — Calculateur de TJM Freelance 2025",
    description:
      "Combien facturer par jour pour atteindre votre salaire net visé ? Comparez micro-entreprise, SASU, EURL et portage salarial.",
    type: "website",
    locale: "fr_FR",
    url: "https://lulu7755000-wq.github.io/tjm-facile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TJM Facile — Calculateur de TJM",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://lulu7755000-wq.github.io/tjm-facile/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
        <GoatCounter />
      </body>
    </html>
  );
}
