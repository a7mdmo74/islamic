'use client';
import Link from 'next-intl/link';

const ToggleLang = () => {
  return (
    <p
      className={`transition-colors duration-200 flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start`}
    >
      <Link href="/en" className="cursor-pointer text-lg font-semibold">
        English
      </Link>
      <span>|</span>
      <Link
        href="/ar"
        className="cursor-pointer text-lg font-semibold"
        locale="ar"
      >
        عربي
      </Link>
    </p>
  );
};

export default ToggleLang;
