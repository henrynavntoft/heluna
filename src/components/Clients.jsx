import React from "react";
import Button from "./Button";

export default function Clients() {
  return (
    <>
      <h2 className="text-4xl font-semibold mb-8 text-center">Our Work</h2>
      <hr className="pb-4" />
      <div className="flex gap-4 pb-8 px-10 mx-4 flex-col sm:flex-row">
        <section className="py-8 px-6 border border-gray-300 rounded-lg shadow-md mb-4 sm:mb-0">
          <h2 className="text-2xl font-semibold mb-3 text-center">Client 1</h2>
          <p className="mb-6 text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sequi.
          </p>
          <Button href="#" buttonText="Visit Website" />
        </section>
        <section className="py-8 px-6 border border-gray-300 rounded-lg shadow-md mb-4 sm:mb-0">
          <h2 className="text-2xl font-semibold mb-3 text-center">Client 2</h2>
          <p className="mb-6 text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sequi.
          </p>
          <Button href="#" buttonText="Visit Website" />
        </section>
        <section className="py-8 px-6 border border-gray-300 rounded-lg shadow-md mb-4 sm:mb-0">
          <h2 className="text-2xl font-semibold mb-3 text-center">Client 3</h2>
          <p className="mb-6 text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sequi.
          </p>
          <Button href="#" buttonText="Visit Website" />
        </section>
      </div>
    </>
  );
}
