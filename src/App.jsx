import React from 'react'
import { Button } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/blogs' element={<Blogs />}/>
      </Routes>
    </>
  )
}
