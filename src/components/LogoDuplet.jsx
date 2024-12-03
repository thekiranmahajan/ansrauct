import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SITE_LINKS } from "../utils/constants";

const LogoDuplet = ({ isFooter = false }) => {
  return (
    <div className="flex items-center justify-center">
      <a href={SITE_LINKS[0]} target="_blank" rel="noopener noreferrer">
        <img src="/logo1.svg" alt="MARS logo" className="w-20" />
      </a>
      <IoCloseOutline
        className={`m-0.5 text-xl ${isFooter ? "text-white" : "text-black"}`}
      />
      <a href={SITE_LINKS[1]} target="_blank" rel="noopener noreferrer">
        <img src="/logo2.png" alt="ansrsource logo" className="w-32" />
      </a>
    </div>
  );
};

export default LogoDuplet;
