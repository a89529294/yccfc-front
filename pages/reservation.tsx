import Image from "next/image";
import React, { useState } from "react";
import ProgressBar from "../components/reservation/ProgressBar";

import calendar from "../assets/reservation/calendar.svg";
import tent from "../assets/reservation/tent.svg";
import Calendar from "../components/Calendar";

function Reservation() {
  const [stage, setStage] = useState(0);
  const [roomType, setRoomType] = useState(1);
  const roomTypeName = roomTypes.find((r) => r.id === roomType)?.name || "";
  return (
    <div className="grid px-20 pt-10 pb-24 mx-24 mt-20 bg-white font-noto-sans gap-7">
      <ProgressBar />
      <div className="flex items-center py-2 pl-6 bg-grey-light">
        <Image src={calendar} alt="calendar" width={27} height={27} />
        <div className="px-5 py-1 ml-6 font-bold leading-7 bg-white">
          2022/7/20～2022/7/21
          <span className="ml-4 mr-5 text-green-primary">|</span>
          <span className="text-sm font-normal"> 1 晚</span>
        </div>
        <div className="grid ml-9 ">
          <Image src={tent} alt="tent" width={32} height={27} />
        </div>
        <div className="px-4 py-1 ml-3 font-medium leading-7 bg-white">
          {roomTypeName}
        </div>
      </div>
      <section className="relative grid grid-cols-[6fr_4fr] gap-4 ">
        <article className="absolute h-full w-[calc((100%_-_16px)_*_0.6)] overflow-auto no-scrollbar">
          <label className="flex items-center gap-4 font-medium">
            <span className="text-green-primary">房型</span>
            <select
              className="relative focus-visible:outline-none appearance-none text-orange-primary leading-7 py-1.5 pl-5 flex-1 border border-solid border-grey-medium bg-[url('../assets/reservation/chevron-down.svg')] bg-no-repeat bg-[top_50%_right_2rem]"
              onChange={(e) => {
                setRoomType(+e.target.value);
              }}
              value={roomType}>
              {roomTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          <div className="grid gap-3 py-6 ">
            {selectableRooms[roomType].map((r, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 pr-10 border border-solid border-grey-medium">
                <div className="relative w-56 h-32">
                  <Image
                    src={r.imgPath}
                    alt="room"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div className="flex flex-col h-full gap-2">
                    <h2 className="text-2xl font-bold text-green-primary">
                      {r.name}
                    </h2>
                    <h3 className="flex mt-auto text-lg font-bold leading-none text-body">
                      <div className="pr-2 mr-2 border-r border-solid border-grey-dark">
                        價格
                      </div>
                      <div>{r.price} 元</div>
                    </h3>
                    <h3 className="flex text-lg font-bold leading-none text-body">
                      <div className="pr-2 mr-2 border-r border-solid border-grey-dark">
                        訂金
                      </div>
                      <div>{r.deposit} 元</div>
                    </h3>
                  </div>
                  <button className="py-3 text-sm border border-solid border-orange-primary px-7 text-orange-primary">
                    加入訂單
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="col-start-2">
          <Calendar />
        </article>
      </section>
    </div>
  );
}

const roomTypes = [
  { id: 1, name: "緣遊獵" },
  { id: 2, name: "溪遊獵" },
  { id: 3, name: "森林遊獵" },
  { id: 4, name: "星空行" },
  { id: 5, name: "愛綠地" },
  { id: 6, name: "情人營" },
];

const selectableRooms: {
  [key: number]: {
    name: string;
    imgPath: string;
    price: number;
    deposit: number;
  }[];
} = {
  1: [
    {
      name: "緣遊獵 - 1",
      imgPath: "/rooms-showcase/yuanyoulie/1.png",
      price: 999,
      deposit: 199,
    },
    {
      name: "緣遊獵 - 2",
      imgPath: "/rooms-showcase/yuanyoulie/1.png",
      price: 999,
      deposit: 199,
    },
  ],
  2: [
    {
      name: "溪遊獵 - 1",
      imgPath: "/rooms-showcase/xiyoulie/1.png",
      price: 1999,
      deposit: 299,
    },
  ],
  3: [
    {
      name: "森林遊獵 - 1",
      imgPath: "/rooms-showcase/senlinyoulie/1.png",
      price: 3999,
      deposit: 399,
    },
  ],
  4: [
    {
      name: "星空行 - 1",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
    {
      name: "星空行 - 2",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
    {
      name: "星空行 - 3",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
  ],
  5: [
    {
      name: "愛綠地 - 1",
      imgPath: "/rooms-showcase/ailudi/1.png",
      price: 5231,
      deposit: 500,
    },
    {
      name: "愛綠地 - 2",
      imgPath: "/rooms-showcase/ailudi/1.png",
      price: 5231,
      deposit: 500,
    },
  ],
  6: [
    {
      name: "情人營 - 1",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 2",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 3",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 4",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 5",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
  ],
};

export default Reservation;
