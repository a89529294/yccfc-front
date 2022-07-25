import Image from "next/image";
import React, { useState } from "react";
import FlagTitle from "../components/FlagTitle";
import ListItem from "../components/ListItem";
import MainPageLayout from "../components/MainPageLayout";
import Slider from "../components/Slider";
import rightArrow from "../assets/right-arrow.svg";
import UnderscoredFlagTitle from "../components/UnderscoredFlagTitle";

import { shimmer, toBase64 } from "../components/BlurredImage";
import { useRouter } from "next/router";
import { roomTypes } from "../data/rooms";

function RoomsShowcase() {
  const router = useRouter();
  const { q } = router.query;
  if (
    typeof q === "object" ||
    q === undefined ||
    !roomTypes.find((rt) => rt.id === +q)
  )
    return (
      <MainPageLayout
        headerImgURL="/rooms-showcase/title_tent.svg"
        className="py-8 font-noto-sans">
        {" "}
      </MainPageLayout>
    );

  const room = roomTypes.find((rt) => rt.id === +q);
  return (
    <MainPageLayout
      headerImgURL="/rooms-showcase/title_tent.svg"
      className="py-8 font-noto-sans">
      <div className="flex justify-between text-orange-primary mb-3.5">
        <UnderscoredFlagTitle>{room!.name}</UnderscoredFlagTitle>
        <ReservationButton />
      </div>
      <section className="flex flex-col gap-[6px] mb-6">
        <div className="relative aspect-[440/248]">
          <Image
            src={room!.mainImg}
            layout="fill"
            objectFit="cover"
            alt="main img"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
          />
        </div>
        <Slider
          imgs={room!.subImgs}
          imgDimensions={{ width: 130, height: 73 }}
        />
      </section>
      <section className="grid gap-6 text-sm leading-5 text-body mb-7">
        <p>
          採用中型南非豪華遊獵帳，有別以往露營都是打地舖，鑽睡袋，營區內帳篷全部採用舒適的彈簧床墊，也是園區內唯一寵物友善的帳蓬，讓您帶著心愛的毛小孩留下美麗的露營回憶。
        </p>
        <p>人數：建議入住2~4人</p>
        <p>房型規格：棧板空間600x400cm；帳蓬空間500x400cm</p>
        <p>帳蓬數：6帳（寵物友善）不可加床，毛小孩每隻將加收NT300清潔費</p>
        <p>一泊二食-4人套餐</p>
      </section>
      <section className="mb-7 grid gap-2.5">
        <FlagTitle>帳內設備</FlagTitle>
        <ul className="grid text-sm leading-5 gap-7 text-body">
          {equipmentsList.map((l, i) => (
            <ListItem key={i} className="last-of-type:text-red-primary">
              {l}
            </ListItem>
          ))}
        </ul>
      </section>
      <section className="mb-8 grid gap-[10px]">
        <FlagTitle>住宿須知</FlagTitle>
        <ul className="grid text-sm leading-5 gap-7 text-body">
          {noticeList.map((l, i) => (
            <ListItem key={i}>{l}</ListItem>
          ))}
        </ul>
      </section>
      <section className="mb-9 grid gap-[10px]">
        <FlagTitle>平/假日判定</FlagTitle>
        <ul className="text-sm leading-5 text-body">
          {holiVSNonholi.map((l, i) => (
            <li key={i}>{l}</li>
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
      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium border border-solid text-orange-primary border-orange-primary ${className}`}>
      立即訂房
      <Image width={10} height={10} src={rightArrow} alt="right arrow" />
    </button>
  );
}

const imgs = [
  "/rooms-showcase/xiyoulie/2.jpg",
  "/rooms-showcase/xiyoulie/3.jpg",
  "/rooms-showcase/xiyoulie/4.jpg",
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

const holiVSNonholi = [
  "平日（定義：非連續假日 週日~周四）",
  "假日（定義：週五~週六、國定連續假日之前夕、寒暑假期間：週日～周四）",
  "特殊假日（定義：寒暑假期間的週五至周六、國定連續假日）",
];

export default RoomsShowcase;
