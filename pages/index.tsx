import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ArrowButton from "../components/ArrowButton";
import Sun from "../components/svg/Sun";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>緣溪行</title>
      </Head>
      <div className="absolute grid content-between justify-center py-6 right-24 bottom-8 w-96 h-72 isolate justify-items-center sm:w-72 sm:h-60">
        <Image
          src="/index/widget.png"
          alt="widget"
          layout="fill"
          objectFit="contain"
          className="opacity-90 -z-10"
        />

        <div className="flex gap-1 pl-6 text-white sm:text-sm">
          <Image src="/index/flag.png" alt="flag" width={15} height={20} />
          <p>南投縣/埔里鎮</p>
        </div>
        <div className="flex items-center gap-2 text-white left-28 top-16">
          <Sun className="w-14 aspect-square" />
          <h2 className="text-5xl sm:text-3xl">
            30°<span className="text-3xl sm:text-xl">C</span>
          </h2>
        </div>
        <h3 className="relative text-xl font-bold text-center text-orange-primary left-arm right-arm sm:text-lg">
          最新消息
        </h3>
        <div className="flex items-center justify-between gap-4 text-orange-primary sm:gap-2">
          <ArrowButton dir="left" onClick={() => {}} />
          <h2>
            <p className="text-sm">2022/12/03</p>
            <p className="text-lg font-semibold text-black sm:text-base">
              全新打卡點設施!
            </p>
          </h2>
          <ArrowButton dir="right" onClick={() => {}} />
        </div>
        <h4 className="self-end pl-8 text-sm text-green-primary sm:text-xs ">
          © 緣溪行僧林營地
        </h4>
      </div>
    </div>
  );
};

export default Home;
