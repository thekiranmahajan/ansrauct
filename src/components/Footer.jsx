import React from "react";
import { SOCIAL_LINKS } from "../utils/constants";
import LogoDuplet from "./LogoDuplet";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 px-6 py-8 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <LogoDuplet isFooter />
          <p className="mt-4 text-sm">
            ansrsource designs, develops, and delivers customized learning
            experiences and content with speed, scale, and sophistication.
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MARS X ansrsource. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
