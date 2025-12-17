'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Müller',
    role: 'Freelance Designerin',
    content:
      'SteuerFluss hat meine Buchhaltung revolutioniert. Endlich eine Software, die ich verstehe und die mir Spaß macht!',
    rating: 5,
  },
  {
    name: 'Thomas Weber',
    role: 'IT Berater',
    content:
      'Der DATEV Export spart mir jeden Monat Stunden. Mein Steuerberater ist begeistert von der Datenqualität.',
    rating: 5,
  },
  {
    name: 'Lisa Hoffmann',
    role: 'Online Shop Betreiberin',
    content:
      'Einfach, schnell und kostenlos - was will man mehr? Die Belegerfassung per Foto ist genial.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
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
            Was unsere Nutzer sagen
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Tausende Selbstständige vertrauen bereits auf SteuerFluss.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--foreground)] mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--primary)] font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
