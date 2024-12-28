"use client"

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const textAnimation: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

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
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export default function AboutContent() {
  const [isVisible] = useState(true)

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerAnimation}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              מי אנחנו? 🚀
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Crazy Media היא חברת AI מובילה המתמחה בפיתוח פתרונות חדשניים
              המשלבים את הטכנולוגיות המתקדמות ביותר בתחום הבינה המלאכותית
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={textAnimation}
              className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={containerAnimation}
              className="space-y-6"
            >
              <motion.h2 
                variants={textAnimation}
                className="text-3xl font-bold"
              >
                החזון שלנו
              </motion.h2>
              <motion.p 
                variants={textAnimation}
                className="text-gray-400"
              >
                אנחנו מאמינים שבינה מלאכותית היא הכוח המניע את העתיד העסקי. 
                החזון שלנו הוא להנגיש טכנולוגיות AI מתקדמות לכל עסק, 
                ולאפשר צמיחה והתפתחות באמצעות פתרונות חכמים ויעילים.
              </motion.p>
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-2xl">{point.icon}</span>
                    <div>
                      <motion.h3 variants={textAnimation} className="font-semibold mb-2">{point.title}</motion.h3>
                      <motion.p variants={textAnimation} className="text-gray-400">{point.description}</motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h2 variants={textAnimation} className="text-3xl font-bold mb-4">הצוות שלנו</motion.h2>
            <motion.p variants={textAnimation} className="text-xl text-gray-400 max-w-2xl mx-auto">
              הכירו את המומחים שעומדים מאחורי הפתרונות המתקדמים שלנו
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.h3 variants={textAnimation} className="text-xl font-bold mb-2">{member.name}</motion.h3>
                <motion.p variants={textAnimation} className="text-blue-400 mb-4">{member.position}</motion.p>
                <motion.p variants={textAnimation} className="text-gray-400 mb-6">{member.description}</motion.p>
                <div className="flex justify-center gap-4">
                  {member.social.map((link, idx) => (
                    <motion.a
                      key={idx}
                      variants={textAnimation}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h2 variants={textAnimation} className="text-3xl font-bold mb-4">הערכים שלנו</motion.h2>
            <motion.p variants={textAnimation} className="text-xl text-gray-400 max-w-2xl mx-auto">
              העקרונות המנחים אותנו בכל צעד בדרך
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <motion.div variants={textAnimation} className="text-4xl mb-4">{value.icon}</motion.div>
                <motion.h3 variants={textAnimation} className="text-xl font-bold mb-2">{value.title}</motion.h3>
                <motion.p variants={textAnimation} className="text-gray-400">{value.description}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <motion.h2 variants={textAnimation} className="text-3xl font-bold mb-4">
                רוצים להיות חלק מהמהפכה? 🚀
              </motion.h2>
              <motion.p variants={textAnimation} className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                בואו נדבר על איך אנחנו יכולים לעזור לכם להטמיע AI בעסק שלכם
              </motion.p>
              <motion.button variants={textAnimation} className="btn-primary">
                צרו קשר עכשיו
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

const visionPoints = [
  {
    icon: '🎯',
    title: 'חדשנות מתמדת',
    description: 'אנחנו תמיד בחזית הטכנולוגיה, מפתחים ומיישמים את הפתרונות המתקדמים ביותר'
  },
  {
    icon: '🤝',
    title: 'שותפות אמיתית',
    description: 'אנחנו מאמינים בבניית קשרים ארוכי טווח עם הלקוחות שלנו ובליווי צמוד לאורך כל הדרך'
  },
  {
    icon: '💡',
    title: 'פתרונות מותאמים אישית',
    description: 'כל פתרון שאנחנו מפתחים מותאם במדויק לצרכים הייחודיים של הלקוח'
  }
]

const teamMembers = [
  {
    name: "דניאל כהן",
    position: "מנכ\"ל ומייסד",
    description: "מומחה בינה מלאכותית עם ניסיון של 15 שנה בתחום",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop",
    social: [
      { icon: "🔗", url: "#" },
      { icon: "📧", url: "#" }
    ]
  },
  {
    name: "מיכל לוי",
    position: "סמנכ\"לית טכנולוגיות",
    description: "מובילה פיתוח מוצרים חדשניים בתחום ה-AI",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
    social: [
      { icon: "🔗", url: "#" },
      { icon: "📧", url: "#" }
    ]
  },
  {
    name: "עומר ישראלי",
    position: "ראש צוות מחקר",
    description: "חוקר ומפתח אלגוריתמים מתקדמים",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
    social: [
      { icon: "🔗", url: "#" },
      { icon: "📧", url: "#" }
    ]
  }
]

const values = [
  {
    icon: '🎯',
    title: 'מצוינות',
    description: 'שאיפה מתמדת למצוינות בכל היבט של העבודה שלנו'
  },
  {
    icon: '🔄',
    title: 'חדשנות',
    description: 'חשיבה יצירתית ופיתוח פתרונות פורצי דרך'
  },
  {
    icon: '🤝',
    title: 'אמינות',
    description: 'מחויבות מלאה ללקוחות שלנו ולהצלחה שלהם'
  },
  {
    icon: '📈',
    title: 'צמיחה',
    description: 'התפתחות מתמדת והתאמה לשינויים בשוק'
  }
]
