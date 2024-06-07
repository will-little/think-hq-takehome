import Layout from "@layout/Layout";
import HomePage from "@modules/home-page/HomePage";
import type { GetStaticProps, NextPage } from "next";

type PageProps = { dummyData: string };

const Page: NextPage<PageProps> = ({ dummyData }) => (
  <Layout
    metaDescription="The power of collective creativity"
    metaTitle="THQ Approach"
  >
    <HomePage />
  </Layout>
);

export default Page;
