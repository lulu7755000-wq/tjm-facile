import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tjm-facile.vercel.app"),
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
    url: "https://tjm-facile.vercel.app",
    images: [
      {
        url: "/og-image.svg",
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
    icon: "/favicon.svg",
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
      </body>
    </html>
  );
}
