'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Turnstile } from './Turnstile'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) return

    setIsSubmitting(true)

    // Simuliere API-Aufruf (hier würde das Token zur Verifizierung ans Backend geschickt)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setPrivacyAccepted(false)
    setTurnstileToken(null)

    // Reset nach 5 Sekunden
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              Wir sind für dich da
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              Hast du Fragen, Anregungen oder benötigst Hilfe? Unser Team antwortet
              in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">E-Mail</h3>
                  <a
                    href="mailto:info@steuer-fluss.de"
                    className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    info@steuer-fluss.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Live-Chat</h3>
                  <p className="text-[var(--foreground-muted)]">
                    Mo-Fr, 9:00 - 18:00 Uhr
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline"
            >
              Zur Kontaktseite
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--background)] p-8 rounded-2xl border border-[var(--border)]"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  Nachricht gesendet!
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Wir melden uns schnellstmöglich bei dir.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--foreground)] mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    placeholder="Wie können wir dir helfen?"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-home"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[var(--primary)] border-[var(--border)] rounded focus:ring-[var(--primary)]"
                  />
                  <label
                    htmlFor="privacy-home"
                    className="text-sm text-[var(--foreground-muted)]"
                  >
                    Ich habe die{' '}
                    <Link
                      href="/datenschutz"
                      className="text-[var(--primary)] hover:underline"
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und akzeptiere diese.
                  </label>
                </div>

                <Turnstile
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                />

                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken || !privacyAccepted}
                  className="w-full px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
