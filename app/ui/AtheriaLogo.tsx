"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/app/contexts/ThemeContext";

export default function AtheriaLogo() {
  const { isDark } = useContext(ThemeContext)!;

  return (
    <>
      <Image
        src={"/logo.png"}
        alt="Atheria Logo"
        width={1600}
        height={625}
        className={`${isDark ? "hidden" : ""} translate-y-12 `}
      />
      <Image
        src={"/logo-inverted.png"}
        alt="Atheria Logo"
        width={1600}
        height={625}
        className={`${isDark ? "" : "hidden"} translate-y-12 `}
      />
    </>
  );
}
