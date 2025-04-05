import React, { useState } from 'react';

// --- SVG Icons (Basic Placeholders - Teal color added where needed) ---

const StarIcon = () => (
  <svg className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const DotIcon = () => (
    <svg className="w-2 h-2 inline-block mr-2 text-white" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4"/>
    </svg>
);

const FilterIcon = () => ( // Added teal color on hover potentially
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
);

const AttractionsIcon = () => (
     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const FoodIcon = () => (
     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
);

const InfoIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);


// --- Placeholder Data ---
const destinationData = {
  name: "london",
  rating: 4.7,
  description: "london is a vibrant destination with rich history, stunning landscapes, and delicious cuisine.",
  attractions: [
    { id: 1, title: "london Central Park", description: "A beautiful green space in the heart of the city." },
    { id: 2, title: "london Historical Museum", description: "Learn about the rich history and culture." },
    { id: 3, title: "The london Bridge", description: "An iconic landmark offering stunning views." },
  ],
  foodAndDining: [
      { id: 10, title: "The Royal Oak Pub", description: "Classic British pub fare and local ales." },
      { id: 11, title: "Borough Market", description: "A foodie paradise with diverse street food stalls." },
      { id: 12, title: "Dishoom Covent Garden", description: "Popular spot for delicious Bombay-style cuisine." },
  ],
  practicalInfo: [ // Using key-value for practical info
      {id: 20, key: "Best Time to Visit", value: "Spring (April-May) and Fall (September-October) offer pleasant weather."},
      {id: 21, key: "Safety Tips", value: "Stay aware of your surroundings, especially in crowded areas. Keep valuables secure."},
      {id: 22, key: "Local Transportation", value: "Public transport (Tube, buses) is efficient and extensive. Consider an Oyster card."},
      {id: 23, key: "Accommodation", value: "Wide range available, from budget hostels to luxury hotels. Book in advance."},
      {id: 24, key: "Currency", value: "British Pound Sterling (GBP)."},
  ]
};

// Tab configuration
const contentTabs = [
    { id: 'attractions', label: 'Attractions', icon: AttractionsIcon, data: destinationData.attractions },
    { id: 'food', label: 'Food & Dining', icon: FoodIcon, data: destinationData.foodAndDining },
    { id: 'info', label: 'Practical Info', icon: InfoIcon, data: destinationData.practicalInfo },
];

// --- NEW: Compare Sidebar Component ---
const CompareSidebar = ({ isOpen, onClose }) => {
    const travelerTypes = [
        'Solo Travelling', 'Couples Retreat', 'Family Adventure', 'Adventure & Outdoors',
        'Luxury Experience', 'Budget Travel', 'Cultural Immersion', 'Food & Culinary',
        'Photography Spots', 'Wellness & Relaxation'
    ];

    // Basic state for selected checkboxes (optional, for potential future use)
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes(prev => [...prev, value]);
        } else {
            setSelectedTypes(prev => prev.filter(type => type !== value));
        }
    };

    const handleCompareClick = () => {
        console.log("Comparing experiences for:", selectedTypes);
        // Add actual comparison logic here or pass selectedTypes back up
        onClose(); // Close sidebar after clicking compare (optional)
    }

    return (
        <div
            className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6 z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Select Traveler Types</h3>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close sidebar"
                >
                    <CloseIcon />
                </button>
            </div>

            {/* Checkbox List */}
            <div className="space-y-3 mb-6 h-[calc(100%-140px)] overflow-y-auto pr-2"> {/* Adjust height and padding */}
                {travelerTypes.map((type) => (
                    <div key={type} className="flex items-center">
                        <input
                            id={`compare-${type.replace(/\s+/g, '-')}`}
                            name="travelerTypesCompare"
                            type="checkbox"
                            value={type}
                            onChange={handleCheckboxChange}
                            checked={selectedTypes.includes(type)} // Control checked state
                            // Updated checkbox color to teal
                            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-offset-0 focus:ring-1"
                        />
                        <label
                            htmlFor={`compare-${type.replace(/\s+/g, '-')}`}
                            className="ml-3 block text-sm text-gray-700"
                        >
                            {type}
                        </label>
                    </div>
                ))}
            </div>

             {/* Footer Button */}
            <div className="absolute bottom-6 left-6 right-6">
                 <button
                   type="button"
                   onClick={handleCompareClick}
                   // Teal button styles
                   className="w-full inline-flex items-center justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                 >
                    Compare Experiences
                 </button>
            </div>
        </div>
    );
};


// --- Destinations Component (Updated) ---
const Destinations = () => {
  const [activeContentTab, setActiveContentTab] = useState('attractions');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  const ActiveIcon = contentTabs.find(tab => tab.id === activeContentTab)?.icon || (() => null);
  const activeData = contentTabs.find(tab => tab.id === activeContentTab)?.data || [];

  // Updated active tab style for teal
  const activeContentTabClass = "flex items-center px-4 py-3 bg-white text-teal-600 border border-gray-200 rounded-t-md shadow-sm font-semibold";
  const inactiveContentTabClass = "flex items-center px-4 py-3 text-gray-600 hover:text-gray-800 cursor-pointer";


  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header Section - Updated Gradient */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white p-8 md:p-12">
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
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 -mt-8 rounded-lg shadow-md mb-10">

        {/* About Section with Compare Button */}
        <div className="flex justify-between items-start mb-6 flex-wrap">
            <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">About This Destination</h2>
                <p className="text-gray-600 max-w-2xl">{destinationData.description}</p>
            </div>
             {/* Updated Compare button style & added onClick */}
            <button
                onClick={() => setIsSidebarOpen(true)} // Open sidebar
                className="inline-flex items-center px-4 py-2 border border-teal-500 text-teal-600 text-sm font-medium rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 whitespace-nowrap"
            >
                <FilterIcon />
                Compare Experiences
            </button>
        </div>

        {/* Content Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-0 sm:space-x-4 -mb-px" aria-label="Content Tabs">
            {contentTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <a
                        key={tab.id}
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActiveContentTab(tab.id); }}
                        // Updated active class check
                        className={activeContentTab === tab.id ? activeContentTabClass : inactiveContentTabClass}
                    >
                        <Icon />
                        {tab.label}
                    </a>
                )
            })}
          </nav>
        </div>

        {/* Content Grid/List Area */}
        {activeContentTab === 'attractions' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeData.length > 0 ? activeData.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                )) : ( <p className="text-gray-500 md:col-span-2">No attractions listed.</p> )}
             </div>
        )}

        {/* Food & Dining Content */}
         {activeContentTab === 'food' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {activeData.length > 0 ? activeData.map((item) => (
                   <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                     <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.description}</p>
                   </div>
                 )) : ( <p className="text-gray-500 md:col-span-2">No dining experiences listed.</p> )}
             </div>
         )}

        {/* Practical Info Content */}
         {activeContentTab === 'info' && (
             <div className="space-y-3 text-sm text-gray-700">
                 {activeData.length > 0 ? activeData.map((item) => (
                     <div key={item.id} className="flex">
                         <dt className="font-semibold w-36 flex-shrink-0">{item.key}:</dt>
                         <dd className="ml-2 text-gray-600">{item.value}</dd>
                     </div>
                 )) : ( <p className="text-gray-500">No practical information available.</p> )}
             </div>
         )}

      </div>

        {/* Footer Section */}
        <footer className="text-center py-4 mt-auto">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Wanderlust Canvas. All rights reserved.</p>
        </footer>

        {/* Conditionally render the Sidebar */}
        <CompareSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

    </div>
  )
}

export default Destinations;