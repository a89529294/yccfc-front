import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>緣溪行</title>
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world! Goodbye world!
      </h1>
    </div>
  );
};

export default Home;
