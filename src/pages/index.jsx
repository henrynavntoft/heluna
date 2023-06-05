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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <CardComponent
            href="https://www.linkedin.com/in/henry-lundberg-navntoft/"
            title="About me"
            description="With a passion for digital solutions, I work at the intersection of creativity and technology as a Front-End Developer and Marketing Professional. I specialize in React, Tailwind, and Next.js, harnessing their power to build intuitive and engaging digital experiences. I bring a deep understanding of Shopify, having worked extensively with Liquid and JSON to optimize eCommerce platforms. Dive in to learn more about my work and my journey."
            buttonText="Discover More"
          />
          <CardComponent
            href="https://github.com/henrynavntoft/frontend_foofest"
            title="FooFest App"
            description="Discover FooFest, a comprehensive app designed and built as my capstone project during my 3rd semester at KEA. It celebrates the vibrancy of a hypothetical festival while demonstrating my ability to bring a concept to life. The app, created using React, Tailwind, and Next.js. Click below to explore the energy of FooFest and the technical finesse that went into creating it."
            buttonText="Explore FooFest"
          />
        </section>
      </Layout>
    </>
  );
}
