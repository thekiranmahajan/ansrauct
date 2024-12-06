import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SITE_LINKS } from "../utils/constants";
import { logo1, logo2 } from "../assets/logos";

const LogoDuplet = ({ isFooter = false }) => {
  return (
    <div className="flex items-center justify-center">
      <a href={SITE_LINKS[0]} target="_blank" rel="noopener noreferrer">
        <img
          src={logo1}
          alt="MARS logo"
          className={`w-20 ${isFooter ? "brightness-0 contrast-200 invert filter" : ""}`}
        />
      </a>
      <IoCloseOutline
        className={`m-0.5 -mr-1.5 text-xl ${isFooter ? "text-white" : "text-black"}`}
      />
      <a href={SITE_LINKS[1]} target="_blank" rel="noopener noreferrer">
        <img
          src={logo2}
          alt="ansrsource logo"
          className={`w-32 ${isFooter ? "brightness-0 contrast-200 invert filter" : ""}`}
        />
      </a>
    </div>
  );
};

export default LogoDuplet;
