import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Blogs from './components/Blogs'
import Destinations from './components/Destinations'
import TravelComparison from './components/TravelCompare'
import PricingSection from './components/PricingComponent'
import TravelHomePage from './components/home'
import DestinationsExplorer from './components/DestinationsExplorer'
import { Search, Compass, LogIn, UserPlus } from 'lucide-react';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<TravelHomePage />} />
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/destination-details' element={<Destinations />}/>
        <Route path='/compare' element={<TravelComparison />}/>
        <Route path='/pricing' element={<PricingSection />}/>
        <Route path='/explore' element={<DestinationsExplorer />}/>
      </Routes>
    </>
  )
}

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white shadow-sm sticky top-0 z-10"> {/* Added shadow */}
    <div className='max-w-7xl mx-auto w-full flex justify-between items-center py-4 px-4 md:px-0'> {/* Added padding for mobile */}

      {/* Logo */}
      <div className="text-teal-800 font-bold text-xl cursor-pointer" onClick={() => {navigate('/')}}>WanderLust Canvas</div> {/* Changed color */}

      {/* Navigation & Auth Buttons */}
      <div className="flex space-x-2 items-center text-gray-800">
        <button onClick={() => {navigate('/explore')}} className="flex items-center gap-1 font-semibold text-sm px-2 py-1 hover:text-teal-600">
          <Compass className="w-4 h-4" /> Explore
        </button>

        <button onClick={() => {navigate('/explore')}} className="flex items-center gap-1 font-semibold text-sm px-2 py-1 hover:text-teal-600"> {/* Changed hover color */}
          <Search className="w-4 h-4" /> Search
        </button>


          <button onClick={() => {navigate('/')}} className="flex items-center gap-1 font-semibold bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200 rounded">
            <LogIn className="w-4 h-4" /> Login
          </button>
           {/* Updated Sign Up button color */}
          <button onClick={() => {navigate('/')}} className="flex items-center gap-1 font-semibold bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700 rounded">
            <UserPlus className="w-4 h-4" /> Sign Up
          </button>
      </div>
    </div>
  </div>
  )
}
