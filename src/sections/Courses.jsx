import React from "react";
import { sectionsData } from "../data/sectionsData";
import { CourseCard, SectionHeader } from "../components";
import { coursesData } from "../data/coursesData";
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
      <div className="flex h-full flex-col justify-center gap-6 px-2 pb-20 pt-6 sm:gap-8 sm:py-12 md:w-11/12 md:pb-28 lg:w-10/12">
        {coursesData.map(
          ({ id, title, description, btnText, coursePoster, link, isHtmlDescription }) => (
            <CourseCard
              key={id}
              title={title}
              description={description}
              btnText={btnText}
              coursePoster={coursePoster}
              link={link}
              isHtmlDescription={isHtmlDescription}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default Courses;
