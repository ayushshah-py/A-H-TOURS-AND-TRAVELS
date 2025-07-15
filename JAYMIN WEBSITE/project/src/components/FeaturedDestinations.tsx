import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Goa',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹15,999',
      duration: '7 days',
      rating: 4.9,
      reviews: 234,
      description: 'Experience beautiful beaches, Portuguese heritage, and vibrant nightlife',
      features: ['Beach Resort', 'Water Sports', 'Heritage Tours']
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹12,999',
      duration: '6 days',
      rating: 4.8,
      reviews: 189,
      description: 'Cruise through serene backwaters and experience God\'s Own Country',
      features: ['Houseboat Stay', 'Ayurveda Spa', 'Spice Gardens']
    },
    {
      id: 3,
      name: 'Rajasthan',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹18,999',
      duration: '10 days',
      rating: 4.9,
      reviews: 156,
      description: 'Explore majestic palaces, desert landscapes, and royal heritage',
      features: ['Palace Hotels', 'Camel Safari', 'Cultural Shows']
    },
    {
      id: 4,
      name: 'Kashmir Valley',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹22,999',
      duration: '8 days',
      rating: 4.7,
      reviews: 298,
      description: 'Experience paradise on earth with stunning valleys and lakes',
      features: ['Houseboat Stay', 'Shikara Rides', 'Mountain Views']
    },
    {
      id: 5,
      name: 'Himachal Pradesh',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹16,999',
      duration: '7 days',
      rating: 5.0,
      reviews: 167,
      description: 'Adventure in the Himalayas with scenic hill stations',
      features: ['Mountain Resort', 'Trekking', 'Adventure Sports']
    },
    {
      id: 6,
      name: 'Golden Triangle',
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹14,999',
      duration: '6 days',
      rating: 4.8,
      reviews: 203,
      description: 'Discover Delhi, Agra, and Jaipur - India\'s most iconic cities',
      features: ['Taj Mahal Visit', 'Heritage Hotels', 'Cultural Tours']
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of extraordinary destinations that promise unforgettable experiences and breathtaking adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{destination.price}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-1 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
                    <span className="text-sm text-gray-500">({destination.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Small Groups</span>
                  </div>
                  <button className="btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;