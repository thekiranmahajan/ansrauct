import React from "react";
import { sectionsData } from "../data/sectionsData";

const Videos = () => {
  return (
    <section
      id={sectionsData[1].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center p-5 md:w-11/12"
    ></section>
  );
};

export default Videos;
