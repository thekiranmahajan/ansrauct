import React from "react";

const Carousel = ({ images }) => {
  console.log(images, ">>>>>>>>>>>>>>>>>>");
  return (
    <div className="carousel">
      {images?.map((image) => {
        return (
          <div key={image.title} className="h-20">
            <img src={image.image} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
