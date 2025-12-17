'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Ist SteuerFluss wirklich kostenlos?',
    answer:
      'Ja! SteuerFluss ist aktuell 100% kostenlos. Als Frühbucher bekommst du alle Funktionen ohne Einschränkungen. Wir finanzieren uns durch optionale Premium-Features, die in Zukunft kommen werden.',
  },
  {
    question: 'Für wen ist SteuerFluss geeignet?',
    answer:
      'SteuerFluss ist ideal für Selbstständige, Freelancer und kleine Unternehmen. Ob du Rechnungen schreiben, Belege erfassen oder deine Finanzen im Blick behalten willst - SteuerFluss ist für dich.',
  },
  {
    question: 'Kann ich meine Daten exportieren?',
    answer:
      'Selbstverständlich! Du kannst deine Daten jederzeit im DATEV-Format exportieren. Das ist perfekt für die Zusammenarbeit mit deinem Steuerberater.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Sehr sicher! Alle Daten werden verschlüsselt in deutschen Rechenzentren gespeichert. Wir sind vollständig DSGVO-konform und nehmen Datenschutz sehr ernst.',
  },
  {
    question: 'Gibt es eine mobile App?',
    answer:
      'SteuerFluss ist als Web-App vollständig mobil nutzbar. Eine native App für iOS und Android ist in Planung.',
  },
  {
    question: 'Wie kann ich den Support erreichen?',
    answer:
      'Du erreichst uns per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden auf deine Anfragen.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-[var(--foreground-muted)]">
            Alles, was du über SteuerFluss wissen musst.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-[var(--border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left bg-[var(--background)] hover:bg-[var(--background-secondary)] transition-colors"
              >
                <span className="font-semibold text-[var(--foreground)]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-[var(--foreground-muted)]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-[var(--foreground-muted)]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
