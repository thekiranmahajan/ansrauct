import React from "react";
import { sectionsData } from "../data/sectionsData";

const Testimonials = () => {
  return (
    <section
      id={sectionsData[4].heading.toLowerCase()}
      className="min-h-screen w-full bg-slate-800 duration-500 dark:bg-gray-50"
    >
      Testimonials
    </section>
  );
};

export default Testimonials;
