'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import { faqs } from '@/data/faqs'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-lg text-[var(--foreground-muted)] mb-8">
            Hier findest du Antworten auf die häufigsten Fragen zu SteuerFluss.
            <br />
            Deine Frage ist nicht dabei?{' '}
            <Link href="/kontakt" className="text-[var(--primary)] hover:underline">
              Kontaktiere uns
            </Link>
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground-muted)]" />
            <input
              type="text"
              placeholder="Frage suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-[var(--foreground-muted)] py-8"
            >
              Keine Fragen gefunden. Versuche einen anderen Suchbegriff oder{' '}
              <Link href="/kontakt" className="text-[var(--primary)] hover:underline">
                kontaktiere uns direkt
              </Link>
              .
            </motion.p>
          ) : (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="border border-[var(--border)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left bg-[var(--background)] hover:bg-[var(--background-secondary)] transition-colors"
                >
                  <span className="font-semibold text-[var(--foreground)] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
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
            ))
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center p-8 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)]"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Noch Fragen?
          </h2>
          <p className="text-[var(--foreground-muted)] mb-6">
            Unser Support-Team hilft dir gerne weiter. Schreib uns einfach!
          </p>
          <Link
            href="/kontakt"
            className="inline-flex px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
