import { formatEuro } from "@/lib/calculations";
import type { Resultat } from "@/lib/types";

interface Props {
  resultat: Resultat;
  accent: string;
  rang: number;
}

const PARTENAIRE: Record<string, { texte: string; lien: string; libelle: string }> = {
  micro: {
    texte: "Gérez votre micro-entreprise sans prise de tête",
    lien: "https://www.indy.fr/?utm_source=tjmfacile",
    libelle: "Indy — la compta des freelances",
  },
  sasu: {
    texte: "La comptabilité de votre SASU au meilleur prix",
    lien: "https://www.dougs.fr/?utm=tjmfacile",
    libelle: "Dougs — expert-comptable en ligne",
  },
  eurl: {
    texte: "La comptabilité de votre EURL sans stress",
    lien: "https://www.dougs.fr/?utm=tjmfacile",
    libelle: "Dougs — expert-comptable en ligne",
  },
  portage: {
    texte: "Un compte pro pour encaisser vos missions",
    lien: "https://qonto.com/fr/invitation?via=tjmfacile",
    libelle: "Qonto — banque pro en 10 min",
  },
};

export default function ResultCard({ resultat, accent, rang }: Props) {
  const partenaire = PARTENAIRE[resultat.statut];
  return (
    <article className={`rounded-xl border p-5 ${accent}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
          Option {rang}
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-900 shadow-sm">
          {resultat.nom}
        </span>
      </div>

      <p className="text-xs font-medium text-gray-500">TJM à facturer (HT)</p>
      <p className="mt-1 text-3xl font-black text-brand-800">
        {formatEuro(resultat.tjmRequis)}
        <span className="ml-1 text-base font-bold text-gray-400">/ jour</span>
      </p>

      <dl className="mt-4 space-y-1.5 border-t border-white/70 pt-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-600">Chiffre d&apos;affaires annuel</dt>
          <dd className="font-semibold text-gray-900">{formatEuro(resultat.caAnnuel)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600">Charges + impôts</dt>
          <dd className="font-semibold text-red-600">
            − {formatEuro(resultat.chargesAnnuelles + resultat.impotAnnuuel)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600">Net annuel</dt>
          <dd className="font-semibold text-emerald-600">{formatEuro(resultat.netAnnuel)}</dd>
        </div>
      </dl>

      <details className="mt-4 rounded-lg bg-white/70 p-3 text-xs text-gray-600">
        <summary className="cursor-pointer font-semibold text-brand-800">
          Voir le détail des charges
        </summary>
        <ul className="mt-2 space-y-1">
          {resultat.details.map((d) => (
            <li key={d.label} className="flex justify-between">
              <span>{d.label}</span>
              <span className="font-semibold">{formatEuro(d.valeur)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 italic text-gray-500">{resultat.explication}</p>
      </details>

      {resultat.avertissement && (
        <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs font-medium text-amber-800">
          ⚠️ {resultat.avertissement}
        </div>
      )}

      {partenaire && (
        <div className="mt-3">
          <a
            href={partenaire.lien}
            target="_blank"
            rel="nofollow sponsored"
            className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2.5 text-xs font-semibold text-brand-800 shadow-sm transition hover:shadow-md"
          >
            <span>{partenaire.texte}</span>
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-1 text-[10px] text-gray-400">
            {partenaire.libelle} · Lien partenaire (même prix pour vous).
          </p>
        </div>
      )}
    </article>
  );
}
