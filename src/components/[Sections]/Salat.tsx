/* eslint-disable react/no-unescaped-entities */
import { Salat } from '@/typing';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  salatTime: Salat;
  prayerTimesRef: React.MutableRefObject<null>;
};

const Salat = ({ salatTime, prayerTimesRef }: Props) => {
  const router = usePathname();

  const t = useTranslations('Index');
  const {
    data: {
      timings,
      date: { hijri },
    },
  } = salatTime;

  return (
    <section ref={prayerTimesRef} className="relative py-10 text-center">
      <p className="text-[#0e820e] my-2">{t('salat')}</p>
      <p className="tracking-wider font-semibold text-lg">{t('salat-today')}</p>
      <div className="flex justify-evenly items-center flex-wrap mt-10 gap-12">
        <div className="flex flex-col space-y-4">
          <p className="text-[#0e820e] text-lg">
            "يا أيها الذين آمنوا استعينوا بالصبر والصلاة إن الله مع الصابرين"
          </p>
          <p className="flex items-center mt-2">
            {t('messenger')}
            <span className="text-[#0e820e] text-2xl mx-2"> ﷺ </span>
            <b>:</b>
          </p>
          <p className="max-w-2xl">
            <span>
              {'{'} {t('hadis')} {'}'}
            </span>
          </p>
          <p className="mt-10 text-[#0e820e]">
            {router === '/en'
              ? hijri.weekday.en +
                ' : ' +
                hijri.month.en +
                ' ' +
                hijri.day +
                ' ' +
                hijri.year
              : hijri.weekday.ar +
                ' : ' +
                hijri.month.ar +
                ' ' +
                hijri.day +
                ' ' +
                hijri.year}
          </p>
        </div>
        <div className="w-[350px] max-w-[350px]">
          <div className="py-5 flex items-center justify-around bg-[#0e820e] text-white font-semibold">
            <p>{t('salat')}</p>
            <p>{t('time')}</p>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>{t('fajr')}</span>
            <span className="salat-time">{timings.Fajr}</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>{t('dhuhr')}</span>
            <span className="salat-time">{timings.Dhuhr}</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>{t('asr')}</span>
            <span className="salat-time">{timings.Asr}</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>{t('maghrib')}</span>
            <span className="salat-time">{timings.Maghrib}</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>{t('isha')}</span>
            <span className="salat-time">{timings.Isha}</span>
          </div>
          <p className="mt-5">{t('cairoTime')}</p>
        </div>
      </div>
    </section>
  );
};

export default Salat;
