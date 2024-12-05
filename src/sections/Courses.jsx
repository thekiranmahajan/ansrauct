import React from "react";
import { sectionsData } from "../data/sectionsData";
import { SectionHeader } from "../components";

const Courses = () => {
  return (
    <section
      id={sectionsData[3].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center"
    >
      <SectionHeader
        heading={sectionsData[3].heading}
        subHeading={sectionsData[3].subHeading}
      />
      <div className="flex w-full flex-col items-center md:w-10/12"></div>
    </section>
  );
};

export default Courses;
