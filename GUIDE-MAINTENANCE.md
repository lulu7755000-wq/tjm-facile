# 🛠️ GUIDE DE MAINTENANCE — TJM Facile

> Tout est déjà en place. Ce guide explique **ce que tu as à faire** et **quand**.
> La règle d'or : **ne touche à rien d'autre que ce qui est écrit ici.**

---

## 📅 TOUS LES ANS (en janvier) — Mettre à jour les taux

Les taux (URSSAF, impôts) changent chaque année en janvier.
Heureusement, tout est regroupé dans **UN SEUL fichier**.

### Étape par étape :

1. Va sur ton coffre : **https://github.com/lulu7755000-wq/tjm-facile**
2. Clique sur `src`, puis sur `lib`, puis sur **`constants.ts`**
3. Clique sur l'icône ✏️ (crayon)
4. Demande-moi (ou à un expert) les **nouveaux taux de l'année**, puis remplace
   les nombres. Les endroits à changer sont marqués par des commentaires
   (lignes qui commencent par `//`).
5. Clique **"Commit changes"** en bas.

> En 1 clic, ton site utilise les nouveaux taux. GitHub le met à jour tout seul.

---

## 📅 CHAQUE SEMAINE — Vérifier que tout va bien

| Quand | Quoi faire |
|-------|------------|
| Lundi matin | Ouvre ton site (`https://lulu7755000-wq.github.io/tjm-facile`) |
| Lundi matin | Fais un calcul rapide (ex : 5 000 € / 20 jours) pour vérifier que ça répond |

> C'est tout. Pas besoin de faire plus. Si le site s'affiche et que les calculs répondent, tout va bien.

---

## 📅 QUAND TU VEUX — Améliorer le site

Voici les seules choses "faciles" à changer sans casser quoi que ce soit :

### Changer les textes (accueil)
1. Va sur `src/app/page.tsx`
2. Modifie les textes entre les balises `<h1>...</h1>` et `<p>...</p>`
3. "Commit changes"

### Changer les questions de la FAQ
1. Va sur `src/components/FAQ.tsx`
2. Les questions sont dans la liste `QUESTIONS`. Ajoute/modifie les lignes
   `{ q: "...", a: "..." }`
3. "Commit changes"

### Changer le message de bas de page
1. Va sur `src/components/Footer.tsx`
2. Modifie le texte
3. "Commit changes"

### Ajouter un vrai domaine (ex : `mon-site.fr`) — optionnel, coûte ~10 €/an
1. Achète un domaine sur un site comme OVH, Namecheap ou Cloudflare
2. Va sur GitHub > Settings > Pages > "Custom domain"
3. Tape ton domaine, sauve, et suis les instructions de GitHub pour le DNS
4. Si besoin, demande-moi, c'est la seule partie un peu technique

---

## 🚨 SI UN JOUR ÇA CASSE

Les cas possibles et quoi faire :

| Symptôme | Cause probable | Solution |
|----------|---------------|----------|
| Page d'erreur 404 | Le site est en cours de mise à jour | Attends 1 minute et recharge |
| Les calculs ne changent plus | Un nombre a été mal modifié dans `constants.ts` | Vérifie que tous les nombres sont bien des chiffres, pas des lettres |
| Page blanche | Fichier cassé | Reviens sur le dernier fichier modifié et vérifie la syntaxe (tirets, accolades...) |

**Si tu n'arrives pas à réparer tout seul :** appelle-moi, décris-moi le problème,
et on le règle ensemble. Rien n'est irréparable tant que le site est sur GitHub.

---

## 💰 CE QUE ÇA TE COÛTE

| Chose | Coût |
|-------|------|
| Hébergement sur GitHub Pages | **0 €** |
| Le domaine `.github.io` | **0 €** |
| Un domaine personnalisé (optionnel) | ~10 €/an |

**Total si tu ne prends pas de domaine : 0 €.** Et le site peut rester en ligne des années.

---

## 🎯 RÉSUMÉ

- **Chaque janvier :** mets à jour `constants.ts` (5 minutes)
- **Chaque lundi :** ouvre le site et fais un test (1 minute)
- **Quand tu veux :** modifie les textes, la FAQ, le footer
- **Si ça casse :** ne panique pas, demande-moi

C'est tout. Ton site tourne tout seul. 🚀
