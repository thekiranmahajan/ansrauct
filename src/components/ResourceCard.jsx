import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import Button from "./Button";

const ResourceCard = ({ title, description, link, btnText }) => {
  return (
    <div className="m-5">
      <div className="relative mx-5 mt-10 max-w-screen-lg overflow-hidden rounded-lg py-3 shadow transition hover:shadow-lg sm:mx-auto">
        {/* Gradient Border */}
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary to-secondary p-[2px]">
          <div className="h-full w-full rounded-lg bg-white"></div>
        </div>
        
        <div className="grid grid-cols-1 space-x-8 text-gray-700 sm:grid-cols-5">
          <a href={link} className="col-span-1 m-auto">
            <div className="relative h-full w-full overflow-hidden p-2">
              <FaFilePdf className="text-8xl text-primary transition duration-300 hover:scale-110" />
            </div>
          </a>
          <div className="col-span-4 flex flex-col space-y-3 pr-8 text-left">
            <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold">
              {title}
            </a>
            <p className="overflow-hidden text-sm">{description}</p>
            <div className="mt-5 flex w-full items-center justify-center md:justify-start xl:mt-10">
              <Button link={link} btnText={btnText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
