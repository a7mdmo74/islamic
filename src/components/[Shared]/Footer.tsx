import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex items-center justify-around py-6 text-white text-lg font-semibold bg-[#0e820e]">
      <Link href="/">التقوي</Link>
      <p>جميع الحقوق محفوظه © {currentYear}</p>
    </section>
  );
};

export default Footer;
