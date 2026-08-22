"use client";

import { useState } from "react";
import { METIERS, REGIONS, CATEGORIES_METIERS, appliquerRegion, type Metier } from "@/lib/comparaison";

function StatBar({ metier, region }: { metier: Metier; region: typeof REGIONS[0] }) {
  const min = appliquerRegion(metier.tjmMin, region);
  const max = appliquerRegion(metier.tjmMax, region);
  const moy = appliquerRegion(metier.tjmMoyen, region);
  const range = max - min || 1;
  const pctMoy = ((moy - min) / range) * 100;

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-400">{metier.categorie}</p>
          <h3 className="mt-1 font-bold text-gray-900">{metier.nom}</h3>
          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{metier.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-2xl font-black text-brand-800">{moy}€<span className="text-sm font-bold text-gray-400">/j</span></p>
        </div>
      </div>

      <div className="mt-3">
        <div className="relative h-2 w-full rounded-full bg-gray-100">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
            style={{ width: `${pctMoy}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-gray-400">
          <span>{min}€</span>
          <span>{max}€</span>
        </div>
      </div>
    </div>
  );
}

export default function Comparaison() {
  const [region, setRegion] = useState(REGIONS[0]);
  const [categorie, setCategorie] = useState<string>("Toutes");

  const filtered = METIERS.filter(
    (m) => categorie === "Toutes" || m.categorie === categorie
  ).sort((a, b) => appliquerRegion(b.tjmMoyen, region) - appliquerRegion(a.tjmMoyen, region));

  return (
    <section id="comparaison" className="py-10">
      <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-brand-900">Comparaison par métier et région</h2>
        <p className="mt-1 text-sm text-gray-600">
          Les TJM moyens en 2025, ajustés selon votre localisation.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">Région</span>
            <select
              value={region.slug}
              onChange={(e) => setRegion(REGIONS.find((r) => r.slug === e.target.value) || REGIONS[0])}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            >
              {REGIONS.map((r) => (
                <option key={r.slug} value={r.slug}>{r.nom} {r.modifier !== 1.0 ? `(${r.modifier > 1 ? "+" : ""}${Math.round((r.modifier - 1) * 100)}%)` : ""}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">Catégorie</span>
            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            >
              <option value="Toutes">Toutes les catégories</option>
              {CATEGORIES_METIERS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((m) => (
            <StatBar key={m.slug} metier={m} region={region} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Chiffres basés sur les données du marché 2025. Les TJM varient selon l&apos;expérience, la spécialité et le type de mission.
        </p>
      </div>
    </section>
  );
}
