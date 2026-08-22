import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <script
        dangerouslySetInnerHTML={{
          __html: `if(location.pathname.includes('/tjm-facile/tjm-facile'))location.replace(location.pathname.replace('/tjm-facile/tjm-facile','/tjm-facile'));`,
        }}
      />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-6xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-900">Page introuvable</h1>
        <p className="mt-2 text-gray-600">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-brand-800 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700"
        >
          ← Retour au calculateur TJM
        </Link>
      </main>
    </>
  );
}
