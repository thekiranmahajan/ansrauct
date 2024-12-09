import React from "react";
import { firstHalfIcons, secondHalfIcons } from "../assets/logo-carousel/index";
import { motion } from "motion/react";

const LogoCarousel = () => {
  return (
    <div className="container flex h-40 w-full items-center justify-center overflow-hidden">
      <div className="container mx-auto">
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {firstHalfIcons.map((logo, index) => (
              <img className="w-32 pr-20" src={logo} key={index} />
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
          >
            {firstHalfIcons.map((logo, index) => (
              <img className="w-32 pr-20" src={logo} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
