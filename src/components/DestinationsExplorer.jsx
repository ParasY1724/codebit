import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationsExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  // Sample destinations data
  const allDestinations = [
    {
      id: 1,
      name: 'London',
      category: ['Beaches', 'Culture'],
      region: 'Asia',
      rating: 4.8,
      image: "/img1.jpeg",
      description: 'Lush landscapes, pristine beaches, and rich cultural heritage.'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      category: ['Beaches'],
      region: 'Europe',
      rating: 4.9,
      image: "/img2.jpeg",
      description: 'Stunning sunsets, whitewashed buildings, and crystal-clear waters.'
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      category: ['Culture'],
      region: 'Asia',
      rating: 4.7,
      image: "/img3.jpeg",
      description: 'Ancient temples, traditional gardens, and authentic Japanese culture.'
    },
    {
      id: 4,
      name: 'Paris, France',
      category: ['Cities', 'Culture'],
      region: 'Europe',
      rating: 4.6,
      image: "/img4.jpeg",
      description: 'Iconic landmarks, world-class cuisine, and romantic atmosphere.'
    },
    {
      id: 5,
      name: 'Machu Picchu, Peru',
      category: ['Adventure', 'Culture'],
      region: 'Americas',
      rating: 4.9,
      image: "/img7.jpeg",
      description: 'Ancient Incan citadel set amidst breathtaking mountain scenery.'
    },
    {
      id: 6,
      name: 'New York City, USA',
      category: ['Cities'],
      region: 'Americas',
      rating: 4.7,
      image: "/img6.jpg",
      description: 'Iconic skyline, diverse neighborhoods, and endless entertainment.'
    },
    {
      id: 7,
      name: 'Cape Town, South Africa',
      category: ['Adventure', 'Beaches'],
      region: 'Africa',
      rating: 4.6,
      image: "/img1.jpeg",
      description: 'Stunning landscapes, vibrant culture, and diverse wildlife.'
    },
    {
      id: 8,
      name: 'Venice, Italy',
      category: ['Cities', 'Culture'],
      region: 'Europe',
      rating: 4.5,
      image: "/img2.jpeg",
      description: 'Romantic canals, historic architecture, and unique character.'
    },
    {
      id: 9,
      name: 'Sydney, Australia',
      category: ['Beaches', 'Cities'],
      region: 'Oceania',
      rating: 4.8,
      image: "/img4.jpeg",
      description: 'Iconic Opera House, beautiful beaches, and vibrant city life.'
    },
    {
      id: 10,
      name: 'Rio de Janeiro, Brazil',
      category: ['Beaches', 'Adventure'],
      region: 'Americas',
      rating: 4.7,
      image: "/img4.jpeg",
      description: 'Famous beaches like Copacabana and Ipanema, and the iconic Christ the Redeemer.'
    },
    {
      id: 11,
      name: 'Cairo, Egypt',
      category: ['Culture', 'History'],
      region: 'Africa',
      rating: 4.5,
      image: "/img2.jpeg",
      description: 'Home to the ancient pyramids of Giza and the Sphinx.'
    },
    {
      id: 12,
      name: 'Amsterdam, Netherlands',
      category: ['Cities', 'Culture'],
      region: 'Europe',
      rating: 4.6,
      image: "/img6.jpg",
      description: 'Beautiful canals, historic houses, and world-class museums.'
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 8;

  // Categories for filters
  const categories = ['Beaches', 'Cities', 'Culture', 'Adventure', 'History'];

  // Handle category checkbox change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter destinations based on search and selected categories
  const filteredDestinations = allDestinations.filter(destination => {
    const matchesSearch = searchQuery === '' ||
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategories = selectedCategories.length === 0 ||
      destination.category.some(cat => selectedCategories.includes(cat));

    return matchesSearch && matchesCategories;
  });

  // Pagination logic
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredDestinations.slice(indexOfFirstDestination, indexOfLastDestination);

  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with search */}
      <div
        className="bg-gradient-to-r from-teal-700 to-purple-800 h-64 flex flex-col items-center justify-center px-4 relative"
        style={{
          backgroundImage: "url('https://wallpapersok.com/images/high/travel-4k-japan-fuji-8tuep3c86h4lngec.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Explore Destinations</h1>
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search destinations..."
              className="flex-grow bg-white px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-teal-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-r-lg transition duration-200"
              onClick={() => {/* Search functionality already handled by state */}}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Tab navigation with filter button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4 bg-gray-200 rounded-md px-2 py-1">
            <button
              className={`px-4 py-2 ${activeTab === 'All' ? 'text-gray-600 bg-white rounded-md border-teal-600 font-medium' : 'text-gray-800'}`}
              onClick={() => setActiveTab('All')}
            >
              Popular
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'Trending' ? 'text-gray-600 bg-white rounded-md border-teal-600 font-medium' : 'text-gray-800'}`}
              onClick={() => setActiveTab('Trending')}
            >
              Trending
            </button>
          </div>

          {/* Filter dropdown button */}
          <div className="relative">
            <button
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              Filter
            </button>

            {/* Category dropdown */}
            {showCategoryDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`filter-${category}`}
                          type="checkbox"
                          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <label htmlFor={`filter-${category}`} className="ml-2 text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{filteredDestinations.length} Destinations Found</h2>
          </div>

          {/* Destination cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentDestinations.map(destination => (
              <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300" >
                <div className="relative" onClick={()=>{navigate('/destination-details')}}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-teal-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <h3 className="font-bold text-gray-800">{destination.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredDestinations.length > destinationsPerPage && (
            <div className="flex justify-center mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white text-gray-700 rounded-l-md hover:bg-gray-100 focus:outline-none focus:shadow-outline"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 ${currentPage === number ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} focus:outline-none focus:shadow-outline`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white text-gray-700 rounded-r-md hover:bg-gray-100 focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsExplorer;