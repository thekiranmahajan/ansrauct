import React from "react";
import { sectionsData } from "../data/sectionsData";
import { SectionHeader, VideoCard, VideoPopup } from "../components";

const Videos = () => {
  return (
    <section
      id={sectionsData[1].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center"
    >
      <SectionHeader
        heading={sectionsData[1].heading}
        subHeading={sectionsData[1].subHeading}
      />
      <div>
        <VideoCard
          title="Video 6: Learn more about marketing"
          description="Cras ultricies ligula sed magna dictum porta. Praesent sapien massa."
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>
    </section>
  );
};

export default Videos;
