import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const SectionHeader = ({ heading, subHeading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="relative flex min-h-40 w-full flex-col items-center justify-center text-center"
    >
      <h2 className="z-10 bg-white/50 pb-0.5 text-2xl font-bold uppercase leading-snug text-primary sm:text-3xl md:text-3xl lg:text-4xl">
        {heading}
      </h2>
      <motion.span
        className="z-10 h-2 w-2 rounded-full bg-primary opacity-70"
        animate={isInView ? { y: [0, -8, 0] } : {}}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      ></motion.span>
      <h4 className="z-10 bg-white/50 pt-0.5 text-base text-secondary md:text-lg lg:text-xl">
        {subHeading}
      </h4>

      <div className="pattern-dots absolute z-0 h-full w-full pattern-bg-white pattern-secondary pattern-opacity-40 pattern-size-4"></div>
    </div>
  );
};

export default SectionHeader;
