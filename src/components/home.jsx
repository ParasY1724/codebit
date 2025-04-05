import React, { useState } from 'react';
// Assuming you are using lucide-react, otherwise replace with your icon source
import { Search, Compass, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TravelHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        backgroundBlendMode: "overlay",
        // Updated overlay color to a teal shade
        backgroundColor: "rgba(0, 0, 0, 0.3)" // Example: teal-600 at 30% opacity
      }}>
        {/* Optional gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div> */}


        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center h-[calc(70vh-68px)] text-center px-4"> {/* Adjust height based on actual navbar height */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">Discover Extraordinary Travel Stories</h1> {/* Added text shadow */}
          <p className="text-white text-sm md:text-base mb-6 drop-shadow-md">Explore destinations through the eyes of real travelers and create your perfect journey</p>

           {/* Search Bar - Updated border and button color */}
          <div className="flex w-full max-w-xl bg-white rounded-full shadow-lg overflow-hidden border border-teal-500 px-4 py-2 items-center">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
                type="text"
                placeholder="Find your dream trip..."
                className="flex-grow px-2 py-1 text-gray-700 focus:outline-none" // Adjusted padding
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-teal-600 text-white px-5 py-1.5 rounded-full text-sm hover:bg-teal-700 transition duration-200" onClick={() => {navigate('/destination-details?q=london')}}>Search</button> {/* Adjusted padding/size */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white w-full px-8 py-12 flex flex-col gap-16"> {/* Added more vertical padding */}

        {/* Feature icons section - Updated icon colors */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">Discover the World with Us</h2> {/* Adjusted weight/margin */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 mb-8 max-w-7xl mx-auto"> {/* Increased gap */}
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-3"> {/* Changed color */}
                {/* Replace with actual icon component if needed */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-semibold text-m mb-1">Explore Global Destinations</h3>
              <p className="text-sm text-gray-600">Discover hidden gems and popular locations around the world</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-3"> {/* Changed color */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-m mb-1">Personalized Recommendations</h3>
              <p className="text-sm text-gray-600">Get tailored travel suggestions based on your preferences</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-3"> {/* Changed color */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-m mb-1">Curated Experiences</h3>
              <p className="text-sm text-gray-600">Handpicked activities recommended by travelers</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-3"> {/* Changed color */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Changed color */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-m mb-1">Interactive Travel Maps</h3>
              <p className="text-sm text-gray-600">Plan your journey with our detailed and interactive maps</p>
            </div>
          </div>
        </div>

        {/* Popular Destinations Section */}
        <div className="mb-8 max-w-7xl mx-auto rounded-lg"> {/* Added rounded corners */}
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Popular Destinations</h2> {/* Adjusted margin */}
           {/* Assuming local image paths - update src as needed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-200 px-8 py-12 rounded-lg">
            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img4.jpeg" alt="Bali, Indonesia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">Bali, Indonesia</div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img1.jpeg" alt="Santorini, Greece" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">Santorini, Greece</div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img2.jpeg" alt="Kyoto, Japan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">Kyoto, Japan</div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img3.jpeg" alt="Paris, France" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">Paris, France</div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img7.jpeg" alt="Amsterdam, Netherlands" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">Amsterdam, Netherlands</div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 group">
              <img src="/img6.jpg" alt="New York, USA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm drop-shadow">New York, USA</div>
            </div>
          </div>

          <div className="text-center mt-8">
             {/* Updated button color */}
            <button onClick={() => {navigate('/explore')}} className="bg-teal-600 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-teal-700 transition duration-200">Discover More Destinations</button>
          </div>
        </div>

      </div>

      {/* Footer CTA Section - Updated Background Color */}
      <div className="bg-teal-800 text-white py-12 px-8"> {/* Changed color */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="mb-6 text-teal-100">Join our travel community and get personalized recommendations for your next adventure.</p> {/* Lighter text */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => {navigate('/pricing')}} className="bg-transparent border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-teal-800 transition duration-200">See Pricing</button>
              {/* Updated button color */}
              <button className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700 transition duration-200">Sign Up Now</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TravelHomePage;