import React, { useEffect, useState } from "react";
import { SECTIONS } from "../utils/constants";
import { motion } from "motion/react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { debounce } from "lodash";
import { HiMiniXMark } from "react-icons/hi2";
import LogoDuplet from "./LogoDuplet";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = SECTIONS.map((section) =>
        document.getElementById(section.toLowerCase()),
      );

      sectionElements.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(SECTIONS[index]);
        }
      });
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed z-50 flex h-14 w-full items-center justify-between border-b-2 border-secondary bg-white px-3 sm:px-10">
      <LogoDuplet />
      <ul className="hidden gap-4 text-sm font-medium uppercase md:flex">
        {SECTIONS?.map((section) => (
          <li key={section}>
            <a
              href={`#${section?.toLocaleLowerCase()}`}
              className={`relative flex h-14 cursor-pointer items-center justify-center transition-colors duration-500 ${activeSection === section ? "text-secondary" : "text-black"}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
              {activeSection === section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-2.5 h-1.5 w-1.5 rounded-full bg-primary"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3,
                    delay: 0.2,
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 p-2"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt4
            className={`text-2xl text-black ${menuOpen ? "hidden" : "block"}`}
          />
          <HiMiniXMark
            className={`text-2xl text-black ${menuOpen ? "block" : "hidden"}`}
          />
        </button>

        {menuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-40 h-full w-64 bg-white shadow-lg"
            >
              <ul className="flex flex-col gap-4 p-6">
                {SECTIONS.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg font-medium text-black duration-300 hover:translate-x-2 hover:text-secondary"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="fixed inset-0 z-30 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
