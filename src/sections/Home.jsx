import React from "react";
import { Carousel } from "../components";
import { carouselData } from "../utils/carouselData";
const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full bg-slate-200">
      <Carousel images={carouselData} />
    </section>
  );
};

export default Home;
