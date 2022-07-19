import React, { useState } from "react";
import RoomImage from "../RoomImage";
import MealsSelectionCard from "./MealsSelectionCard";
import RoomMealsDetailsCard from "./RoomMealsDetailsCard";

export type CardInfo = {
  selected: boolean;
  setSelectedCardIdx: () => void;
  basic: string;
  singles: {
    name: string;
    qty: number;
    price: number;
  }[];
};
const emptyCardInfo = {
  selected: false,
  setSelectedCardIdx: () => {},
  basic: "【豪華4人餐】- 豬",
  singles: [
    {
      name: "炙燒烤羊腿",
      qty: 1,
      price: 3200,
    },
    {
      name: "港式脆皮烤乳豬",
      qty: 1,
      price: 4200,
    },
    {
      name: "炙燒烤羊腿",
      qty: 2,
      price: 220,
    },
  ],
};
const initCards = new Array<CardInfo>(2).fill(emptyCardInfo);

function MealsSelectionMain() {
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const [cards, setCards] = useState(initCards);
  return (
    <div className="grid grid-cols-[63%_37%] gap-x-9 gap-y-4 items-start">
      <section className="font-bold text-center text-green-primary">
        訂單明細
      </section>
      <section>{/* deliberately empty */}</section>
      <section className="grid gap-4">
        {cards.map((c, i) => (
          <RoomMealsDetailsCard
            key={i}
            basic={c.basic}
            singles={c.singles}
            selected={i === selectedCardIdx}
            setSelectedCardIdx={() => setSelectedCardIdx(i)}
          />
        ))}
      </section>
      <section className="grid gap-3.5">
        <MealsSelectionCard content={basicMeals} />
        <MealsSelectionCard content={singleMeals} />
      </section>
    </div>
  );
}

const basicMeals = {
  type: "basic" as const,
  data: [
    { id: 1, name: "【豪華4人餐】- 豬", imgPath: "/reservation/pork.png" },
    { id: 2, name: "【豪華4人餐】- 牛", imgPath: "/reservation/beef.jpg" },
  ],
};

const singleMeals = {
  type: "single" as const,
  data: [
    {
      id: 100,
      name: "炙燒烤羊腿",
      price: 3200,
      imgPath: "/reservation/mutton.jpg",
    },
    {
      id: 101,
      name: "港式脆皮烤乳豬",
      price: 4200,
      imgPath: "/reservation/wholeRoastSucklingPig.png",
    },
    {
      id: 102,
      name: "古早味甕仔雞",
      price: 110,
      imgPath: "/reservation/potRoastChicken.png",
    },
  ],
};

export type BasicMeals = typeof basicMeals;
export type SingleMeals = typeof singleMeals;
export type Meals = BasicMeals | SingleMeals;

export default MealsSelectionMain;
