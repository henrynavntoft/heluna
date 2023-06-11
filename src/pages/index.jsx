import Layout from "@/components/Layout";
import CardComponent from "@/components/CardComponent";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtag-manager" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Head>
        <title>HELUNA | AGENCY</title>
        <meta
          name="description"
          content="I am a front-end developer and marketing professional specializing in React, Tailwind, and Next.js for development. On the marketing front, my expertise lies in Shopify, including substantial work in Liquid and JSON, and a specialization in email marketing."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <CardComponent
            href="https://www.linkedin.com/in/henry-lundberg-navntoft/"
            title="About me"
            description="With a passion for digital solutions, I work at the intersection of creativity and technology as a Front-End Developer and Marketing Professional. I specialize in React, Tailwind, and Next.js, harnessing their power to build intuitive and engaging digital experiences. I bring a deep understanding of Shopify, having worked extensively with Liquid and JSON to optimize eCommerce platforms. Dive in to learn more about my work and my journey."
            buttonText="GO TO LINKEDIN"
          />
          <CardComponent
            href="/blog"
            title="Blog"
            description="Explore my blog for insights into the latest trends in front-end development and digital marketing. Engage with my thoughts and perspectives on the evolving tech landscape."
            buttonText="READ MY BLOG"
          />
          <CardComponent
            href="https://henrynavntoft.github.io/personal-website/"
            title="Personal Website"
            description="Dive into my digital realm - a showcase of my front-end development portfolio, tech insights, and personal journey. Build purely in Vanilla HTML, CSS and JavaScript."
            buttonText="PERSONAL WEBSITE"
          />
          <CardComponent
            href="https://github.com/henrynavntoft/frontend_foofest"
            title="FooFest App"
            description="Discover FooFest, a comprehensive app designed and built as my capstone project during my 3rd semester at KEA. It celebrates the vibrancy of a hypothetical festival while demonstrating my ability to bring a concept to life. The app, created using React, Tailwind, and Next.js. Click below to explore the energy of FooFest and the technical finesse that went into creating it."
            buttonText="EXPLORE FOOFEST"
          />
        </section>
      </Layout>
    </div>
  );
}
