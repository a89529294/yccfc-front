import Image from "next/image";
import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import LeftArrow from "../components/svg/LeftArrow";

import RightArrow from "../components/svg/RightArrow";
import SlantedFlag from "../components/svg/SlantedFlag";

function RoomsShowcase() {
  const [position, setPosition] = useState(0);
  const distance = position * -136; //based on img width: 130 + gap: 6

  function slideLeft() {
    if (position + 1 <= upperLimit) setPosition((p) => ++p);
  }

  function slideRight() {
    if (position - 1 >= lowerLimit) setPosition((p) => --p);
  }

  return (
    <MainPageLayout
      headerImgURL="/rooms-showcase/title_tent.svg"
      className="py-8 font-noto-sans"
    >
      <div className="flex justify-between text-orange-primary mb-[14px]">
        <div className="relative isolate flex items-center gap-[10px] text-2xl font-bold before:content-[''] before:absolute before:block before:bg-green-primary before:h-2 before:w-11/12 before:-z-10 before:bottom-0">
          溪遊獵 <SlantedFlag fill="fill-orange-primary" />
        </div>
        <ReservationButton />
      </div>
      <section className="flex flex-col gap-[6px] mb-6">
        <div className="relative aspect-[440/248]">
          <Image
            src="/rooms-showcase/xiyoulie/1.png"
            layout="fill"
            objectFit="cover"
            alt="main img"
          />
        </div>
        <div className="relative">
          <div
            className="absolute -left-[6px] -translate-x-full top-1/2 -translate-y-1/2 text-orange-primary border border-solid border-orange-primary p-2 cursor-pointer"
            onClick={slideLeft}
          >
            <LeftArrow width="w-[10px]" height="h-[10px]" />
          </div>
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-[6px] transition-transform"
              style={{ transform: `translateX(${distance}px)` }}
            >
              {imgs.map((img, i) => (
                <div key={i} className="relative w-[130px] h-[73px] shrink-0">
                  <Image
                    key={i}
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute -right-[6px] translate-x-full top-1/2 -translate-y-1/2 text-orange-primary border border-solid border-orange-primary p-2 cursor-pointer"
            onClick={slideRight}
          >
            <RightArrow width="w-[10px]" height="h-[10px]" />
          </div>
        </div>
      </section>
      <section className="grid gap-6 text-xs leading-5 text-body mb-7">
        <p>
          採用中型南非豪華遊獵帳，有別以往露營都是打地舖，鑽睡袋，營區內帳篷全部採用舒適的彈簧床墊，也是園區內唯一寵物友善的帳蓬，讓您帶著心愛的毛小孩留下美麗的露營回憶。
        </p>
        <p>人數：建議入住2~4人</p>
        <p>房型規格：棧板空間600x400cm；帳蓬空間500x400cm</p>
        <p>帳蓬數：6帳（寵物友善）不可加床，毛小孩每隻將加收NT300清潔費</p>
        <p>一泊二食-4人套餐</p>
      </section>
      <section className="mb-7">
        <h2 className="relative flex mb-[10px]">
          帳內設備
          <SlantedFlag className="absolute -translate-x-full -translate-y-1/2 -left-1 top-1/2" />
        </h2>
        <ul className="grid text-xs leading-5 list-inside gap-7 text-body">
          {equipmentsList.map((l, i) => (
            <li
              key={i}
              style={{
                listStyleImage: 'url("/rooms-showcase/list-item-icon.svg")',
              }}
              className="last-of-type:text-red-primary"
            >
              {l}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-9">
        <h2 className="relative flex mb-[10px]">
          住宿須知
          <SlantedFlag className="absolute -translate-x-full -translate-y-1/2 -left-1 top-1/2" />
        </h2>
        <ul className="grid text-xs leading-5 list-inside gap-7 text-body">
          {noticeList.map((l, i) => (
            <li
              key={i}
              style={{
                listStyleImage: 'url("/rooms-showcase/list-item-icon.svg")',
              }}
            >
              {l}
            </li>
          ))}
        </ul>
      </section>
      <ReservationButton className="mx-auto" />
    </MainPageLayout>
  );
}

function ReservationButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-2 text-xs font-medium border border-solid text-orange-primary border-orange-primary ${className}`}
    >
      立即訂房 <RightArrow width="w-[10px]" height="h-[10px]" />
    </button>
  );
}

const imgs = [
  "/rooms-showcase/xiyoulie/2.png",
  "/rooms-showcase/xiyoulie/3.png",
  "/rooms-showcase/xiyoulie/4.png",
  "/rooms-showcase/xiyoulie/5.jpg",
  "/rooms-showcase/xiyoulie/6.jpg",
  "/rooms-showcase/xiyoulie/7.jpg",
  "/rooms-showcase/xiyoulie/8.jpg",
];

const equipmentsList = [
  "基本設備：雙人床鋪x2，冷氣，床頭櫃，衣架組(含衣架)，桌燈，地毯，茶几組，坐墊x2，吊燈x2，鐵櫃，保溫瓶，馬克杯X4，茶包碟，托盤",
  "炊事帳設備：餐桌/椅，卡式瓦斯爐，刻度鍋(湯匙)及烤盤",
  "衛浴設施：採用公共浴廁，廁所提供廁紙",
  "沐浴設施：沐浴露、洗髮露，吹風機",
  "需自備用品：個人換洗衣物、毛巾、牙膏、牙刷",
];

const noticeList = [
  "此區禁止抽菸、溪遊獵房型可攜帶寵物入住，寵物需全程繫上牽繩外嚴禁上床。",
  "帳內禁止爐火、飲食、垃圾，請脫鞋後再進入蓬內，帳內皆有附室內拖鞋 。",
  "棧板範圍內禁止升火，欲使用炭火需租用美式烤爐。",
  "為提供良好的露宿品質環境，於夜間 22:00 後需關閉音響設施且降低音量避免引響其他住客休息品質。",
];

const upperLimit = imgs.length - 3;
const lowerLimit = 0;

export default RoomsShowcase;
