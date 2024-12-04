import React from "react";
import { sectionsData } from "../data/sectionsData";

const Resources = () => {
  return (
    <section
      id={sectionsData[2].heading.toLowerCase()}
      className="min-h-screen w-full bg-slate-500"
    >
      Resources
    </section>
  );
};

export default Resources;
