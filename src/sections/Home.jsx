import React from "react";
import { Carousel } from "../components";
const Home = () => {
  return (
    <section
      id="home"
      className="flex w-full items-center justify-center bg-neutral-800 pt-5"
    >
      <Carousel />
    </section>
  );
};

export default Home;
