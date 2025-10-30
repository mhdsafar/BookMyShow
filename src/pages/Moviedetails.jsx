import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'

const Moviedetails = () => {
  const {id} = useParams() 
  const [show, setShow] = useState(null)
  const getshow = async ()=> {
    const show = dummyShowsData.find
    (show => show.id === id)
    setShow({
      movie: show,
      dateTime : dummyDateTimeData
    })
  }
  useEffect(()=>{
 getshow()
  },[id])
  return show  ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'></div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      Loading.....
    </div>
  )
}

export default Moviedetails
