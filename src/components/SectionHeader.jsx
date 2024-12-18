import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="relative flex min-h-40 w-full flex-col items-center justify-center text-center">
      <h2 className="z-10 bg-white/50 pb-0.5 text-2xl font-bold uppercase leading-snug text-primary sm:text-3xl md:text-3xl lg:text-4xl">
        {heading}
      </h2>
      <span className="z-10 h-2 w-2 animate-bounce rounded-full border-2 border-primary bg-secondary opacity-80"></span>
      <h4 className="z-10 bg-white/50 pt-0.5 text-base text-secondary md:text-lg lg:text-xl">
        {subHeading}
      </h4>

      <div className="pattern-dots absolute z-0 h-full w-full pattern-bg-white pattern-secondary pattern-opacity-40 pattern-size-4"></div>
    </div>
  );
};

export default SectionHeader;
