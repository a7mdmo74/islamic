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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're running in the client-side (browser)
    if (typeof window !== 'undefined') {
      // Load dark mode preference from local storage when the component initializes
      const storedValue = localStorage.getItem('isDarkMode');
      setIsDarkMode(storedValue ? JSON.parse(storedValue) : false);
    }
  }, []);

  useEffect(() => {
    // Check if we're running in the client-side (browser)
    if (typeof window !== 'undefined') {
      // Update local storage when the isDarkMode state changes
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
