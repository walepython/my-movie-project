import React, { useRef, useState } from 'react';
// NEW: Import the speaker icons from Heroicons
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

// Make sure 'istockvideo.mp4' is placed inside your public folder.
import videoBg from '/istockvideo.mp4';

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // --- FIXED: Declare isMuted state, initialized to true ---
  const [isMuted, setIsMuted] = useState(true);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle Volume
  const toggleVolume = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative lg:h-[89vh] w-full overflow-hidden ">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted // --- FIXED: Video starts as muted to allow autoplay ---
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8 text-white mt-8 pt-8">
       
        

        {/* Hero Content */}
        <div className="flex-grow flex lg:flex-row flex-col sm:flex-col lg:justify-start  text-center lg:text-start lg:items-start items-center">
          <div className="w-full md:w-3/5 lg:w-1/2 ">
            <h1 className="text-4xl font-bold lg:mt-20 leading-tight md:text-5xl lg:text-5.5xl lg:w-[500px] ">
              Get Instant Access to Trending Movies and Series.
            </h1>
            <p className="mt-4 text-xl text-pink-500 font-semibold">
              Create your account and unlock a world of Movies & Series.
            </p>
            <div className='flex justify-center lg:justify-start'>
            <a
              href="#"
              className="mt-8 inline-block rounded-lg bg-gray-900 px-10 py-4 text-xl font-extrabold shadow-lg transition-transform duration-300 hover:scale-105 text-pink-500 hover:bg-gray-600/90 leading-tight"
            >
              CHOOSE YOUR PLAN
            </a>
            </div>

            <div className=" items-end space-x-4 ml-40  absolute lg:top-0 lg:left-[70%] top-[-20px] left-[50%] ">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="rounded-xl bg-black/50 p-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              {isPlaying ? (
                <PauseIcon className="h-8 w-8 text-pink-500 lg:h-10 lg:w-10" />
              ) : (
                <PlayIcon className="h-8 w-8 text-pink-500 lg:h-10 lg:w-10" />
              )}
            </button>

            {/* Volume Button - FIXED with Heroicons */}
            <button
              onClick={toggleVolume}
              className="rounded-xl bg-black/50 p-2 backdrop-blur-sm transition hover:bg-white/20"
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="h-8 w-8  text-pink-500 lg:h-10 lg:w-10" />
              ) : (
                <SpeakerWaveIcon className="h-8 w-8 text-pink-500 lg:h-10 lg:w-10" />
              )}
            </button>

            
          </div>
            
            
          </div>
          <img className='mt-8 lg:w-[550px] h-[400px]  rounded-3xl  w-[450px] ' src='https://i.pinimg.com/736x/3d/a2/79/3da279768ce1b2032fe8b5ef3bf2d506.jpg'/>
        </div>
       
         {/* <iframe width="560" height="415" src="https://www.youtube.com/embed/NgRKkUIcEvk?si=llU1PY6GbirQqLYN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='absolute top-16 left-[55%]'></iframe> */}
      </div>
    </div>
  );
}