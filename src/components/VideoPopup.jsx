import React, { forwardRef } from "react";

const VideoPopup = forwardRef(
  ({ isOpen, videoSrc, onClose, videoRef }, ref) => {
    if (!isOpen) return null;

    const handlePopupClick = (event) => {
      event.stopPropagation();
    };
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/20"
      >
        <div
          onClick={handlePopupClick}
          className="relative z-40 w-full max-w-2xl overflow-hidden rounded-lg bg-neutral-900 shadow-lg"
        >
          <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-transparent duration-500 hover:bg-black/30 md:h-10 md:w-10">
            <button
              onClick={onClose}
              className="z-40 cursor-pointer text-lg font-bold text-white duration-300 md:text-xl"
            >
              ✕
            </button>
          </div>
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full rounded-b-lg"
            src={videoSrc}
          />
        </div>
      </div>
    );
  },
);

export default VideoPopup;
