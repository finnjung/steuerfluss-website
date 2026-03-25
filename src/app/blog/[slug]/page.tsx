import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-[var(--foreground)] mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--foreground-muted)] mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 text-[var(--foreground-muted)] space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 text-[var(--foreground-muted)] space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[var(--foreground-muted)]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[var(--primary)] hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--foreground-muted)] my-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[var(--background-secondary)] px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[var(--background-secondary)] p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6 rounded-lg border border-[var(--border)]">
      <table className="w-full text-sm text-left" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-[var(--border)]" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-[var(--background-secondary)] transition-colors" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-[var(--foreground)]" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-[var(--foreground-muted)]" {...props} />
  ),
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="text-xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-6 text-sm text-[var(--foreground-muted)]">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-[var(--border)] mb-8" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="bg-[var(--background-secondary)] rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Bereit, deine Buchhaltung zu vereinfachen?
            </h3>
            <p className="text-[var(--foreground-muted)] mb-4">
              Starte jetzt kostenlos mit SteuerFluss und spare Zeit bei deiner Buchhaltung.
            </p>
            <a
              href="https://app.steuer-fluss.de"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
            >
              Kostenlos starten
            </a>
          </div>
        </footer>
      </div>
    </article>
  )
}
