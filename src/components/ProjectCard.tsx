"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  stats: {
    label: string
    value: string
  }[]
}

export default function ProjectCard({ title, description, image, tags, stats }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const rotateXSpring = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const rotateYSpring = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    
    // חישוב מיקום העכבר ביחס לכרטיס
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // חישוב מרכז הכרטיס
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // חישוב המרחק מהמרכז באחוזים
    const rotateXNew = -((y - centerY) / centerY) * 15
    const rotateYNew = ((x - centerX) / centerX) * 15
    
    setRotateX(rotateXNew)
    setRotateY(rotateYNew)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateXSpring}deg) rotateY(${rotateYSpring}deg)`
      }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          transformStyle: "preserve-3d",
          transform: `translateZ(-20px) scale(1.1)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end z-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-300">{description}</p>
          
          {/* Tags with Hover Effect */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Stats with Hover Effect */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
