import { TAUX_2025 } from "./constants";
import type { Inputs, Resultat, Statut } from "./types";

// ============================================================
// MOTEUR DE CALCUL — TJM Facile
// Formules 2025 (France) pour 4 statuts.
// Les résultats sont des ESTIMATIONS à but pédagogique.
// ============================================================

// --- Impôt sur le revenu (barème 2025, 1 part, sans décote) ---
export function impotIR(revenuImposable: number): number {
  const { tranches } = TAUX_2025.ir2025;
  let impot = 0;
  let bornePrecedente = 0;
  for (const tranche of tranches) {
    if (revenuImposable > bornePrecedente) {
      const dansTranche = Math.min(revenuImposable, tranche.plafond) - bornePrecedente;
      impot += dansTranche * tranche.taux;
    }
    bornePrecedente = tranche.plafond;
  }
  return impot;
}

// --- IS (impôt sur les sociétés) sur un résultat ---
function impotIS(resultat: number): number {
  const { isPetit, isNormal, seuilIsReduit } = TAUX_2025.sasu;
  if (resultat <= seuilIsReduit) {
    return resultat * isPetit;
  }
  return seuilIsReduit * isPetit + (resultat - seuilIsReduit) * isNormal;
}

// --- Solveur : trouve X tel que f(X) ≈ cible (itératif) ---
function resoudre(cible: number, f: (x: number) => number, xInitial: number): number {
  let x = xInitial > 0 ? xInitial : cible;
  for (let i = 0; i < 300; i++) {
    const valeur = f(x);
    if (valeur <= 0) {
      x *= 1.05;
      continue;
    }
    if (Math.abs(valeur - cible) < 1) break;
    x *= cible / valeur;
  }
  return x;
}

function arrondirTJM(tjm: number): number {
  return Math.max(0, Math.ceil(tjm / 10) * 10);
}

// --- MICRO-ENTREPRENEUR ---
function calculerMicro(inputs: Inputs): Resultat {
  const { charges, abattementFrais, cfeMinimum, plafondBnc } = TAUX_2025.micro;
  const netAnnuel = inputs.salaireNetMensuel * 12;

  // Régime réel d'imposition : cotisations sur le CA + IR sur (CA - abattement 34 %).
  const netApresTout = (ca: number) =>
    ca * (1 - charges) - impotIR(ca * (1 - abattementFrais)) - cfeMinimum;
  const caAnnuel = resoudre(netAnnuel, netApresTout, netAnnuel / (1 - charges));
  const chargesAnn = caAnnuel * charges;
  const impot = impotIR(caAnnuel * (1 - abattementFrais));
  const joursAn = inputs.joursParMois * 11;
  const depassePlafond = caAnnuel > plafondBnc;

  return {
    statut: "micro",
    nom: "Micro-entrepreneur",
    tjmRequis: arrondirTJM(caAnnuel / joursAn),
    caAnnuel,
    netAnnuel,
    chargesAnnuelles: chargesAnn,
    impotAnnuuel: impot,
    details: [
      { label: "Cotisations URSSAF (24,6 %)", valeur: chargesAnn },
      {
        label: "Impôt sur le revenu (barème, après abattement 34 %)",
        valeur: impot,
      },
      { label: "CFE minimum (approximatif)", valeur: cfeMinimum },
    ],
    explication: `Statut ultra-simple. Impôt sur le revenu au barème réel (abattement 34 %). Attention : le plafond BNC 2025 est de ${plafondBnc.toLocaleString("fr-FR")} € de CA.`,
    avertissement: depassePlafond
      ? `Votre chiffre d'affaires annuel (${caAnnuel.toLocaleString("fr-FR")} €) dépasse le plafond micro-BNC de ${plafondBnc.toLocaleString("fr-FR")} €. Au-delà, la micro-entreprise devient impossible : passez en SASU ou EURL.`
      : undefined,
  };
}

