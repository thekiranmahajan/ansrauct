import React from "react";
import { sectionsData } from "../data/sectionsData";
import { TestimonialGrid } from "../components";
import { SectionHeader } from "../components";
const Testimonials = () => {
  return (
    <section
      id={sectionsData[4].heading.toLowerCase()}
      className="flex flex-col min-h-screen w-full items-center duration-500 dark:bg-gray-50"
    >
      <SectionHeader
        heading={sectionsData[4].heading}
        subHeading={sectionsData[4].subHeading}
      />
      <TestimonialGrid />
    </section>
  );
};

export default Testimonials;
