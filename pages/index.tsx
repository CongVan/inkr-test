import type { NextPage } from "next";
import Head from "next/head";
import TitleLayout from "../components/title/TitleLayout";
import { GetStaticProps } from "next";
import { LocalService } from "../services/local";

export const getStaticProps: GetStaticProps = async (context) => {
  const { title, chapters, relatedTitles, comments } =
    await LocalService.TitleAPI.getPageConfig();
  return {
    props: { title, chapters, relatedTitles, comments },
  };
};

const Home: NextPage<any> = ({ title, chapters, relatedTitles, comments }) => {
  return (
    <>
      <Head>
        <title>INKR Test</title>
      </Head>
      <TitleLayout
        title={title}
        chapters={chapters}
        relatedTitles={relatedTitles}
        comments={comments}
      />
    </>
  );
};

export default Home;
