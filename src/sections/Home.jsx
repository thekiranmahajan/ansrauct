import React from "react";
import { Carousel } from "../components";
import { carouselData } from "../utils/carouselData";
const Home = () => {
  return <Carousel images={carouselData} />;
};

export default Home;
