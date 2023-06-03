import Button from "./Button";

export default function Contact() {
  return (
    <section className="py-12 border border-black px-4">
      <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
      <p className="mb-8 text-lg text-gray-700">
        Interested in working together? Just want to ask a question or say hi?
        Feel free to send me a message.
      </p>
      <Button href="mailto:info@heluna.dk" buttonText="Get in contact" />
    </section>
  );
}
