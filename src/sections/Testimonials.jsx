import React from "react";
import { sectionsData } from "../data/sectionsData";

import { TestimonialGrid } from "../components";
const Testimonials = () => {
  return (
    <section
      id={sectionsData[4].heading.toLowerCase()}
      className="min-h-screen w-full bg-slate-800 duration-500 dark:bg-gray-50"
    >
      <TestimonialGrid />
    </section>
  );
};

export default Testimonials;
