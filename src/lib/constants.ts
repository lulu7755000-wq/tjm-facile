// ============================================================
// TAUX OFFICIELS 2025 (France)
// À mettre à jour chaque janvier. C'est LE fichier à modifier.
// ============================================================

export const TAUX_2025 = {
  // Micro-entrepreneur — URSSAF activités libérales (BNC), année 2025
  micro: {
    charges: 0.246, // 24.6 % de cotisations sociales (BNC non réglementé, depuis le 01/01/2025)
    abattementFrais: 0.34, // Abattement fiscal de 34 % (BNC) sur le chiffre d'affaires
    cfeMinimum: 236, // CFE minimum / an (≈, varie selon commune)
    plafondBnc: 77700, // Plafond micro BNC 2025
  },

  // SASU — assimilé salarié + dividendes
  sasu: {
    isPetit: 0.15, // IS réduit : 15 % jusqu'à 42 500 €
    isNormal: 0.25, // IS normal : 25 % au-delà
    seuilIsReduit: 42500,
    pfu: 0.30, // Flat tax 30 % sur les dividendes
  },

  // EURL — gérant majoritaire TNS (IR)
  eurl: {
    chargesTNS: 0.45, // ≈ 45 % de charges sociales TNS sur la rémunération
    abattementFrais: 0.10, // Abattement de 10 % pour frais professionnels
  },

  // Portage salarial
  portage: {
    fraisGestion: 0.08, // ≈ 8 % de frais de gestion sur le CA HT
    chargesSalariales: 0.22, // ≈ 22 % de charges salariales prélevées sur le brut
    abattementFrais: 0.10, // Abattement de 10 % pour frais professionnels
  },

  // Barème de l'impôt sur le revenu 2025 (1 part)
  ir2025: {
    tranches: [
      { plafond: 11497, taux: 0.0 },
      { plafond: 29315, taux: 0.11 },
      { plafond: 83240, taux: 0.30 },
      { plafond: 179510, taux: 0.41 },
      { plafond: Infinity, taux: 0.45 },
    ],
  },

  // Jours travaillés moyens par an pour un freelance
  joursMoyensAn: 220, // ≈ 11 mois x 20 jours
};
