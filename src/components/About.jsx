import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-12 px-4 border border-black mb-4">
      <div>
        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
        <p className="mb-8 text-lg text-gray-700">
          I am a front-end developer and marketing professional specializing in
          React, Tailwind, and Next.js for development. On the marketing front,
          my expertise lies in Shopify, including substantial work in Liquid and
          JSON, and a specialization in email marketing.
        </p>
        <Button
          href="https://github.com/henrynavntoft"
          buttonText="See my projects"
        />
      </div>
    </section>
  );
}
