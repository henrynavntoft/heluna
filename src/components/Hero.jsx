import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative py-20 px-6 text-primary">
      <div className="absolute inset-0 bg-secondary opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
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
