import React from "react";

const CardComponent = ({ href, title, description, buttonText, svgPath }) => (
  <a
    href={href}
    className="group relative block h-96 sm:h-96 lg:h-96 text-primary"
  >
    <span className="absolute inset-0 border-2 border-dashed border-secondary rounded-lg"></span>

    <div className="relative flex h-full transform items-end border-2 border-secondary bg-secondary transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg">
      <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 sm:h-12 sm:w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svgPath}
          />
        </svg>

        <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
      </div>

      <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 rounded">
        <h3 className="mt-4 text-xl font-medium sm:text-2xl ">{title}</h3>

        <p className="mt-4 text-sm sm:text-base">{description}</p>

        <p className="mt-8 text-accent">{buttonText}</p>
      </div>
    </div>
  </a>
);

export default CardComponent;
