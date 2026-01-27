"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { ThemeContext } from "@/app/contexts/ThemeContext";

export default function Navbar() {
  const [hideOnMobile, setHideOnMobile] = useState(true);
  const { isDark, setIsDark } = useContext(ThemeContext)!;

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setIsDark(checked);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="flex justify-center fixed top-2 items-center gap-6.25 w-[80%] z-10">
        <div className="w-[70%] sm:w-[90%] border flex items-center sm:justify-center justify-end  backdrop-blur-sm rounded-3xl py-2 px-4">
          <div className="flex items-center gap-2 ">
            <div className="flex items-center gap-4">
              <ul
                className={`w-[50%] sm:w-full sm:flex-row flex-col sm:static fixed top-12 left-[50%] rounded-2xl  border mx-auto items-center text-base sm:p-0 p-2 gap-2 sm:gap-4 sm:border-hidden bg-(--background-color) ${hideOnMobile ? "hidden" : "flex"} sm:flex`}
              >
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="hover:underline">
                    Members
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="flex sm:hidden"
                onClick={() => {
                  setHideOnMobile(!hideOnMobile);
                }}
              >
                <Menu />
                Menu
              </button>
              <button
                onClick={() => handleThemeChange(!isDark)}
                className="theme-toggle cursor-pointer"
                aria-label="Toggle theme"
              >
                <div className={`theme-toggle-knob ${isDark ? "dark" : ""}`}>
                  {isDark ? <Moon /> : <Sun />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
