'use client';
import {
  Arkan,
  Azkar,
  Footer,
  Header,
  Hero,
  Navbar,
  Quran,
  Salat,
  Tasbeeh,
} from '@/components';
import { DarkModeContext } from '@/components/(Providers)/darkMode';
import { Quran as QuranType, Salat as Salah } from '@/typing';
import React, { useContext, useRef } from 'react';

type Props = {
  salatTime: Salah;
  quran: QuranType;
};

const Container = ({ salatTime, quran }: Props) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const pillarsRef = useRef(null);
  const prayerTimesRef = useRef(null);
  const quranRef = useRef(null);
  const tasbeehRef = useRef(null);
  const azkarRef = useRef(null);
  return (
    <div
      className={`${
        isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <Header />
      <Navbar
        pillarsRef={pillarsRef}
        prayerTimesRef={prayerTimesRef}
        quranRef={quranRef}
        tasbeehRef={tasbeehRef}
        azkarRef={azkarRef}
      />
      <main className="px-4 md:px-6 lg:px-8">
        <Hero />
        <Arkan pillarsRef={pillarsRef} />
        <Salat salatTime={salatTime} prayerTimesRef={prayerTimesRef} />
        <Quran quran={quran} quranRef={quranRef} />
        <Tasbeeh tasbeehRef={tasbeehRef} />
        <Azkar azkarRef={azkarRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Container;
