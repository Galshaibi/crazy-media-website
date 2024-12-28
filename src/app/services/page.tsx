"use client"

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🤖',
    title: 'פיתוח צ\'אטבוטים',
    description: 'צ\'אטבוטים חכמים המותאמים אישית לצרכי העסק שלכם, עם יכולות למידה והבנת שפה טבעית'
  },
  {
    icon: '📱',
    title: 'אוטומציה לעסקים',
    description: 'פתרונות אוטומציה חכמים שחוסכים לכם זמן וכסף, מייעלים תהליכים ומשפרים את חווית הלקוח'
  },
  {
    icon: '🎯',
    title: 'פתרונות AI מתקדמים',
    description: 'שילוב טכנולוגיות AI מתקדמות בעסק שלכם, כולל עיבוד תמונה, זיהוי קול וניתוח טקסט'
  },
  {
    icon: '📊',
    title: 'ניתוח נתונים',
    description: 'ניתוח נתונים מתקדם והפקת תובנות עסקיות שיעזרו לכם לקבל החלטות מבוססות מידע'
  },
  {
    icon: '🔍',
    title: 'ייעוץ טכנולוגי',
    description: 'ייעוץ מקצועי בתחום הAI והטכנולוגיה, כולל בחירת פתרונות, אסטרטגיה דיגיטלית ותכנון יישום'
  },
  {
    icon: '🎓',
    title: 'הדרכות והטמעה',
    description: 'הדרכות מקצועיות והטמעת מערכות AI בארגון, כולל ליווי צמוד ותמיכה שוטפת'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            השירותים שלנו
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            אנחנו מציעים מגוון פתרונות AI מתקדמים שיעזרו לעסק שלכם לצמוח ולהתפתח
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:border-white/20 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
