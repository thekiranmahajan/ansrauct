import React from "react";
import { SECTIONS } from "../utils/constants";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="fixed flex h-14 w-full items-center justify-between border-b-2 border-custom-black bg-white px-10">
      <div className="flex items-center justify-center">
        <a
          href="https://www.mars.com/en-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src='/logo1.svg' alt="MARS logo" className="w-20" />
        </a>
        <IoCloseOutline className="text-xl text-black" />
        <a
          href="https://ansrsource.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src='/logo2.png' alt="ansrsource logo" className="w-32" />
        </a>
      </div>
      <ul className="flex gap-4 text-sm font-medium uppercase">
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
