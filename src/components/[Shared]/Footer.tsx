'use client';
import React from 'react';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Index');
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex items-center justify-around py-6 text-white text-lg font-semibold bg-[#0e820e]">
      <Link href="/">{t('taqwa')}</Link>
      <p>
        {t('rights')} © {currentYear}
      </p>
    </section>
  );
};

export default Footer;
