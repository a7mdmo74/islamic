import { Metadata } from 'next';
import Link from 'next/link';
import { IoReturnUpBack } from 'react-icons/io5';
import Audio from './components/Audio';
import { Footer } from '@/components';
import { Surah } from '@/typing';
import SurahNav from './components/SurahNav';
type Props = {
  params: { surahId: number };
};

const getQuran = async () => {
  try {
    const res = await fetch('https://api.alquran.cloud/v1/meta');
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getSurah = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { surahId } = params;
  const surah = await getSurah(surahId);

  return {
    title: surah.name,
    description: surah.englishNameTranslation,
    keywords: [surah.name, surah.englishNameTranslation, surah.englishName],
  };
}

const SurahPage = async ({
  params: { surahId },
}: {
  params: { surahId: number };
}) => {
  const {
    surahs: { references },
  } = await getQuran();
  const surah: Surah = await getSurah(surahId);
  const { name, englishName, ayahs } = surah;
  return (
    <div className="relative">
      <SurahNav name={name} references={references} />
      <main className="mt-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-start justify-center gap-x-10">
          {ayahs.map((ayah, index) => {
            const { numberInSurah, text } = ayah;
            const isLastItem = index === ayahs.length - 1;
            const borderBottomClass = isLastItem ? '' : 'border-b-2';
            return (
              <div
                key={numberInSurah}
                className={`flex w-full flex-col md:flex-row md:items-center md:justify-between gap-4 py-12 ${borderBottomClass}`}
              >
                <p className="text-2xl leading-loose">{text}</p>
                <Audio ayah={ayah} />
              </div>
            );
          })}
        </div>
      </main>
      <div className="fixed bottom-24 left-10 bg-gray-100 text-slate-900 p-2 rounded-full shadow-md">
        <Link href="/">
          <IoReturnUpBack className="text-2xl" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SurahPage;
