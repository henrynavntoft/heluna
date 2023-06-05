import Layout from "@/components/Layout";
import CardComponent from "@/components/CardComponent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HELUNA | AGENCY</title>
        <meta
          name="description"
          content="I am a front-end developer and marketing professional specializing in React, Tailwind, and Next.js for development. On the marketing front, my expertise lies in Shopify, including substantial work in Liquid and JSON, and a specialization in email marketing."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <section className="flex flex-col gap-4">
          <CardComponent
            href="https://github.com/henrynavntoft"
            title="About Me"
            description="I am a front-end developer and marketing professional specializing in
          React, Tailwind, and Next.js for development. On the marketing front,
          my expertise lies in Shopify, including substantial work in Liquid and
          JSON, and a specialization in email marketing."
            buttonText="Learn more"
          />
          <CardComponent
            href="mailto:info@heluna.dk"
            title="Contact Me"
            description="Have any questions or concerns? Reach out to me and I'll get back to you as soon as possible."
            buttonText="Get in touch"
          />

          <CardComponent
            href="https://www.linkedin.com/in/henry-lundberg-navntoft/"
            title="LinkedIn"
            description="Find me on LinkedIn"
            buttonText="Go to LinkedIn"
          />
        </section>
      </Layout>
    </>
  );
}
