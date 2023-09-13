'use client';
import { Ayah } from '@/typing';
import { useEffect, useRef, useState } from 'react';
import { AiOutlinePause } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

type Props = {
  ayah: Ayah;
};

const Audio = ({ ayah }: Props) => {
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

  useEffect(() => {
    // Add an event listener to the audio element to detect when it ends
    const handleAudioEnd = () => {
      setIsPlaying(false); // Set isPlaying to false when audio ends
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnd);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, []);

  return (
    <>
      <button
        name="btn"
        onClick={handlePlay}
        className="bg-transparent border-none flex items-center outline-none cursor-pointer"
      >
        {isPlaying ? (
          <AiOutlinePause className="border-[3px] border-solid border-[#fff] rounded-full flex items-center justify-center p-1 w-10 h-10 bg-transparent text-sm ml-3 transition-all duration-300 shadow-box text-[#0e820e]" />
        ) : (
          <BsFillPlayFill className="border-[3px] border-solid border-[#fff] rounded-full flex items-center justify-center p-1 w-10 h-10 bg-transparent text-sm ml-3 transition-all duration-300 shadow-box text-[#0e820e]" />
        )}
        إستمع الاّن
      </button>
      <audio controls className="hidden" ref={audioRef}>
        <source src={ayah.audio} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Audio;
