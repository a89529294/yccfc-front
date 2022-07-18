import React from "react";
import Image from "next/image";
import ArrowButton from "../ArrowButton";
import { roomTypes, selectableRooms } from "../../data/rooms";
import Calendar from "../Calendar";
import { Stage } from "../../data/reservation";
import StageNavigator from "./StageNavigator";

function SelectRoomAndDate({
  roomType,
  setRoomType,
  stage,
  setStage,
}: {
  roomType: number;
  setRoomType: React.Dispatch<React.SetStateAction<number>>;
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}) {
  return (
    <div>
      <section className="relative grid grid-cols-[6fr_4fr] gap-4">
        <StageNavigator dir="right" stage={stage} setStage={setStage} />
        <article className="absolute h-full w-[calc((100%_-_16px)_*_0.6)] overflow-auto no-scrollbar">
          <label className="flex items-center gap-4 font-medium">
            <span className="text-green-primary">房型</span>
            <select
              className="relative focus-visible:outline-none appearance-none text-orange-primary leading-7 py-1.5 pl-5 flex-1 border border-solid border-grey-medium bg-[url('../assets/reservation/chevron-down.svg')] bg-no-repeat bg-[top_50%_right_2rem]"
              onChange={(e) => {
                setRoomType(+e.target.value);
              }}
              value={roomType}>
              {roomTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
          <div className="grid gap-3 pt-6 ">
            {selectableRooms[roomType].map((r, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 pr-10 border border-solid border-grey-medium">
                <div className="relative w-56 h-32">
                  <Image
                    src={r.imgPath}
                    alt="room"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div className="flex flex-col h-full gap-2">
                    <h2 className="text-2xl font-bold text-green-primary">
                      {r.name}
                    </h2>
                    <h3 className="flex mt-auto text-lg font-bold leading-none text-body">
                      <div className="pr-2 mr-2 border-r border-solid border-grey-dark">
                        價格
                      </div>
                      <div>{r.price} 元</div>
                    </h3>
                    <h3 className="flex text-lg font-bold leading-none text-body">
                      <div className="pr-2 mr-2 border-r border-solid border-grey-dark">
                        訂金
                      </div>
                      <div>{r.deposit} 元</div>
                    </h3>
                  </div>
                  <button className="py-3 text-sm border border-solid border-orange-primary px-7 text-orange-primary">
                    加入訂單
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="col-start-2">
          <Calendar />
        </article>
      </section>
    </div>
  );
}

export default SelectRoomAndDate;
