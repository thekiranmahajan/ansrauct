import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import Button from "./Button";
const ResourceCard = ({ title, description, link, btnText }) => {
  return (
    <div className="m-5">
      <div className="mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
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

          <div className="mt-5 flex w-full items-center xl:mt-10">
            <Button link={link} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
