import React from "react";
import { carouselData } from "../utils/carouselData";

const CarouselDots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {carouselData?.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImgIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors sm:h-3 sm:w-3 ${
              index === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default CarouselDots;
