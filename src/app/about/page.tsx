"use client"

import { motion } from 'framer-motion'
import Error from './error'

const sections = [
  {
    title: 'החזון שלנו',
    content: 'ב-Crazy Media, אנחנו מאמינים שטכנולוגיית AI היא המפתח להצלחה העסקית בעידן הדיגיטלי. המשימה שלנו היא להנגיש את הטכנולוגיה המתקדמת ביותר לעסקים מכל הגדלים, ולעזור להם להתפתח ולצמוח באמצעות פתרונות חכמים ויעילים.'
  },
  {
    title: 'הצוות שלנו',
    content: 'הצוות שלנו מורכב ממומחי AI, מפתחים, ואנשי עסקים מנוסים שעובדים יחד כדי ליצור פתרונות מותאמים אישית לכל לקוח. אנחנו מביאים איתנו ניסיון עשיר בפיתוח ויישום פתרונות AI מתקדמים במגוון תעשיות.'
  },
  {
    title: 'הגישה שלנו',
    content: 'אנחנו מאמינים בגישה אישית ומקצועית. לכל לקוח יש צרכים ייחודיים, ואנחנו מתאימים את הפתרונות שלנו בדיוק לפי אותם צרכים. השילוב של מקצועיות, יצירתיות וטכנולוגיה מתקדמת מאפשר לנו להביא תוצאות מוכחות.'
  }
]

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              מי אנחנו?
            </h1>
            <p className="text-xl text-gray-400">
              חברת AI מובילה המתמחה בפיתוח פתרונות בינה מלאכותית מתקדמים
            </p>
          </div>
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:border-white/20 transition-colors duration-300"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
