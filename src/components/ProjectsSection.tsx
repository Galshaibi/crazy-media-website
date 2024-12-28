"use client"

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'מערכת AI לניתוח נתונים',
    description: 'פיתחנו מערכת AI מתקדמת לניתוח נתונים עסקיים בזמן אמת',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
    tags: ['AI', 'Big Data', 'Analytics'],
    stats: [
      { label: 'דיוק', value: '99%' },
      { label: 'זמן עיבוד', value: '0.5s' }
    ]
  },
  {
    title: 'צ\'אטבוט חכם לשירות לקוחות',
    description: 'צ\'אטבוט AI שמטפל בפניות לקוחות 24/7 עם יכולות הבנת שפה טבעית',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2916&auto=format&fit=crop',
    tags: ['NLP', 'Chatbot', 'Customer Service'],
    stats: [
      { label: 'שביעות רצון', value: '95%' },
      { label: 'זמן תגובה', value: '1s' }
    ]
  },
  {
    title: 'מערכת המלצות מותאמת אישית',
    description: 'מערכת AI שמנתחת התנהגות משתמשים ומספקת המלצות מדויקות',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop',
    tags: ['ML', 'Personalization', 'E-commerce'],
    stats: [
      { label: 'דיוק המלצות', value: '92%' },
      { label: 'גידול במכירות', value: '40%' }
    ]
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            הפרויקטים שלנו
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            הצצה לחלק מהפרויקטים המובילים שלנו בתחום ה-AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
