import React, { useState } from 'react'; // Import useState if you plan to make tabs interactive

// --- SVG Icons (Basic Placeholders) ---

const StarIcon = () => (
  <svg className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const DotIcon = () => (
    <svg className="w-2 h-2 inline-block mr-2 text-white" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4"/>
    </svg>
);

const FilterIcon = () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
);

const AttractionsIcon = () => (
     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const FoodIcon = () => (
     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg> // Basic food/restaurant icon
);

const InfoIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);


// --- Placeholder Data ---
const destinationData = {
  name: "london",
  rating: 4.7,
  description: "london is a vibrant destination with rich history, stunning landscapes, and delicious cuisine.",
  attractions: [
    { id: 1, title: "london Central Park", description: "A beautiful green space in the heart of the city." },
    { id: 2, title: "london Historical Museum", description: "Learn about the rich history and culture." },
    // Add more attractions if needed
  ],
  // Add data for food and practical info if implementing those tabs
};

// Tab configuration
const contentTabs = [
    { id: 'attractions', label: 'Attractions', icon: AttractionsIcon, data: destinationData.attractions },
    { id: 'food', label: 'Food & Dining', icon: FoodIcon, data: [] }, // Placeholder data
    { id: 'info', label: 'Practical Info', icon: InfoIcon, data: [] },   // Placeholder data
];


// --- Destinations Component ---
const Destinations = () => {
  // State for active content tab (default to attractions)
  const [activeContentTab, setActiveContentTab] = useState('attractions');

  const ActiveIcon = contentTabs.find(tab => tab.id === activeContentTab)?.icon || (() => null);
  const activeData = contentTabs.find(tab => tab.id === activeContentTab)?.data || [];

  // Active/Inactive styles for content tabs
  const activeContentTabClass = "flex items-center px-4 py-3 bg-white text-blue-600 border border-gray-200 rounded-t-md shadow-sm font-semibold"; // Adjusted style for active tab
  const inactiveContentTabClass = "flex items-center px-4 py-3 text-gray-600 hover:text-gray-800 cursor-pointer";


  return (
    <div className="bg-gray-100 min-h-screen"> {/* Optional page background */}

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-1 flex items-center">
            <DotIcon />
            {destinationData.name}
          </h1>
          <div className="flex items-center text-lg">
            <StarIcon />
            <span className="ml-1">{destinationData.rating} Traveler Rating</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 -mt-8 rounded-lg shadow-md mb-10"> {/* Negative margin to overlap header slightly */}

        {/* About Section with Compare Button */}
        <div className="flex justify-between items-start mb-6 flex-wrap"> {/* flex-wrap for smaller screens */}
            <div className="mb-4 md:mb-0"> {/* Margin bottom on small screens */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">About This Destination</h2>
                <p className="text-gray-600 max-w-2xl">{destinationData.description}</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 whitespace-nowrap">
                <FilterIcon />
                Compare Experiences
            </button>
        </div>

        {/* Content Tabs Navigation */}
        {/* Use a border bottom on the container, and remove bottom border from tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-0 sm:space-x-4 -mb-px" aria-label="Content Tabs"> {/* Adjust spacing */}
            {contentTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <a
                        key={tab.id}
                        href="#" // Prevent page jump, handle with state
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveContentTab(tab.id);
                        }}
                        className={activeContentTab === tab.id ? activeContentTabClass : inactiveContentTabClass}
                    >
                        <Icon />
                        {tab.label}
                    </a>
                )
            })}
          </nav>
        </div>

        {/* Content Grid Area */}
        {activeContentTab === 'attractions' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeData.length > 0 ? activeData.map((item) => (
                  // Attraction Card
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                )) : (
                    <p className="text-gray-500 md:col-span-2">No attractions listed for this destination yet.</p>
                )}
             </div>
        )}

        {/* Add conditional rendering for other tabs (Food & Dining, Practical Info) here */}
         {activeContentTab === 'food' && (
             <div className="text-gray-500">Food & Dining content will be displayed here.</div>
         )}
         {activeContentTab === 'info' && (
             <div className="text-gray-500">Practical Info content will be displayed here.</div>
         )}

      </div>

        {/* Footer Section */}
        <footer className="text-center py-4 mt-auto">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Wanderlust Canvas. All rights reserved.</p>
        </footer>

    </div>
  )
}

export default Destinations;