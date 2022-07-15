import Image from "next/image";
import React from "react";

import chevronLeft from "../assets/reservation/chevron-left.svg";
import chevronRight from "../assets/reservation/chevron-right.svg";

function Calendar() {
  return (
    <div className="px-10 pt-4 pb-8 outline outline-1 outline-grey-medium">
      <h2 className="pb-5 text-center text-green-primary">入住時間</h2>
      <div className="grid gap-3">
        <h2 className="flex justify-between font-medium">
          <button>
            <Image src={chevronLeft} alt="left" />
          </button>
          2022/07
          <button>
            <Image src={chevronRight} alt="right" />
          </button>
        </h2>
        <div className="grid grid-cols-7 grid-rows-7 gap-x-10 gap-y-6">
          {cells.map((c, i) => (
            <button key={i} className={`${c.color}`}>
              {c.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const colors = {
  sunday: "text-alpha-blue",
  weekdays: "text-black",
  saturday: "text-bland-celery",
  unavailable: "text-grey-medium",
};

const cells = [
  {
    text: "日",
    color: colors.sunday,
  },
  {
    text: "一",
    color: colors.weekdays,
  },
  {
    text: "二",
    color: colors.weekdays,
  },
  {
    text: "三",
    color: colors.weekdays,
  },
  {
    text: "四",
    color: colors.weekdays,
  },
  {
    text: "五",
    color: colors.weekdays,
  },
  {
    text: "六",
    color: colors.saturday,
  },
  {
    text: "26",
    color: colors.unavailable,
  },
  {
    text: "27",
    color: colors.unavailable,
  },
  {
    text: "28",
    color: colors.unavailable,
  },
  {
    text: "29",
    color: colors.unavailable,
  },
  {
    text: "30",
    color: colors.unavailable,
  },
  {
    text: "1",
    color: colors.unavailable,
  },
  {
    text: "2",
    color: colors.saturday,
  },
  {
    text: "3",
    color: colors.sunday,
  },
  {
    text: "4",
    color: colors.weekdays,
  },
  {
    text: "5",
    color: colors.weekdays,
  },
  {
    text: "6",
    color: colors.weekdays,
  },
  {
    text: "7",
    color: colors.weekdays,
  },
  {
    text: "8",
    color: colors.weekdays,
  },
  {
    text: "9",
    color: colors.saturday,
  },
  {
    text: "10",
    color: colors.sunday,
  },
  {
    text: "11",
    color: colors.weekdays,
  },
  {
    text: "12",
    color: colors.weekdays,
  },
  {
    text: "13",
    color: colors.weekdays,
  },
  {
    text: "14",
    color: colors.weekdays,
  },
  {
    text: "15",
    color: colors.weekdays,
  },
  {
    text: "16",
    color: colors.saturday,
  },
  {
    text: "17",
    color: colors.sunday,
  },
  {
    text: "18",
    color: colors.weekdays,
  },
  {
    text: "19",
    color: colors.weekdays,
  },
  {
    text: "20",
    color: colors.weekdays,
  },
  {
    text: "21",
    color: colors.weekdays,
  },
  {
    text: "22",
    color: colors.weekdays,
  },
  {
    text: "23",
    color: colors.saturday,
  },
  {
    text: "24",
    color: colors.sunday,
  },
  {
    text: "25",
    color: colors.weekdays,
  },
  {
    text: "26",
    color: colors.weekdays,
  },
  {
    text: "27",
    color: colors.weekdays,
  },
  {
    text: "28",
    color: colors.weekdays,
  },
  {
    text: "29",
    color: colors.weekdays,
  },
  {
    text: "30",
    color: colors.saturday,
  },
  {
    text: "31",
    color: colors.sunday,
  },
  {
    text: "1",
    color: colors.unavailable,
  },
  {
    text: "2",
    color: colors.unavailable,
  },
  {
    text: "3",
    color: colors.unavailable,
  },
  {
    text: "4",
    color: colors.unavailable,
  },
  {
    text: "5",
    color: colors.unavailable,
  },
  {
    text: "6",
    color: colors.unavailable,
  },
];

export default Calendar;
