import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sun from "../components/svg/Sun";

const Home: NextPage = () => {
  return (
    <div className="relative flex-1">
      <Head>
        <title>緣溪行</title>
      </Head>
      <div className="absolute right-24 bottom-8 w-96 h-72">
        <Image
          src="/index/widget.png"
          alt="widget"
          layout="fill"
          objectFit="contain"
          className="opacity-90"
        />
        <div className="absolute flex gap-1 text-white top-6 left-36">
          <Image src="/index/flag.png" alt="flag" width={15} height={20} />
          <p>南投縣/埔里鎮</p>
        </div>
        <div className="absolute flex items-center gap-2 text-white left-28 top-16">
          <Sun className="w-14 aspect-square" />
          <h2 className="text-5xl">
            30°<span className="text-3xl">C</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
