'use client';
import React, { useContext, useState } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import { DarkModeContext } from '../(Providers)/darkMode';
import { useTranslations } from 'next-intl';
type Props = {
  tasbeehRef: React.MutableRefObject<null>;
};

const initialTasbeehState = [
  {
    id: 1,
    name: 'سبحان الله',
    count: 0,
  },
  {
    id: 2,
    name: 'الحمد لله',
    count: 0,
  },
  {
    id: 3,
    name: 'الله أكبر',
    count: 0,
  },
  {
    id: 4,
    name: 'لا إله إلا الله',
    count: 0,
  },
  {
    id: 5,
    name: 'سبحان الله وبحمده',
    count: 0,
  },
  {
    id: 6,
    name: 'سبحان الله العظيم',
    count: 0,
  },
];

const Tasbeeh = ({ tasbeehRef }: Props) => {
  const t = useTranslations('Index');
  const { isDarkMode } = useContext(DarkModeContext);
  const [tasbeeh, setTasbeeh] = useState(initialTasbeehState);
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % tasbeeh.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + tasbeeh.length) % tasbeeh.length
    );
  };

  const incrementCount = () => {
    const updatedTasbeeh = [...tasbeeh];
    updatedTasbeeh[currentItem].count += 1;
    setTasbeeh(updatedTasbeeh);
  };

  const currentItemData = tasbeeh[currentItem];

  return (
    <section
      ref={tasbeehRef}
      className="relative py-10 text-center max-w-6xl mx-auto"
    >
      <p className="text-[#0e820e] my-2">{t('tasbeeh')}</p>
      <p className="tracking-wider font-semibold text-lg">{t('zekr')}</p>
      <div className="flex items-center justify-center flex-col mt-12">
        <div
          className={`relative w-[500px] max-w-[90%] py-2 px-6 flex items-center justify-center rounded-md shadow-md transition-all duration-200 ${
            isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
          }`}
        >
          <div className="p-5 overflow-hidden text-center flex flex-col items-center justify-center">
            <button
              name="btn"
              className="w-[100px] border-none h-[100px] cursor-pointer text-4xl text-center mb-5 text-white bg-[#0e820e] rounded-full shadow-md transition-all duration-200 outline-none focus:outline-none focus:ring focus:ring-[#0b6e0b] flex items-center justify-center"
              onClick={incrementCount}
            >
              {currentItemData.count}
            </button>
            <p className="text-[#0e820e] font-bold my-5">
              {currentItemData.name}
            </p>
          </div>
          <div className="absolute w-full mt-4 flex justify-between px-4">
            <button
              name="btn"
              onClick={prevItem}
              className="px-4 py-2 bg-[#0e820e] text-white rounded-lg hover:bg-[#0b6e0b] focus:outline-none focus:ring focus:ring-[#0b6e0b]"
            >
              <BiSolidRightArrow />
            </button>
            <button
              name="btn"
              onClick={nextItem}
              className="px-4 py-2 bg-[#0e820e] text-white rounded-lg hover:bg-[#0b6e0b] focus:outline-none focus:ring focus:ring-[#0b6e0b]"
            >
              <BiSolidLeftArrow />
            </button>
          </div>
        </div>
      </div>
      <p className="w-[80%] mt-8 leading-8 tracking-wide text-start">
        عن أبي هريرة رضي الله عنه قال عن رسول الله صلى الله عليه وسلم :
        <br />
        من قال لا إله إلا الله وحده لا شريك له يحيي ويميت وهو على كل شيء قدير
        مائة مره في اليوم كانت له عدل عشر رقاب وكتب الله له مائة حسنة ومحا عنه
        مائة سيئة وكانت له حرزا من الشيطان يومه ذلك حتى يمسي ولم يأت أحد بأفضل
        مما جاء إلا رجل عمل أكثر من عمله.
      </p>
    </section>
  );
};

export default Tasbeeh;
