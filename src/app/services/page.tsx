import type { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'

export const metadata: Metadata = {
  title: 'השירותים שלנו | Crazy Media',
  description: 'מגוון פתרונות AI מתקדמים להאצת הצמיחה העסקית שלכם',
}

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServicesContent />
    </main>
  )
}
