import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import CarouselDots from "./CarouselDots";
import CarouselEdges from "./CarouselEdges";
import { carouselData } from "../data/carouselData";
import { AUTO_DELAY, DRAG_BUFFER, SPRING_OPTIONS } from "../utils/constants";
import CarouselImages from "./CarouselImages";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === carouselData?.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < carouselData?.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-900 py-5">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <CarouselImages imgIndex={imgIndex} />
      </motion.div>
      <CarouselDots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <CarouselEdges />
    </div>
  );
};

export default Carousel;
