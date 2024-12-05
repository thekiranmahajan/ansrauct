import React from "react";

const Button = ({ btnText = "Click", link = "#_" }) => {
  return (
    <a
      href={link}
      role="button"
      class="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-red-500 px-6 py-3 font-medium transition-all"
    >
      <span class="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
        <span class="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
      </span>
      <span class="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        {btnText}
      </span>
    </a>
  );
};

export default Button;
