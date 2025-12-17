import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von SteuerFluss',
}

export default function DatenschutzPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-[var(--foreground-muted)]">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Datenerfassung auf dieser Website
          </h3>
          <p>
            <strong className="text-[var(--foreground)]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            2. Hosting
          </h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Anbieter einfügen]
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Datenschutz
          </h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            [Dein Name / Firmenname]<br />
            [Strasse Hausnummer]<br />
            [PLZ Ort]<br /><br />
            E-Mail: info@steuer-fluss.de
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Cookies
          </h3>
          <p>
            Unsere Internetseiten verwenden so genannte Cookies. Cookies richten auf
            Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
            unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>

          <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">
            Kontaktformular
          </h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--foreground)] mt-8 mb-4">
            5. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
        </div>
      </div>
    </div>
  )
}
