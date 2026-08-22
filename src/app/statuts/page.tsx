import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { STATUTS } from "@/lib/statuts";

export const metadata: Metadata = {
  title: "Les 4 statuts du freelance — Micro-entreprise, SASU, EURL, portage",
  description:
    "Micro-entrepreneur, SASU, EURL ou portage salarial : avantages, charges et fiscalité des 4 statuts pour fixer votre TJM en France en 2025.",
};

export default function StatutsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Les statuts du freelance en France",
    itemListElement: STATUTS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.nom,
      description: s.texte,
    })),
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Les statuts</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">
          Quel statut choisir ?
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Les 4 options les plus courantes pour un freelance en France. Chaque statut change
          vos charges, vos impôts et donc votre TJM à facturer.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {STATUTS.map((s) => (
            <div key={s.nom} className={`rounded-xl border bg-white p-6 shadow-sm ${s.couleur}`}>
              <h2 className="text-lg font-bold text-gray-900">{s.nom}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.texte}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
          <p className="font-bold text-brand-900">Le statut change votre TJM : vérifiez-le</p>
          <p className="mt-1 text-sm text-gray-600">
            Le calculateur compare les 4 statuts instantanément, avec les taux 2025.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/"
              className="inline-block rounded-xl bg-brand-800 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700"
            >
              Ouvrir le calculateur de TJM
            </Link>
            <Link href="/#comparaison"
              className="inline-block rounded-xl border border-brand-300 bg-white px-6 py-3 text-sm font-bold text-brand-800 hover:bg-brand-50"
            >
              Comparer par métier et région →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
