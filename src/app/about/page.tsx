"use client"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          מי אנחנו?
        </h1>
        
        <div className="space-y-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-4">החזון שלנו</h2>
            <p className="text-gray-400 leading-relaxed">
              ב-Crazy Media, אנחנו מאמינים שטכנולוגיית AI היא המפתח להצלחה העסקית בעידן הדיגיטלי.
              המשימה שלנו היא להנגיש את הטכנולוגיה המתקדמת ביותר לעסקים מכל הגדלים,
              ולעזור להם להתפתח ולצמוח באמצעות פתרונות חכמים ויעילים.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-4">הצוות שלנו</h2>
            <p className="text-gray-400 leading-relaxed">
              הצוות שלנו מורכב ממומחי AI, מפתחים, ואנשי עסקים מנוסים שעובדים יחד
              כדי ליצור פתרונות מותאמים אישית לכל לקוח. אנחנו מביאים איתנו ניסיון
              עשיר בפיתוח ויישום פתרונות AI מתקדמים במגוון תעשיות.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-4">הגישה שלנו</h2>
            <p className="text-gray-400 leading-relaxed">
              אנחנו מאמינים בגישה אישית ומקצועית. לכל לקוח יש צרכים ייחודיים,
              ואנחנו מתאימים את הפתרונות שלנו בדיוק לפי אותם צרכים. השילוב של
              מקצועיות, יצירתיות וטכנולוגיה מתקדמת מאפשר לנו להביא תוצאות מוכחות.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
