import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
// import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';


import Blurcircle from './Blurcircle'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 mx-auto max-w-[960px]">
        <Blurcircle top="-100px" right="-100px" />

        {/* ✅ Responsive player wrapper */}
       <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
  <div className="absolute top-0 left-0 w-full h-full">
    <YouTube
      videoId={currentTrailer.videoUrl.split('v=')[1]} // extract video ID from YouTube URL
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
        },
      }}
      className="w-full h-full rounded-2xl"
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default TrailerSection
