import React from "react";
import { FaQuoteRight, FaQuoteLeft, FaLinkedin } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";

const TestimonialCard = ({
  bgColor,
  profileImg,
  name,
  position,
  companyName,
  feedback,
  Linkedin,
}) => {
  return (
    <div
      className={`rounded-2xl p-4 text-white shadow-xl duration-300 hover:-translate-y-2`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-start justify-between">
        <div className="mb-4">
          {profileImg ? (
            <img
              src={profileImg}
              alt={name}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <IoPersonCircleSharp className="h-16 w-16 rounded-full bg-gray-400" />
          )}
        </div>
        {Linkedin && (
          <a href={Linkedin} target="blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-neutral-200" />
          </a>
        )}
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">{position}</p>
      <p className="italic">{companyName}</p>
      <p className="mt-2 text-sm text-neutral-200">
        <FaQuoteLeft />
        {feedback}
        <FaQuoteRight />
      </p>
    </div>
  );
};

export default TestimonialCard;
