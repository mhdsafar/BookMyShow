import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/Movies'
import Moviedetails from './pages/Moviedetails'
import Seatlayout from './pages/Seatlayout'
import Mybooking from './pages/Mybooking'
import Favourite from './pages/Favourite'
import {Toaster} from 'react-hot-toast' 
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:id' element={<Moviedetails />} />
      <Route path='/movies/:id/:date' element={<Seatlayout />} />
      <Route path='/my-bookings' element={<Mybooking/>} />
      <Route path='/Favourites' element={<Favourite />} />

    </Routes>
    {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
