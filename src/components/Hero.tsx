'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const benefits = [
  '100% kostenlos',
  'Keine Kreditkarte erforderlich',
  'In Minuten startklar',
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--primary)]/5" />

      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--primary)]">
              Jetzt kostenlos verfügbar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight"
          >
            Buchhaltung,{' '}
            <span className="text-[var(--primary)]">die einfach fliegt</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto"
          >
            SteuerFluss ist die moderne Buchhaltungssoftware für Selbstständige und
            kleine Unternehmen. Rechnungen, Belege und Steuern - alles an einem Ort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://app.steuerfluss.de"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--primary-hover)] transition-colors flex items-center justify-center gap-2 group"
            >
              Kostenlos starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--background-secondary)] text-[var(--foreground)] rounded-xl font-semibold text-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
            >
              Mehr erfahren
            </motion.a>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-[var(--foreground-muted)]">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[var(--primary)] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <p className="text-[var(--foreground-muted)]">
                    SteuerFluss Dashboard Preview
                  </p>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-[var(--primary)]/20 rounded-3xl blur-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
