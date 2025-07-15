import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Travelers' },
    { icon: Globe, number: '120+', label: 'Destinations' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              About A&H TRAVELS
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              For over 10 years, we've been crafting extraordinary travel experiences across India. Our passion for showcasing India's rich heritage and commitment to excellence has made us a trusted partner for travelers exploring Incredible India.
            </p>
            <p className="text-gray-600 mb-8">
              Founded by Yash Parmar and Jaimin Parmar, we believe that travel is about discovering India's diverse cultures, traditions, and landscapes. Our team of local experts ensures every journey showcases the true essence of India.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel team planning"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">Best Travel Agency 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and enable people to explore the world through exceptional travel experiences that create lasting memories and meaningful connections.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the world's most trusted travel partner, known for our expertise, innovation, and commitment to sustainable tourism practices.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, and personalized service guide everything we do. We're committed to exceeding expectations and creating extraordinary journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;