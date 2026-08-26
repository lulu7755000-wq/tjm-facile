import type { Metadata } from "next";
import "./globals.css";
import GoatCounter from "@/components/GoatCounter";

export const metadata: Metadata = {
  metadataBase: new URL("https://lulu7755000-wq.github.io/tjm-facile"),
  verification: { google: "OE05mqQEdloRCNk76npqYHRH2lB68oFiURR-S3wwKgw" },
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
        <footer className="border-t border-gray-200 bg-white py-8">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <p className="text-sm font-semibold text-gray-700">TJM Facile — Le calculateur de référence des freelances en France</p>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-gray-500">
              Simulateur gratuit et indépendant. Taux 2025 vérifiés. Aucune donnée stockée. Créé par un freelance, pour les freelances.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
              <a href="/blog/" className="text-brand-600 hover:text-brand-800">Guides</a>
              <a href="/statuts/" className="text-brand-600 hover:text-brand-800">Statuts</a>
              <a href="/faq/" className="text-brand-600 hover:text-brand-800">FAQ</a>
              <a href="https://www.fiverr.com/ggcreationss/je-creerai-un-logo-professionnel-et-unique-pour-votre-marque" target="_blank" rel="nofollow sponsored" className="font-semibold text-amber-600 hover:text-amber-700">🎨 Logo pro sur Fiverr →</a>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              © 2025 TJM Facile · <span data-goatcounter="true">…</span> visites · Fait avec ♥ pour les indépendants
            </p>
          </div>
        </footer>
        <GoatCounter />
      </body>
    </html>
  );
}
