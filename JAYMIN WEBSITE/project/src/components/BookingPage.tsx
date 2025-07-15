import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Car, Phone, Mail, ArrowLeft } from 'lucide-react';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    carType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const cars = [
    {
      id: 'ertiga',
      name: 'ERTIGA',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      capacity: '7 Seater',
      price: '₹2,500/day',
      features: ['AC', 'GPS', 'Music System', 'Comfortable Seating']
    },
    {
      id: 'swift-dzire',
      name: 'SWIFT DZIRE',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      capacity: '4 Seater',
      price: '₹1,800/day',
      features: ['AC', 'GPS', 'Fuel Efficient', 'Compact Design']
    },
    {
      id: 'innova',
      name: 'INNOVA',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      capacity: '8 Seater',
      price: '₹3,200/day',
      features: ['AC', 'GPS', 'Spacious', 'Premium Comfort']
    },
    {
      id: 'innova-crysta',
      name: 'INNOVA CRYSTA',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
      capacity: '8 Seater',
      price: '₹4,000/day',
      features: ['AC', 'GPS', 'Luxury Interior', 'Premium Features']
    }
  ];

  const destinations = [
    'Goa', 'Kerala', 'Rajasthan', 'Kashmir', 'Himachal Pradesh', 'Golden Triangle',
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Agra', 'Jaipur',
    'Udaipur', 'Jodhpur', 'Varanasi', 'Rishikesh', 'Manali', 'Shimla', 'Darjeeling'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted successfully! Our team will contact you soon.');
    console.log('Booking data:', bookingData);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
              Book Your Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your perfect trip across Incredible India with our premium travel services
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination and Dates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <select
                        name="destination"
                        required
                        value={bookingData.destination}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select Destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="checkIn"
                        required
                        value={bookingData.checkIn}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="checkOut"
                        required
                        value={bookingData.checkOut}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="guests"
                      required
                      value={bookingData.guests}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Car Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Vehicle *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cars.map((car) => (
                      <div
                        key={car.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          bookingData.carType === car.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setBookingData({ ...bookingData, carType: car.id })}
                      >
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-bold text-gray-900">{car.name}</h3>
                        <p className="text-sm text-gray-600">{car.capacity}</p>
                        <p className="text-lg font-semibold text-primary-600 mt-2">{car.price}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {car.features.map((feature, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={bookingData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={bookingData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={bookingData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={4}
                      value={bookingData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Any special requirements or requests..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium">Yash Parmar</p>
                    <p className="text-gray-600">+91 9016935207</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium">Jaimin Parmar</p>
                    <p className="text-gray-600">+91 9664690196</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">pyashkumar646@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-600 text-sm">
                      SUNVIEW CO OPERATIVE HOUSING SOCIETY<br />
                      NEAR SHILP GREEN AVADHCITY<br />
                      SAYAJIPURA ROAD<br />
                      KHODIYAR NAGAR VADODARA 390019<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">Why Choose A&H TRAVELS?</h4>
                <ul className="text-sm text-primary-800 space-y-1">
                  <li>• 10+ Years Experience</li>
                  <li>• Best Price Guarantee</li>
                  <li>• 24/7 Customer Support</li>
                  <li>• Expert Local Guides</li>
                  <li>• Customized Itineraries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;