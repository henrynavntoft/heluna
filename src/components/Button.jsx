import React from "react";

const Button = ({ href, buttonText }) => (
  <a
    className="group relative inline-block text-sm font-medium text-primary bg-secondary focus:outline-none focus:ring"
    href={href}
    target="_blank"
  >
    <span className="absolute inset-0 border-2 border-dashed border-accent group-active:border-secondary rounded-lg"></span>
    <span className="block border-2  border-accent bg-secondary px-12 py-3 transition-transform active:border-secondary active:b group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-lg">
      {buttonText}
    </span>
  </a>
);

export default Button;
