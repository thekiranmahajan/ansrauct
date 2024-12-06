import React from "react";
import { sectionsData } from "../data/sectionsData";
import { LogoCarousel, TestimonialGrid } from "../components";
import { SectionHeader } from "../components";
const Testimonials = () => {
  return (
    <section
      id={sectionsData[4].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center duration-500 dark:bg-gray-50"
    >
      <SectionHeader
        heading={sectionsData[4].heading}
        subHeading={sectionsData[4].subHeading}
      />
      <TestimonialGrid />
      <LogoCarousel />
    </section>
  );
};

export default Testimonials;
