'use client'

import { useEffect, useRef } from 'react'

interface TurnstileProps {
  onVerify: (token: string) => void
  onExpire?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto'
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAACHJSMa8m0ZjRa5g'

export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: onVerify,
          'expired-callback': onExpire,
          theme: 'auto',
        })
      }
    }

    // Prüfe ob Script bereits geladen
    if (window.turnstile) {
      loadTurnstile()
    } else {
      // Lade Script wenn noch nicht vorhanden
      const existingScript = document.querySelector('script[src*="turnstile"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
        script.async = true
        script.defer = true
        window.onTurnstileLoad = loadTurnstile
        document.head.appendChild(script)
      } else {
        window.onTurnstileLoad = loadTurnstile
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [onVerify, onExpire])

  return (
    <div
      ref={containerRef}
      className="cf-turnstile"
    />
  )
}
