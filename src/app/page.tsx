"use client"

import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    VG_CONFIG: any;
  }
}

export default function Home() {
  useEffect(() => {
    window.VG_CONFIG = {
      ID: "702qzb8l6qmn9y92",
      region: 'eu',
      render: 'full-width',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    }
  }, [])

  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Value Proposition Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            למה <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Crazy Media</span>?
            כי אנחנו לא סתם עוד סוכנות AI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8"
              >
                <div className="text-3xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{prop.title}</h3>
                <p className="text-gray-400">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Script
        src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
        strategy="afterInteractive"
      />
      <link 
        rel="stylesheet" 
        href="https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      />

      {/* TIXAE Agents widget */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div style={{
            width: "700px", 
            height: "700px",
            margin: "0 auto"
          }} id="VG_OVERLAY_CONTAINER">
            {/* Here is where TIXAE Agents renders the widget */}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              חדשנות? זה בDNA שלנו 🧬
            </h2>
            <p className="text-xl text-gray-400">
              בעולם שבו כולם מדברים על AI, אנחנו עושים AI. 
              לא סתם עוד buzzwords - אלא פתרונות אמיתיים שמייצרים תוצאות אמיתיות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {innovationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">{point.icon}</span>
                    {point.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{point.description}</p>
                  <ul className="space-y-3">
                    {point.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                מוכנים להצטרף למהפכת ה-AI? 🚀
              </h2>
              <p className="text-xl text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                בואו נדבר על איך אנחנו יכולים לקחת את העסק שלכם לשלב הבא עם פתרונות AI מתקדמים
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  דברו איתנו עכשיו
                </Link>
                <Link 
                  href="/projects" 
                  className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm hover:border-white/40 transition-colors duration-300"
                >
                  ראו את העבודות שלנו
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

const valueProps = [
  {
    icon: '🎯',
    title: 'מיקוד בתוצאות',
    description: 'אנחנו לא סתם מפתחים טכנולוגיה, אנחנו מפתחים פתרונות שמביאים תוצאות עסקיות אמיתיות'
  },
  {
    icon: '🔬',
    title: 'חדשנות מבוססת מחקר',
    description: 'צוות המחקר שלנו תמיד בחזית הטכנולוגיה, מפתח ומטמיע את הפתרונות המתקדמים ביותר'
  },
  {
    icon: '🤝',
    title: 'שותפות אמיתית',
    description: 'אנחנו לא רק ספקי שירות, אנחנו שותפים אמיתיים להצלחה שלכם'
  }
]

const innovationPoints = [
  {
    icon: '🧠',
    title: 'מודלים מתקדמים',
    description: 'שימוש במודלים החדשניים והמתקדמים ביותר בתחום',
    bullets: [
      'התאמה אישית של מודלים לצרכי הלקוח',
      'אופטימיזציה מתמדת של ביצועים',
      'יכולת עיבוד שפה טבעית מתקדמת'
    ]
  },
  {
    icon: '⚡',
    title: 'תשתית מבוססת ענן',
    description: 'תשתית טכנולוגית חזקה ויציבה',
    bullets: [
      'זמינות גבוהה 24/7',
      'אבטחת מידע ברמה הגבוהה ביותר',
      'יכולת להתרחב למיליוני משתמשים ללא ירידה בביצועים'
    ]
  }
]
