import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Compass, LogIn, UserPlus } from 'lucide-react';

const TravelHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 100, 150, 0.3)"
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        
        <div className="relative w-full flex justify-between items-center px-8 py-4 bg-white">
          <div className="text-blue-900 font-bold text-xl">WanderLust Canvas</div>
          
          <div className="flex space-x-2 items-center text-gray-800">
            <button className="flex items-center gap-1 text-sm px-2 py-1 hover:text-blue-600">
              <Compass className="w-4 h-4" /> Explore
            </button>
            
            <button className="flex items-center gap-1 text-sm px-2 py-1 hover:text-blue-600">
              <Search className="w-4 h-4" /> Search
            </button>

           
              <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 rounded">
                <LogIn className="w-4 h-4" /> Login
              </button>
              <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 text-sm hover:bg-blue-600 rounded">
                <UserPlus className="w-4 h-4" /> Sign Up
              </button>
           
          </div>
        </div>
        
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">Discover Extraordinary Travel Stories</h1>
          <p className="text-white text-sm md:text-base mb-6">Explore destinations through the eyes of real travelers and create your perfect journey</p>
          
          <div className="flex w-full max-w-xl bg-white rounded-full shadow-lg overflow-hidden border border-blue-500 px-4 py-2 items-center">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input 
                type="text" 
                placeholder="Find your dream trip..." 
                className="flex-grow px-2 py-2 text-gray-700 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white w-full px-8">
        <h2 className="text-center text-2xl font-bold py-6">Discover the World with Us</h2>
        
        {/* Feature icons section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="font-semibold text-m mb-1">Explore Global Destinations</h3>
            <p className="text-sm text-gray-600">Discover hidden gems and popular locations around the world</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-m mb-1">Personalized Recommendations</h3>
            <p className="text-sm text-gray-600">Get tailored travel suggestions based on your preferences</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-m mb-1">Curated Experiences</h3>
            <p className="text-sm text-gray-600">Handpicked activities recommended by travelers</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="font-semibold text-m mb-1">Interactive Travel Maps</h3>
            <p className="text-sm text-gray-600">Plan your journey with our detailed and interactive maps</p>
          </div>
        </div>
        
       
        <div className="bg-gray-100 px-8 py-12 mb-8 ">
          <h2 className="text-xl font-bold mb-6 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img4.jpeg" alt="Bali, Indonesia" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">Bali, Indonesia</div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img1.jpeg" alt="Santorini, Greece" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">Santorini, Greece</div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img2.jpeg" alt="Kyoto, Japan" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">Kyoto, Japan</div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img3.jpeg" alt="Paris, France" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">Paris, France</div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img7.jpeg" alt="Amsterdam, Netherlands" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">Amsterdam, Netherlands</div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden h-64">
              <img src="img6.jpg" alt="New York, USA" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">New York, USA</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm hover:bg-blue-600 transition">Discover More Destinations</button>
          </div>
        </div>
        
      </div>
      
      <div className="bg-blue-900 text-white py-12 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-6">Join our travel community and get personalized recommendations for your next adventure.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Learn More</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up Now</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TravelHomePage;