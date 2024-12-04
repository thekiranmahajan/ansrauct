import React from "react";

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="relative flex min-h-40 w-full flex-col items-center justify-center text-center">
      <h2 className="z-10 bg-white/50 p-2 text-2xl font-semibold text-primary sm:text-3xl">
        {heading}
      </h2>
      <h4 className="z-10 bg-white/50 p-2 text-secondary">{subHeading}</h4>

      <div className="pattern-dots pattern-secondary pattern-bg-white pattern-size-4 pattern-opacity-40 absolute z-0 h-full w-full"></div>
    </div>
  );
};

export default SectionHeader;
