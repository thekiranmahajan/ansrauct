import React from "react";
import { motion } from "motion/react";
import { carouselData } from "../utils/carouselData";
import { SPRING_OPTIONS } from "../utils/constants";

const CarouselImages = ({ imgIndex }) => {
  return (
    <>
      {carouselData?.map((imageData, index) => {
        return (
          <motion.div
            key={index}
            style={{
              backgroundImage: `url(${imageData.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="relative flex aspect-video w-screen shrink-0 items-start justify-center overflow-hidden rounded-xl bg-neutral-800 object-cover"
          >
            <div className="flex h-full w-full flex-col items-center justify-center bg-black/50 px-4 py-2 pt-2 text-white sm:p-6 md:p-10">
              <h2 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-6xl">
                {imageData?.title}
              </h2>
              <p className="mt-1 w-full text-center text-xs text-gray-50 sm:text-base md:mt-4 md:w-3/4 md:text-lg lg:w-2/3 lg:text-xl">
                {imageData?.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default CarouselImages;
