import Button from "./Button";

export default function Clients() {
  return (
    <div className="flex gap-2 pb-4 flex-col sm:flex-row">
      <section className="py-12 border border-black px-4 mb-4 sm:mb-0">
        <h2 className="text-4xl font-semibold mb-4">Client 1</h2>
        <p className="mb-8 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsa
          hic facilis sequi consequuntur tenetur sunt saepe alias officia ad.
        </p>
        <Button href="#" buttonText="Visit Website" />
      </section>
      <section className="py-12 border border-black px-4 mb-4 sm:mb-0">
        <h2 className="text-4xl font-semibold mb-4">Client 2</h2>
        <p className="mb-8 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsa
          hic facilis sequi consequuntur tenetur sunt saepe alias officia ad.
        </p>
        <Button href="#" buttonText="Visit Website" />
      </section>
      <section className="py-12 border border-black px-4 mb-4 sm:mb-0">
        <h2 className="text-4xl font-semibold mb-4">Client 3</h2>
        <p className="mb-8 text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsa
          hic facilis sequi consequuntur tenetur sunt saepe alias officia ad.
        </p>
        <Button href="#" buttonText="Visit Website" />
      </section>
    </div>
  );
}
