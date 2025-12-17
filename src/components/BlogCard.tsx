'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-full p-6 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-[var(--foreground-muted)] mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[var(--foreground-muted)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          {/* Read More */}
          <span className="inline-flex items-center gap-1 text-[var(--primary)] font-medium group-hover:gap-2 transition-all">
            Weiterlesen
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
