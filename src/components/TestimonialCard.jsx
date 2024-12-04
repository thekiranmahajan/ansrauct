import React from 'react';

const TestimonialCard = ({ bgColor, profileImg, name, position, companyName, feedback }) => {
  return (
    <div
      className={`p-4 rounded-lg text-white shadow-md`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-4">
        {profileImg ? (
          <img src={profileImg} alt={name} className="w-16 h-16 rounded-full" />
        ) : (
          <div className="w-16 h-16 bg-gray-400 rounded-full" />
        )}
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm">{position}</p>
      <p className="italic">{companyName}</p>
      <p className="mt-2 text-sm">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
