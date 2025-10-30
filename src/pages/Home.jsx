import React from 'react'
import Herosection from '../components/Herosection'
import Featuredsection from '../components/Featuredsection'
import Trailersection from '../components/Trailersection'
import Favourite from './Favourite'



const Home = () => {
  return (
    <div>
      <Herosection/>
      <Featuredsection/>
      <Trailersection/>
      <Favourite/>
    
    </div>
  )
}

export default Home
