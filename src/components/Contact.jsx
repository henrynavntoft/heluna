import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="relative py-20 px-6 text-primary">
      <div className="absolute inset-0 bg-secondary opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <h2 className="text-4xl font-semibold mb-8">Kontakt Os</h2>
            <p className="text-lg leading-relaxed mb-8">
              Du kan kontakte os angående eventuelle forespørgsler,
              samarbejdsprojekter eller bare for at sige hej! Vi vil elske at
              høre fra dig.
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                  Dit Navn
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder=""
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                  Din Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-2">
                  Besked
                </label>
                <textarea
                  name="message"
                  placeholder=""
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
              <Button
                href="#"
                textColor="text-primary"
                buttonText="SEND BEKSED"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
