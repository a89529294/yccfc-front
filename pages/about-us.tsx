import Image from "next/image";
import React from "react";

import ExtraInfoSign from "../components/ExtraInfoSign";

import map from "../assets/about-us/about-us-map-hd.png";
import close from "../assets/close-container.svg";
import MainPageLayout from "../components/MainPageLayout";

function aboutUs() {
  return (
    <MainPageLayout headerImgURL="/about-us/header.png">
      <div className="absolute right-0 translate-x-full cursor-pointer top-2">
        <Image width={50} height={50} src={close} alt="close container" />
      </div>

      <section className=" pt-11 font-noto-sans">
        <h2 className="text-sm font-medium text-green-primary mb-7">
          「緣溪行，忘路之遠近。」歡迎您帶著親愛的家人，輕裝簡行，來到埔里；走進心裡的美好。
        </h2>
        <div className="grid gap-6 text-xs text-body">
          <p>
            台灣超過3000公尺以上的高山有268座；日本10幾座，紐西蘭也只有20幾座。
          </p>
          <p>
            目前全球僅剩七種，而台灣就佔了2種，還擁有全世界面積最大的原始檜木林。
          </p>
          <p>
            台灣共有300多種鳥類，特有鳥種密度為亞洲第一,
            而埔里可以看到約100種鳥類。
          </p>
          <p>
            台灣被發現的蝴蝶種類高達418種，蝴蝶數種密度為世界第一；埔里一帶就分佈了200多種蝴蝶。
            如果用心看，會發現幸福很簡單。
          </p>
          <p>
            燈紅酒綠，比不上一家人相聚的平淡卻美好；
            高樓大廈，比不上台灣山林間的廣闊森林、新鮮空氣，與遠山白雲。
          </p>
          <p>
            緣溪行，忘路之遠近。 在時間的洪流面前，我們短暫的一生顯得微不足道；
            能夠永遠留給孩子的，往往只有關於愛的那些回憶。歡迎您帶著親愛的家人，輕裝簡行；來到埔里，走進心裡的美好。
          </p>
        </div>
      </section>
      <section className="relative -ml-10 -mr-10 py-28">
        <Image src={map} layout="intrinsic" alt="camp site map" />
        <ExtraInfoSign position="top-16 left-24" length="h-32" text="緣遊獵" />
        <ExtraInfoSign
          position="top-8 left-[214px]"
          length="h-[280px]"
          text="森林遊獵"
          dir="right"
        />
        <ExtraInfoSign position="top-16 right-10" length="h-20" text="愛綠地" />
        <ExtraInfoSign
          position="bottom-12 left-24"
          length="h-28"
          text="星空行"
          flip
        />
        <ExtraInfoSign
          position="bottom-6 left-[180px]"
          length="h-16"
          text="情人營"
          dir="right"
          flip
        />
        <ExtraInfoSign
          position="bottom-16 left-[290px]"
          length="h-[90px]"
          text="溪遊獵"
          dir="right"
          flip
        />
      </section>
    </MainPageLayout>
  );
}

export default aboutUs;
