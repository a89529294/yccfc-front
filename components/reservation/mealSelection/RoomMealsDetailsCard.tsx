import React from "react";
import RoomImage from "../RoomImage";
import { CardInfo } from "./MealsSelectionMain";

function RoomMealsDetailsCard({
  selected,
  setSelectedCardIdx,
  basic,
  singles,
}: CardInfo) {
  return (
    <article
      className={`relative grid grid-cols-[auto_1fr] p-3 border border-solid  pr-14 ${
        selected ? "border-orange-primary" : "border-grey-medium"
      }`}>
      <section className="grid gap-3 pr-4 border-r border-solid border-green-primary">
        <RoomImage path="/rooms-showcase/xingkongxing/1.png" />
        <div className="flex font-bold">
          <span className="text-2xl text-green-primary">星空行</span>
          <div className="flex flex-col justify-between ml-auto text-sm text-body">
            <span>價格｜5669 元</span>
            <span>訂金｜1500 元</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col pl-3">
        <div className="flex items-start gap-8 text-body">
          <CardMealsDetails title="基本餐點" list={basic} />
          <CardMealsDetails
            title="單點餐點"
            list={singles}
            removePadding
            className="flex-1"
          />
        </div>
        <div className="flex items-center justify-between pt-3 mt-auto font-bold border-t border-solid border-grey-medium">
          <span className="text-sm text-body">價格</span>
          <span className="text-orange-primary">$5669</span>
        </div>
      </section>
      <button
        className={`absolute right-0 grid translate-x-1/2 -translate-y-1/2  border border-solid rounded-full w-14 text-sm aspect-square border-orange-primary place-items-center top-1/2 ${
          selected
            ? "bg-orange-primary text-white"
            : "text-orange-primary bg-white"
        }`}
        onClick={(e) => setSelectedCardIdx()}>
        {selected ? "選擇中" : "選擇"}
      </button>
    </article>
  );
}

function CardMealsDetails({
  title,
  list,
  removePadding = false,
  className = "",
}: {
  title: string;
  list: CardInfo["singles"] | string;
  removePadding?: boolean;
  className?: string;
}) {
  if (list === "") removePadding = true;
  function listContent() {
    if (typeof list === "string") {
      if (list === "") return <span className="leading-relaxed">無</span>;
      else return list;
    } else {
      if (!list.length) return <span className="leading-relaxed">無</span>;
      else
        return (
          <ul>
            {list.map((l, i) => (
              <li key={i} className="flex leading-relaxed">
                <span>{l.name}</span>
                <div className="flex items-center ml-auto">
                  <span className="w-8 text-black">X{l.qty}</span>
                  <span className="flex justify-end w-12 text-xs text-orange-primary">
                    +${l.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        );
    }
  }

  return (
    <div className={`grid ${className}`}>
      <span className={`text-lg font-bold ${removePadding ? "" : "ml-2"}`}>
        {title}
      </span>
      <span className="text-sm">{listContent()}</span>
    </div>
  );
}

export default RoomMealsDetailsCard;
