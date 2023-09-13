'use client';
import Link from 'next-intl/link';

const ToggleLang = () => {
  return (
    <p
      className={`cursor-pointer transition-colors duration-200 text-lg font-normal flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start`}
    >
      <Link href="/en">English</Link>
      <span>|</span>
      <Link href="/ar" locale="ar">
        عربي
      </Link>
    </p>
  );
};

export default ToggleLang;
