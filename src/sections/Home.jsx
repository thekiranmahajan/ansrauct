import React from "react";
import { Carousel } from "../components";
import { carouselData } from "../utils/carouselData";
const Home = () => {
  return (
    <section id="home" className="w-full bg-neutral-800">
      <Carousel images={carouselData} />
    </section>
  );
};

export default Home;
