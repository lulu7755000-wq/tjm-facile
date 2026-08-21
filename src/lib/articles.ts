export type Article = {
  slug: string;
  titre: string;
  description: string;
  date: string;
  lectureMinutes: number;
  keywords: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "calcul-tjm",
    titre: "Calcul TJM : la méthode simple pour fixer son taux journalier",
    description:
      "La méthode en 4 étapes pour calculer son TJM en 2025 : objectif de revenu, jours facturés, statut et charges. Avec des exemples chiffrés et les pièges à éviter.",
    date: "2026-08-11",
    lectureMinutes: 5,
    keywords: ["calcul tjm", "tjm", "taux journalier", "calculer son tjm"],
  },
  {
    slug: "tjm-developpeur",
    titre: "TJM développeur 2025 : combien facturer sa journée ?",
    description:
      "Les TJM pratiqués en 2025 par les développeurs freelance en France : par technologie (front, back, fullstack, mobile, DevOps, data) et par niveau d'expérience.",
    date: "2026-08-11",
    lectureMinutes: 5,
    keywords: ["tjm developpeur", "tjm freelance", "tarif jour developpeur", "tjm informatique"],
  },
  {
    slug: "tjm-micro-entreprise",
    titre: "TJM micro-entreprise : combien facturer par jour en 2025 ?",
    description:
      "Le statut le plus simple, mais pas le moins cher en charges. Comment calculer son TJM en micro-entreprise avec les taux 2025 (24,6 % de cotisations).",
    date: "2026-08-11",
    lectureMinutes: 4,
    keywords: ["tjm micro entreprise", "micro entreprise tarif journalier", "auto entrepreneur tjm"],
  },
  {
    slug: "taux-journalier-moyen",
    titre: "Taux journalier moyen (TJM) en France 2025 : les chiffres par métier",
    description:
      "Quel est le taux journalier moyen en France en 2025 ? Les fourchettes réelles par métier : développement, design, marketing, rédaction, data, cybersécurité.",
    date: "2026-08-11",
    lectureMinutes: 4,
    keywords: ["taux journalier moyen", "tjm moyen", "tjm par metier", "tjm france 2025"],
  },
  {
    slug: "passer-du-salaire-au-tjm",
    titre: "Passer du salaire au TJM : convertir son salaire en tarif journalier",
    description:
      "Vous êtes salarié et voulez passer freelance ? La règle simple pour convertir votre salaire brut en TJM, avec un tableau par statut et des exemples.",
    date: "2026-08-11",
    lectureMinutes: 4,
    keywords: ["passer du salaire au tjm", "salaire vers freelance", "convertir salaire tjm"],
  },
  {
    slug: "tjm-eurl",
    titre: "TJM EURL : combien facturer en tant que gérant majoritaire ?",
    description:
      "Le TJM en EURL est le plus élevé des 4 statuts : charges sociales TNS ≈45 %. Le calcul complet, le tableau par revenu visé et les pièges à éviter.",
    date: "2026-08-14",
    lectureMinutes: 5,
    keywords: ["tjm eurl", "eurl tarif journalier", "gérant majoritaire tjm", "eurl charges"],
  },
  {
    slug: "tjm-portage-salarial",
    titre: "TJM portage salarial : le calcul complet pour rester gagnant",
    description:
      "En portage salarial, 8 % de frais de gestion et des charges salariales s'ajoutent à votre TJM. Combien facturer pour garder le même net que salarié ?",
    date: "2026-08-14",
    lectureMinutes: 5,
    keywords: ["tjm portage salarial", "portage salarial tarif", "tjm portage", "salaire portage salarial"],
  },
  {
    slug: "tjm-debutant",
    titre: "TJM débutant : combien facturer sa première année de freelance ?",
    description:
      "Vous vous lancez sans expérience de facturation ? Les fourchettes réalistes, la méthode pour ne pas se sous-vendre et les erreurs classiques des débutants.",
    date: "2026-08-14",
    lectureMinutes: 4,
    keywords: ["tjm debutant", "combien facturer freelance debutant", "tjm premiere annee", "se lancer freelance tarif"],
  },
  {
    slug: "tjm-sasu",
    titre: "TJM SASU 2025 : combien facturer en SASU pour bien gagner sa vie ?",
    description:
      "Le statut prefere des freelances qui veulent optimiser : IS a 15 %, flat tax 30 % et remuneration souple. Le calcul complet du TJM en SASU avec tableaux par revenu vise.",
    date: "2026-08-21",
    lectureMinutes: 5,
    keywords: ["tjm sasu", "sasu tarif journalier", "president sasu tjm", "sasu charges 2025"],
  },
  {
    slug: "tjm-graphiste",
    titre: "TJM graphiste freelance 2025 : combien facture un designer ?",
    description:
      "TJM d'un graphiste freelance en 2025 par specialite : identite visuelle, UI/UX, illustration, motion design et direction artistique. Les vrais chiffres du marche.",
    date: "2026-08-21",
    lectureMinutes: 4,
    keywords: ["tjm graphiste", "tarif graphiste freelance", "tjm designer", "graphiste freelance tarif"],
  },
  {
    slug: "tjm-consultant",
    titre: "TJM consultant freelance 2025 : combien facture un consultant ?",
    description:
      "Combien facture un consultant freelance en 2025 ? Les TJM par specialite (strategie, IT, management, RH) et par experience, avec les leviers pour augmenter son tarif.",
    date: "2026-08-21",
    lectureMinutes: 5,
    keywords: ["tjm consultant", "consultant freelance tarif", "taux journalier consultant", "consultant independant tjm"],
  },
  {
    slug: "tjm-impots",
    titre: "TJM et impots 2025 : combien vous reste-t-il vraiment dans la poche ?",
    description:
      "Le poste oublie du TJM : l'impot sur le revenu. Combien l'Etat preleve selon votre statut (micro, SASU, EURL, portage) et comment ne pas se tromper dans son calcul.",
    date: "2026-08-21",
    lectureMinutes: 5,
    keywords: ["tjm impots", "tjm net apres impots", "fiscalite freelance", "impot freelance tjm"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const SITE_URL = "https://lulu7755000-wq.github.io/tjm-facile";

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
