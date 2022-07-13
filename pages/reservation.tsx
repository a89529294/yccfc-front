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
      <section>{/* left col 60% right col 40% */}</section>
    </div>
  );
}

export default Reservation;
