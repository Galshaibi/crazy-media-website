"use client"

import { motion } from 'framer-motion'

export default function AboutSection() {
  const features = [
    {
      title: 'מומחיות בAI',
      description: 'צוות המומחים שלנו מתמחה בטכנולוגיות AI מתקדמות',
      icon: '🤖'
    },
    {
      title: 'פתרונות מותאמים אישית',
      description: 'אנו מפתחים פתרונות המותאמים במיוחד לצרכי העסק שלך',
      icon: '⚡'
    },
    {
      title: 'ליווי מקצועי',
      description: 'מלווים אותך בכל שלב בתהליך ההטמעה והפיתוח',
      icon: '🤝'
    }
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="animated-bg opacity-10" />
      <div className="tech-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            למה לבחור בקרייזי מדיה?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            אנחנו מאמינים שטכנולוגיית AI היא המפתח להצלחה העסקית בעידן הדיגיטלי
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card neon-border p-8 hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'פרויקטים' },
            { number: '50+', label: 'לקוחות מרוצים' },
            { number: '95%', label: 'שביעות רצון' },
            { number: '24/7', label: 'תמיכה' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 glow">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
