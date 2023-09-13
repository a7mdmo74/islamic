'use client';
import { useContext, useRef, useState } from 'react';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai';
import { DarkModeContext } from '../(Providers)/darkMode';

const Hero = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto min-h-[calc(100vh-124px)] flex items-center justify-center">
      <div className="customBg bg-cover bg-center w-full text-center border-[20px] sm:border-[50px] border-[#0e820e] rounded-2xl flex justify-evenly items-center flex-wrap text-white py-2 md:py-5">
        <div className="relative max-w-[300px] max-h-[300px] bg-[url('/images/hero.png')] bg-contain bg-no-repeat bg-center p-4 mt-10 mb-5">
          <Image
            src="/images/fahrul-azmi-5K549TS6F08-unsplash.jpg"
            alt="fahrul"
            width={500}
            height={500}
            priority
            className="md:w-full md:h-full w-56 bg-[url('/images/hero.png')] bg-contain bg-center bg-no-repeat -bottom-2 relative"
            style={{
              WebkitMaskImage: 'url(/images/hero.png)',
              WebkitMaskPosition: 'center center',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
            }}
          />
        </div>
        <div className="relative text-right mt-10 mb-5">
          <h1 className="leading-8 text-xl sm:text-3xl font-semibold">
            مرحبا <br />
            في موقع <span>التقوي {'  '}</span>
            الإسلامي
          </h1>
          <div className="flex justify-start items-center gap-10 mt-10 mb-5">
            <button
              className="border-4 border-[#fff] bg-white text-[#0e820e] p-2 cursor-pointer block w-[100px] rounded-md transition-all duration-200 ease-out"
              onClick={handlePlay}
              name="play"
            >
              لنبدأ
            </button>
            <button
              onClick={handlePlay}
              name="play"
              className="bg-transparent border-none flex items-center gap-x-2 sm:gap-x-0 text-white cursor-pointer"
            >
              {isPlaying ? (
                <AiOutlinePause className="border-[3px] border-solid border-[#fff] rounded-full flex items-center justify-center p-1 w-10 h-10 bg-transparent text-[#fff] text-sm ml-3 transition-all duration-300 shadow-box hover:bg-white hover:text-[#0e820e]" />
              ) : (
                <BsFillPlayFill className="border-[3px] border-solid border-[#fff] rounded-full flex items-center justify-center p-1 w-10 h-10 bg-transparent text-[#fff] text-sm ml-3 transition-all duration-300 shadow-box hover:bg-white hover:text-[#0e820e]" />
              )}
              إستمع الاّن
            </button>
            <audio controls className="hidden" ref={audioRef}>
              <source src="/images/001.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
