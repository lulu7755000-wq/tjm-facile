# 🚀 GUIDE DE DÉPLOIEMENT — TJM Facile

> **Lis-moi jusqu'au bout.** C'est écrit pour quelqu'un qui n'y connaît RIEN.
> Si tu bloques à une étape, recommence doucement depuis le début de l'étape.

---

## 📖 L'histoire en une phrase (lis ça d'abord)

Ton site existe déjà, tout est écrit dans le dossier `tjm-facile/`.
Il faut juste le **mettre sur Internet** pour que n'importe qui puisse l'ouvrir.

Ça se fait en **3 grandes étapes** :

1. **Envoyer le dossier sur GitHub** (c'est comme mettre tes fichiers dans un coffre en ligne)
2. **Ouvrir le site sur ton écran** (pour vérifier qu'il marche)
3. **Mettre le site en ligne pour de vrai** (sur Vercel, gratuit)

---

## 🛑 AVANT DE COMMENCER — Vérifie que tu as tout

| Chose | C'est quoi ? | Tu l'as ? |
|-------|--------------|-----------|
| **Compte GitHub** | Compte en ligne (tu l'as déjà fait ✅) | ✅ Oui |
| **Navigateur** | Chrome, Edge, Firefox… | ✅ Oui |
| **Le dossier `tjm-facile`** | Sur ton ordinateur | ✅ Oui (je l'ai créé) |

**Pas besoin d'installer Git, pas besoin de Node.js, pas besoin de VS Code.** On fait tout dans le navigateur. Beaucoup plus simple.

---

# ✅ ÉTAPE 1 — Créer le "coffre" sur GitHub (5 minutes)

**But :** créer une page vide sur GitHub qui va recevoir ton site.

1. Ouvre ton navigateur et va sur : **https://github.com/new**
   > Tu dois être connecté avec ton compte (username : `lulu7755000-wq`).
   > Si tu n'es pas connecté, GitHub te demandera de te connecter d'abord.

2. Dans la case **"Repository name"**, tape exactement :
   ```
   tjm-facile
   ```
   > Le nom fait apparaître l'adresse du site : `lulu7755000-wq.github.io/tjm-facile`

3. Choisis **"Public"** (coche le rond "Public").
   > Public = tout le monde peut voir le site. C'est ce qu'on veut.

4. **NE COCHE PAS** "Add a README file". On veut un coffre **vide**.

5. Clique le bouton vert **"Create repository"** en bas de page.

6. 🎉 **Bravo !** Tu es sur la page de ton coffre (il est vide pour l'instant).

---

# ✅ ÉTAPE 2 — Mettre les fichiers du site dans le coffre (10 minutes)

**But :** copier tous les fichiers du dossier `tjm-facile` vers GitHub.

1. Toujours sur la page de ton coffre (à l'étape précédente), cherche le lien
   **"uploading an existing file"** (en dessous du gros titre "Quick setup").
   → Clique dessus.

2. Tu arrives sur une page avec une grosse zone en pointillés :
   **"Drag and drop files here"**.

3. Ouvre l'explorateur de fichiers de Windows (le dossier jaune dans la barre des tâches)
   et va dans :
   ```
   Ce PC > Documents > Default Project > breaknews-bot-sport > tjm-facile
   ```

4. **Sélectionne TOUS les fichiers ET dossiers** à l'intérieur de `tjm-facile` :
   - Clique une première fois à côté (dans le vide) pour ne rien sélectionner
   - Puis fais **Ctrl + A** (tout sélectionner) **puis Ctrl + C** (copier)
   - Reviens sur la page GitHub et fais **Ctrl + V** (coller)
   > ⚠️ **IMPORTANT** : colle le **CONTENU** du dossier `tjm-facile`, pas le dossier lui-même.
   > Tu dois voir dans la zone : `src`, `public`, `package.json`, `next.config.js`, etc.
   > Si tu vois un seul dossier `tjm-facile` qui contient tout, c'est qu'il y a un dossier en trop.

5. En dessous de la zone, dans **"Commit changes"**, tu peux taper un petit message, par exemple :
   ```
   Version 1 du site
   ```

6. Clique le bouton vert **"Commit changes"**.

7. ⏳ Attends quelques secondes. Quand c'est fini, la page de ton coffre montre
   tous les fichiers. ✅ **Étape 2 terminée !**

---

# ✅ ÉTAPE 3 — Activer le site automatique (5 minutes)

**But :** GitHub va fabriquer le site tout seul et lui donner une adresse.

1. Retourne à la page d'accueil de ton coffre :
   **https://github.com/lulu7755000-wq/tjm-facile**

2. Clique sur l'onglet **"Settings"** (tout en haut à droite).

3. Dans le menu de gauche, clique sur **"Pages"**.

4. Dans **"Source"**, il y a un menu déroulant avec écrit **"None"**.
   → Clique dessus et choisis **"Deploy from a branch"**.

5. Juste en dessous, choisis la branche **"main"** et le dossier **"/(root)"**
   (ça doit déjà être réglé comme ça, vérifie juste).

6. Clique le bouton **"Save"**.

7. ⏳ Attends **1 à 3 minutes**. GitHub construit ton site.

8. Rafraîchis la page (bouton recharger du navigateur). Quand ça devient vert,
   GitHub t'affiche l'adresse du site :
   ```
   https://lulu7755000-wq.github.io/tjm-facile
   ```

9. 👉 **CLIQUE SUR CETTE ADRESSE.** Ton site s'ouvre ! 🎉🎉🎉

> Si tu vois une page d'erreur : attends 1 minute et recharge. Parfois ça prend un peu plus de temps.

---

# ✅ ÉTAPE 4 — Vérifier que le site marche (2 minutes)

Sur ton site ouvert, fais ces 3 tests :

1. La page montre bien **"Combien facturer par jour pour gagner votre salaire net ?"**
2. Dans les 2 cases, il y a **4 000 €** et **18 jours**.
3. Les 4 cartes s'affichent : **Micro-entrepreneur**, **SASU**, **EURL**, **Portage salarial**.

**Petit test amusant :** change le salaire de 4 000 à 6 000 €.
Regarde : les TJM augmentent instantanément. C'est normal, c'est le but !

---

# 🎉 C'EST FINI — Ton site est en ligne !

Maintenant, **tout le monde** peut ouvrir ton site avec cette adresse :
```
https://lulu7755000-wq.github.io/tjm-facile
```

Partage-la sur Instagram, TikTok, Twitter, Facebook… c'est ton premier site !

---

## ❓ SI QUELQUE CHOSE NE VA PAS

### "La page montre une erreur 404"
- Attends 1 minute et recharge la page (GitHub construit encore).
- Vérifie que tu as bien collé le **contenu** du dossier, pas un dossier `tjm-facile` en trop.
  → Va sur ton coffre (https://github.com/lulu7755000-wq/tjm-facile) et vérifie que tu vois `src` et `public` directement à la racine.

### "Je ne vois pas le bouton Pages dans Settings"
- Relis l'étape 3. Le bouton **"Pages"** est dans le menu de **gauche**, vers le bas de la liste.

### "Le site s'affiche mais les calculs semblent bizarres"
- C'est normal, ce sont des **estimations**. Les montants exacts dépendent de la situation de chaque personne. C'est écrit sur le site.

### "Je veux changer les couleurs ou les textes"
- Tout se passe dans le fichier `src/app/page.tsx` et `src/lib/constants.ts`.
- Mais ce n'est PAS nécessaire pour commencer. On verra ça plus tard.

---

## 💡 BONUS : comment modifier ton site plus tard

Quand tu voudras changer quelque chose :

1. Va sur ton coffre : **https://github.com/lulu7755000-wq/tjm-facile**
2. Clique sur le fichier que tu veux modifier (ex : `src/app/page.tsx`)
3. Clique sur l'icône ✏️ (crayon, en haut à droite du fichier)
4. Modifie le texte
5. Clique **"Commit changes"** en bas de page

→ GitHub refait ton site tout seul, et l'adresse reste la même. Magique.

---

# 🏁 RÉSUMÉ EN 1 MINUTE

| Étape | Quoi | Où |
|-------|------|-----|
| 1 | Créer le coffre `tjm-facile` | github.com/new |
| 2 | Coller les fichiers dedans | bouton "uploading an existing file" |
| 3 | Activer GitHub Pages | Settings > Pages > Save |
| 4 | Vérifier le site | l'adresse verte dans Settings > Pages |
| 🎉 | C'est en ligne ! | `https://lulu7755000-wq.github.io/tjm-facile` |

**Bonne chance ! Tu as créé ton premier site Web. 🚀**
