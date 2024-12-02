import React from "react";
import { SECTIONS } from "../utils/constants";
import ANSRLOGO from "../assets/ansrsource-logo.png";
import MARSLOGO from "../assets/mars-logo.png";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="border-custom-black fixed flex h-14 w-full items-center justify-between border-b-2 bg-white px-10">
      <div className="flex items-center justify-center">
        <a
          href="https://www.mars.com/en-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MARSLOGO} alt="MARS logo" className="w-20" />
        </a>
        <IoCloseOutline className="text-xl text-black" />
        <a
          href="https://ansrsource.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ANSRLOGO} alt="ansrsource logo" className="w-32" />
        </a>
      </div>
      <ul className="flex gap-4 text-sm uppercase font-medium">
        {SECTIONS?.map((section) => (
          <li key={section}>
            <a href={`#${section?.toLocaleLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
    
  );
};

export default Header;
