import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import ClientLayout from '@/components/ClientLayout'
import AnimatedGrid from '@/components/AnimatedGrid'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crazy Media | סוכנות AI מובילה בישראל - פתרונות בינה מלאכותית מתקדמים',
  description: 'Crazy Media - הסוכנות המובילה בישראל לפתרונות AI מתקדמים. מומחים בפיתוח מערכות בינה מלאכותית, אוטומציה חכמה ופתרונות AI מותאמים אישית לעסקים',
  keywords: 'AI, בינה מלאכותית, פתרונות AI, אוטומציה, machine learning, deep learning, NLP, computer vision'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <AnimatedGrid />
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
