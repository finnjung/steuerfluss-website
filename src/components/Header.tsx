'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

const navItems = [
  { name: 'Features', href: '/#features' },
  { name: 'Preise', href: '/#pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1"
            >
              <Logo size={36} />
              <span className="hidden sm:inline text-xl font-semibold text-[var(--foreground)]">
                SteuerFluss
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="https://app.steuer-fluss.de"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
            >
              Kostenlos starten
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--border)] w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    top: isOpen ? '50%' : '0%',
                    translateY: isOpen ? '-50%' : '0%',
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute left-0 w-5 h-[2px] bg-[var(--foreground)] rounded-full"
                  style={{ transformOrigin: 'center' }}
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    scaleX: isOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[2px] bg-[var(--foreground)] rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    bottom: isOpen ? '50%' : '0%',
                    translateY: isOpen ? '50%' : '0%',
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute left-0 bottom-0 w-5 h-[2px] bg-[var(--foreground)] rounded-full"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://app.steuer-fluss.de"
                  className="block w-full text-center px-5 py-2.5 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Kostenlos starten
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
