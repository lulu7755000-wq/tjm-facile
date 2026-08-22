"use client";

import { useState, useEffect } from "react";
import { formatEuro } from "@/lib/calculations";

type HistoriqueEntry = {
  id: string;
  date: string;
  salaire: number;
  jours: number;
  resultats: {
    statut: string;
    tjm: number;
    ca: number;
  }[];
};

const STORAGE_KEY = "tjm-facile-history";

function loadHistory(): HistoriqueEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(entries: HistoriqueEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, 20)));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export function addToHistory(
  salaire: number,
  jours: number,
  resultats: { statut: string; tjmRequis: number; caAnnuel: number }[]
) {
  const entries = loadHistory();
  entries.unshift({
    id: generateId(),
    date: new Date().toLocaleDateString("fr-FR"),
    salaire,
    jours,
    resultats: resultats.map((r) => ({
      statut: r.statut,
      tjm: r.tjmRequis,
      ca: r.caAnnuel,
    })),
  });
  saveHistory(entries);
}

export default function Historique() {
  const [entries, setEntries] = useState<HistoriqueEntry[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const refresh = () => setEntries(loadHistory());
    refresh();
    window.addEventListener("tjm-history-updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("tjm-history-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEntries([]);
  };

  if (entries.length === 0) return null;

  return (
    <section className="py-6">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800"
      >
        <span>{show ? "▼" : "▶"}</span>
        Historique ({entries.length} simulation{entries.length > 1 ? "s" : ""})
      </button>

      {show && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Vos dernières simulations (sauvegardées localement)</p>
            <button
              onClick={clearHistory}
              className="text-xs font-medium text-red-500 hover:text-red-700"
            >
              Effacer tout
            </button>
          </div>
          {entries.map((e) => (
            <div
              key={e.id}
              className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900">
                  {formatEuro(e.salaire)}/mois × {e.jours}j
                </p>
                <p className="text-xs text-gray-400">{e.date}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {e.resultats.map((r) => (
                  <span
                    key={r.statut}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800"
                  >
                    {r.statut.toUpperCase()} : {formatEuro(r.tjm)}/j
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
