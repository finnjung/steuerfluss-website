import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://steuer-fluss.de'),
  title: {
    default: 'SteuerFluss - Moderne Buchhaltungssoftware | Kostenlos',
    template: '%s | SteuerFluss',
  },
  description:
    'SteuerFluss ist die moderne Buchhaltungssoftware für Selbstständige und kleine Unternehmen. Rechnungen, Belege, DATEV Export - 100% kostenlos.',
  keywords: [
    'Buchhaltungssoftware',
    'Rechnungsprogramm',
    'Buchhaltung',
    'Selbstständige',
    'Freelancer',
    'DATEV Export',
    'Belegerfassung',
    'kostenlos',
    'Steuern',
    'Rechnungen erstellen',
  ],
  authors: [{ name: 'SteuerFluss' }],
  creator: 'SteuerFluss',
  publisher: 'SteuerFluss',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://steuer-fluss.de',
    siteName: 'SteuerFluss',
    title: 'SteuerFluss - Moderne Buchhaltungssoftware | Kostenlos',
    description:
      'SteuerFluss ist die moderne Buchhaltungssoftware für Selbstständige und kleine Unternehmen. 100% kostenlos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SteuerFluss - Buchhaltung, die einfach fliegt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SteuerFluss - Moderne Buchhaltungssoftware | Kostenlos',
    description:
      'SteuerFluss ist die moderne Buchhaltungssoftware für Selbstständige. 100% kostenlos.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
