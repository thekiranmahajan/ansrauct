import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import VideoPopup from "./VideoPopup";
import React, { useState } from "react";

const VideoCard = ({
  video,
  poster,
  title,
  description,
  isActive,
  setActiveVideoId,
  id,
  isHtmlDescription = false,
}) => {
  const videoRef = useRef(null);

  const openPopup = () => {
    setActiveVideoId(id);
  };

  const closePopup = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveVideoId(null);
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setIsLoaded(false);
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-xl duration-300 hover:-translate-y-2 active:shadow-sm">
        <div
          className="relative cursor-pointer duration-500 hover:scale-110"
          onClick={openPopup}
        >
          <FaPlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl text-white/70" />
          <div className="card">
            {!isLoaded && (
              <div className="h-[191px] w-full animate-pulse bg-slate-300"></div>
            )}
            <img
              src={poster}
              alt="Poster"
              className="w-full"
              style={{ display: isLoaded ? "block" : "none" }}
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="pb-1 text-base font-bold sm:text-lg">{title}</h3>
          {isHtmlDescription ? (
            <div
              className="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="text-sm text-gray-600">{description}</p>
          )}
          <button
            onClick={openPopup}
            className="mt-3 flex items-center font-bold text-secondary duration-300 hover:scale-105"
          >
            <FaPlay className="mr-2" />
            Watch Now
          </button>
        </div>
      </div>
      {isActive && (
        <VideoPopup
          isOpen={isActive}
          videoSrc={video}
          onClose={closePopup}
          videoRef={videoRef}
        />
      )}
    </>
  );
};

export default VideoCard;
