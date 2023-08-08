import React from "react";
import Button from "./Button";

function ServicePackage({ title, description, buttonText, buttonLink }) {
  return (
    <div className="flex flex-col items-center p-4 mx-4 border border-gray-300 rounded-lg shadow-md mb-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Button
        href={buttonLink}
        textColor="text-primary"
        buttonText={buttonText}
      />
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-10 text-primary">
      <div className=" mx-auto px-4 md:px-12 text-center">
        {" "}
        {/* Added px-4 md:px-12 */}
        <h2 className="text-4xl font-semibold mb-8">Our Services</h2>
        <hr className="pb-4" />
        <div className="flex flex-col md:flex-row justify-center">
          <ServicePackage
            title="Basic Package"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
            buttonLink="/basic-package"
          />
          <ServicePackage
            title="Advanced Package"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
            buttonLink="/advanced-package"
          />
          <ServicePackage
            title="Extended Package"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
            buttonLink="/extended-package"
          />
        </div>
      </div>
    </section>
  );
}
