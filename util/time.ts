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
    const isSaturday = i % 7 === 6;
    let color = colors.unavailable;
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
        if (isSaturday) color = colors.saturday;
        else if (isSunday) color = colors.sunday;
        else color = colors.weekdays;
      }
      cells.push({
        text: start + "",
        color,
      });
      start++;
    }
  }

  cells = cells
    .slice(cells.length - 7)
    .every((c) => c.color === colors.unavailable)
    ? cells.slice(0, cells.length - 7)
    : cells;

  return cells;
}

export { generateCells };
