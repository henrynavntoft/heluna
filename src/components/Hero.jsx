import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  const imgURL = `https://images.unsplash.com/photo-1658579126739-03385cb1749b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80`;

  return (
    <section
      className="relative py-12 px-6 bg-primary text-secondary"
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px -4">
            <h2 className="text-4xl font-semibold mb-8">About Us</h2>
            <p className="text-lg leading-relaxed mb-8">
              We strive to lead a holistic web solutions business, specializing
              as in front-end developer with a deep understanding of React,
              Tailwind, and Next.js. Beyond development we have extensive
              experience with Shopify, including significant work with Liquid
              and JSON, as well as a specialization in all aspects of marketing.
            </p>

            <p className="mb-8 text-lg leading-relaxed">
              While we bring these strengths to the table, what sets our
              business apart is the network of professionals we collaborate
              with. Together, we offer a comprehensive web solution,
              encompassing exceptional UI/UX design, effective marketing
              strategies, and top-notch photo/video services. This collaborative
              approach ensures a robust and compelling online presence for your
              brand.
            </p>
            {/* <Link
              className=" text-xl cursor-pointer text-secondary hover:underline"
              href="/about"
            >
              READ MORE
            </Link> */}

            <Button
              href="/about"
              textColor="text-secondary"
              buttonText="READ MORE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
