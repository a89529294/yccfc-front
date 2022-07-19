import Image from "next/image";
import React, { useState } from "react";
import { BasicMeals, Meals, SingleMeals } from "./MealsSelectionMain";

function MealsSelectionCard({ content }: { content: Meals }) {
  const meals = content.data;
  const isBasic = content.type === "basic";
  return (
    <article className="grid gap-5 p-4 border border-solid border-grey-medium">
      <h2 className="font-bold text-green-primary">
        Step 1. 選擇{isBasic ? "基本" : "單點"}餐點
      </h2>
      <ul className="grid gap-3">
        {meals.map((m) => {
          return (
            <div key={m.id} className="flex gap-3.5">
              <div className="relative h-20 w-28">
                <Image
                  src={m.imgPath}
                  alt={m.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {"price" in m ? (
                <SingleMealDetails name={m.name} id={m.id} price={m.price} />
              ) : (
                <BasicMealDetails name={m.name} id={m.id} />
              )}
            </div>
          );
        })}
      </ul>
    </article>
  );
}

function BasicMealDetails({ name, id }: { name: string; id: number }) {
  return (
    <div className="flex items-center justify-between flex-1 text-sm text-body">
      <label htmlFor={id.toString()} className="select-none">
        {name}
      </label>
      <input
        type="checkbox"
        id={id.toString()}
        className="grid place-items-center appearance-none w-7.5 aspect-square bg-grey-light before:opacity-0 before:content-[url('/reservation/checkmark.svg')] checked:before:opacity-100"
      />
    </div>
  );
}

function SingleMealDetails({
  name,
  price,
  id,
}: {
  name: string;
  price: number;
  id: number;
}) {
  const [qty, setQty] = useState(0);

  return (
    <div className="flex items-center justify-between flex-1">
      <label htmlFor={id.toString()} className="grid">
        <span className="text-sm text-body leading-[170%]">{name}</span>
        <span className="text-xs text-grey-dark">{price}/份</span>
      </label>
      <div className="relative">
        <input
          type="number"
          id={id.toString()}
          className="w-12 pl-2 border border-solid outline-none h-7.5 border-grey-light "
          value={qty.toString()}
          onChange={(e) => {
            const v = e.target.value;
            setQty(+v >= 0 ? +v : 0);
          }}
        />
        <button
          className="absolute w-2.5 aspect-square right-1 top-1"
          onClick={() => setQty((v) => ++v)}>
          <Image
            src="/reservation/chevron-up.svg"
            alt="chevron up"
            layout="fill"
            objectFit="cover"
          />
        </button>
        <div className="border-t border-solid absolute w-2.5 border-grey-medium right-1 top-1/2" />
        <button
          className="absolute w-2.5 aspect-square right-1 bottom-1"
          onClick={() => setQty((v) => (!v ? v : --v))}>
          <Image
            src="/reservation/chevron-down.svg"
            alt="chevron down"
            layout="fill"
            objectFit="cover"
          />
        </button>
      </div>
    </div>
  );
}

export default MealsSelectionCard;
