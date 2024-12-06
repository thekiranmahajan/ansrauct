import React from "react";
import { firstHalfIcons, secondHalfIcons } from "../assets/logo-carousel/index";
import { motion } from "motion/react";

const LogoCarousel = () => {
  return (
    <div className="flex h-24 w-11/12 overflow-hidden">
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {firstHalfIcons.map((logo, index) => (
            <img className="w-20 pr-10" src={logo} key={index} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {firstHalfIcons.map((logo, index) => (
            <img className="w-20 pr-10" src={logo} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
