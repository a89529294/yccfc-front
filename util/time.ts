const colors = {
  sunday: "text-alpha-blue",
  weekdays: "text-black",
  saturday: "text-bland-celery",
  unavailable: "text-grey-medium",
};

function generateCells(
  dateOfEndOfLastMonth: number,
  dayOfStartOfCurrentMonth: number,
  dateOfEndOfCurrentMonth: number,
  dayOfEndOfCurrentMonth: number
) {
  let cells = [
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
  ];

  const startOfFirstRow = dateOfEndOfLastMonth - dayOfStartOfCurrentMonth + 1;
  const endOfLastRow = 6 - dayOfEndOfCurrentMonth;
  let start = startOfFirstRow;
  let month: "prev" | "current" | "next" = "prev";
  for (let i = 0; i < 42; i++) {
    const isSunday = i % 7 === 0;
    const isMonday = i % 7 === 1;
    const isTuesday = i % 7 === 2;
    const isWednesday = i % 7 === 3;
    const isThursday = i % 7 === 4;
    const isFriday = i % 7 === 5;
    const isSatday = i % 7 === 6;
    let color = colors.unavailable;
    console.log(dateOfEndOfCurrentMonth);
    if (start > dateOfEndOfLastMonth && month === "prev") {
      start = 1;
      month = "current";
      color = colors.weekdays;
      cells.push({
        text: start + "",
        color,
      });
      start++;
    } else if (start > dateOfEndOfCurrentMonth && month === "current") {
      start = 1;
      month = "next";
      cells.push({
        text: start + "",
        color,
      });
      start++;
    } else {
      if (month === "prev" || month === "next") {
        color = colors.unavailable;
      } else {
        color = colors.weekdays;
      }
      cells.push({
        text: start + "",
        color,
      });
      start++;
    }
  }
  console.log(cells);
  cells = cells
    .slice(cells.length - 7)
    .every((c) => c.color === colors.unavailable)
    ? cells.slice(0, cells.length - 7)
    : cells;
  return cells;
}

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
    color: colors.weekdays,
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

export { generateCells, cells };
