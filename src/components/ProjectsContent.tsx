"use client"

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    title: "מערכת חיזוי מכירות AI",
    description: "פיתחנו מערכת AI מתקדמת לחיזוי מכירות עבור רשת קמעונאית גדולה",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "חיזוי ואנליטיקה",
    tags: ["AI", "חיזוי", "אנליטיקה"],
    results: ["שיפור של 40% בדיוק החיזוי", "חיסכון של 25% בעלויות המלאי"],
    client: "רשת קמעונאית מובילה",
    duration: "6 חודשים",
    challenge: "הלקוח התמודד עם אתגר משמעותי בניהול המלאי וחיזוי הביקושים, מה שהוביל לעודפי מלאי ומחסור במוצרים מבוקשים",
    solution: "פיתחנו מערכת AI המשלבת למידת מכונה מתקדמת עם נתונים היסטוריים ומגמות שוק לחיזוי מדויק של ביקושים"
  },
  {
    title: "צ'אטבוט שירות לקוחות",
    description: "פיתוח צ'אטבוט AI חכם למתן מענה אוטומטי ללקוחות",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop",
    category: "שירות לקוחות",
    tags: ["NLP", "צ'אטבוט", "שירות לקוחות"],
    results: ["ירידה של 60% בזמני המתנה", "שביעות רצון לקוחות של 4.8/5"],
    client: "חברת ביטוח גדולה",
    duration: "4 חודשים",
    challenge: "עומס רב על מוקד השירות וזמני המתנה ארוכים שפגעו בשביעות רצון הלקוחות",
    solution: "פיתחנו צ'אטבוט מבוסס NLP המסוגל לטפל במגוון רחב של פניות באופן אוטומטי"
  },
  {
    title: "מערכת זיהוי תקלות",
    description: "מערכת AI לזיהוי מוקדם של תקלות במכונות ייצור",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop",
    category: "תחזוקה חכמה",
    tags: ["בינה מלאכותית", "תחזוקה מונעת", "IoT"],
    results: ["הפחתה של 70% בזמני השבתה", "חיסכון שנתי של מיליוני שקלים"],
    client: "מפעל תעשייתי מוביל",
    duration: "8 חודשים",
    challenge: "תקלות לא צפויות במכונות הייצור גרמו להשבתות תכופות ועלויות גבוהות",
    solution: "פיתחנו מערכת המשלבת חיישני IoT עם AI לזיהוי מוקדם של תקלות פוטנציאליות"
  },
  {
    title: "אוטומציה של תהליכי HR",
    description: "אוטומציה חכמה של תהליכי גיוס ומיון מועמדים",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
    category: "משאבי אנוש",
    tags: ["HR", "אוטומציה", "AI"],
    results: ["קיצור זמן גיוס ב-50%", "שיפור באיכות המועמדים"],
    client: "חברת הייטק צומחת",
    duration: "5 חודשים",
    challenge: "תהליכי גיוס ארוכים ולא יעילים שהקשו על גיוס מהיר של טאלנטים איכותיים",
    solution: "פיתחנו מערכת AI לסינון ודירוג אוטומטי של קורות חיים ומועמדים"
  },
  {
    title: "מערכת המלצות מוצרים",
    description: "מערכת AI חכמה להמלצות מוצרים מותאמות אישית",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2940&auto=format&fit=crop",
    category: "מסחר אלקטרוני",
    tags: ["AI", "המלצות", "E-commerce"],
    results: ["עלייה של 35% במכירות", "שיפור של 45% בהמרות"],
    client: "פלטפורמת E-commerce",
    duration: "7 חודשים",
    challenge: "חוויית קנייה לא מותאמת אישית שהובילה לשיעורי המרה נמוכים",
    solution: "פיתחנו מערכת המלצות מתקדמת המשלבת למידה עמוקה עם ניתוח התנהגות משתמשים"
  },
  {
    title: "ניתוח רגשות ברשתות חברתיות",
    description: "מערכת לניתוח רגשות ומגמות ברשתות חברתיות",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2940&auto=format&fit=crop",
    category: "ניתוח רגשות",
    tags: ["NLP", "רשתות חברתיות", "אנליטיקה"],
    results: ["דיוק של 92% בזיהוי רגשות", "זיהוי מוקדם של משברים"],
    client: "מותג צרכני מוביל",
    duration: "6 חודשים",
    challenge: "קושי במעקב וניתוח תגובות צרכנים ברשתות החברתיות",
    solution: "פיתחנו מערכת NLP לניתוח רגשות בזמן אמת במגוון שפות"
  }
]

const categories = [...new Set(projects.map(p => p.category))]

const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerAnimation}
      className="py-20"
    >
      {/* Hero Section */}
      <section className="relative pt-32 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              הפרויקטים שלנו
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              פרויקטים נבחרים שמדגימים את היכולות שלנו בפיתוח פתרונות AI
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              }`}
            >
              הכל
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold mb-2">תוצאות:</h3>
                    {project.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-center gap-2"
                      >
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-400">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative h-72">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">על הפרויקט</h3>
                      <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-gray-400">לקוח:</span>
                          <div className="font-medium">{selectedProject.client}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">משך הפרויקט:</span>
                          <div className="font-medium">{selectedProject.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">האתגר</h3>
                        <p className="text-gray-400">{selectedProject.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">הפתרון</h3>
                        <p className="text-gray-400">{selectedProject.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">תוצאות</h3>
                        <ul className="space-y-2">
                          {selectedProject.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-green-400">✓</span>
                              <span className="text-gray-400">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
