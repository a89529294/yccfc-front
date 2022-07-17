import Image from "next/image";
import React, { useEffect, useState } from "react";
import { endOfMonth, startOfMonth, addMonths, format } from "date-fns";

import chevronLeft from "../assets/reservation/chevron-left.svg";
import chevronRight from "../assets/reservation/chevron-right.svg";
import { generateCells } from "../util/time";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [cells, setCells] = useState<{ text: string; color: string }[]>([]);
  useEffect(() => {
    const lastMonth = addMonths(currentMonth, -1);
    const beginningOfMonth = startOfMonth(currentMonth);
    // const beginningOfMonth = startOfMonth(addMonths(now, 1));
    const endingOfMonth = endOfMonth(currentMonth);
    const endingOfLastMonth = endOfMonth(lastMonth);

    setCells(
      generateCells(
        endingOfLastMonth.getDate(),
        beginningOfMonth.getDay(),
        endingOfMonth.getDate(),
        endingOfMonth.getDay()
      )
    );
  }, [currentMonth]);

  useEffect(() => {
    const now = new Date();
    setCurrentMonth(startOfMonth(now));
  }, []);

  return (
    <div className="px-10 pt-4 pb-8 outline outline-1 outline-grey-medium">
      <h2 className="pb-5 text-center text-green-primary">入住時間</h2>
      <div className="grid gap-3">
        <h2 className="flex justify-between font-medium">
          <button onClick={() => setCurrentMonth((m) => addMonths(m, -1))}>
            <Image src={chevronLeft} alt="left" />
          </button>
          {format(currentMonth, "yyyy/MM")}
          <button onClick={() => setCurrentMonth((m) => addMonths(m, 1))}>
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

export default Calendar;
