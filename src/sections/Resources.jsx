import React from "react";
import { sectionsData } from "../data/sectionsData";
import { SectionHeader } from "../components";
import { ResourceCard } from "../components";
import { resourcesData } from "../data/ResourcesData";

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
      <div className="p-4 px-2 pb-20 pt-10 sm:px-16 md:pb-28">
        {resourcesData.map((Resources) => (
          <div key={Resources.id}>
            <ResourceCard {...Resources} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
