'use client';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { DarkModeContext } from '../(Providers)/darkMode';
type Props = {
  pillarsRef: React.MutableRefObject<null>;
  prayerTimesRef: React.MutableRefObject<null>;
  quranRef: React.MutableRefObject<null>;
  tasbeehRef: React.MutableRefObject<null>;
  azkarRef: React.MutableRefObject<null>;
};

const Navbar = ({
  pillarsRef,
  prayerTimesRef,
  quranRef,
  tasbeehRef,
  azkarRef,
}: Props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentRef, setCurrentRef] = useState(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentRef(ref);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? 'sticky top-0 py-3' : 'relative py-5'
      } w-full shadow-md px-2 sm:px-4 md:px-6 lg:px-8 z-50 transition-all duration-100 ease-in-out ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-6">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
            <span className="text-3xl font-normal">التقوي</span>
          </div>
        </Link>
        <div className="sm:flex items-center justify-center gap-6 hidden">
          <p
            className={`cursor-pointer  transition-colors duration-200 text-lg font-normal`}
            onClick={() => scrollToRef(pillarsRef)}
          >
            اركان الأسلام
          </p>
          <p
            className={`cursor-pointer transition-colors duration-200 text-lg font-normal`}
            onClick={() => scrollToRef(prayerTimesRef)}
          >
            مواقيت الصلاة
          </p>
          <p
            className={`cursor-pointer transition-colors duration-200 text-lg font-normal`}
            onClick={() => scrollToRef(quranRef)}
          >
            القرآن الكريم
          </p>
          <p
            className={`cursor-pointer transition-colors duration-200 text-lg font-normal`}
            onClick={() => scrollToRef(tasbeehRef)}
          >
            التسبيح
          </p>
          <p
            className={`cursor-pointer transition-colors duration-200 text-lg font-normal`}
            onClick={() => scrollToRef(azkarRef)}
          >
            الأذكار
          </p>
          <p
            className={`cursor-pointer transition-colors duration-200 text-lg font-normal`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </p>
        </div>
        <div className="sm:hidden cursor-pointer" onClick={handleOpen}>
          <HiOutlineBars3 className="text-3xl" />
        </div>
        <div
          className={`fixed w-full min-h-screen z-50 transition-all duration-300 ${
            isOpen ? 'top-0 left-0' : '-top-full -left-full'
          } ${
            isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between px-2 py-5">
            <div className="flex items-center justify-center gap-6">
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
              <span className="text-3xl font-normal">التقوي</span>
            </div>
            <div className="sm:hidden cursor-pointer" onClick={handleOpen}>
              <AiOutlineClose className="text-3xl" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 mt-10">
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => scrollToRef(pillarsRef)}
            >
              اركان الأسلام
            </p>
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => scrollToRef(prayerTimesRef)}
            >
              مواقيت الصلاة
            </p>
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => scrollToRef(quranRef)}
            >
              القرآن الكريم
            </p>
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => scrollToRef(tasbeehRef)}
            >
              التسبيح
            </p>
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => scrollToRef(azkarRef)}
            >
              الأذكار
            </p>
            <p
              className="cursor-pointer transition-colors duration-200 text-lg font-normal"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
