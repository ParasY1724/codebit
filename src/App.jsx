import React from 'react'; // Keep useState if needed elsewhere, removed if not
// Removed unused Button import from MUI
// import { Button } from '@mui/material'
import { Routes, Route, useNavigate } from 'react-router-dom';

// --- React Toastify Imports ---
import { ToastContainer, toast } from 'react-toastify'; // Import toast to trigger notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

// --- Your Component Imports ---
import Blogs from './components/Blogs';
import Destinations from './components/Destinations';
import TravelComparison from './components/TravelCompare';
import PricingSection from './components/PricingComponent';
import TravelHomePage from './components/home';
import DestinationsExplorer from './components/DestinationsExplorer';
import { Search, Compass, LogIn, UserPlus, Pen } from 'lucide-react';
import Login from './components/login';
import Signup from './components/signup'; // Assuming you have a Signup component

export default function App() {
  return (
    <>
      <Navbar />

      {/* --- Toast Container --- */}
      {/* Place it once, usually at the root level. */}
      {/* You can customize position, autoClose duration, etc. here */}
      <ToastContainer
        position="top-right" // Common positions: top-right, top-center, top-left, bottom-right, ...
        autoClose={4000} // Auto close after 4 seconds (4000ms)
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // Or "dark" or "colored"
        // transition: Bounce // Optional transition
      />

      {/* --- Your Routes --- */}
      <Routes>
        <Route path='/' element={<TravelHomePage />} />
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/destination-details' element={<Destinations />}/>
        <Route path='/compare' element={<TravelComparison />}/>
        <Route path='/pricing' element={<PricingSection />}/>
        <Route path='/explore' element={<DestinationsExplorer />}/>
      </Routes>
    </>
  )
}

// --- Navbar Component (No changes needed here for toastify setup) ---
const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  return (
    <div className="relative w-full bg-white shadow-sm sticky top-0 z-50"> {/* Increased z-index for navbar */}
    <div className='max-w-7xl mx-auto w-full flex justify-between items-center py-4 px-4 md:px-0'>

      {/* Logo */}
      <div className="text-teal-800 font-bold text-xl cursor-pointer" onClick={() => {navigate('/')}}>WanderLust Canvas</div>

      {/* Navigation & Auth Buttons */}
      <div className="flex space-x-2 items-center text-gray-800">
        <button onClick={() => {navigate('/explore')}} className="flex items-center gap-1 font-semibold text-sm px-2 py-1 hover:text-teal-600">
          <Compass className="w-4 h-4" /> Explore
        </button>

        <button onClick={() => {navigate('/explore')}} className="flex items-center gap-1 font-semibold text-sm px-2 py-1 hover:text-teal-600">
          <Search className="w-4 h-4" /> Search
        </button>

          {!user && <button onClick={() => {navigate('/login')}} className="flex items-center gap-1 font-semibold bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200 rounded">
            <LogIn className="w-4 h-4" /> Login
          </button>}
          {!user && <button onClick={() => {navigate('/signup')}} className="flex items-center gap-1 font-semibold bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700 rounded">
            <UserPlus className="w-4 h-4" /> Sign Up
          </button>}
          {user && <button onClick={() => {navigate('/blogs')}} className="flex items-center gap-1 font-semibold bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200 rounded">
            <Pen className="w-4 h-4" /> Create
          </button>}
          {user && <button onClick={() => {navigate('/login'); toast.success("logged out"); localStorage.clear()}} className="flex items-center gap-1 font-semibold bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700 rounded">
            Logout
          </button>}
      </div>
    </div>
  </div>
  )
}