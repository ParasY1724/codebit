import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  MapPinIcon,
  BedDoubleIcon,
  UtensilsIcon,
  CompassIcon,
  UserIcon,
  UsersIcon,
  BadgeIcon
} from 'lucide-react';

const TravelComparison = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced tabs with more appropriate icons
  const contentTabs = [
    { name: 'Overview', icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'Accommodations', icon: <BedDoubleIcon className="w-5 h-5" /> },
    { name: 'Food & Dining', icon: <UtensilsIcon className="w-5 h-5" /> },
    { name: 'Must-Visit Places', icon: <MapPinIcon className="w-5 h-5" /> },
    { name: 'Travel Tips', icon: <CompassIcon className="w-5 h-5" /> },
  ];

  // Travel styles with icons
  const travelStyles = [
    { name: 'Solo Traveler', icon: <UserIcon className="w-4 h-4" /> },
    { name: 'Couples Retreat', icon: <UsersIcon className="w-4 h-4" /> },
    { name: 'Family Adventure', icon: <BadgeIcon className="w-4 h-4" /> }
  ];

  // Accommodations data
  const accommodationsData = {
    'Solo Traveler': {
      title: 'Mid-range Hotels & Airbnbs',
      description: 'Mid-range hotels and private Airbnbs offering good value and convenient locations.',
      features: [
        'Central locations near transit',
        'Private rooms with workspace',
        'Common areas for socializing',
        'Budget-friendly options'
      ],
      rating: '4.5'
    },
    'Couples Retreat': {
      title: 'Boutique Hotels & Romantic Stays',
      description: 'Boutique hotels and romantic Airbnbs with special amenities and atmosphere.',
      features: [
        'King-sized beds and luxury linens',
        'In-room amenities and special touches',
        'Scenic views or balconies',
        'Private and intimate settings'
      ],
      rating: '4.7'
    },
    'Family Adventure': {
      title: 'Family Suites & Vacation Rentals',
      description: 'Family suites and vacation rentals with multiple rooms and kitchen facilities.',
      features: [
        'Multiple bedrooms and bathrooms',
        'Full kitchen facilities',
        'Common living spaces',
        'Kid-friendly amenities'
      ],
      rating: '4.3'
    }
  };

  // Food & Dining data
  const foodData = {
    'Solo Traveler': {
      title: 'Quick & Casual Dining',
      description: 'Quick cafés, street food, and casual dining options. Explore diverse culinary scenes at your own pace.',
      features: [
        'Local cafés and coffee shops',
        'Food markets and street food',
        'Counter seating options',
        'Diverse international cuisine'
      ],
      rating: '4.4'
    },
    'Couples Retreat': {
      title: 'Romantic Dining Experiences',
      description: 'Romantic restaurants, cozy pubs, and fine dining experiences. Enjoy intimate meals and shareable plates.',
      features: [
        'Candlelit restaurants with ambiance',
        'Wine bars and tasting experiences',
        'Rooftop dining with views',
        'Michelin-starred restaurants'
      ],
      rating: '4.8'
    },
    'Family Adventure': {
      title: 'Family-Friendly Eateries',
      description: 'Family-friendly restaurants with diverse menus, kid-friendly cafés, and picnic opportunities in parks.',
      features: [
        'Restaurants with kids menus',
        'Interactive dining experiences',
        'Casual pub settings',
        'Picnic-friendly locations'
      ],
      rating: '4.2'
    }
  };

  // Must-Visit Places data
  const placesData = {
    'Solo Traveler': {
      title: 'Cultural & Historic Sites',
      description: 'Enjoy the freedom to explore London\'s rich cultural heritage at your own pace.',
      features: [
        'London Historical Center (Tower of London, Westminster Abbey)',
        'World-Class Museums (British Museum, National Gallery)',
        'Vibrant Neighborhoods (Shoreditch, Notting Hill)',
        'Parks and Green Spaces (Hyde Park, Regent\'s Park)'
      ],
      rating: '4.7'
    },
    'Couples Retreat': {
      title: 'Romantic Destinations',
      description: 'Create lasting memories together at London\'s most romantic spots.',
      features: [
        'Romantic Strolls along the Thames River',
        'West End Theatre Shows',
        'Charming Cafés in Kensington',
        'Exclusive Rooftop Bars with City Views'
      ],
      rating: '4.9'
    },
    'Family Adventure': {
      title: 'Kid-Friendly Attractions',
      description: 'Keep the whole family entertained with these engaging destinations.',
      features: [
        'London Zoo',
        'Science Museum and Natural History Museum',
        'London Eye',
        'Hamleys Toy Store'
      ],
      rating: '4.5'
    }
  };

  // Travel Tips data
  const tipsData = {
    'Solo Traveler': {
      title: 'Solo Travel Tips',
      description: 'Make the most of your independent London adventure.',
      features: [
        'Utilize London\'s efficient public transport (Oyster card/contactless)',
        'Consider joining free walking tours to explore the city',
        'Stay in well-connected areas for easy access to attractions',
        'Be mindful of your belongings in crowded areas'
      ],
      rating: '4.6'
    },
    'Couples Retreat': {
      title: 'Couple\'s Travel Tips',
      description: 'Advice for creating the perfect romantic getaway in London.',
      features: [
        'Book romantic experiences in advance (e.g., river cruise, afternoon tea)',
        'Explore quieter neighborhoods for a more intimate atmosphere',
        'Consider a hotel with special couple\'s packages',
        'Enjoy evening strolls in well-lit areas'
      ],
      rating: '4.7'
    },
    'Family Adventure': {
      title: 'Family Travel Tips',
      description: 'Practical advice for a smooth family trip to London.',
      features: [
        'Plan your itinerary with child-friendly activities and breaks',
        'Take advantage of family tickets and discounts for attractions',
        'Utilize parks and playgrounds for downtime',
        'Carry snacks and water, especially when traveling with young children'
      ],
      rating: '4.4'
    }
  };

  const getStaticContent = (tab) => {
    switch (tab.name) {
      case 'Overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelStyles.map(style => (
              <div
                key={style.name}
                className={`border rounded-lg overflow-hidden`}
              >
                <div className={`bg-teal-600 text-white p-4 flex justify-between items-center`}>
                  <h2 className="text-xl font-medium">{style.name}</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-300 mr-1">★</span>
                    <span>{getRating(style.name)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">Experience by {getTravelerName(style.name)}</p>

                  <div className="flex items-start mb-3">
                    <div className="text-teal-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Budget:</div>
                      <div className="font-medium">{getBudget(style.name)} per person</div>
                    </div>
                  </div>

                  <div className="flex items-start mb-3">
                    <div className="text-teal-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Duration:</div>
                      <div className="font-medium">{getDuration(style.name)} days</div>
                    </div>
                  </div>

                  <div className="flex items-start mb-3">
                    <div className="text-teal-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Stay:</div>
                      <div className="font-medium">{getStay(style.name)}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-teal-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Top Must-Visit:</div>
                      <ul className="list-disc ml-5">
                        {getTopVisits(style.name).map((place, index) => (
                          <li key={index}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Accommodations':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelStyles.map(style => (
              <div
                key={style.name}
                className={`border rounded-lg overflow-hidden`}
              >
                <div className={`bg-teal-600 text-white p-4 flex justify-between items-center`}>
                  <h2 className="text-xl font-medium">{style.name}</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-300 mr-1">★</span>
                    <span>{accommodationsData[style.name].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{accommodationsData[style.name].title}</h3>
                  <p className="text-gray-600 mb-4">{accommodationsData[style.name].description}</p>

                  <div className="flex items-start">
                    <div className="text-teal-500 mr-3 mt-1">
                      <BedDoubleIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Accommodation Features:</div>
                      <ul className="list-disc ml-5">
                        {accommodationsData[style.name].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Food & Dining':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelStyles.map(style => (
              <div
                key={style.name}
                className={`border rounded-lg overflow-hidden`}
              >
                <div className={`bg-teal-600 text-white p-4 flex justify-between items-center`}>
                  <h2 className="text-xl font-medium">{style.name}</h2>
                  <div className="flex items-center">
                  <span className="text-yellow-300 mr-1">★</span>
                    <span>{foodData[style.name].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{foodData[style.name].title}</h3>
                  <p className="text-gray-600 mb-4">{foodData[style.name].description}</p>

                  <div className="flex items-start">
                    <div className="text-teal-500 mr-3 mt-1">
                      <UtensilsIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Dining Options:</div>
                      <ul className="list-disc ml-5">
                        {foodData[style.name].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Must-Visit Places':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelStyles.map(style => (
              <div
                key={style.name}
                className={`border rounded-lg overflow-hidden`}
              >
                <div className={`bg-teal-600 text-white p-4 flex justify-between items-center`}>
                  <h2 className="text-xl font-medium">{style.name}</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-300 mr-1">★</span>
                    <span>{placesData[style.name].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{placesData[style.name].title}</h3>
                  <p className="text-gray-600 mb-4">{placesData[style.name].description}</p>

                  <div className="flex items-start">
                    <div className="text-teal-500 mr-3 mt-1">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Must-Visit Attractions:</div>
                      <ul className="list-disc ml-5">
                        {placesData[style.name].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Travel Tips':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {travelStyles.map(style => (
              <div
                key={style.name}
                className={`border rounded-lg overflow-hidden`}
              >
                <div className={`bg-teal-600 text-white p-4 flex justify-between items-center`}>
                  <h2 className="text-xl font-medium">{style.name}</h2>
                  <div className="flex items-center">
                    <span className="text-yellow-300 mr-1">★</span>
                    <span>{tipsData[style.name].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{tipsData[style.name].title}</h3>
                  <p className="text-gray-600 mb-4">{tipsData[style.name].description}</p>

                  <div className="flex items-start">
                    <div className="text-teal-500 mr-3 mt-1">
                      <CompassIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Practical Advice:</div>
                      <ul className="list-disc ml-5">
                        {tipsData[style.name].features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Helper functions remain the same
  const getRating = (style) => {
    switch (style) {
      case 'Solo Traveler': return '4.6';
      case 'Couples Retreat': return '4.8';
      case 'Family Adventure': return '4.4';
      default: return '';
    }
  };

  const getTravelerName = (style) => {
    switch (style) {
      case 'Solo Traveler': return 'Quinn Wilson';
      case 'Couples Retreat': return 'James & Sarah Reynolds';
      case 'Family Adventure': return 'The Martinez Family';
      default: return '';
    }
  };

  const getBudget = (style) => {
    switch (style) {
      case 'Solo Traveler': return '$1692';
      case 'Couples Retreat': return '$2100';
      case 'Family Adventure': return '$2850';
      default: return '';
    }
  };

  const getDuration = (style) => {
    switch (style) {
      case 'Solo Traveler': return '4';
      case 'Couples Retreat': return '5';
      case 'Family Adventure': return '6';
      default: return '';
    }
  };

  const getStay = (style) => {
    switch (style) {
      case 'Solo Traveler': return 'Mid-range Hotel / Airbnb';
      case 'Couples Retreat': return 'Boutique Hotel / Romantic Airbnb';
      case 'Family Adventure': return 'Family Suite / Vacation Rental';
      default: return '';
    }
  };

  const getTopVisits = (style) => {
    switch (style) {
      case 'Solo Traveler': return ['London Historical Center', 'London Art Museum'];
      case 'Couples Retreat': return ['London Gardens', 'London Sunset Viewpoint'];
      case 'Family Adventure': return ['London Zoo', 'London Science Museum'];
      default: return [];
    }
  };

  return (
    <div className="bg-white font-sans max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Comparing Travel Experiences in London</h1>
        <p className="text-gray-500 mt-1">Compare different travel styles based on real traveler experiences</p>
      </div>

      {/* Travel Style Tabs - Improved with icons and responsive design */}
      <div className="flex flex-wrap mb-4 gap-2">
        {travelStyles.map(style => (
          <div
            key={style.name}
            className={`px-6 py-2 font-medium rounded-full transition-all flex items-center bg-teal-600 text-white shadow-md`}
          >
            <span className="mr-2">{style.icon}</span>
            {style.name}
          </div>
        ))}
      </div>

      {/* Navigation Tabs - Improved with sticky behavior for mobile and better spacing */}
      <div className={`flex ${isMobile ? 'overflow-x-auto' : 'flex-wrap'} border-b border-gray-200 mb-6 ${isMobile ? 'sticky top-0 bg-white z-10 py-2' : ''}`}>
        {contentTabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center px-4 py-3 font-medium whitespace-nowrap transition-all ${
              activeTab === tab.name
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="mr-2">{tab.icon}</div>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className="transition-all duration-300 ease-in-out">
        {getStaticContent(contentTabs.find(tab => tab.name === activeTab) || contentTabs[0])}
      </div>
    </div>
  );
};

export default TravelComparison;