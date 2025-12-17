'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  Receipt,
  PieChart,
  Upload,
  Shield,
  Zap,
  Users,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Rechnungen erstellen',
    description:
      'Erstelle professionelle Rechnungen in Sekunden. Mit anpassbaren Vorlagen und automatischer Nummerierung.',
  },
  {
    icon: Receipt,
    title: 'Belege erfassen',
    description:
      'Fotografiere Belege und lass sie automatisch erkennen. Nie wieder manuelle Dateneingabe.',
  },
  {
    icon: PieChart,
    title: 'Auswertungen & Reports',
    description:
      'Behalte den Überblick mit detaillierten Auswertungen. Umsatz, Ausgaben und Gewinn auf einen Blick.',
  },
  {
    icon: Upload,
    title: 'DATEV Export',
    description:
      'Exportiere deine Daten direkt für deinen Steuerberater im DATEV-Format. Spart Zeit und Geld.',
  },
  {
    icon: Shield,
    title: 'DSGVO konform',
    description:
      'Deine Daten sind sicher. Hosting in Deutschland mit höchsten Sicherheitsstandards.',
  },
  {
    icon: Zap,
    title: 'Schnell & Intuitiv',
    description:
      'Moderne Oberfläche, die Spaß macht. Keine Einarbeitung nötig - sofort loslegen.',
  },
  {
    icon: Users,
    title: 'Kundenverwaltung',
    description:
      'Verwalte all deine Kunden zentral. Kontaktdaten, Historie und offene Posten im Blick.',
  },
  {
    icon: Clock,
    title: 'Zeiterfassung',
    description:
      'Erfasse Arbeitszeiten projektbezogen und erstelle daraus automatisch Rechnungen.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background-secondary)]">
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
            Alles, was du brauchst
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Von der Rechnung bis zur Steuererklärung - SteuerFluss bietet alle
            Funktionen, die Selbstständige und kleine Unternehmen benötigen.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
