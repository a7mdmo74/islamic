'use client';
import { useContext, useState } from 'react';
import { SurahsReference } from '@/typing';
import Link from 'next-intl/link';
import { HiBars3 } from 'react-icons/hi2';
import { IoReturnUpBack } from 'react-icons/io5';
import { DarkModeContext } from '@/components/(Providers)/darkMode';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

type Props = {
  name: string;
  englishNameTranslation: string;
  references: SurahsReference[];
};

const SurahNav = ({ name, references, englishNameTranslation }: Props) => {
  const router = usePathname();
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav
        className={`py-5 fixed top-0 w-full z-50 shadow-md ${
          isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-xl">
            {router.includes('/en') ? englishNameTranslation : name}
          </h2>
          <div className="flex items-center justify-center gap-6 text-lg">
            <p
              className={`cursor-pointer transition-colors duration-200 font-normal`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </p>
            <span
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              <HiBars3 />
            </span>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 z-50 min-h-screen w-full sm:w-[90%] md:w-[400px] max-h-[80vh] shadow-md ${
          showNav
            ? router.includes('/en')
              ? 'right-0'
              : 'left-0'
            : '-right-full'
        } transition-all duration-300 z-50 overflow-y-scroll ${
          isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
        }`}
      >
        <div
          className={`w-full fixed top-0 z-50 shadow-sm p-1.5 ${
            isDarkMode ? 'bg-slate-900' : 'bg-white'
          }`}
        >
          <button
            name="btn"
            onClick={() => setShowNav(false)}
            className="px-4 md:px-6 text-2xl py-4"
          >
            <IoReturnUpBack />
          </button>
        </div>
        <div className="mt-16">
          {references.map((surah: any) => {
            const { number, name, englishName } = surah;
            return (
              <div key={number} className="px-4 md:px-6 py-5">
                <Link href={`/surah/${number}`}>
                  <div className="flex items-center justify-between gap-x-4">
                    <p className="text-xl">{name}</p>
                    <p className="text-xl">{englishName}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SurahNav;
