import React from 'react';
import { Plane, Hotel, Car, Camera, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Find the best flight deals with our extensive network of airline partners worldwide.',
      features: ['Best Price Guarantee', '24/7 Support', 'Flexible Booking']
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Book from luxury resorts to boutique hotels with exclusive rates and amenities.',
      features: ['Luxury Properties', 'Exclusive Deals', 'Free Cancellation']
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Comfortable and reliable transportation options for all your travel needs.',
      features: ['Airport Transfers', 'Private Tours', 'Local Guides']
    },
    {
      icon: Camera,
      title: 'Guided Tours',
      description: 'Expert-led tours that reveal hidden gems and local secrets of each destination.',
      features: ['Local Experts', 'Small Groups', 'Cultural Immersion']
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage to protect your investment and give you peace of mind.',
      features: ['Medical Coverage', 'Trip Protection', 'Emergency Support']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated travel specialists wherever you are.',
      features: ['Emergency Hotline', 'Live Chat', 'Local Assistance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to execution, we handle every detail of your journey to ensure a seamless and memorable travel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let our travel experts create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;