// --- SASU (dividendes, flat tax) ---
function calculerSasu(inputs: Inputs): Resultat {
  const { pfu } = TAUX_2025.sasu;
  const netAnnuel = inputs.salaireNetMensuel * 12;

  // Modèle "tout en dividendes" : résultat - IS -> dividende -> flat tax 30 % (PFU).
  const netApresTout = (ca: number) => {
    const is = impotIS(ca);
    const dividende = ca - is;
    return dividende * (1 - pfu);
  };
  const caAnnuel = resoudre(netAnnuel, netApresTout, netAnnuel / (1 - pfu));
  const is = impotIS(caAnnuel);
  const dividende = caAnnuel - is;
  const pfuMontant = dividende * pfu;
  const joursAn = inputs.joursParMois * 11;

  return {
    statut: "sasu",
    nom: "SASU",
    tjmRequis: arrondirTJM(caAnnuel / joursAn),
    caAnnuel,
    netAnnuel,
    chargesAnnuelles: is,
    impotAnnuuel: pfuMontant,
    details: [
      { label: "IS (15 % ou 25 %)", valeur: is },
      {
        label: "Flat tax sur dividendes (30 %)",
        valeur: pfuMontant,
      },
    ],
    explication:
      "Modèle 'dividendes' simplifié (sans rémunération salariale). La flat tax de 30 % (PFU) s'applique sur le montant des dividendes versés.",
  };
}

// --- EURL (gérant majoritaire TNS) ---
function calculerEurl(inputs: Inputs): Resultat {
  const { chargesTNS, abattementFrais } = TAUX_2025.eurl;
  const netAnnuel = inputs.salaireNetMensuel * 12;

  // net = remuneration * (1 - chargesTNS) - impotIR(netSocial * (1 - abattement))
  const netApresTout = (remuneration: number) => {
    const netSocial = remuneration * (1 - chargesTNS);
    const baseIR = netSocial * (1 - abattementFrais);
    return netSocial - impotIR(baseIR);
  };
  const remuneration = resoudre(netAnnuel, netApresTout, netAnnuel / (1 - chargesTNS));
  const chargesAnn = remuneration * chargesTNS;
  const impot = impotIR(remuneration * (1 - chargesTNS) * (1 - abattementFrais));
  // Le CA à facturer ≈ rémunération brute (charges comprises dans le taux)
  const caAnnuel = remuneration;
  const joursAn = inputs.joursParMois * 11;

  return {
    statut: "eurl",
    nom: "EURL",
    tjmRequis: arrondirTJM(caAnnuel / joursAn),
    caAnnuel,
    netAnnuel,
    chargesAnnuelles: chargesAnn,
    impotAnnuuel: impot,
    details: [
      { label: "Cotisations sociales TNS (≈45 %)", valeur: chargesAnn },
      { label: "Impôt sur le revenu (barème 2025)", valeur: impot },
    ],
    explication:
      "Gérant majoritaire = travailleur non salarié. Charges sociales ≈45 %, impôt sur le revenu progressif avec abattement de 10 %.",
  };
}

// --- PORTAGE SALARIAL ---
function calculerPortage(inputs: Inputs): Resultat {
  const { fraisGestion, chargesSalariales, abattementFrais } = TAUX_2025.portage;
  const netAnnuel = inputs.salaireNetMensuel * 12;

  // brut = CA * (1 - fraisGestion)
  // net = brut * (1 - chargesSalariales)
  // net final = net - impotIR(net * (1 - abattement))
  const netApresTout = (ca: number) => {
    const brut = ca * (1 - fraisGestion);
    const net = brut * (1 - chargesSalariales);
    return net - impotIR(net * (1 - abattementFrais));
  };
  const caAnnuel = resoudre(netAnnuel, netApresTout, netAnnuel);
  const brut = caAnnuel * (1 - fraisGestion);
  const net = brut * (1 - chargesSalariales);
  const chargesAnn = caAnnuel * fraisGestion + (brut - net);
  const impot = impotIR(net * (1 - abattementFrais));
  const joursAn = inputs.joursParMois * 11;

  return {
    statut: "portage",
    nom: "Portage salarial",
    tjmRequis: arrondirTJM(caAnnuel / joursAn),
    caAnnuel,
    netAnnuel,
    chargesAnnuelles: chargesAnn,
    impotAnnuuel: impot,
    details: [
      { label: "Frais de gestion société de portage (8 %)", valeur: caAnnuel * fraisGestion },
      { label: "Charges salariales", valeur: brut - net },
      { label: "Impôt sur le revenu", valeur: impot },
    ],
    explication:
      "Vous êtes salarié d'une société de portage. Frais de gestion ≈8 % + charges salariales ≈22 % + impôt sur le revenu.",
  };
}

export function calculerTous(inputs: Inputs): Resultat[] {
  const ordre: Statut[] = ["micro", "sasu", "eurl", "portage"];
  const map: Record<Statut, Resultat> = {
    micro: calculerMicro(inputs),
    sasu: calculerSasu(inputs),
    eurl: calculerEurl(inputs),
    portage: calculerPortage(inputs),
  };
  return ordre.map((s) => map[s]);
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}
