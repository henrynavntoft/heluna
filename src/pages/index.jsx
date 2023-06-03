import Layout from "@/components/Layout";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <About />
      <Contact />
    </Layout>
  );
}
