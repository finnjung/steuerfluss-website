import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von SteuerFluss',
}

export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--foreground-muted)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            [Dein Name / Firmenname]<br />
            [Strasse Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Kontakt
          </h2>
          <p>
            E-Mail: kontakt@steuerfluss.de
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            [Deine USt-IdNr.]
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            [Dein Name]<br />
            [Strasse Hausnummer]<br />
            [PLZ Ort]
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
            zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </div>
  )
}
