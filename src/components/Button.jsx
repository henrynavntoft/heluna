import React from "react";

const Button = ({ href, buttonText }) => (
  <a
    className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring"
    href={href}
    target="_blank"
  >
    <span className="absolute inset-0 border border-dashed border-black group-active:border-black"></span>
    <span className="block border border-black bg-white px-12 py-3 transition-transform active:border-black active:b group-hover:-translate-x-1 group-hover:-translate-y-1">
      {buttonText}
    </span>
  </a>
);

export default Button;
