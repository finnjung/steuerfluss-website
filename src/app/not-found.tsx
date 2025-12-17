import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 bg-[var(--primary)]/10 rounded-3xl flex items-center justify-center">
          <span className="text-[var(--primary)] text-5xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert leider nicht. Vielleicht findest du was du suchst auf unserer Startseite.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  )
}
