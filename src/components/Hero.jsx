import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative py-10 text-primary">
      <div className="px-12 ">
        <div className="flex flex-wrap ">
          <div className="w-full">
            <h2 className="text-4xl font-semibold mb-8">DIGITALE LØSNINGER.</h2>
            <p className="text-lg leading-relaxed mb-8">
              Vi udgør et dynamisk team bestående af to passionerede studerende
              med omfattende erfaring inden for webudvikling, digitale løsninger
              og content creation.
            </p>

            <p className="mb-8 text-lg leading-relaxed">
              Vi skaber hjemmesider, der styrker dit brand, billeder og videoer,
              der tiltrækker nye kunder, samt markedsføring og digital
              identitet, der forstærker dit forhold til eksisterende kunder.
              Vores friske perspektiv genererer konkrete resultater - vi
              tiltrækker nye, loyale kunder og bidrager til din virksomheds
              vækst.
            </p>

            <Button
              href="/blog"
              textColor="text-primary"
              buttonText="LÆS MERE HER"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
