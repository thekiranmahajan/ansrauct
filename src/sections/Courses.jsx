import React from "react";
import { sectionsData } from "../data/sectionsData";

const Courses = () => {
  return (
    <section
      id={sectionsData[3].heading.toLowerCase()}
      className="min-h-screen w-full bg-slate-700"
    >
      Courses
    </section>
  );
};

export default Courses;
