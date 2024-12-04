import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="relative flex min-h-40 w-full flex-col items-center justify-center text-center">
      <h2 className="z-10 bg-white/50 p-2 text-3xl font-bold leading-snug text-primary sm:text-3xl md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      <h4 className="z-10 bg-white/50 p-2 font-bold text-secondary text-sm md:text-lg lg:text-xl">
        {subHeading}
      </h4>

      <div className="pattern-dots pattern-secondary pattern-bg-white pattern-size-4 pattern-opacity-40 absolute z-0 h-full w-full"></div>
    </div>
  );
};

export default SectionHeader;
