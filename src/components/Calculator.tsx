"use client";

import { useState, useCallback } from "react";
import { calculerTous, formatEuro } from "@/lib/calculations";
import type { Resultat } from "@/lib/types";
import ResultCard from "./ResultCard";
import Historique, { addToHistory } from "./Historique";
import ExportPDF from "./ExportPDF";

const COULEURS: Record<string, string> = {
  micro: "border-brand-200 bg-brand-50",
  sasu: "border-indigo-200 bg-indigo-50",
  eurl: "border-emerald-200 bg-emerald-50",
  portage: "border-amber-200 bg-amber-50",
};

export default function Calculator() {
  const [salaire, setSalaire] = useState(4000);
  const [jours, setJours] = useState(18);

  const resultats: Resultat[] = calculerTous({ salaireNetMensuel: salaire, joursParMois: jours });

  const handleSave = useCallback(() => {
    addToHistory(salaire, jours, resultats);
    // Force Historique to reload
    window.dispatchEvent(new Event("tjm-history-updated"));
  }, [salaire, jours, resultats]);

  return (
    <section id="calculateur" className="py-10">
      <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
        <div className="border-b border-brand-100 bg-gradient-to-r from-brand-50 to-white p-6">
          <h2 className="text-xl font-bold text-brand-900">Votre simulation</h2>
          <p className="mt-1 text-sm text-gray-600">
            Entrez le salaire net mensuel que vous visez, puis le nombre de jours facturés par mois.
          </p>
        </div>

          <div className="grid gap-6 p-6 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Salaire net mensuel visé (après impôts)
            </span>
            <input
              type="number"
              min={0}
              value={salaire}
              onChange={(e) => setSalaire(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-bold text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Jours facturés par mois
            </span>
            <input
              type="number"
              min={1}
              max={30}
              value={jours}
              onChange={(e) => setJours(Math.min(30, Math.max(1, Number(e.target.value))))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg font-bold text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </label>
        </div>
        <div className="px-6 pb-2">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            ⭐ Sauvegarder cette simulation
          </button>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">
          {resultats.map((r, i) => (
            <ResultCard key={r.statut} resultat={r} accent={COULEURS[r.statut]} rang={i + 1} />
          ))}
        </div>

        <div className="border-t border-gray-100 bg-gray-50 p-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2">
              <span aria-hidden="true">⚠️</span>
              Estimation indicative 2025. Les charges réelles varient selon votre activité, vos frais
              réels et votre situation familiale. Faites valider par un expert-comptable avant de fixer
              votre TJM.
            </p>
            <div className="flex items-center gap-2">
              <ExportPDF resultats={resultats} salaire={salaire} jours={jours} />
            </div>
          </div>
        </div>
      </div>

      <Historique />
    </section>
  );
}
