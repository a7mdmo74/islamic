import { Quran } from '@/typing';
import Link from 'next/link';
import React from 'react';

type Props = {
  quran: Quran;
  quranRef: React.MutableRefObject<null>;
};

const Quran = ({ quran, quranRef }: Props) => {
  const {
    surahs: { references },
  } = quran;

  return (
    <section
      ref={quranRef}
      className="relative py-10 text-center max-w-6xl mx-auto"
    >
      <p className="text-[#0e820e] my-2">القراّن الكريم</p>
      <p className="tracking-wider font-semibold text-lg">
        وَلَذِكْرُ الله أكبر
      </p>
      <div className="h-[75vh] overflow-y-scroll scrollbar-hide flex justify-evenly items-center flex-wrap mt-12 gap-6 border-2 shadow-md rounded-md p-6">
        {references.map((item) => (
          <Link
            key={item.number}
            href={`/surah/${item.number}`}
            className="w-[100px] flex items-center justify-center p-5 bg-[#0e820e] text-white rounded-md cursor-pointer shadow-md transition-all duration-300"
          >
            <p className="text-base">{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Quran;
