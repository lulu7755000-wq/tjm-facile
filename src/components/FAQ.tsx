import { QUESTIONS } from "@/lib/faq";

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
