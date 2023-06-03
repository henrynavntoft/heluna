import Layout from "@/components/Layout";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
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
        <About />

        <Contact />
      </Layout>
    </>
  );
}
