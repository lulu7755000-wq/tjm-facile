export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-800 text-lg font-black text-white">
            €
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand-900">
            TJM<span className="text-brand-500">Facile</span>
          </span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
          <a href="#calculateur" className="hover:text-brand-700">
            Calculateur
          </a>
          <a href="#statuts" className="hover:text-brand-700">
            Les statuts
          </a>
          <a href="#faq" className="hover:text-brand-700">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
