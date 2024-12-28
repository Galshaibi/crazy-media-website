"use client"

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: "פיתוח מערכות AI",
    description: "פיתוח פתרונות AI מותאמים אישית לצרכים העסקיים שלכם",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
    features: [
      "פיתוח מודלים של למידה עמוקה",
      "מערכות המלצה מתקדמות",
      "עיבוד שפה טבעית (NLP)",
      "ראיית מכונה ועיבוד תמונה"
    ]
  },
  {
    title: "ייעוץ AI אסטרטגי",
    description: "ליווי וייעוץ בהטמעת טכנולוגיות AI בארגון שלכם",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    features: [
      "הערכת בשלות AI בארגון",
      "בניית אסטרטגיית AI",
      "זיהוי הזדמנויות ליישום AI",
      "ליווי בתהליך הטמעת AI"
    ]
  },
  {
    title: "אוטומציה חכמה",
    description: "אוטומציה של תהליכים עסקיים באמצעות AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
    features: [
      "RPA מבוסס AI",
      "אוטומציה של תהליכי back-office",
      "אופטימיזציה של תהליכים",
      "ניטור ובקרה אוטומטיים"
    ]
  },
  {
    title: "פתרונות Big Data",
    description: "ניתוח וניהול נתונים בקנה מידה גדול",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    features: [
      "ארכיטקטורת Big Data",
      "עיבוד נתונים בזמן אמת",
      "ויזואליזציה של נתונים",
      "כריית מידע מתקדמת"
    ]
  },
  {
    title: "פיתוח צ'אטבוטים",
    description: "צ'אטבוטים חכמים המבוססים על AI לשיפור חווית הלקוח",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2106&auto=format&fit=crop",
    features: [
      "צ'אטבוטים מבוססי NLP",
      "אינטגרציה עם מערכות קיימות",
      "למידה והתאמה אוטומטית",
      "תמיכה במגוון שפות"
    ]
  },
  {
    title: "Computer Vision",
    description: "פתרונות ראיית מכונה מתקדמים",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2940&auto=format&fit=crop",
    features: [
      "זיהוי אובייקטים",
      "בקרת איכות אוטומטית",
      "מעקב וניתוח וידאו",
      "זיהוי פנים ורגשות"
    ]
  },
  {
    title: "IoT ו-AI",
    description: "שילוב AI עם מערכות IoT חכמות",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2940&auto=format&fit=crop",
    features: [
      "ניתוח נתוני חיישנים",
      "חיזוי תחזוקה",
      "אופטימיזציה בזמן אמת",
      "אוטומציה של מערכות IoT"
    ]
  },
  {
    title: "AI לאנליטיקה עסקית",
    description: "שדרוג האנליטיקה העסקית שלכם באמצעות AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    features: [
      "חיזוי מגמות עסקיות",
      "ניתוח התנהגות לקוחות",
      "דוחות אוטומטיים חכמים",
      "זיהוי אנומליות"
    ]
  }
]

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

export default function ServicesContent() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerAnimation}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative pt-32 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              השירותים שלנו
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              אנחנו מציעים מגוון רחב של פתרונות AI מתקדמים להאצת הצמיחה העסקית שלכם
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
