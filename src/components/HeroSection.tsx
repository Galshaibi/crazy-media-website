"use client"

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [showScroll, setShowScroll] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && showScroll) {
      setShowScroll(false)
    } else if (latest <= 100 && !showScroll) {
      setShowScroll(true)
    }
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(45, 97, 255, 0.2), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Crazy Media
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            מובילים את המהפכה הדיגיטלית עם פתרונות AI מתקדמים
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          <button className="btn-primary">
            גלה עוד
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm
                           hover:border-white/40 transition-colors duration-300">
            צור קשר
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: showScroll ? 1 : 0,
            y: showScroll ? [0, 10, 0] : 20,
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: {
              duration: 2,
              repeat: showScroll ? Infinity : 0,
              ease: "easeInOut",
            }
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{
                y: showScroll ? [0, 16, 0] : 16,
              }}
              transition={{
                duration: 2,
                repeat: showScroll ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
