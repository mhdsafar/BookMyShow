import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import YouTube from 'react-youtube'
import Blurcircle from './Blurcircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 mx-auto max-w-[960px]">
        <Blurcircle top="-100px" right="-100px" />

        {/* ✅ Player */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full">
            <YouTube
              videoId={currentTrailer.videoUrl.split('v=')[1]} // extract video ID
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

        {/* ✅ Thumbnails BELOW the player */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.image}
              className="relative hover:-translate-y-1 duration-300 transition cursor-pointer"
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={trailer.image}
                alt="trailer"
                className="rounded-lg w-full h-full object-cover brightness-75"
              />
              <PlayCircleIcon
                strokeWidth={1.6}
                className="absolute top-1/2 left-1/2 w-8 h-8 md:w-10 md:h-10 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrailerSection
