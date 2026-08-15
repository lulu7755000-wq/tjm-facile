import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCTA from "@/components/ArticleCTA";
import { ARTICLES, getArticle, formatDate, SITE_URL } from "@/lib/articles";
import { ARTICLE_CONTENT } from "@/lib/article-content";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.titre,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}/`,
    },
    openGraph: {
      title: article.titre,
      description: article.description,
      type: "article",
      locale: "fr_FR",
      url: `${SITE_URL}/blog/${article.slug}/`,
      publishedTime: article.date,
      modifiedTime: article.date,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const autres = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titre,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr",
    author: {
      "@type": "Organization",
      name: "TJM Facile",
    },
    publisher: {
      "@type": "Organization",
      name: "TJM Facile",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}/`,
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/blog/" className="text-sm font-medium text-brand-600 hover:text-brand-800">
          ← Tous les guides
        </Link>
        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-brand-900 sm:text-4xl">
          {article.titre}
        </h1>
        <p className="mt-3 text-sm text-gray-400">
          {formatDate(article.date)} · {article.lectureMinutes} min de lecture · Gratuit
        </p>
        <div className="article-body mt-8">{ARTICLE_CONTENT[article.slug]}</div>
        <ArticleCTA />
        <div className="mt-10 border-t border-brand-100 pt-6">
          <p className="text-sm font-bold text-gray-500">À lire aussi</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {autres.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}/`}
                className="rounded-xl border border-brand-100 bg-white p-4 text-sm font-semibold text-gray-800 hover:border-brand-300 hover:text-brand-700"
              >
                {a.titre}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
