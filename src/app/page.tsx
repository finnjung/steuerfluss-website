import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
    </>
  )
}
