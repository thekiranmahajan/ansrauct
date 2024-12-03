import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Carousel = ({ images }) => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === images?.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        style={{
          x: dragX,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="carousel flex cursor-grab items-center active:cursor-grabbing"
      >
        {images?.map((imageSrc, index) => {
          return (
            <motion.div
              key={index}
              className="relative aspect-video w-screen shrink-0 overflow-hidden bg-neutral-800"
            >
              <div
                style={{
                  backgroundImage: `url(${imageSrc.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0"
              ></div>

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold">{imageSrc.title}</h2>
                <p className="text-[#fffdfde8] mt-4 w-3/4 text-center">{imageSrc.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Dots images={images} imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Dots = ({ images, imgIndex, setImgIndex }) => {
  return (
    <div className="absolute -mt-8 flex w-full justify-center gap-2">
      {images?.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
