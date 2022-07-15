import Image from "next/image";
import React from "react";

import chevronLeft from "../assets/reservation/chevron-left.svg";
import chevronRight from "../assets/reservation/chevron-right.svg";

function Calendar() {
  return (
    <div className="px-10 pt-4 pb-8">
      <h2 className="pb-5 text-center text-green-primary">入住時間</h2>
      <div>
        <h2 className="flex justify-between font-medium">
          <button>
            <Image src={chevronLeft} alt="left" />
          </button>
          2022/07
          <button>
            <Image src={chevronRight} alt="right" />
          </button>
        </h2>
      </div>
    </div>
  );
}

export default Calendar;
