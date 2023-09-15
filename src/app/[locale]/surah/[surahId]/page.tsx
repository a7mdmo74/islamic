import { Metadata } from 'next';
import { Footer } from '@/components';
import { Surah } from '@/typing';
import Container from './components/Container';
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

// http://api.alquran.cloud/v1/surah/114/en.asad
const getSurahEn = async (id: number) => {
  try {
    const response = await fetch(
      `http://api.alquran.cloud/v1/surah/${id}/en.asad`
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
  const surahEn: Surah = await getSurahEn(surahId);
  const { name, ayahs } = surah;
  const { englishNameTranslation, ayahs: ayahsEn } = surahEn;

  return (
    <div className="relative">
      <Container
        name={name}
        ayahs={ayahs}
        references={references}
        englishNameTranslation={englishNameTranslation}
        ayahsEn={ayahsEn}
      />

      <Footer />
    </div>
  );
};

export default SurahPage;
