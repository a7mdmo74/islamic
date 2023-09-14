'use client';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../(Providers)/darkMode';
import { useTranslations } from 'next-intl';

type Props = {
  azkarRef: React.MutableRefObject<null>;
};

const Azkar = ({ azkarRef }: Props) => {
  const t = useTranslations('Index');
  const { isDarkMode } = useContext(DarkModeContext);
  const [isActive, setIsActive] = useState(true);
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      ref={azkarRef}
      className="relative py-10 text-center max-w-6xl mx-auto"
    >
      <p className="text-[#0e820e] my-2">{t('azkar')}</p>
      <p className="tracking-wider font-semibold text-lg">{t('o')}</p>
      <div
        className={`shadow-md rounded-md mt-6 ${
          isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <p
              className={`p-2 rounded-tr-md text-center w-1/2 cursor-pointer text-lg ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              } ${isActive ? 'bg-[#0e820e] !text-white' : 'bg-transparent'}`}
              onClick={() => setIsActive(true)}
            >
              {t('alsabah')}
            </p>
            <p
              className={`p-2 rounded-tl-md text-center w-1/2 cursor-pointer text-lg ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              } ${!isActive ? 'bg-[#0e820e] !text-white' : 'bg-transparent'}`}
              onClick={() => setIsActive(false)}
            >
              {t('almasaa')}
            </p>
          </div>
          {!isActive ? (
            <div className="w-full flex flex-col gap-3 items-start p-4">
              <h4 className="text-lg font-bold">{t('almasaa')}</h4>
              <p>{t('masaa1')}</p>
              <div className="flex flex-col gap-12 items-start text-start leading-loose m-2 text-base">
                <p>{t('masaa2')}</p>
                <p>{t('masaa3')}</p>
                <p>{t('masaa4')}</p>
                {showMore && (
                  <>
                    <p>{t('masaa5')}</p>
                    <p>{t('masaa6')}</p>
                    <p>{t('masaa7')}</p>
                    <p>{t('masaa8')}</p>
                    <p>{t('masaa9')}</p>
                    <p>{t('masaa10')}</p>
                    <p>{t('masaa11')}</p>
                    <p>{t('masaa12')}</p>
                    <p>{t('masaa13')}</p>
                    <p>{t('masaa14')}</p>
                    <p>{t('masaa15')}</p>
                    <p>{t('masaa16')}</p>
                    <p>{t('masaa17')}</p>
                    <p>{t('masaa18')}</p>
                    <p>{t('masaa19')}</p>
                    <p>{t('masaa20')}</p>
                    <p>{t('masaa21')}</p>
                    <p>{t('masaa22')}</p>
                    <p>{t('masaa23')}</p>
                    <p>{t('masaa24')}</p>
                    <p>{t('masaa25')}</p>
                    <p>{t('masaa26')}</p>
                    <p>{t('masaa27')}</p>
                    <p>{t('masaa28')}</p>
                    <p>{t('masaa29')}</p>
                    <p>{t('masaa30')}</p>
                    <p>{t('masaa31')}</p>
                  </>
                )}
              </div>
              <button
                className="rounded-none text-[#0e820e]"
                onClick={() => setShowMore(!showMore)}
                name="showMore"
              >
                {showMore ? t('less') : t('more')}
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-3 items-start p-4">
              <h4 className="text-lg font-bold">{t('alsabah')}</h4>
              <p>{t('sabah1')}</p>
              <div className="flex flex-col gap-12 items-start text-start leading-loose m-2 text-base">
                <p>{t('sabah2')}</p>
                <p>{t('sabah3')}</p>
                <p>{t('sabah4')}</p>
                {showMore && (
                  <>
                    <p>{t('sabah5')}</p>
                    <p>{t('sabah6')}</p>
                    <p>{t('sabah7')}</p>
                    <p>{t('sabah8')}</p>
                    <p>{t('sabah9')}</p>
                    <p>{t('sabah10')}</p>
                    <p>{t('sabah11')}</p>
                    <p>{t('sabah12')}</p>
                    <p>{t('sabah13')}</p>
                    <p>{t('sabah14')}</p>
                    <p>{t('sabah15')}</p>
                    <p>{t('sabah16')}</p>
                    <p>{t('sabah17')}</p>
                    <p>{t('sabah18')}</p>
                    <p>{t('sabah19')}</p>
                    <p>{t('sabah20')}</p>
                    <p>{t('sabah21')}</p>
                    <p>{t('sabah22')}</p>
                    <p>{t('sabah23')}</p>
                    <p>{t('sabah24')}</p>
                    <p>{t('sabah25')}</p>
                    <p>{t('sabah26')}</p>
                    <p>{t('sabah27')}</p>
                    <p>{t('sabah28')}</p>
                    <p>{t('sabah29')}</p>
                    <p>{t('sabah30')}</p>
                    <p>{t('sabah31')}</p>
                  </>
                )}
              </div>
              <button
                className="rounded-none text-[#0e820e]"
                onClick={() => setShowMore(!showMore)}
                name="showMore"
              >
                {' '}
                {showMore ? t('less') : t('more')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Azkar;
