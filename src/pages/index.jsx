import Layout from "@/components/Layout";
import USP from "@/components/USP";
import Head from "next/head";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HELUNA | AGENCY</title>
        <meta
          name="description"
          content="I am a front-end developer and marketing professional specializing in React, Tailwind, and Next.js for development. On the marketing front, my expertise lies in Shopify, including substantial work in Liquid and JSON, and a specialization in email marketing."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Hero />
        <USP />
      </Layout>
    </div>
  );
}
