export type Statut = "micro" | "sasu" | "eurl" | "portage";

export interface Inputs {
  salaireNetMensuel: number;
  joursParMois: number;
}

export interface Detail {
  label: string;
  valeur: number;
  description?: string;
}

export interface Resultat {
  statut: Statut;
  nom: string;
  tjmRequis: number;
  caAnnuel: number;
  netAnnuel: number;
  chargesAnnuelles: number;
  impotAnnuuel: number;
  details: Detail[];
  explication: string;
  avertissement?: string;
}
