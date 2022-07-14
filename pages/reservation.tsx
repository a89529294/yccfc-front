import Image from "next/image";
import React, { useState } from "react";
import ProgressBar from "../components/reservation/ProgressBar";

import calendar from "../assets/reservation/calendar.svg";
import tent from "../assets/reservation/tent.svg";

function Reservation() {
  const [stage, setStage] = useState(0);
  return (
    <div className="grid px-20 pt-10 pb-24 mx-24 mt-20 bg-white font-noto-sans gap-7">
      <ProgressBar />
      <div className="flex items-center py-2 pl-6 bg-light-grey">
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
          星空行
        </div>
      </div>
      <section className="flex gap-4">
        <article className="grow-[6] ">
          <label className="flex items-center gap-4 font-medium">
            <span className="text-green-primary">房型</span>
            {/* TODO safari needs appearance-none for <select> but it fucks up styling for chrome */}
            <select className="relative text-orange-primary leading-7 py-1.5 pl-5 flex-1 outline outline-1 outline-orange-primary after:bg-black after:block after:absolute after:content-[url('/reservation/chevrom-down.svg')] after:w-[14px] after:h-2 after:right-20 after:top-1/2">
              {roomTypes.map((t, i) => (
                <option key={i}>{t}</option>
              ))}
            </select>
          </label>
        </article>
        <article className="grow-[4] outline outline-1 outline-black">
          bye
        </article>
      </section>
    </div>
  );
}

const roomTypes = [
  "緣遊獵",
  "溪遊獵",
  "森林遊獵",
  "星空行",
  "愛綠地",
  "情人營",
];

export default Reservation;
