import Link from "next/link";
import type { ReactNode } from "react";

// ============================================================
// CONTENU DES ARTICLES — rédigés pour le SEO (recherches réelles)
// Chaque article renvoie vers le calculateur + les autres articles.
// ============================================================

export const ARTICLE_CONTENT: Record<string, ReactNode> = {
  "calcul-tjm": (
    <>
      <p>
        Le <strong>TJM (taux journalier moyen)</strong> est la somme que vous facturez pour une
        journée de travail. C&apos;est LA question que se pose tout freelance qui se lance :{" "}
        <em>« Combien dois-je facturer par jour pour vivre correctement ? »</em>. La bonne nouvelle :
        il existe une méthode simple, en 4 étapes, qui donne un chiffre fiable en 10 minutes.
      </p>
      <h2>Ce que le TJM doit couvrir (l&apos;erreur n°1 des débutants)</h2>
      <p>
        Un TJM ne se calcule <strong>jamais</strong> en partant de « ce que gagnent les autres ».
        Il doit d&apos;abord couvrir <strong>votre</strong> situation :
      </p>
      <ul>
        <li>vos cotisations sociales (URSSAF ou autres), qui prélèvent 15 à 45 % du chiffre d&apos;affaires selon le statut ;</li>
        <li>votre impôt sur le revenu ;</li>
        <li>les jours non facturés : prospection, formation, congés, maladie, administration ;</li>
        <li>vos frais : matériel, logiciels, comptable, assurance, déplacements.</li>
      </ul>
      <p>
        Résultat : pour encaisser <strong>3 000 € net</strong> par mois, il faut souvent facturer{" "}
        <strong>5 000 à 6 000 €</strong> par mois. C&apos;est ce décalage que la méthode ci-dessous
        calcule précisément.
      </p>
      <h2>La méthode en 4 étapes</h2>
      <h3>Étape 1 — Fixez votre objectif de revenu net mensuel</h3>
      <p>
        Prenez votre salaire net actuel (ou le revenu dont vous avez besoin pour vivre). C&apos;est
        votre point de départ : le TJM se calcule <strong>à l&apos;envers</strong>, à partir de ce
        que vous voulez gagner, et non l&apos;inverse.
      </p>
      <h3>Étape 2 — Estimez vos jours facturés par mois</h3>
      <p>
        Un freelance ne facture <strong>pas</strong> 22 jours par mois, 12 mois par an. En
        comptant les jours non facturés, la moyenne réaliste se situe entre{" "}
        <strong>16 et 20 jours par mois</strong> (soit ~200 à 220 jours par an).
      </p>
      <h3>Étape 3 — Choisissez votre statut</h3>
      <p>
        Chaque statut a ses propres cotisations, et donc un TJM différent pour un même revenu net :
      </p>
      <table>
        <thead>
          <tr>
            <th>Statut</th>
            <th>Charges principales (2025)</th>
            <th>Ce qu&apos;il faut retenir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micro-entreprise</td>
            <td>24,6 % du CA (BNC)</td>
            <td>Simple, mais pas le moins cher</td>
          </tr>
          <tr>
            <td>SASU</td>
            <td>IS 15-25 % + flat tax 30 %</td>
            <td>Optimisé quand le CA grossit</td>
          </tr>
          <tr>
            <td>EURL</td>
            <td>≈ 45 % de charges TNS</td>
            <td>Coûteux en charges, bon en retraite</td>
          </tr>
          <tr>
            <td>Portage salarial</td>
            <td>8 % de frais + 22 % de charges</td>
            <td>Zéro paperasse, net réduit</td>
          </tr>
        </tbody>
      </table>
      <h3>Étape 4 — Divisez le chiffre d&apos;affaires nécessaire par vos jours</h3>
      <p>
        Une fois les charges et l&apos;impôt ajoutés à votre objectif net, vous obtenez le chiffre
        d&apos;affaires annuel nécessaire. Divisez-le par vos jours facturés par an : c&apos;est
        votre TJM.
      </p>
      <h2>Exemple chiffré : 4 000 € net par mois, 18 jours facturés</h2>
      <table>
        <thead>
          <tr>
            <th>Statut</th>
            <th>TJM nécessaire</th>
            <th>Chiffre d&apos;affaires annuel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micro-entreprise</td>
            <td>380 €/jour</td>
            <td>74 500 €</td>
          </tr>
          <tr>
            <td>Portage salarial</td>
            <td>400 €/jour</td>
            <td>78 600 €</td>
          </tr>
<tr>
            <td>SASU</td>
            <td>430 €/jour</td>
            <td>85 800 €</td>
          </tr>
          <tr>
            <td>EURL</td>
            <td>520 €/jour</td>
            <td>102 500 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour le même revenu net, le TJM varie du simple au simple tiers selon le statut :{" "}
        <strong>le choix du statut est aussi important que le choix de votre tarif</strong>.
      </p>
      <h2>Les 3 pièges qui faussent un calcul de TJM</h2>
      <ul>
        <li>
          <strong>Oublier l&apos;impôt sur le revenu.</strong> Beaucoup de simulateurs ne le
          prennent pas en compte. C&apos;est pourtant lui qui fait passer un TJM de 340 € à 380 €.
        </li>
        <li>
          <strong>Se baser sur 22 jours facturés.</strong> En vrai, vous perdrez des jours en
          prospection, congés et administration : comptez 18 jours maximum.
        </li>
        <li>
          <strong>Copier le TJM d&apos;un collègue.</strong> Son statut, son impôt, ses jours et ses
          frais ne sont pas les vôtres. Votre TJM se calcule avec <em>vos</em> chiffres.
        </li>
      </ul>
      <p>
        Envie de connaître votre TJM exact en 30 secondes ? Utilisez le{" "}
        <strong>
          <Link href="/">calculateur de TJM gratuit</Link>
        </strong>
        : il fait tous ces calculs automatiquement, avec les taux officiels 2025.
      </p>
      <p>
        Pour aller plus loin : découvrez les{" "}
        <Link href="/blog/tjm-developpeur/">TJM pratiqués par les développeurs en 2025</Link> ou
        apprenez à{" "}
        <Link href="/blog/passer-du-salaire-au-tjm/">convertir votre salaire actuel en TJM</Link>.
      </p>
    </>
  ),

  "tjm-developpeur": (
    <>
      <p>
        Combien facture un développeur freelance en 2025 ? Les études de marché (Morgan Philips,
        Hays, Malt) s&apos;accordent : le <strong>TJM moyen des freelances en France se situe entre
        400 et 600 €</strong>, avec la médiane autour de <strong>480 €</strong>. Mais derrière cette
        moyenne se cachent des écarts énormes : de 300 € pour un junior front-end à plus de 1 000 €
        pour un expert en IA ou en cybersécurité.
      </p>
      <h2>Les TJM par technologie (fourchettes 2025)</h2>
      <table>
        <thead>
          <tr>
            <th>Spécialité</th>
            <th>Junior (0-2 ans)</th>
            <th>Confirmé (3-7 ans)</th>
            <th>Expert (8 ans et +)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Front-end (React, Angular)</td>
            <td>300-350 €</td>
            <td>450-570 €</td>
            <td>600-700 €</td>
          </tr>
          <tr>
            <td>Back-end (Java, Node, PHP)</td>
            <td>300-380 €</td>
            <td>480-650 €</td>
            <td>650-800 €</td>
          </tr>
          <tr>
            <td>Full-stack</td>
            <td>300-350 €</td>
            <td>500-600 €</td>
            <td>650-750 €</td>
          </tr>
          <tr>
            <td>Mobile (iOS / Android)</td>
            <td>320-380 €</td>
            <td>500-600 €</td>
            <td>650-750 €</td>
          </tr>
          <tr>
            <td>DevOps / Cloud</td>
            <td>400-450 €</td>
            <td>600-750 €</td>
            <td>850-1 000 €</td>
          </tr>
          <tr>
            <td>Data / IA</td>
            <td>400-450 €</td>
            <td>600-750 €</td>
            <td>800-1 000 €</td>
          </tr>
          <tr>
            <td>Cybersécurité</td>
            <td>400-450 €</td>
            <td>650-800 €</td>
            <td>900-1 100 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces fourchettes sont indicatives : le TJM réel dépend de la mission, du secteur et de votre
        parcours. Elles servent à <strong>vous situer</strong>, pas à fixer votre tarif à leur place.
      </p>
      <h2>Paris ou région : un écart de 100 à 150 €</h2>
      <p>
        L&apos;étude Morgan Philips 2025 le confirme : à expérience égale, l&apos;Île-de-France
        paie nettement mieux. Un développeur web confirmé facture <strong>700-800 €</strong> à
        Paris contre <strong>600-700 €</strong> en région. Pour un junior, l&apos;écart est de 100 €
        (450 € à Paris contre 350 € en région). Et si les missions en télétravail rapprochent les
        niveaux, le TJM reste avant tout lié au budget du client.
      </p>
      <h2>Le vrai levier : l&apos;expérience, pas la technologie</h2>
      <p>
        Le passage junior → expert fait <strong>plus que doubler</strong> le tarif, quelle que soit
        la technologie. Trois leviers pour augmenter votre TJM :
      </p>
      <ul>
        <li>
          <strong>Spécialisez-vous :</strong> un expert DevOps ou IA démarre à 850 € quand un
          généraliste front plafonne vers 600 €.
        </li>
        <li>
          <strong>Montrez des résultats :</strong> un portfolio chiffré (temps de chargement, CA
          généré, incidents évités) justifie un tarif supérieur.
        </li>
        <li>
          <strong>Négociez par projet, pas par jour :</strong> au-delà de 700 €/jour, les clients
          raisonnent plus facilement sur une enveloppe globale.
        </li>
      </ul>
      <h2>Comment calculer votre TJM, justement ?</h2>
      <p>
        Le marché vous dit ce que <em>valent</em> vos compétences. Mais votre TJM doit d&apos;abord
        couvrir <strong>vos charges et votre objectif de revenu</strong>. Un développeur qui vise
        4 000 € net par mois devra facturer <strong>380 à 520 €/jour</strong> selon son statut —
        dans la fourchette du marché pour un profil confirmé.
      </p>
      <p>
        Faites le calcul avec vos chiffres : utilisez le{" "}
        <strong>
          <Link href="/">calculateur de TJM gratuit</Link>
        </strong>{" "}
        et comparez les 4 statuts en 30 secondes.
      </p>
      <p>
        Pour aller plus loin :{" "}
        <Link href="/blog/calcul-tjm/">la méthode complète pour calculer son TJM</Link> et{" "}
        <Link href="/blog/taux-journalier-moyen/">les TJM moyens par métier</Link>.
      </p>
    </>
  ),

  "tjm-micro-entreprise": (
    <>
      <p>
        La micro-entreprise (ou auto-entreprise) est le statut préféré des freelances qui démarrent :
        zéro capital, comptabilité ultra-simple, pas de société à créer. Mais attention au piège :{" "}
        <strong>ce n&apos;est pas le statut le moins cher en charges</strong>. Voici comment
        calculer votre TJM avec les taux 2025.
      </p>
      <h2>Les taux 2025 à connaître (activité BNC)</h2>
      <ul>
        <li>
          <strong>Cotisations URSSAF : 24,6 %</strong> du chiffre d&apos;affaires encaissé (taux
          BNC non réglementé, en vigueur depuis le 1ᵉʳ janvier 2025) — c&apos;est plus élevé que le
          taux historique de 21,2 %.
        </li>
        <li>
          <strong>Abattement fiscal : 34 %</strong> (BNC). Votre impôt se calcule sur le CA moins
          cet abattement.
        </li>
        <li>
          <strong>CFE : ~236 € minimum</strong> par an (varie selon la commune). Même à zéro
          chiffre d&apos;affaires, elle reste due.
        </li>
        <li>
          <strong>Plafond : 77 700 €</strong> de CA par an (BNC). Au-delà, il faut changer de
          statut ou d&apos;année d&apos;imposition.
        </li>
      </ul>
      <h2>La formule du TJM en micro-entreprise</h2>
      <p>
        Le calcul se fait à l&apos;envers, à partir de votre objectif de revenu net :
      </p>
      <ul>
        <li>déterminez votre objectif net mensuel (ex. 4 000 €) ;</li>
        <li>ajoutez l&apos;impôt sur le revenu (barème 2025, après abattement de 34 %) ;</li>
        <li>ajoutez la CFE ;</li>
        <li>divisez le tout par (1 − 24,6 %) pour obtenir le chiffre d&apos;affaires nécessaire ;</li>
        <li>divisez enfin par vos jours facturés par mois (16 à 20).</li>
      </ul>
      <h2>Exemple : 4 000 € net par mois en micro-entreprise</h2>
      <table>
        <thead>
          <tr>
            <th>Élément</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Revenu net visé / an</td>
            <td>48 000 €</td>
          </tr>
          <tr>
            <td>Chiffre d&apos;affaires nécessaire</td>
            <td>≈ 74 500 €</td>
          </tr>
          <tr>
            <td>Cotisations URSSAF (24,6 %)</td>
            <td>≈ 18 300 €</td>
          </tr>
          <tr>
            <td>Impôt sur le revenu + CFE</td>
            <td>≈ 8 200 €</td>
          </tr>
          <tr>
            <td><strong>TJM à 18 jours/mois</strong></td>
            <td><strong>380 €/jour</strong></td>
          </tr>
        </tbody>
      </table>
      <p>
        Notez le chiffre d&apos;affaires : 74 500 €, sous le plafond de 77 700 €, mais les marges
        sont fines. Avec 4 000 € net visés et des jours facturés plus bas, vous pouvez dépasser le
        plafond — un signal pour passer en société.
      </p>
      <h2>Micro-entreprise vs SASU vs EURL : le même TJM ?</h2>
      <table>
        <thead>
          <tr>
            <th>Statut</th>
            <th>TJM (4 000 € net, 18 j)</th>
            <th>Chiffre d&apos;affaires</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Micro-entreprise</td>
            <td>380 €/jour</td>
            <td>74 500 €</td>
          </tr>
          <tr>
            <td>Portage salarial</td>
            <td>400 €/jour</td>
            <td>78 600 €</td>
          </tr>
<tr>
            <td>SASU</td>
            <td>430 €/jour</td>
            <td>85 800 €</td>
          </tr>
          <tr>
            <td>EURL</td>
            <td>520 €/jour</td>
            <td>102 500 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Pour un même net, la micro-entreprise demande le TJM le plus bas — mais uniquement parce
        qu&apos;elle cotise peu pour la retraite et la prévoyance. <strong>Comparer les statuts sur
        le TJM seul est trompeur</strong> : il faut aussi comparer ce que chaque statut vous apporte
        (protection sociale, capacité à déduire des frais, optimisation).
      </p>
      <h2>Quand quitter la micro-entreprise ?</h2>
      <ul>
        <li>quand votre CA dépasse régulièrement 77 700 € par an ;</li>
        <li>quand vous avez des frais professionnels importants (aucune déduction possible en micro) ;</li>
        <li>quand votre CA dépasse ~50 000 € : la SASU devient souvent plus avantageuse.</li>
      </ul>
      <p>
        Simulez les 4 statuts avec vos propres chiffres : utilisez le{" "}
        <strong>
          <Link href="/">calculateur de TJM gratuit</Link>
        </strong>{" "}
        — il applique les taux officiels 2025 automatiquement.
      </p>
      <p>
        Pour aller plus loin :{" "}
        <Link href="/blog/calcul-tjm/">la méthode complète pour calculer son TJM</Link> et{" "}
        <Link href="/blog/passer-du-salaire-au-tjm/">convertir son salaire en TJM</Link>.
      </p>
    </>
  ),

  "taux-journalier-moyen": (
    <>
      <p>
        Quel est le <strong>taux journalier moyen (TJM)</strong> d&apos;un freelance en France en
        2025 ? Toutes spécialités confondues : <strong>entre 400 et 600 €</strong>, avec une médiane
        autour de <strong>480 €</strong> sur les plateformes de mise en relation. Mais cette moyenne
        masque des écarts considérables selon le métier, l&apos;expérience et la région.
      </p>
      <h2>Le TJM moyen par métier en 2025</h2>
      <table>
        <thead>
          <tr>
            <th>Métier</th>
            <th>Junior</th>
            <th>Confirmé</th>
            <th>Expert</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Développement web / IT</td>
            <td>300-450 €</td>
            <td>500-750 €</td>
            <td>700-1 100 €</td>
          </tr>
          <tr>
            <td>DevOps, data, IA, cybersécurité</td>
            <td>400-450 €</td>
            <td>600-850 €</td>
            <td>900-1 100 €</td>
          </tr>
          <tr>
            <td>Design (UX/UI, graphisme)</td>
            <td>250-350 €</td>
            <td>400-550 €</td>
            <td>550-700 €</td>
          </tr>
          <tr>
            <td>Marketing / communication</td>
            <td>250-350 €</td>
            <td>400-550 €</td>
            <td>550-750 €</td>
          </tr>
          <tr>
            <td>Rédaction / contenu</td>
            <td>200-300 €</td>
            <td>300-450 €</td>
            <td>450-600 €</td>
          </tr>
          <tr>
            <td>Conseil (management, stratégie)</td>
            <td>350-450 €</td>
            <td>500-700 €</td>
            <td>700-1 200 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces chiffres proviennent des études publiées en 2025 par les cabinets de recrutement et les
        plateformes freelance (Morgan Philips, Hays, Malt). Ils sont indicatifs : le TJM réel d&apos;une
        mission dépend aussi du secteur d&apos;activité du client et de la complexité du projet.
      </p>
      <h2>Les 4 facteurs qui font varier un TJM</h2>
      <ul>
        <li>
          <strong>L&apos;expérience</strong> : le TJM d&apos;un expert est souvent 2 fois celui
          d&apos;un junior dans le même métier.
        </li>
        <li>
          <strong>La région</strong> : comptez +100 à 150 € pour l&apos;Île-de-France par rapport
          aux régions.
        </li>
        <li>
          <strong>La rareté de la compétence</strong> : plus le profil est rare (IA, cybersécurité,
          DevOps), plus le tarif grimpe.
        </li>
        <li>
          <strong>Le type de client</strong> : grandes entreprises et cabinets de conseil paient
          mieux que les PME et start-ups.
        </li>
      </ul>
      <h2>Comment savoir si votre TJM est trop bas ?</h2>
      <p>
        Comparez-le à la fois au <strong>marché</strong> et à votre <strong>seuil de rentabilité</strong> :
      </p>
      <ul>
        <li>
          Si votre TJM est inférieur de plus de 20 % à la fourchette de votre métier/expérience,
          vous vendez vos services trop bon marché.
        </li>
        <li>
          S&apos;il est inférieur à votre seuil (ce qu&apos;il vous faut pour couvrir charges,
          impôt et objectif de revenu), vous travaillez <em>à perte</em> — le cas le plus fréquent
          chez les débutants.
        </li>
      </ul>
      <p>
        Le seuil de rentabilité se calcule en 30 secondes : entrez votre objectif de revenu net, vos
        jours facturés et votre statut dans le{" "}
        <strong>
          <Link href="/">calculateur de TJM gratuit</Link>
        </strong>{" "}
        — il vous donne le TJM minimum à demander, et le compare aux 4 statuts.
      </p>
      <p>
        Pour aller plus loin :{" "}
        <Link href="/blog/tjm-developpeur/">les TJM détaillés des développeurs</Link> et{" "}
        <Link href="/blog/calcul-tjm/">la méthode pour calculer son propre TJM</Link>.
      </p>
    </>
  ),

  "passer-du-salaire-au-tjm": (
    <>
      <p>
        Vous êtes salarié et envisagez de passer freelance ? Première question :{" "}
        <em>« Mon salaire actuel correspond à quel TJM ? »</em>. Bonne nouvelle : il existe une
        règle simple pour convertir un salaire brut en tarif journalier.
      </p>
      <h2>La règle de conversion : salaire brut × 1,5 à 2,5</h2>
      <p>
        Un TJM doit couvrir, en plus de votre salaire : les cotisations, l&apos;impôt, les jours non
        facturés et les frais. Concrètement :
      </p>
      <ul>
        <li>
          <strong>Salaire brut × 1,5</strong> : minimum absolu, uniquement si vous facturez
          beaucoup de jours (22/mois) et que vous restez en micro-entreprise.
        </li>
        <li>
          <strong>Salaire brut × 2</strong> : la règle classique, adaptée à un freelance en
          micro-entreprise ou portage facturant ~18 jours/mois.
        </li>
        <li>
          <strong>Salaire brut × 2,5</strong> : à prévoir en EURL/SASU, ou si vous facturez moins de
          16 jours par mois.
        </li>
      </ul>
      <p>
        Pourquoi ce coefficient ? Parce qu&apos;un salarié est payé 100 % du temps, alors qu&apos;un
        freelance ne facture que les jours où il a une mission : prospection, congés, formation,
        admin — tout ça, c&apos;est <strong>non facturé</strong>, mais à couvrir par le TJM.
      </p>
      <h2>Tableau de conversion (exemple : salaire brut de 60 000 €)</h2>
      <table>
        <thead>
          <tr>
            <th>Salaire brut</th>
            <th>Net mensuel environ</th>
            <th>TJM à 18 j (micro)</th>
            <th>TJM à 18 j (SASU)</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td>45 000 €</td>
            <td>≈ 3 000 €</td>
            <td>≈ 270 €</td>
            <td>≈ 320 €</td>
          </tr>
          <tr>
            <td>60 000 €</td>
            <td>≈ 3 900 €</td>
            <td>≈ 370 €</td>
            <td>≈ 420 €</td>
          </tr>
          <tr>
            <td>75 000 €</td>
            <td>≈ 4 800 €</td>
            <td>≈ 460 €</td>
            <td>≈ 530 €</td>
          </tr>
          <tr>
            <td>90 000 €</td>
            <td>≈ 5 700 €</td>
            <td>≈ 560 €</td>
            <td>≈ 630 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        Ces chiffres sont des ordres de grandeur pour un profil « cadre » : les charges et
        l&apos;impôt dépendent de votre situation exacte (part de quotient familial, frais réels…).
        Ne signez pas votre première mission sur cette seule table : faites le{" "}
        <Link href="/blog/calcul-tjm/">calcul précis avec votre situation</Link>.
      </p>
      <h2>Exemple concret : viser 4 000 € net par mois</h2>
      <p>
        Un salaire brut de ~60 000 € donne environ <strong>3 900 € net/mois</strong>. En freelance,
        pour retrouver ce net en facturant 18 jours par mois, il faut selon le statut :
      </p>
      <table>
        <thead>
          <tr>
            <th>Statut</th>
            <th>TJM nécessaire</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td>Micro-entreprise</td>
            <td>370 €/jour</td>
          </tr>
          <tr>
            <td>Portage salarial</td>
            <td>390 €/jour</td>
          </tr>
          <tr>
            <td>SASU</td>
            <td>420 €/jour</td>
          </tr>
          <tr>
            <td>EURL</td>
            <td>500 €/jour</td>
          </tr>
        </tbody>
      </table>
      <p>
        La règle du « × 2 » aurait donné 390 € : on est dans la fourchette, mais le statut fait
        varier le résultat de 380 à 520 €. <strong>La règle de base donne l&apos;ordre de grandeur ;
        le statut fixe le chiffre exact.</strong>
      </p>
      <h2>Trois conseils avant de donner votre premier TJM</h2>
      <ul>
        <li>
          <strong>Ajoutez une marge de sécurité :</strong> les débutants sous-estiment toujours les
          jours non facturés. Basez-vous sur 18 jours, pas 22.
        </li>
        <li>
          <strong>Comparez avec le marché :</strong> votre TJM doit être au-dessus de votre seuil,
          mais aussi cohérent avec votre métier et votre expérience (voir les{" "}
          <Link href="/blog/tjm-developpeur/">TJM par métier</Link>).
        </li>
        <li>
          <strong>Ne négociez jamais à la baisse la première année :</strong> il est plus facile de
          baisser un TJM que de le remonter.
        </li>
      </ul>
      <p>
        Calculez votre TJM exact, avec vos chiffres et les taux 2025 : utilisez le{" "}
        <strong>
          <Link href="/">calculateur de TJM gratuit</Link>
        </strong>
        .
      </p>
      <p>
        Pour aller plus loin :{" "}
        <Link href="/blog/calcul-tjm/">la méthode complète pour calculer son TJM</Link> et{" "}
        <Link href="/blog/tjm-micro-entreprise">le TJM en micro-entreprise</Link>.
      </p>
    </>
  ),
  "tjm-eurl": (
    <>
      <p>
L&apos;<strong>EURL</strong> (entreprise unipersonnelle à responsabilité limitée) est le
        statut qui demande le <strong>TJM le plus élevé</strong> des quatre : en gérant majoritaire,
        vous êtes travailleur non salarié (TNS) avec des cotisations sociales d&apos;environ{" "}
        <strong>45 %</strong>, plus l&apos;impôt sur le revenu. Résultat : pour 3 000 € net visés, il
        faut facturer autour de <strong>370 € par jour</strong> (18 jours/mois).
      </p>
      <h2>Pourquoi le TJM EURL est plus élevé qu&apos;en micro-entreprise</h2>
      <ul>
        <li>
          <strong>Charges sociales TNS ≈45 %</strong> du bénéfice (contre 24,6 % en micro-entreprise) : la
          protection sociale est plus complète, mais elle coûte cher ;
        </li>
        <li>
          <strong>Impôt sur le revenu</strong> au barème progressif, avec abattement de 10 % ;
        </li>
        <li>
          <strong>Frais fixes</strong> : comptable (souvent obligatoire ou fortement conseillé),
          assurance RC Pro, etc.
        </li>
      </ul>
      <p>
        L&apos;EURL devient intéressante quand votre chiffre d&apos;affaires dépasse environ 70 000 €,
        ou quand vous voulez une meilleure protection sociale qu&apos;en micro-entreprise.
      </p>
      <h2>Tableau : TJM EURL par revenu net visé (18 jours/mois)</h2>
      <table>
        <thead>
          <tr>
            <th>Net mensuel visé</th>
            <th>TJM EURL (HT)</th>
            <th>CA annuel</th>
          </tr>
        </thead>
<tbody>
          <tr>
            <td>2 500 €</td>
            <td>290 €/jour</td>
            <td>≈ 58 000 €</td>
          </tr>
          <tr>
            <td>3 000 €</td>
            <td>370 €/jour</td>
            <td>≈ 72 600 €</td>
          </tr>
          <tr>
            <td>4 000 €</td>
            <td>520 €/jour</td>
            <td>≈ 102 500 €</td>
          </tr>
          <tr>
            <td>5 000 €</td>
            <td>670 €/jour</td>
            <td>≈ 132 400 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Estimations indicatives basées sur ~45 % de cotisations TNS et le barème IR 2025. Votre
          situation réelle (frais, conjoint, décote) change le résultat.
        </em>
      </p>
      <h2>Les pièges à éviter en EURL</h2>
      <ul>
        <li>
          <strong>Sous-estimer les cotisations :</strong> prévoyez toujours une marge, la première
          année on découvre les appels de cotisations avec surprise ;
        </li>
        <li>
          <strong>Oublier le comptable :</strong> la tenue de la comptabilité en EURL coûte
          1 000 à 2 500 €/an. Un bon{" "}
          <a href="https://www.dougs.fr/?utm=tjmfacile" target="_blank" rel="nofollow sponsored">
            expert-comptable en ligne comme Dougs
          </a>{" "}
          coûte souvent moitié moins cher qu&apos;un cabinet classique ;
        </li>
        <li>
          <strong>Fixer un TJM sans calculer :</strong> chaque statut change le TJM nécessaire. Ne
          reprenez pas votre ancien tarif de portage ou de micro-entreprise.
        </li>
      </ul>
      <p>
        Calculez votre TJM EURL exact avec vos chiffres :{" "}
        <strong>
          <Link href="/">ouvrir le calculateur de TJM gratuit</Link>
        </strong>{" "}
        (il compare les 4 statuts, taux 2025).
      </p>
      <p>
        À lire aussi :{" "}
        <Link href="/blog/tjm-micro-entreprise">le TJM en micro-entreprise</Link> et{" "}
        <Link href="/blog/calcul-tjm/">la méthode pour calculer son TJM</Link>.
      </p>
    </>
  ),
  "tjm-portage-salarial": (
    <>
      <p>
        Le <strong>portage salarial</strong> vous rend « salarié » d&apos;une société de portage :
        elle facture vos clients, gère les charges et vous verse un salaire. Confort administratif
        maximal, mais chaque journée facturée doit absorber{" "}
        <strong>8 % de frais de gestion + les charges salariales</strong>. Pour conserver votre
        salaire net, le TJM doit être facturé plus cher qu&apos;on ne le croit.
      </p>
      <h2>Comment se décompose votre TJM en portage</h2>
      <ul>
        <li>
          <strong>8 % de frais de gestion</strong> de la société de portage (sur le chiffre
          facturé) ;
        </li>
        <li>
          <strong>Charges salariales ≈22 %</strong> puis patronales selon la convention de
          portage ;
        </li>
        <li>
          <strong>Impôt sur le revenu</strong> prélevé à la source comme pour un salarié ;
        </li>
        <li>
          Le reste : votre <strong>net</strong>.
        </li>
      </ul>
<p>
        Exemple : pour viser 3 000 € net par mois sur 18 jours facturés, il faut un TJM d&apos;environ{" "}
        <strong>280 € HT</strong>. C&apos;est un peu plus qu&apos;en micro-entreprise (270 €), mais
        moins qu&apos;en EURL (370 €).
      </p>
      <h2>Tableau : TJM portage par net mensuel visé (18 jours/mois)</h2>
      <table>
        <thead>
          <tr>
            <th>Net mensuel visé</th>
            <th>TJM portage (HT)</th>
            <th>Frais de gestion mensuels</th>
          </tr>
        </thead>
<tbody>
          <tr>
            <td>2 500 €</td>
            <td>220 €/jour</td>
            <td>≈ 300 €</td>
          </tr>
          <tr>
            <td>3 000 €</td>
            <td>280 €/jour</td>
            <td>≈ 370 €</td>
          </tr>
          <tr>
            <td>3 500 €</td>
            <td>340 €/jour</td>
            <td>≈ 450 €</td>
          </tr>
          <tr>
            <td>4 000 €</td>
            <td>400 €/jour</td>
            <td>≈ 525 €</td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Estimations indicatives : frais de gestion 8 % + charges salariales ≈22 %. Les
          conventions collectives du portage varient légèrement selon la société.
        </em>
      </p>
      <h2>Portage ou micro-entreprise : le vrai point de bascule</h2>
      <p>
        Le portage coûte plus cher qu&apos;en micro-entreprise, mais il apporte : vrai statut
        salarié (chômage, retraite), aucun risque d&apos;erreur administrative, et une attestation
        d&apos;employeur utile pour les clients. C&apos;est la solution idéale pour{" "}
        <strong>démarrer</strong> ou pour les missions courtes. Pour un CA stable et élevé, la
        micro-entreprise ou l&apos;EURL redeviennent plus rentables.
      </p>
      <p>
        Comparez les 4 statuts sur vos propres chiffres :{" "}
        <strong>
          <Link href="/">le calculateur de TJM gratuit</Link>
        </strong>{" "}
        affiche les TJM portage, micro, SASU et EURL en un coup d&apos;œil (taux 2025).
      </p>
      <p>
        À lire aussi :{" "}
        <Link href="/blog/passer-du-salaire-au-tjm/">convertir son salaire en TJM</Link> et{" "}
        <Link href="/blog/tjm-eurl/">le TJM en EURL</Link>.
      </p>
    </>
  ),
  "tjm-debutant": (
    <>
      <p>
        Première mission, premier devis : combien facturer quand on démarre ? Ni trop bas (vous
        vous sous-vendez pour des années), ni trop haut (vous faites fuir vos premiers clients).
        La réponse : calculez d&apos;abord votre <strong>minimum vital</strong>, puis positionnez-vous
        dans la fourchette basse du marché <strong>sans casser les prix</strong>.
      </p>
      <h2>Étape 1 : votre TJM minimum (non négociable)</h2>
      <p>
        Il dépend de <strong>vos</strong> chiffres, pas du marché : revenu net visé, jours
facturés réalistes (16 à 18/mois la première année), statut et charges. Un débutant en
        micro-entreprise visant 2 000 € net/mois sur 17 jours doit facturer minimum{" "}
        <strong>≈180 €/jour</strong>. Calculez le vôtre précisément avec{" "}
        <strong>
          <Link href="/">le calculateur</Link>
        </strong>
        .
      </p>
      <h2>Étape 2 : regardez la fourchette de votre métier</h2>
      <ul>
        <li>
          <strong>Développeur junior</strong> : 300 à 450 €/jour (voir les{" "}
          <Link href="/blog/tjm-developpeur/">TJM développeur par technologie</Link>) ;
        </li>
        <li>
          <strong>Designer / webdesigner</strong> : 250 à 400 €/jour ;
        </li>
        <li>
          <strong>Rédacteur / content</strong> : 200 à 350 €/jour ;
        </li>
        <li>
          <strong>Consultant débutant</strong> : 400 à 600 €/jour si vous vendez une expertise.
        </li>
      </ul>
      <p>
        Positionnez-vous dans le <strong>quart bas</strong> de la fourchette : crédible, mais pas
        « braderie ». Ne descendez jamais sous votre TJM minimum, sinon vous travaillez à perte
        et votre marché apprend à payer ce prix.
      </p>
      <h2>Les 3 erreurs des débutants</h2>
      <ul>
        <li>
          <strong>Facturer comme un salarié horaire :</strong> le TJM couvre charges, impôts, jours
          non facturés. Multiplier un net mensuel par 2 est une approximation : utilisez la
          méthode complète ;
        </li>
        <li>
          <strong>Compter 22 jours facturés/mois :</strong> la première année, la prospection et
          l&apos;administratif mangent un tiers de votre temps. Basez-vous sur 16 à 18 jours ;
        </li>
        <li>
          <strong>Accepter la mission « pour le CV » :</strong> un taux cassé se renégocie très mal.
          Proposez plutôt une mission courte à votre vrai tarif.
        </li>
      </ul>
      <h2>Le plan des 6 premiers mois</h2>
      <ul>
        <li>
          <strong>Mois 1-2 :</strong> validez votre TJM minimum au calculateur, préparez devis et
          contrat ;
        </li>
        <li>
          <strong>Mois 3-4 :</strong> testez votre prix sur le marché, ajustez par petites touches
          (25 €/jour) ;
        </li>
        <li>
          <strong>Mois 5-6 :</strong> une fois 2-3 clients réguliers, augmentez de 10-15 % pour les
          nouveaux.
        </li>
      </ul>
      <p>
        Et gardez vos outils administratifs simples : un{" "}
        <a href="https://qonto.com/fr/invitation?via=tjmfacile" target="_blank" rel="nofollow sponsored">
          compte pro Qonto
        </a>{" "}
        en 10 minutes et un logiciel de facturation évitent les erreurs de début de parcours.
      </p>
      <p>
        Calculez votre TJM de départ :{" "}
        <strong>
          <Link href="/">ouvrir le calculateur gratuit</Link>
        </strong>
        .
      </p>
    </>
  ),
};
