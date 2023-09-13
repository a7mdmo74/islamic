'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    setCurrentTime(
      `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`
    );
  };

  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay} / ${formattedMonth} / ${year}`;
  };

  const currentDate = getCurrentDate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#0e820e] relative py-1 px-2 sm:px-4 md:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
        <p>{currentDate}</p>
        <p>{currentTime}</p>
      </div>
    </div>
  );
};

export default Header;
