import React from "react";
import Image from "next/image";

export default function USP() {
  return (
    <section className="py-10 bg-white">
      <div className="px-8">
        {/* Add negative margin to create consistent spacing */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/3 mb-8  px-4 rounded-lg">
            {/* Graphic or image for the first USP */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="./html.svg"
                alt="Custom Coded Websites"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Custom Websites
            </h3>
            <p className="text-lg text-center">
              Vi udvikler hjemmesider med der passer perfekt til din virksomhed
              og øger brugeroplevelsens kvalitet. Vi har erfaring med Wordpress
              & Shopify, men er ikke bange for nye udfordringer.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-8 px-4 rounded-lg">
            {/* Graphic or image for the second USP */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="./time.svg"
                alt="Frontend Development"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Digitale løsninger
            </h3>
            <p className="text-lg text-center">
              Vi hjælper med at tiltrække nye kunder og hjælp eksisterende
              kunder med lethed i at opdage og vælge din virksomhed. Vi hjælper
              med Google, Facebook, Instagram, LinkedIn, etc.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-8 px-4 rounded-lg">
            {/* Graphic or image for the third USP */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="./bolt.svg"
                alt="Digital Solutions"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Content Creation
            </h3>
            <p className="text-lg text-center">
              Gennem stærke fotografier og engagerende videoer formes en
              sammenhængende fortælling, der knytter dig nærmere dine kunde, og
              tiltrækker potentielt nye kunder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
