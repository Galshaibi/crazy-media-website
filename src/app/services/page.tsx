import type { Metadata } from 'next'
import { getServices } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'השירותים שלנו | Crazy Media',
  description: 'מגוון פתרונות AI מתקדמים להאצת הצמיחה העסקית שלכם',
}

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-6">
              {service.icon && (
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
              )}
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
