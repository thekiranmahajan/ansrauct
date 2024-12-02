import React from "react";
import useTheme from "../hooks/useTheme";
import { FaRegSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { selectedTheme, setThemePreference } = useTheme();
  return (
    <div className="bg-custom-blue fixed bottom-3 right-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
      <button
        aria-label="Switch to Light Theme"
        onClick={() => setThemePreference("light")}
        className={`absolute text-xl text-white transition-transform duration-500 ${
          selectedTheme === "dark"
            ? "block rotate-90 scale-100 opacity-100"
            : "pointer-events-none rotate-0 scale-0 opacity-0"
        }`}
      >
        <FaRegSun />
      </button>

      <button
        aria-label="Switch to Dark Theme"
        onClick={() => setThemePreference("dark")}
        className={`absolute text-xl text-white transition-transform duration-500 ${
          selectedTheme === "light"
            ? "block rotate-0 scale-100 opacity-100"
            : "pointer-events-none rotate-90 scale-0 opacity-0"
        }`}
      >
        <FiMoon />
      </button>
    </div>
  );
};

export default ThemeToggle;
