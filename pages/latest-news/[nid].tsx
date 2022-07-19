import { useRouter } from "next/router";
import React from "react";
import MainPageLayout from "../../components/MainPageLayout";

import Image from "next/image";
import Slider from "../../components/Slider";
import InnerPageBottomNav from "../../components/InnerPageBottomNav";

function LatestNewsInner() {
  const router = useRouter();
  const { nid } = router.query;
  return (
    <MainPageLayout headerImgURL="/latest-news/news-header.svg">
      <div className="pb-6">
        <div className="relative w-full aspect-[440/192] bg-green-primary mb-1.5">
          <Image
            src="/latest-news/newsInnerPagePlaceholder.png"
            alt="news"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Slider imgs={imgs} imgDimensions={{ width: 93, height: 60 }} />
        <section className="mt-5 pb-28">
          <h2 className="text-sm font-medium text-orange-primary">
            2022/06/30
          </h2>
          <h1 className="text-lg font-medium text-green-primary mt-1.5 mb-2.5">
            全新打卡點設施！
          </h1>
          <p className="text-sm text-body">
            緣溪小編來報報！！來掌聲鼓勵鼓勵！超美的一座室內空間誕生啦！是不是很有美式的風格呢！小編宛如置身於國外庭園一般，坐在裡面看著溪水池也太美了吧！
            #緣溪行森林營地再添美麗庭院一座，還不快來拍美照打卡加上一杯咖啡是不是很悠哉很享受呢！聽說後面還有更厲害的要誕生了喔！大家拭目以待吧！緣溪行就是要讓大家每一次來都有不一樣的❤️體驗，就是要讓你照片拍到手軟哈哈哈！❤️❤️❤️❤️❤️
          </p>
        </section>
        <InnerPageBottomNav homePath="/latest-news" />
      </div>
    </MainPageLayout>
  );
}

const imgs = [
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
  "/latest-news/newsInnerPagePlaceholder.png",
];

export default LatestNewsInner;
