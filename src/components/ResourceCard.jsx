import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import Button from "./Button";

const ResourceCard = ({ title, description, link, btnText }) => {
  return (
    <div className="">
      <div className="relative mt-10 max-w-screen-lg overflow-hidden rounded-lg py-3 shadow transition hover:shadow-lg sm:mx-auto">
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary to-secondary p-[2px]">
          <div className="h-full w-full rounded-lg bg-white"></div>
        </div>

        <div className="grid grid-cols-1 space-x-8 text-gray-700 sm:grid-cols-5">
          <div className="col-span-1 m-auto">
            <div className="relative h-full w-full overflow-hidden p-2">
              <FaFilePdf className="text-8xl text-secondary/90 transition duration-300 hover:scale-110" />
            </div>
          </div>
          <div className="col-span-4 flex flex-col space-y-3 pr-6 text-left">
            <p className="mt-3 overflow-hidden text-2xl font-semibold">
              {title}
            </p>
            <p className="overflow-hidden text-sm text-gray-600">{description}</p>
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
