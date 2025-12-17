import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Blog - Steuertipps und Buchhaltung',
  description:
    'Im SteuerFluss Blog findest du hilfreiche Tipps rund um Steuern, Buchhaltung und Selbstständigkeit. Bleib auf dem Laufenden!',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Tipps und Tricks rund um Steuern, Buchhaltung und alles, was
            Selbstständige wissen müssen.
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center">
              <span className="text-[var(--primary)] text-2xl">📝</span>
            </div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Bald geht es los!
            </h2>
            <p className="text-[var(--foreground-muted)] mb-6">
              Wir arbeiten an spannenden Artikeln für dich. Schau bald wieder
              vorbei!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
