import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Only check localStorage, ignore system preference completely
    const saved = localStorage.getItem('portfolio-theme');
    if (saved !== null) {
      console.log('Loading saved theme:', saved);
      return JSON.parse(saved);
    }
    console.log('No saved theme, defaulting to light mode');
    return false; // Default to light mode
  });

  useEffect(() => {
    console.log('Theme useEffect called, isDark:', isDark);
    console.log('Document classes before:', document.documentElement.classList.toString());
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      console.log('Removed dark class');
    }
    
    console.log('Document classes after:', document.documentElement.classList.toString());

    // Save to localStorage
    localStorage.setItem('portfolio-theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const value = {
    isDark,
    toggleTheme,
    setTheme: setIsDark
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
