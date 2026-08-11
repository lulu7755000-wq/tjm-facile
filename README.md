# TJM Facile

Calculateur de TJM (Taux Journalier Moyen) pour freelance en France.
Gratuit, sans inscription, 100 % dans le navigateur.

## Ce que fait le site

L'utilisateur saisit le **salaire net mensuel** qu'il vise et le **nombre de jours facturés par mois**.
Le site calcule instantanément le **TJM à facturer** (en HT) pour 4 statuts :

- Micro-entrepreneur
- SASU
- EURL
- Portage salarial

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Structure

- `src/lib/constants.ts` — les taux 2025 (à mettre à jour chaque janvier)
- `src/lib/calculations.ts` — le moteur de calcul des 4 statuts
- `src/components/` — formulaire, cartes de résultats, FAQ
- `src/app/` — pages, SEO, sitemap

## Guides

- `GUIDE-DEPLOIEMENT.md` — comment mettre le site en ligne (pour débutant total)
- `GUIDE-MAINTENANCE.md` — la maintenance annuelle et mensuelle
- `CHECKLIST.md` — la checklist avant mise en ligne

## Avertissement

Estimation indicative. Les résultats ne remplacent pas un conseil d'expert-comptable.
