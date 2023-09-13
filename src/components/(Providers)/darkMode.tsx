'use client';
import { createContext, useState } from 'react';

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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
