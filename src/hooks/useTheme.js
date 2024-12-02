import { useEffect, useState } from "react";

const setTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const useTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  const setThemePreference = (preference) => {
    setSelectedTheme(preference);
    localStorage.setItem("theme", preference);
  };

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedTheme]);

  return { selectedTheme, setThemePreference };
};

export default useTheme;
