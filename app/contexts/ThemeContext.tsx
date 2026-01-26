"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = (theme: string) => {
      setIsDark(theme === "dark");
      document.documentElement.setAttribute("data-theme", theme);
    };
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      updateTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const theme = prefersDark ? "dark" : "light";
      updateTheme(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
