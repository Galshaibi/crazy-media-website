import type { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'בלוג | Crazy Media - חדשות ועדכונים בעולם ה-AI',
  description: 'הבלוג שלנו מכיל מאמרים מקצועיים, טיפים וחדשות מעולם ה-AI. הישארו מעודכנים בחידושים האחרונים בתחום',
  keywords: 'בלוג AI, חדשות AI, מאמרים על AI, בינה מלאכותית, טכנולוגיה',
}

export default function BlogPage() {
  return (
    <main className="pt-20">
      <BlogContent />
    </main>
  )
}

const blogPosts = [
  {
    title: 'איך AI משנה את עולם העסקים ב-2024',
    slug: 'ai-business-transformation-2024',
    excerpt: 'סקירה מקיפה של השפעת ה-AI על עולם העסקים וטרנדים מובילים לשנת 2024',
    image: '/images/blog/ai-business.jpg',
    date: '28 דצמבר 2023',
    categories: ['AI', 'עסקים'],
  },
  {
    title: 'מדריך למתחילים: איך להטמיע AI בארגון שלך',
    slug: 'ai-implementation-guide',
    excerpt: 'מדריך מעשי לארגונים המעוניינים להתחיל את המסע שלהם עם טכנולוגיות AI',
    image: '/images/blog/ai-guide.jpg',
    date: '25 דצמבר 2023',
    categories: ['מדריכים', 'יישום'],
  },
  {
    title: 'אתגרי אבטחה בעידן ה-AI',
    slug: 'ai-security-challenges',
    excerpt: 'סקירה של אתגרי האבטחה העיקריים בשימוש במערכות AI ודרכים להתמודדות',
    image: '/images/blog/ai-security.jpg',
    date: '20 דצמבר 2023',
    categories: ['אבטחה', 'AI'],
  },
  {
    title: 'השוואת פלטפורמות AI מובילות',
    slug: 'ai-platforms-comparison',
    excerpt: 'השוואה מקיפה בין פלטפורמות AI מובילות בשוק וכיצד לבחור את המתאימה לך',
    image: '/images/blog/ai-platforms.jpg',
    date: '15 דצמבר 2023',
    categories: ['טכנולוגיה', 'סקירה'],
  },
  {
    title: 'מגמות AI לשנת 2024',
    slug: 'ai-trends-2024',
    excerpt: 'צפי למגמות המובילות בתחום ה-AI בשנת 2024 והשפעתן על השוק',
    image: '/images/blog/ai-trends.jpg',
    date: '10 דצמבר 2023',
    categories: ['טרנדים', 'תחזיות'],
  },
  {
    title: 'סיפורי הצלחה: AI בפעולה',
    slug: 'ai-success-stories',
    excerpt: 'סיפורי הצלחה מרשימים של חברות שהטמיעו פתרונות AI בהצלחה',
    image: '/images/blog/ai-success.jpg',
    date: '5 דצמבר 2023',
    categories: ['case studies', 'השראה'],
  },
]
