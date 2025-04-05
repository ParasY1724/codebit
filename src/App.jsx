import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Blogs from './components/Blogs'
import Destinations from './components/Destinations'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<>hello</>} />
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/explore' element={<Destinations />}/>
      </Routes>
    </>
  )
}
