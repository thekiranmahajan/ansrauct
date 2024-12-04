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
          <button
            onClick={onClose}
            className="absolute right-3 top-2 z-40 cursor-pointer text-xl font-bold text-white duration-300 hover:text-neutral-900"
          >
            ✕
          </button>
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
