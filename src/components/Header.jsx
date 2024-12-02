import React from "react";
import { SECTIONS } from "../utils/constants";
import ANSRLOGO from "../assets/ansrsource-logo.png";
import MARSLOGO from "../assets/mars-logo.png";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="border-custom-black fixed flex h-12 w-full items-center justify-between border-b-2 bg-white px-3">
      <div className="flex items-center justify-center">
        <img src={MARSLOGO} alt="MARS logo" className="w-20" />
        <IoCloseOutline className="text-xl text-black" />
        <img src={ANSRLOGO} alt="ansrsource logo" className="w-32" />
      </div>
      <ul className="flex gap-2 text-sm uppercase">
        {SECTIONS.map((section) => (
          <li key={section}>
            <a href={`#${section.toLocaleLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
