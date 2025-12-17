'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 sm:p-12 bg-[var(--primary)] rounded-3xl overflow-hidden text-center"
        >
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Bereit, durchzustarten?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Starte jetzt kostenlos mit SteuerFluss und bringe deine Buchhaltung auf das nächste Level.
            </p>
            <motion.a
              href="https://app.steuer-fluss.de"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors group"
            >
              Kostenlos starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
