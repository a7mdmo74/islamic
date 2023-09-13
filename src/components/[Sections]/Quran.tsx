import { Quran } from '@/typing';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  quran: Quran;
  quranRef: React.MutableRefObject<null>;
};

const Quran = ({ quran, quranRef }: Props) => {
  const t = useTranslations('Index');
  const router = usePathname();
  const {
    surahs: { references },
  } = quran;

  return (
    <section
      ref={quranRef}
      className="relative py-10 text-center max-w-6xl mx-auto"
    >
      <p className="text-[#0e820e] my-2">{t('quran')}</p>
      <p className="tracking-wider font-semibold text-lg">{t('allah')}</p>
      <div className="h-[75vh] overflow-y-scroll scrollbar-hide flex justify-evenly items-center flex-wrap mt-12 gap-4 border-2 shadow-md rounded-md p-6">
        {references.map((item) => (
          <Link
            key={item.number}
            href={`/surah/${item.number}`}
            className="w-[120px] h-[100px] flex items-center justify-center p-5 bg-[#0e820e] text-white rounded-md cursor-pointer shadow-md transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-base">
                {router === '/en' ? item.englishName : item.name}
              </p>
              {router === '/en' && (
                <p className="text-xs">({item.englishNameTranslation})</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Quran;
