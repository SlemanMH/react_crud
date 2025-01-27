import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Users from './components/users/Users'
import Create from './components/users/Create'
import Details from './components/users/Details'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<Create />} />
          <Route path="/users/:id" element={<Details />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
