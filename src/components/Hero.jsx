import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative py-20 px-6 text-primary">
      <div className="absolute inset-0 bg-secondary opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <h2 className="text-4xl font-semibold mb-8">About Us</h2>
            <p className="text-lg leading-relaxed mb-8">
              We strive to lead a holistic web solutions business, specializing
              as in front-end developer with a deep understanding of React,
              Tailwind, and Next.js.
            </p>

            <p className="mb-8 text-lg leading-relaxed">
              While our core strengths indeed lie in the realm of UI/UX design,
              frontend development, video, and motion graphics, our unique value
              proposition extends beyond these capabilities. What truly sets us
              apart is the dynamic network of seasoned professionals we
              collaborate with, which enhances our in-house expertise. Together,
              we provide an all-encompassing digital solution, which not only
              gives life to intuitive and captivating interfaces, but also
              integrates effective marketing strategies along with top-tier
              photo/video services. This collaborative and holistic approach
              ensures your brand establishes a potent, captivating and
              sustainable digital presence.
            </p>

            <Button
              href="/about"
              textColor="text-primary"
              buttonText="READ MORE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
