export type Metier = {
  slug: string;
  nom: string;
  categorie: string;
  tjmMin: number;
  tjmMax: number;
  tjmMoyen: number;
  description: string;
};

export type Region = {
  slug: string;
  nom: string;
  modifier: number; // multiplicateur sur le TJM (1.0 = moyenne nationale)
};

export const METIERS: Metier[] = [
  // Tech
  { slug: "dev-web", nom: "Développeur web", categorie: "Tech", tjmMin: 300, tjmMax: 700, tjmMoyen: 450, description: "Frontend, backend, fullstack. React, Node, PHP, Python..." },
  { slug: "dev-mobile", nom: "Développeur mobile", categorie: "Tech", tjmMin: 350, tjmMax: 750, tjmMoyen: 500, description: "iOS, Android, React Native, Flutter." },
  { slug: "devops", nom: "DevOps / Cloud", categorie: "Tech", tjmMin: 400, tjmMax: 800, tjmMoyen: 550, description: "AWS, Azure, Docker, Kubernetes, CI/CD." },
  { slug: "data-engineer", nom: "Data Engineer", categorie: "Tech", tjmMin: 400, tjmMax: 800, tjmMoyen: 550, description: "Pipelines, ETL, Spark, BigQuery." },
  { slug: "data-scientist", nom: "Data Scientist / IA", categorie: "Tech", tjmMin: 450, tjmMax: 900, tjmMoyen: 600, description: "Machine learning, modèles IA, Python, TensorFlow." },
  { slug: "cybersec", nom: "Cybersécurité", categorie: "Tech", tjmMin: 400, tjmMax: 850, tjmMoyen: 550, description: "Audit, pentest, SOC, conformité RGPD." },
  // Design
  { slug: "ui-ux", nom: "Designer UI/UX", categorie: "Design", tjmMin: 300, tjmMax: 600, tjmMoyen: 400, description: "Design d'interfaces, prototypes, Figma." },
  { slug: "graphiste", nom: "Graphiste / Branding", categorie: "Design", tjmMin: 200, tjmMax: 500, tjmMoyen: 300, description: "Identité visuelle, logo, print." },
  { slug: "motion", nom: "Motion Designer", categorie: "Design", tjmMin: 300, tjmMax: 600, tjmMoyen: 400, description: "Animation, After Effects,vidéo." },
  // Marketing & Conseil
  { slug: "consultant-it", nom: "Consultant IT", categorie: "Conseil", tjmMin: 400, tjmMax: 900, tjmMoyen: 600, description: "Stratégie digitale, architecture, management de projet." },
  { slug: "product-owner", nom: "Product Owner", categorie: "Conseil", tjmMin: 350, tjmMax: 700, tjmMoyen: 500, description: "Gestion de produit, agile, roadmap." },
  { slug: "marketeur", nom: "Marketeur digital", categorie: "Marketing", tjmMin: 250, tjmMax: 550, tjmMoyen: 350, description: "SEO, SEA, social media, email." },
  { slug: "redacteur", nom: "Rédacteur web / SEO", categorie: "Marketing", tjmMin: 150, tjmMax: 400, tjmMoyen: 250, description: "Contenu, blogs, articles, copywriting." },
  { slug: "community-manager", nom: "Community Manager", categorie: "Marketing", tjmMin: 150, tjmMax: 350, tjmMoyen: 220, description: "Réseaux sociaux, modération, engagement." },
  // Autres
  { slug: "formateur", nom: "Formateur", categorie: "Éducation", tjmMin: 250, tjmMax: 600, tjmMoyen: 350, description: "Formation tech, workshops, coaching." },
  { slug: "video", nom: "Vidéaste / Monteur", categorie: "Création", tjmMin: 200, tjmMax: 500, tjmMoyen: 300, description: "Montage, production, motion graphics." },
];

export const REGIONS: Region[] = [
  { slug: "ile-de-france", nom: "Île-de-France", modifier: 1.15 },
  { slug: "lyon", nom: "Lyon / Auvergne-Rhône-Alpes", modifier: 1.05 },
  { slug: "paris", nom: "Paris (intra-muros)", modifier: 1.20 },
  { slug: "marseille", nom: "Marseille / Provence", modifier: 0.95 },
  { slug: "toulouse", nom: "Toulouse / Occitanie", modifier: 1.00 },
  { slug: "nantes", nom: "Nantes / Pays de la Loire", modifier: 1.00 },
  { slug: "bordeaux", nom: "Bordeaux / Nouvelle-Aquitaine", modifier: 0.98 },
  { slug: "lille", nom: "Lille / Hauts-de-France", modifier: 0.98 },
  { slug: "strasbourg", nom: "Strasbourg / Grand Est", modifier: 0.95 },
  { slug: "remote", nom: "100% remote (France)", modifier: 1.00 },
  { slug: "remote-eu", nom: "Remote Europe", modifier: 1.10 },
  { slug: "norme", nom: "Autre région (norme nationale)", modifier: 1.00 },
];

export const CATEGORIES_METIERS = Array.from(new Set(METIERS.map((m) => m.categorie)));

export function getMetier(slug: string): Metier | undefined {
  return METIERS.find((m) => m.slug === slug);
}

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}

export function appliquerRegion(tjm: number, region: Region): number {
  return Math.round(tjm * region.modifier / 10) * 10;
}
