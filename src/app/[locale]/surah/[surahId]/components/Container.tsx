'use client';
import React from 'react';
import Link from 'next-intl/link';
import { IoReturnUpBack } from 'react-icons/io5';
import SurahNav from './SurahNav';
import { Ayah, SurahsReference } from '@/typing';
import Audio from './Audio';
import { usePathname } from 'next/navigation';

type Props = {
  name: string;
  englishNameTranslation: string;
  ayahs: Ayah[];
  ayahsEn: Ayah[];
  references: SurahsReference[];
};

const Container = ({
  name,
  ayahs,
  references,
  englishNameTranslation,
  ayahsEn,
}: Props) => {
  const router = usePathname();

  return (
    <div>
      <SurahNav
        name={name}
        englishNameTranslation={englishNameTranslation}
        references={references}
      />
      <main className="mt-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-start justify-center gap-x-10">
          {router.includes('/en')
            ? ayahsEn.map((ayah, index) => {
                const { numberInSurah, text } = ayah;
                const isLastItem = index === ayahs.length - 1;
                const borderBottomClass = isLastItem ? '' : 'border-b-2';
                return (
                  <div
                    key={numberInSurah}
                    className={`flex w-full flex-col md:flex-row md:items-center md:justify-between gap-4 py-12 ${borderBottomClass}`}
                  >
                    <p className="text-2xl leading-loose max-w-3xl">{text}</p>
                    <Audio ayah={ayah} />
                  </div>
                );
              })
            : ayahs.map((ayah, index) => {
                const { numberInSurah, text } = ayah;
                const isLastItem = index === ayahs.length - 1;
                const borderBottomClass = isLastItem ? '' : 'border-b-2';
                return (
                  <div
                    key={numberInSurah}
                    className={`flex w-full flex-col md:flex-row md:items-center md:justify-between gap-4 py-12 ${borderBottomClass}`}
                  >
                    <p className="text-2xl leading-loose max-w-3xl">{text}</p>
                    <Audio ayah={ayah} />
                  </div>
                );
              })}
        </div>
      </main>
      <div
        className={`fixed bottom-24 bg-gray-100 text-slate-900 p-2 rounded-full shadow-md ${
          router.includes('/en') ? 'right-10' : 'left-10'
        }`}
      >
        <Link href="/">
          <IoReturnUpBack className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Container;
