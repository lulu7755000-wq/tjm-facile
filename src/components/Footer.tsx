import Link from "next/link";
export default function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © {annee} TJM Facile — Simulateur d&apos;estimation. Résultats indicatifs, ne
            remplacent pas un conseil d&apos;expert-comptable.
          </p>
          <div className="flex gap-6">
            <Link href="/faq/" className="hover:text-brand-700">
              FAQ
            </Link>
            <Link href="/statuts/" className="hover:text-brand-700">
              Statuts
            </Link>
            <Link href="/blog/" className="hover:text-brand-700">
              Blog
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          Taux : URSSAF, barème impôt sur le revenu et impôt sur les sociétés — année 2025 (France).
        </p>
      </div>
    </footer>
  );
}
