"use client"

export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'פיתוח צ\'אטבוטים',
      description: 'צ\'אטבוטים חכמים המותאמים אישית לצרכי העסק שלכם'
    },
    {
      icon: '📱',
      title: 'אוטומציה לעסקים',
      description: 'פתרונות אוטומציה חכמים שחוסכים לכם זמן וכסף'
    },
    {
      icon: '🎯',
      title: 'פתרונות AI מתקדמים',
      description: 'שילוב טכנולוגיות AI מתקדמות בעסק שלכם'
    },
    {
      icon: '📊',
      title: 'ניתוח נתונים',
      description: 'ניתוח נתונים מתקדם והפקת תובנות עסקיות'
    },
    {
      icon: '🔍',
      title: 'ייעוץ טכנולוגי',
      description: 'ייעוץ מקצועי בתחום הAI והטכנולוגיה'
    },
    {
      icon: '🎓',
      title: 'הדרכות והטמעה',
      description: 'הדרכות והטמעת מערכות AI בארגון'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        השירותים שלנו
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass-card p-8">
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
