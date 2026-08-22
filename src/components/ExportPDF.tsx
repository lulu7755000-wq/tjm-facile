"use client";

import { useRef } from "react";
import { formatEuro } from "@/lib/calculations";
import type { Resultat } from "@/lib/types";

interface Props {
  resultats: Resultat[];
  salaire: number;
  jours: number;
}

export default function ExportPDF({ resultats, salaire, jours }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const exportPDF = () => {
    const rows = resultats
      .map(
        (r) => `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #eee;font-weight:600">${r.nom}</td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;font-size:1.3em;color:#1e40af">${formatEuro(r.tjmRequis)}</td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right">${formatEuro(r.caAnnuel)}</td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;color:#dc2626">− ${formatEuro(r.chargesAnnuelles + r.impotAnnuuel)}</td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;color:#16a34a">${formatEuro(r.netAnnuel)}</td>
        </tr>`
      )
      .join("");

    const details = resultats
      .map(
        (r) => `
        <div style="margin-top:20px;page-break-inside:avoid">
          <h3 style="color:#1e293b;border-bottom:2px solid #3b82f6;padding-bottom:6px">${r.nom} — TJM ${formatEuro(r.tjmRequis)}/jour</h3>
          <p style="color:#64748b;font-size:13px;margin:8px 0">${r.explication}</p>
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            ${r.details
              .map(
                (d) => `
              <tr>
                <td style="padding:6px 0;color:#475569">${d.label}</td>
                <td style="padding:6px 0;text-align:right;font-weight:600">${formatEuro(d.valeur)}</td>
              </tr>`
              )
              .join("")}
          </table>
          ${r.avertissement ? `<p style="background:#fef3c7;border:1px solid #f59e0b;border-radius:6px;padding:8px 12px;font-size:12px;margin-top:8px">⚠️ ${r.avertissement}</p>` : ""}
        </div>`
      )
      .join("");

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1e293b; padding: 30px; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  h2 { font-size: 16px; color: #3b82f6; margin-top: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
  table { width: 100%; border-collapse: collapse; margin-top: 12px; }
  .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
  .subtitle { color: #64748b; font-size: 14px; }
  .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px; }
  @media print { body { padding: 15px; } }
</style></head><body>
  <div class="header">
    <h1>📊 Simulation TJM — TJM Facile</h1>
    <p class="subtitle">Salaire net visé : ${formatEuro(salaire)}/mois · ${jours} jours facturés/mois</p>
    <p class="subtitle">Généré le ${new Date().toLocaleDateString("fr-FR")} · Taux 2025</p>
  </div>

  <h2>Résumé comparatif</h2>
  <table>
    <tr style="background:#f8fafc">
      <th style="padding:10px;text-align:left;font-size:12px;color:#64748b">Statut</th>
      <th style="padding:10px;text-align:right;font-size:12px;color:#64748b">TJM HT</th>
      <th style="padding:10px;text-align:right;font-size:12px;color:#64748b">CA annuel</th>
      <th style="padding:10px;text-align:right;font-size:12px;color:#64748b">Charges + Impôts</th>
      <th style="padding:10px;text-align:right;font-size:12px;color:#64748b">Net annuel</th>
    </tr>
    ${rows}
  </table>

  <h2>Détails par statut</h2>
  ${details}

  <div class="footer">
    <p>Ce document est une estimation indicative. Les charges réelles varient selon votre activité, vos frais réels et votre situation familiale.</p>
    <p>Faites valider par un expert-comptable avant de fixer votre TJM. · tjm-facile.github.io</p>
  </div>
</body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    if (iframeRef.current) {
      iframeRef.current.src = url;
      iframeRef.current.onload = () => {
        iframeRef.current?.contentWindow?.print();
      };
    }
  };

  return (
    <>
      <button
        onClick={exportPDF}
        className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Exporter en PDF
      </button>
      <iframe ref={iframeRef} className="hidden" title="export-pdf" />
    </>
  );
}
