'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { DarkModeContext } from '../(Providers)/darkMode';

const arkan = [
  {
    id: 1,
    name: 'الشهادتين',
    english: 'Faith',
    image: '/images/shahdah.png',
  },
  {
    id: 2,
    name: 'الصلاة',
    english: 'Prayer',
    image: '/images/salat.png',
  },
  {
    id: 3,
    name: 'الزكاة',
    english: 'Zakah',
    image: '/images/zakat.png',
  },
  {
    id: 4,
    name: 'الصيام',
    english: 'Fasting',
    image: '/images/sawm.png',
  },
  {
    id: 5,
    name: 'الحج',
    english: 'Hajj',
    image: '/images/haaj.png',
  },
];

type Props = {
  pillarsRef: React.MutableRefObject<null>;
};

const Arkan = ({ pillarsRef }: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <section
      ref={pillarsRef}
      className="max-w-6xl mx-auto relative py-10 text-center"
    >
      <p className="text-[#0e820e] my-2">أركان الإسلام</p>
      <p className="tracking-wider font-semibold text-lg">
        بُنِي الإسلامُ على خمسٍ
      </p>
      <div className="flex flex-wrap justify-evenly p-10">
        {arkan.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col justify-center w-[150px] bg-white p-5 transition-all my-2 rounded-md hover:shadow-md"
          >
            <Image
              width={50}
              height={50}
              src={item.image}
              alt={item.name}
              className="w-10"
            />
            <p className={`text-slate-900 mt-4 mb-1 text-lg`}>{item.name}</p>
            <p className="text-sm text-[#0e820e]">({item.english})</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arkan;

/*

    position: relative;
    width: 150px;
    background-color: var(--global-body-bg-color);
    padding: 20px;
    transition: var(--global-transition);
    margin: 10px 0;
    border-radius: 6px;
    */
