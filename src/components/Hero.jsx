import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative py-10 text-primary">
      <div className="flex flex-wrap px-12 justify-center">
        {/* Section 1 */}
        <div className="w-full md:w-1/2 md:text-left mb-10 md:mb-0 md:pr-4">
          <div className="relative">
            <h2 className="text-4xl text-center font-semibold mb-4">
              HVAD TILBYDER VI?
            </h2>
            <hr className="pt-4" />
          </div>
          <p className="text-lg leading-relaxed mb-8">
            Vi er et passioneret team med omfattende erfaring inden for
            webudvikling, digitale løsninger og content creation. Vores friske
            perspektiv genererer konkrete resultater, og vi bidrager til din
            virksomheds vækst.
          </p>
          <Button
            href="/hvad-tilbyder-vi"
            textColor="text-primary"
            buttonText="LÆS MERE HER"
          />
        </div>
        {/* Section 2 */}
        <div className="w-full md:w-1/2 md:text-left mb-10 md:mb-0 md:pl-4">
          <div className="relative">
            <h2 className="text-4xl text-center font-semibold mb-4">
              HVEM ER VI?
            </h2>
            <hr className="pt-4 " />
          </div>
          <p className="text-lg leading-relaxed mb-8">
            Vi er et passioneret team med omfattende erfaring inden for
            webudvikling, digitale løsninger og content creation. Vores friske
            perspektiv genererer konkrete resultater, og vi bidrager til din
            virksomheds vækst.
          </p>
          <Button
            href="/hvem-er-vi"
            textColor="text-primary"
            buttonText="LÆS MERE HER"
          />
        </div>
      </div>
    </section>
  );
}
