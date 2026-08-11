const QUESTIONS = [
  {
    q: "C'est quoi un TJM ?",
    a: "TJM signifie Taux Journalier Moyen : c'est le montant (hors taxes) que vous facturez à votre client pour une journée de travail. C'est votre « tarif » de freelance.",
  },
  {
    q: "Quelle différence entre TJM et salaire ?",
    a: "Le salaire est ce que touche un employé. Le freelance facture un TJM, mais ce montant doit couvrir ses charges, ses impôts, ses congés, ses jours non facturés et sa protection sociale. C'est pour ça que le TJM est souvent 2 à 3 fois plus élevé qu'un salaire équivalent.",
  },
  {
    q: "Pourquoi le TJM n'est pas égal au salaire divisé par le nombre de jours ?",
    a: "Parce que sur chaque facture, l'État prélève des cotisations sociales et des impôts. En micro-entreprise par exemple, environ 23 % du CA part aux cotisations. Il faut donc facturer plus que ce que vous voulez réellement gagner.",
  },
  {
    q: "Quel statut choisir pour commencer ?",
    a: "La micro-entreprise est le plus simple et le moins risqué pour démarrer (pas de capital, comptabilité allégée). La SASU ou l'EURL deviennent intéressantes quand votre CA dépasse environ 70 000 € ou que vous voulez optimiser vos revenus.",
  },
  {
    q: "Quels sont les plafonds de la micro-entreprise en 2025 ?",
    a: "En 2025 : 188 700 € pour les activités de services et 77 700 € pour les activités libérales relevant des BNC. Attention, ces plafonds évoluent chaque année.",
  },
  {
    q: "Combien de jours facture-t-on réellement par an ?",
    a: "Un freelance facture en moyenne 180 à 220 jours par an. Le reste du temps est consacré à la prospection, l'administratif, les congés et les jours sans mission. C'est pourquoi on utilise souvent 18 jours par mois dans les simulations.",
  },
  {
    q: "C'est quoi le portage salarial ?",
    a: "Vous signez un contrat de travail avec une société de portage : elle facture vos clients, vous reverse un salaire et gère les charges. Vous êtes « salarié » mais avec la liberté d'un indépendant. En contrepartie, des frais de gestion d'environ 8 % sont prélevés.",
  },
  {
    q: "Vos calculs sont-ils fiables ?",
    a: "Ce sont des estimations 2025 basées sur les taux officiels URSSAF, le barème de l'impôt sur le revenu et l'IS. Mais chaque situation est unique (frais réels, conjoint, enfants, décote, versement libératoire...). Faites toujours valider par un expert-comptable.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-10">
      <h2 className="text-2xl font-bold text-brand-900">Questions fréquentes</h2>
      <p className="mt-1 text-sm text-gray-600">Tout ce qu&apos;il faut savoir avant de fixer votre TJM.</p>
      <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-brand-100 bg-white shadow-sm">
        {QUESTIONS.map((item) => (
          <details key={item.q} className="group p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
              {item.q}
              <span className="text-brand-500 transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
