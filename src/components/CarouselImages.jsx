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
            className="relative aspect-video w-screen shrink-0 overflow-hidden rounded-xl bg-neutral-800 object-cover"
          >
            <div className="absolute inset-0 flex w-1/3 flex-col items-center justify-center rounded-s-lg rounded-t-lg border border-white/20 bg-black/40 p-6 text-primary shadow-lg backdrop-blur-md">
              <h2 className="text-3xl font-bold">{imageData.title}</h2>
              <p className="mt-4 w-3/4 text-center text-white">
                {imageData.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default CarouselImages;
