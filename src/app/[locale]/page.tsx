import Container from './components/Container';

const getSalatTime = async () => {
  try {
    const res = await fetch(
      'http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt%20Arab%20Emirates&method=8'
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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

export default async function Home() {
  const salatTime = await getSalatTime();
  const quran = await getQuran();

  return (
    <>
      <Container salatTime={salatTime} quran={quran} />
      {/* a7mdmo74 */}
    </>
  );
}
