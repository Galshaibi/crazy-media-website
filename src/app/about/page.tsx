import type { Metadata } from 'next'
import { getPageContent } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'אודות | Crazy Media - חברת AI מובילה',
  description: 'הכירו את Crazy Media - חברת AI מובילה המתמחה בפיתוח פתרונות בינה מלאכותית מתקדמים. גלו את הצוות שלנו, החזון והערכים שמנחים אותנו.',
  keywords: 'אודות Crazy Media, חברת AI, בינה מלאכותית, צוות מקצועי, חדשנות טכנולוגית',
}

export default async function AboutPage() {
  const pageContent = await getPageContent('about');
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent?.title || 'About Us'}
          </h1>
          <div className="prose max-w-none">
            {pageContent?.content || (
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to Crazy Media, your premier destination for creative digital solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We are a team of passionate creators, developers, and innovators dedicated to bringing your digital vision to life.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
