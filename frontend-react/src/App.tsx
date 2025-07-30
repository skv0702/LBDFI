import React, { useState } from 'react';
import { Menu, X, MapPin, Car, Building, Phone, Mail, User, Calendar, Star, ArrowRight } from 'lucide-react';

interface TourPackage {
  id: number;
  name: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
}

interface Car {
  id: number;
  model: string;
  type: string;
  capacity: number;
  pricePerDay: number;
  image: string;
  features: string[];
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tourPackages: TourPackage[] = [
    {
      id: 1,
      name: "Sacred Bodhgaya Pilgrimage",
      location: "Bodhgaya, Bihar",
      duration: "3 Days / 2 Nights",
      price: 15000,
      image: "https://images.pexels.com/photos/2827373/pexels-photo-2827373.jpeg",
      description: "Experience the spiritual journey to the place where Lord Buddha attained enlightenment.",
      highlights: ["Mahabodhi Temple", "Bodhi Tree", "Buddhist Monasteries", "Meditation Sessions"]
    },
    {
      id: 2,
      name: "Gaya Heritage Tour",
      location: "Gaya, Bihar",
      duration: "2 Days / 1 Night",
      price: 8000,
      image: "https://images.pexels.com/photos/1671630/pexels-photo-1671630.jpeg",
      description: "Explore the ancient city of Gaya with its rich cultural and religious heritage.",
      highlights: ["Vishnupad Temple", "Falgu River", "Pretshila Hill", "Local Markets"]
    },
    {
      id: 3,
      name: "Golden Triangle Deluxe",
      location: "Delhi - Agra - Jaipur",
      duration: "6 Days / 5 Nights",
      price: 35000,
      image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg",
      description: "Discover India's most iconic destinations in comfort and style.",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "City Palace"]
    },
    {
      id: 4,
      name: "Rajasthan Royal Experience",
      location: "Rajasthan",
      duration: "8 Days / 7 Nights",
      price: 45000,
      image: "https://images.pexels.com/photos/3631683/pexels-photo-3631683.jpeg",
      description: "Immerse yourself in the royal heritage of Rajasthan's majestic palaces and forts.",
      highlights: ["Udaipur Lakes", "Jaisalmer Desert", "Jodhpur Fort", "Cultural Shows"]
    },
    {
      id: 5,
      name: "Kerala Backwaters",
      location: "Kerala",
      duration: "5 Days / 4 Nights",
      price: 28000,
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
      description: "Relax in God's Own Country with serene backwaters and lush greenery.",
      highlights: ["Houseboat Stay", "Spice Gardens", "Ayurvedic Spa", "Cultural Performances"]
    },
    {
      id: 6,
      name: "Himalayan Adventure",
      location: "Himachal Pradesh",
      duration: "7 Days / 6 Nights",
      price: 32000,
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
      description: "Experience the breathtaking beauty of the Himalayas with adventure activities.",
      highlights: ["Mountain Trekking", "River Rafting", "Paragliding", "Local Villages"]
    }
  ];

  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Bodhgaya Regency",
      location: "Bodhgaya",
      rating: 4,
      price: 3500,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      amenities: ["Free WiFi", "Restaurant", "Spa", "Garden View"]
    },
    {
      id: 2,
      name: "Gaya Grand Hotel",
      location: "Gaya",
      rating: 3,
      price: 2500,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      amenities: ["AC Rooms", "Room Service", "Parking", "Conference Hall"]
    },
    {
      id: 3,
      name: "Heritage Palace",
      location: "Jaipur",
      rating: 5,
      price: 8500,
      image: "https://images.pexels.com/photos/1002272/pexels-photo-1002272.jpeg",
      amenities: ["Luxury Suites", "Pool", "Fine Dining", "Cultural Shows"]
    }
  ];

  const carFleet: Car[] = [
    {
      id: 1,
      model: "Toyota Innova Crysta",
      type: "SUV",
      capacity: 7,
      pricePerDay: 3500,
      image: "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg",
      features: ["AC", "GPS", "Music System", "Comfortable Seating"]
    },
    {
      id: 2,
      model: "Maruti Suzuki Dzire",
      type: "Sedan",
      capacity: 4,
      pricePerDay: 2200,
      image: "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg",
      features: ["Fuel Efficient", "AC", "Music System", "GPS"]
    },
    {
      id: 3,
      model: "Tempo Traveller",
      type: "Mini Bus",
      capacity: 12,
      pricePerDay: 5500,
      image: "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg",
      features: ["Group Travel", "AC", "Reclining Seats", "Entertainment System"]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            {/* Hero Section */}
            <section className="relative h-screen bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="absolute inset-0">
                <img 
                  src="./src/IMG/buddh.jpg" 
                  alt="Lord Buddha" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
              </div>
              <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Light of BuddhaDharma Foundation International.
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  Discover the Sacred Path of Enlightenment Through Spiritual Journeys
                </p>
                <button 
                  onClick={() => setActiveSection('destinations')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                >
                  Explore Destinations <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Featured Tours */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Spiritual Journeys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tourPackages.slice(0, 3).map((tour) => (
                    <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                      <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{tour.name}</h3>
                        <p className="text-gray-600 mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {tour.location}
                        </p>
                        <p className="text-gray-700 mb-4">{tour.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-orange-500">₹{tour.price.toLocaleString()}</span>
                          <span className="text-gray-500">{tour.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case 'destinations':
        return (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Tour Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tourPackages.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{tour.name}</h3>
                      <p className="text-gray-600 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {tour.location}
                      </p>
                      <p className="text-gray-600 mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {tour.duration}
                      </p>
                      <p className="text-gray-700 mb-4">{tour.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800">Highlights:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {tour.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-2xl font-bold text-orange-500">₹{tour.price.toLocaleString()}</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'carfleet':
        return (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Car Fleet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {carFleet.map((car) => (
                  <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <img src={car.image} alt={car.model} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{car.model}</h3>
                      <p className="text-gray-600 mb-2 flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        {car.type} - {car.capacity} Seater
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800">Features:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {car.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-2xl font-bold text-orange-500">₹{car.pricePerDay}/day</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'hotel':
        return (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Partner Hotels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{hotel.name}</h3>
                      <p className="text-gray-600 mb-2 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {hotel.location}
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(hotel.rating)}
                        <span className="ml-2 text-gray-600">({hotel.rating}/5)</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800">Amenities:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {hotel.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="text-2xl font-bold text-orange-500">₹{hotel.price}/night</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                          Book Room
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About LBDFI</h2>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                  <div className="text-center mb-8">
                    <img 
                      src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg" 
                      alt="Lord Buddha" 
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Lord Buddha Divine Faith India</h3>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="text-xl mb-6">
                      Welcome to Lord Buddha Divine Faith India (LBDFI), your trusted companion for spiritual and cultural journeys across India.
                    </p>
                    
                    <p className="mb-6">
                      Founded with a deep reverence for Lord Buddha's teachings and the rich spiritual heritage of India, LBDFI specializes in creating transformative travel experiences that connect you with the divine essence of our ancient land.
                    </p>
                    
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h4>
                    <p className="mb-6">
                      To provide authentic, enriching, and comfortable travel experiences that allow pilgrims and travelers to explore the sacred sites of Buddhism and India's diverse cultural landscape while maintaining the highest standards of service and hospitality.
                    </p>
                    
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Why Choose LBDFI?</h4>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      <li>Expert knowledge of Buddhist pilgrimage sites</li>
                      <li>Carefully curated spiritual journeys</li>
                      <li>Professional and experienced guides</li>
                      <li>Comfortable accommodations and transportation</li>
                      <li>Personalized service and attention to detail</li>
                      <li>Competitive pricing with no hidden costs</li>
                    </ul>
                    
                    <p className="text-lg">
                      Join us on a journey of discovery, enlightenment, and unforgettable memories as we explore the land where Lord Buddha walked and taught the path to liberation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600">+91 9876543210</p>
                        <p className="text-gray-600">+91 9876543211</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Email</h4>
                        <p className="text-gray-600">info@lbdfi.com</p>
                        <p className="text-gray-600">bookings@lbdfi.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Address</h4>
                        <p className="text-gray-600">
                          123 Bodhi Street<br />
                          Bodhgaya, Bihar 824231<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">LBDFI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'destinations', label: 'Destinations' },
                { id: 'carfleet', label: 'Car Fleet' },
                { id: 'hotel', label: 'Hotels' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-500' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {[
                { id: 'home', label: 'Home' },
                { id: 'destinations', label: 'Destinations' },
                { id: 'carfleet', label: 'Car Fleet' },
                { id: 'hotel', label: 'Hotels' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors ${
                    activeSection === item.id ? 'text-orange-500 bg-gray-50' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">LBDFI</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for spiritual journeys and cultural exploration across India.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setActiveSection('destinations')} className="hover:text-white transition-colors">Destinations</button></li>
                <li><button onClick={() => setActiveSection('carfleet')} className="hover:text-white transition-colors">Car Fleet</button></li>
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors">About</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pilgrimage Tours</li>
                <li>Cultural Tours</li>
                <li>Hotel Booking</li>
                <li>Car Rental</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9876543210
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@lbdfi.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bodhgaya, Bihar
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lord Buddha Divine Faith India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;