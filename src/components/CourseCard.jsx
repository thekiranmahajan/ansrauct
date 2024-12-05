import React from "react";
import Button from "./Button";

const CourseCard = ({ title, description, btnText, coursePoster, link }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:px-6 md:px-0 lg:flex-row">
      <div className="h-full max-w-lg overflow-hidden rounded-xl shadow-lg duration-300 hover:-rotate-1">
        <img className="w-full" src={coursePoster} alt="Course Poster" />
      </div>
      <div className="sm:w-11/12 lg:px-10">
        <h4 className="pb-2 text-center text-xl font-semibold sm:text-2xl lg:pb-4 lg:text-3xl">
          {title}
        </h4>
        <p className="text-center text-xs text-gray-500 sm:text-sm">
          {description}
        </p>

        <div className="mt-5 flex w-full items-center justify-center xl:mt-10">
          <Button link={link} btnText={btnText} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
