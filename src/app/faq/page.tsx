import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { QUESTIONS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur le TJM, les statuts et le freelance",
  description:
    "Réponses aux questions les plus fréquentes : c'est quoi un TJM, quel statut choisir (micro-entreprise, SASU, EURL, portage), les plafonds 2025, comment convertir un salaire en TJM.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-600">FAQ</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">
          Questions fréquentes
        </h1>
        <p className="mt-3 text-gray-600">
          Tout ce qu&apos;il faut savoir avant de fixer votre TJM : statuts, plafonds, charges et
          méthodes de calcul.
        </p>
        <FAQ />
        <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center">
          <p className="font-bold text-brand-900">Envie d&apos;un chiffre précis ?</p>
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
