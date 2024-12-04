import React from "react";
import { Carousel } from "../components";
import { sectionsData } from "../data/sectionsData";
const Home = () => {
  return (
    <section
      id={sectionsData[0].heading.toLowerCase()}
      className="flex h-full w-full items-center justify-center pt-14"
    >
      <Carousel />
    </section>
  );
};

export default Home;
