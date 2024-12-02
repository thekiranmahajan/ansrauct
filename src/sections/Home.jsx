import React from "react";
import { carouselData } from "../utils/carouselData";
import { Carousel } from "../components";
const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full bg-slate-200">
      <Carousel images={carouselData} />
    </section>
  );
};

export default Home;
