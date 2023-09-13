'use client';
import { createContext, useEffect, useState } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  // Load dark mode preference from local storage when the component initializes
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('isDarkMode');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  // Update local storage when the isDarkMode state changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
