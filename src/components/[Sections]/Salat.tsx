/* eslint-disable react/no-unescaped-entities */
import { Salat } from '@/typing';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {
  salatTime: Salat;
  prayerTimesRef: React.MutableRefObject<null>;
};

const Salat = ({ salatTime, prayerTimesRef }: Props) => {
  const t = useTranslations('Index');
  const {
    data: {
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
            {t('messenger')}{' '}
            <span className="text-[#0e820e] text-2xl mx-2"> ﷺ </span>
            <b>:</b>
          </p>
          <p className="max-w-2xl">
            <span>
              {'{'} {t('hadis')} {'}'}
            </span>
          </p>
          <p className="mt-10 text-[#0e820e]">
            {hijri.weekday.ar} : {hijri.month.number} {hijri.month.ar}{' '}
            {hijri.year}
          </p>
        </div>
        <div className="w-[350px] max-w-[350px]">
          <div className="py-5 flex items-center justify-around bg-[#0e820e] text-white font-semibold">
            <p>الصلاة</p>
            <p>الوقت</p>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>الفجر</span> <span className="salat-time">05:09</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>الظهر</span> <span className="salat-time">12:51</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>العصر</span> <span className="salat-time">16:23</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>المغرب</span> <span className="salat-time">19:06</span>
          </div>
          <div className="py-3 flex items-center justify-around">
            <span>العشاء</span> <span className="salat-time">20:36</span>
          </div>
          <p className="mt-5    ">حسب التوقيت المحلي لمدينة القاهرة</p>
        </div>
      </div>
    </section>
  );
};

export default Salat;
