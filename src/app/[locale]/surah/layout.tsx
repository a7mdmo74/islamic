'use client';

import { DarkModeContext } from '@/components/(Providers)/darkMode';
import { useContext } from 'react';

const SurahLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${
        isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {children}
    </div>
  );
};

export default SurahLayout;
