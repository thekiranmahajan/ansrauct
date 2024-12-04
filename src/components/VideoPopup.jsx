import React from "react";

const VideoPopup = ({ isOpen, videoSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-xl rounded-lg bg-white shadow-lg">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-lg font-bold text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <video
          controls
          autoPlay
          className="w-full rounded-b-lg"
          src={videoSrc}
        />
      </div>
    </div>
  );
};
export default VideoPopup;
