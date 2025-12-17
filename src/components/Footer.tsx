import Link from 'next/link'

const footerLinks = {
  produkt: [
    { name: 'Features', href: '/#features' },
    { name: 'Preise', href: '/#pricing' },
    { name: 'FAQ', href: '/faq' },
  ],
  ressourcen: [
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Hilfe', href: '/hilfe' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-[var(--foreground)]">
                SteuerFluss
              </span>
            </Link>
            <p className="text-[var(--foreground-muted)] text-sm">
              Die moderne Buchhaltungssoftware. Einfach, intuitiv und 100% kostenlos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Produkt</h4>
            <ul className="space-y-2">
              {footerLinks.produkt.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Ressourcen</h4>
            <ul className="space-y-2">
              {footerLinks.ressourcen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col items-center gap-2">
          <p className="text-center text-[var(--foreground-muted)] text-sm">
            &copy; {new Date().getFullYear()} SteuerFluss. Alle Rechte vorbehalten.
          </p>
          <p className="flex items-center gap-1 text-[var(--foreground-muted)] text-sm">
            Made with
            <svg
              className="w-4 h-4 text-red-500 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            in Frankfurt, Germany
          </p>
        </div>
      </div>
    </footer>
  )
}
