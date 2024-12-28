import type { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'אודות | Crazy Media - חברת AI מובילה',
  description: 'הכירו את Crazy Media - חברת AI מובילה המתמחה בפיתוח פתרונות בינה מלאכותית מתקדמים. גלו את הצוות שלנו, החזון והערכים שמנחים אותנו.',
  keywords: 'אודות Crazy Media, חברת AI, בינה מלאכותית, צוות מקצועי, חדשנות טכנולוגית',
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutContent />
    </main>
  )
}
