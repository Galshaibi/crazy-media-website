import type { Metadata } from 'next'
import ProjectsContent from '@/components/ProjectsContent'

export const metadata: Metadata = {
  title: 'הפרויקטים שלנו | Crazy Media',
  description: 'פרויקטים נבחרים שמדגימים את היכולות שלנו בפיתוח פתרונות AI',
}

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProjectsContent />
    </main>
  )
}

const featuredProjects = [
  {
    title: 'מערכת המלצות AI לרשת קמעונאית מובילה',
    description: 'פיתחנו מערכת המלצות מתקדמת המבוססת על AI עבור אחת מרשתות הקמעונאות הגדולות בישראל',
    image: '/images/projects/recommendation-system.jpg',
    tags: ['מערכות המלצה', 'Machine Learning', 'Big Data'],
    challenge: 'הלקוח חיפש דרך לשפר את חווית הקנייה המקוונת ולהגדיל את שיעור ההמרה באתר האי-קומרס שלו',
    solution: 'פיתחנו מערכת המלצות חכמה המשתמשת באלגוריתמי למידת מכונה מתקדמים לניתוח התנהגות משתמשים והמלצה על מוצרים רלוונטיים',
    results: [
      'עלייה של 35% בהכנסות מהמרות',
      'שיפור של 42% בזמן השהייה באתר',
      'עלייה של 28% בגודל הסל הממוצע'
    ]
  },
  {
    title: 'צ\'אטבוט AI לשירות לקוחות',
    description: 'פיתחנו צ\'אטבוט מבוסס AI עבור חברת תקשורת גדולה, המטפל באלפי פניות לקוחות ביום',
    image: '/images/projects/chatbot.jpg',
    tags: ['NLP', 'Chatbot', 'Customer Service'],
    challenge: 'הלקוח חיפש פתרון לטיפול בעומס פניות לקוחות תוך שיפור זמני התגובה וחווית השירות',
    solution: 'פיתחנו צ\'אטבוט חכם המשתמש בעיבוד שפה טבעית (NLP) מתקדם להבנת פניות לקוחות ומתן מענה מיידי',
    results: [
      'טיפול ב-70% מהפניות ללא התערבות אנושית',
      'קיצור זמני המתנה ב-85%',
      'חיסכון של מיליוני שקלים בעלויות תפעול'
    ]
  },
  {
    title: 'מערכת זיהוי תמונה לבקרת איכות',
    description: 'פיתחנו מערכת ראיית מכונה מתקדמת לזיהוי פגמים במוצרים בזמן אמת',
    image: '/images/projects/computer-vision.jpg',
    tags: ['Computer Vision', 'Quality Control', 'Real-time Processing'],
    challenge: 'הלקוח חיפש דרך לייעל את תהליך בקרת האיכות ולהפחית את שיעור הפגמים במוצרים',
    solution: 'פיתחנו מערכת ראיית מכונה המזהה פגמים בזמן אמת באמצעות אלגוריתמים מתקדמים של deep learning',
    results: [
      'הפחתה של 95% בפגמים שלא זוהו',
      'חיסכון של 60% בעלויות בקרת איכות',
      'הגדלת התפוקה ב-40%'
    ]
  },
  {
    title: 'מערכת חיזוי תחזוקה לתעשייה',
    description: 'פיתחנו מערכת חיזוי תחזוקה מבוססת AI עבור מפעל תעשייתי גדול',
    image: '/images/projects/predictive-maintenance.jpg',
    tags: ['Predictive Maintenance', 'IoT', 'Industry 4.0'],
    challenge: 'הלקוח חיפש דרך להפחית השבתות לא מתוכננות של מכונות ולייעל את תהליכי התחזוקה',
    solution: 'פיתחנו מערכת חיזוי המנתחת נתונים בזמן אמת ומזהה סימנים מוקדמים לתקלות פוטנציאליות',
    results: [
      'הפחתה של 85% בהשבתות לא מתוכננות',
      'חיסכון של 45% בעלויות תחזוקה',
      'הארכת חיי המכונות ב-30%'
    ]
  }
]

const stats = [
  { value: '50+', label: 'פרויקטים מוצלחים' },
  { value: '95%', label: 'שביעות רצון לקוחות' },
  { value: '30M+', label: 'שורות קוד' },
  { value: '500%', label: 'ROI ממוצע' }
]

const testimonials = [
  {
    quote: 'הצוות של Crazy Media הפתיע אותנו עם הידע העמוק והיכולת לתרגם את הצרכים שלנו לפתרון AI מדויק',
    name: 'רון כהן',
    position: 'CTO, רשת קמעונאית מובילה'
  },
  {
    quote: 'התוצאות עלו על כל הציפיות שלנו. הצ\'אטבוט שפיתחו עבורנו חסך לנו מיליוני שקלים',
    name: 'מיכל לוי',
    position: 'מנהלת שירות לקוחות, חברת תקשורת'
  },
  {
    quote: 'היכולת שלהם לקחת בעיה מורכבת ולפתור אותה עם AI היא פשוט מדהימה',
    name: 'אבי ישראלי',
    position: 'מנכ"ל, סטארטאפ טכנולוגי'
  }
]
