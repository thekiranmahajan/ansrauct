import React from "react";
import { motion } from "motion/react";
const Carousel = ({ images }) => {
  console.log(images, ">>>>>>>>>>>>>>>>>>");
  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      animate={{
        translateX: `-100px`,
      }}
      className="carousel flex cursor-grab items-center active:cursor-grabbing"
    >
      {images?.map((imageSrc, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageSrc.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-video w-screen shrink-0 bg-neutral-800 object-cover"
          ></div>
        );
      })}
    </motion.div>
  );
};

export default Carousel;
