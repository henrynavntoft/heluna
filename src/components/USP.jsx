import React from "react";
import Image from "next/image";

export default function USP() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Add negative margin to create consistent spacing */}
        <div className="flex flex-wrap mx-4 justify-center">
          <div className="w-full lg:w-1/3 px-4 mb-8 rounded-lg">
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
              Custom Coded Websites
            </h3>
            <p className="text-lg text-center">
              We develop tailor-made websites to perfectly fit your business
              needs, providing exceptional performance and user experience.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 rounded-lg">
            {/* Graphic or image for the second USP */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="./bolt.svg"
                alt="Frontend Development"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Frontend Development
            </h3>
            <p className="text-lg text-center">
              Our frontend developers are experts in React, Tailwind CSS, and
              Next.js, ensuring a smooth and interactive user interface.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 rounded-lg">
            {/* Graphic or image for the third USP */}
            <div className="flex items-center justify-center mb-4">
              <Image
                src="./time.svg"
                alt="Digital Solutions"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Digital Solutions
            </h3>
            <p className="text-lg text-center">
              Our collaborative approach extends beyond design and development,
              integrating effective marketing strategies for a strong online
              presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
