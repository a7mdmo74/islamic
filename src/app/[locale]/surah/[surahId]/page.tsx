import { Metadata } from 'next';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
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
          {ayahs.map((ayah) => {
            const { numberInSurah, text } = ayah;
            return (
              <div
                key={numberInSurah}
                className="flex items-center justify-between gap-x-4 py-16 border-b-2 w-full"
              >
                <div className="flex items-center justify-center gap-x-3 max-w-2xl">
                  <p className="text-2xl">{text}</p>
                </div>
                <div>
                  <Audio ayah={ayah} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SurahPage;
