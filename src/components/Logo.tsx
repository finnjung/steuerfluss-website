'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className = '' }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Verhindere Hydration-Mismatch
  if (!mounted) {
    return (
      <div
        className={className}
        style={{ width: size, height: size }}
      />
    )
  }

  // Dark Mode = hellblaues Logo
  // Light Mode = dunkelblaues Logo
  const logoSrc = resolvedTheme === 'dark' ? '/logo-lightblue.svg' : '/logo-light.svg'

  return (
    <Image
      src={logoSrc}
      alt="SteuerFluss Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  )
}
