"use client"

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const blogPosts = [
  {
    title: "עתיד הבינה המלאכותית בישראל",
    description: "סקירה מקיפה של התפתחות תעשיית ה-AI בישראל והזדמנויות עתידיות",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    date: "28 דצמבר 2023",
    readTime: "5 דקות קריאה",
    tags: ["AI", "טכנולוגיה", "חדשנות"]
  },
  {
    title: "איך AI משנה את עולם העסקים",
    description: "מדריך מעשי להטמעת טכנולוגיות AI בעסקים קטנים ובינוניים",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
    date: "25 דצמבר 2023",
    readTime: "7 דקות קריאה",
    tags: ["עסקים", "AI", "חדשנות"]
  },
  {
    title: "מגמות AI לשנת 2024",
    description: "הטרנדים החמים ביותר בתחום הבינה המלאכותית לשנה הקרובה",
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2938&auto=format&fit=crop",
    date: "20 דצמבר 2023",
    readTime: "6 דקות קריאה",
    tags: ["טרנדים", "AI", "2024"]
  }
];

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

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export default function BlogContent() {
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
              הבלוג שלנו
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              תובנות, חדשות וטיפים בנושא AI ופיתוח תוכנה
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-gray-400 mb-6">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
