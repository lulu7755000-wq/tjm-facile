import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";

const STATUTS = [
  {
    nom: "Micro-entreprise",
    couleur: "border-brand-200",
    texte:
      "Le plus simple pour démarrer. Cotisations URSSAF prélevées sur le CA, comptabilité allégée, aucun capital. Idéal jusqu'à environ 70 000 € de chiffre d'affaires.",
  },
  {
    nom: "SASU",
    couleur: "border-indigo-200",
    texte:
      "Société à associé unique. Dividendes taxés à la flat tax de 30 %. Très flexible pour optimiser ses revenus une fois le CA important.",
  },
  {
    nom: "EURL",
    couleur: "border-emerald-200",
    texte:
      "Société gérée par un associé unique, fiscalité à l'impôt sur le revenu. Charges sociales TNS d'environ 45 %. Bon compromis pour une activité établie.",
  },
  {
    nom: "Portage salarial",
    couleur: "border-amber-200",
    texte:
      "Vous restez salarié d'une société de portage qui gère tout. Frais de gestion ≈8 %. Zéro paperasse, mais revenu net plus faible.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TJM Facile",
    description: "Calculateur de TJM pour freelance en France (2025)",
    applicationCategory: "FinanceApplication",
    inLanguage: "fr",
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-brand-50 to-gray-50 py-14 text-center">
          <div className="mx-auto max-w-3xl px-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              Gratuit · Taux 2025 · France
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-brand-900 sm:text-5xl">
              Combien facturer par jour
              <br />
              pour gagner <span className="text-brand-500">votre salaire net</span> ?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Renseignez le salaire net mensuel que vous visez : on calcule instantanément votre TJM
              en micro-entreprise, SASU, EURL et portage salarial.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4">
          <Calculator />

          <section id="statuts" className="py-10">
            <h2 className="text-2xl font-bold text-brand-900">Quel statut choisir ?</h2>
            <p className="mt-1 text-sm text-gray-600">
              Les 4 options les plus courantes pour un freelance en France.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {STATUTS.map((s) => (
                <div key={s.nom} className={`rounded-xl border bg-white p-5 shadow-sm ${s.couleur}`}>
                  <h3 className="text-lg font-bold text-gray-900">{s.nom}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.texte}</p>
                </div>
              ))}
            </div>
          </section>

          <FAQ />

          {/* SECTION RECOMMANDATIONS POUR GAGNER DE L'ARGENT */}
          <div className="bg-gray-50 p-6 rounded-xl mt-10 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-3">🛠️ Les outils recommandés par TJM Facile</h3>
            <p className="mb-4">Tu as calculé ton TJM ? Voici les meilleurs outils pour gérer ton statut et gagner du temps :</p>
            <ul className="space-y-3">
              <li>✅ <strong>Comptabilité :</strong> <a href="https://www.indy.fr/?utm_source=tjmfacile" target="_blank" className="text-blue-600 hover:underline">Indy</a> – Le logiciel de comptabilité préféré des freelances (déclaration URSSAF en 1 clic).</li>
              <li>✅ <strong>Banque pro :</strong> <a href="https://qonto.com/fr/invitation?via=tjmfacile" target="_blank" className="text-blue-600 hover:underline">Qonto</a> – Ouvre un compte pro en 10 min, sans justificatif.</li>
              <li>✅ <strong>Expert-comptable :</strong> <a href="https://www.dougs.fr/?utm=tjmfacile" target="_blank" className="text-blue-600 hover:underline">Dougs</a> – L'expert-comptable 100% en ligne, spécialisé micro-entreprise.</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Ces liens sont des liens d'affiliation. Cela vous coûte le même prix et nous aide à maintenir l'outil gratuit !</p>
          </div>

        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
