"use client"

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MouseFollower() {
  const [mounted, setMounted] = useState(false)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[100]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        width: '120px',
        height: '120px',
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate(calc(${cursorXSpring}px - 50%), calc(${cursorYSpring}px - 50%))`,
        background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
        filter: 'blur(10px)',
        mixBlendMode: 'plus-lighter',
        willChange: 'transform',
      }}
    />
  )
}
