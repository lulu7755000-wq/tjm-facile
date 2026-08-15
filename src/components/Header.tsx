import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-800 text-lg font-black text-white">
            €
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand-900">
            TJM<span className="text-brand-500">Facile</span>
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
          <Link href="/#calculateur" className="hover:text-brand-700">
            Calculateur
          </Link>
          <Link href="/statuts/" className="hover:text-brand-700">
            Les statuts
          </Link>
          <Link href="/faq/" className="hover:text-brand-700">
            FAQ
          </Link>
          <Link href="/blog/" className="font-semibold text-brand-700 hover:text-brand-900">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
