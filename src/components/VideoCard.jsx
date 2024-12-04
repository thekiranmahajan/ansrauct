import { motion } from "motion/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoPopup from "./VideoPopup";

const VideoCard = ({ title, description, videoSrc }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
        onClick={openPopup}
      >
        <img
          src="https://via.placeholder.com/400x200"
          alt="Poster"
          className="w-full"
        />
      </motion.div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={openPopup}
          className="mt-2 flex items-center font-bold text-blue-500"
        >
          <FaPlay className="mr-2" />
          Watch Now
        </motion.button>
      </div>
      <VideoPopup
        isOpen={isPopupOpen}
        videoSrc={videoSrc}
        onClose={closePopup}
      />
    </div>
  );
};

export default VideoCard;
