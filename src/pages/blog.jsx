import React from "react";
import Layout from "@/components/Layout";
import CardComponent from "@/components/CardComponent";

const blog = () => {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <CardComponent
          href="https://amusing-petroleum-66b.notion.site/Leveraging-Klaviyo-for-Effective-Email-Marketing-d4d410622e284378b84ec10602dd05c8?pvs=4"
          title="Leveraging Klaviyo"
          description="
Email marketing is an essential part of a successful digital marketing strategy. It's about more than just sending emails—it's about delivering the right content to the right person at the right time. And one platform that helps businesses achieve this is Klaviyo."
          buttonText="READ MORE"
        />
      </section>
    </Layout>
  );
};

export default blog;
