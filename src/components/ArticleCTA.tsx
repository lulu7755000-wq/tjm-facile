import Link from "next/link";
export default function ArticleCTA() {
  return (
    <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-600 p-6 text-center shadow-md">
      <h2 className="text-xl font-bold text-white">Calculez votre TJM exact en 30 secondes</h2>
      <p className="mt-2 text-sm text-brand-50">
        Entrez votre objectif de revenu net : le simulateur applique les taux 2025 et compare
        micro-entreprise, SASU, EURL et portage salarial.
      </p>
      <Link href="/"
        className="mt-4 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-800 shadow hover:bg-brand-50"
      >
        Lancer le calculateur de TJM
      </Link>
    </div>
  );
}
