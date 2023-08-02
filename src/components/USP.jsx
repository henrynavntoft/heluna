import React from "react";
import Image from "next/image";

export default function USP() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8">
            {/* Graphic or image for the first USP */}
            <Image
              src="./bolt.svg"
              alt="Custom Coded Websites"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Custom Coded Websites
            </h3>
            <p className="text-lg">
              We develop tailor-made websites to perfectly fit your business
              needs, providing exceptional performance and user experience.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8">
            {/* Graphic or image for the second USP */}
            <Image
              src="./bolt.svg"
              alt="Frontend Development"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Frontend Development
            </h3>
            <p className="text-lg">
              Our frontend developers are experts in React, Tailwind CSS, and
              Next.js, ensuring a smooth and interactive user interface.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8">
            {/* Graphic or image for the third USP */}
            <Image
              src="./bolt.svg"
              alt="Digital Solutions"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Digital Solutions
            </h3>
            <p className="text-lg">
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
