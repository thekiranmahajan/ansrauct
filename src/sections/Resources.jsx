import React from "react";
import { sectionsData } from "../data/sectionsData";
import { SectionHeader } from "../components";
import { ResourceCard } from "../components";
const Resources = () => {
  return (
    <section
      id={sectionsData[2].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center"
    >
      <SectionHeader
        heading={sectionsData[2].heading}
        subHeading={sectionsData[2].subHeading}
      />
      <ResourceCard />
    </section>
  );
};

export default Resources;
