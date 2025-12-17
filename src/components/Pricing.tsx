'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const features = [
  'Unbegrenzte Rechnungen',
  'Unbegrenzte Kunden',
  'Belegerfassung mit OCR',
  'DATEV Export',
  'Auswertungen & Reports',
  'Kundenverwaltung',
  'Zeiterfassung',
  'E-Mail Support',
  'Regelmäßige Updates',
  'DSGVO konform',
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Einfache Preisgestaltung
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Keine versteckten Kosten, keine Überraschungen. SteuerFluss ist
            aktuell 100% kostenlos.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative p-8 bg-[var(--background-secondary)] rounded-3xl border-2 border-[var(--primary)] overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)]/20 rounded-full blur-3xl" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--primary)]">
                Frühbucher-Angebot
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[var(--foreground)]">0 Euro</span>
                <span className="text-[var(--foreground-muted)]">/ Monat</span>
              </div>
              <p className="text-[var(--foreground-muted)] mt-2">
                Alle Funktionen inklusive. Für immer kostenlos für Frühbucher.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-[var(--foreground)]">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href="https://app.steuerfluss.de"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--primary-hover)] transition-colors"
            >
              Jetzt kostenlos starten
            </motion.a>

            <p className="text-center text-[var(--foreground-muted)] text-sm mt-4">
              Keine Kreditkarte erforderlich
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
