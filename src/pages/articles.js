import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
        </Layout>
      </main>
    </>
  );
};

export default articles;
