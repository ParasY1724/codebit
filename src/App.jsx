import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Blogs from './components/Blogs'
import Destinations from './components/Destinations'
import TravelComparison from './components/TravelCompare'
import PricingSection from './components/PricingComponent'
import TravelHomePage from './components/home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TravelHomePage />} />
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/explore' element={<Destinations />}/>
        <Route path='/compare' element={<TravelComparison />}/>
        <Route path='/pricing' element={<PricingSection />}/>
      </Routes>
    </>
  )
}
