import React, { useEffect, useState } from "react";
import { sectionsData } from "../data/sectionsData";
import { SectionHeader, VideoCard } from "../components";
import { videosData } from "../data/videosData";

const Videos = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById(
        sectionsData[1].heading.toLowerCase(),
      );
      const rect = videoSection.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setPopupOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={sectionsData[1].heading.toLowerCase()}
      className="flex min-h-screen w-full flex-col items-center"
    >
      <SectionHeader
        heading={sectionsData[1].heading}
        subHeading={sectionsData[1].subHeading}
      />

      <div className="relative flex h-full flex-col justify-center px-2 pb-20 pt-6 sm:py-12 md:pb-28">
        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {videosData.map(({ video, poster, title, description, id }) => (
            <VideoCard
              key={id}
              video={video}
              poster={poster}
              title={title}
              description={description}
              isPopupOpen={isPopupOpen}
              setPopupOpen={setPopupOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
