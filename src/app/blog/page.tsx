import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES, formatDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Le blog TJM Facile — guides et chiffres du freelance",
  description:
    "Guides pour fixer son TJM : méthode de calcul, TJM des développeurs, micro-entreprise, taux journalier moyen par métier, passage salarié → freelance.",
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog TJM Facile",
    description: "Guides et chiffres pour fixer son tarif de freelance.",
    url: "https://lulu7755000-wq.github.io/tjm-facile/blog",
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Blog</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">
          Guides pour fixer votre TJM
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Méthode de calcul, chiffres du marché 2025, statuts et pièges à éviter : tout ce qu&apos;il
          faut pour facturer le juste prix.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}/`}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <p className="text-xs font-medium text-gray-400">
                {formatDate(article.date)} · {article.lectureMinutes} min de lecture
              </p>
              <h2 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-brand-700">
                {article.titre}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{article.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
          <p className="font-bold text-brand-900">Le plus simple : faites le calcul vous-même</p>
          <p className="mt-1 text-sm text-gray-600">
            Notre calculateur gratuit compare les 4 statuts avec les taux 2025.
          </p>
          <Link href="/"
            className="mt-3 inline-block rounded-xl bg-brand-800 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700"
          >
            Ouvrir le calculateur de TJM
          </Link>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
