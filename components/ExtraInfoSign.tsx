import Image from "next/image";
import React from "react";

function ExtraInfoSign({
  position,
  length,
  text,
  dir = "left",
  flip = false,
}: {
  position: string;
  length: string;
  text: string;
  dir?: "left" | "right";
  flip?: boolean;
}) {
  return (
    <div
      className={`absolute flex flex-col items-center ${position} sm:hidden`}>
      <div
        className={`grid border border-solid rounded-full cursor-pointer w-9 aspect-square border-orange-primary place-items-center ${
          flip ? "order-1" : ""
        }`}>
        <Image width={16} height={16} src="/plus.svg" alt="plus sign" />
      </div>
      <div
        className={`w-0 border border-solid border-orange-primary ${length}`}
      />
      {dir === "left" ? (
        <div
          className={`absolute text-sm font-bold -translate-x-full whitespace-nowrap font-noto-sans text-orange-primary isolate ${
            flip ? "bottom-2" : " top-2"
          }`}>
          <div className="absolute bottom-0 right-0 h-2 -left-2 bg-green-primary -z-10" />
          <h6>{text}</h6>
        </div>
      ) : (
        <div
          className={`absolute text-sm font-bold translate-x-full whitespace-nowrap font-noto-sans text-orange-primary left-10 isolate ${
            flip ? "bottom-2" : "top-7"
          }`}>
          <div className="absolute bottom-0 left-0 h-2 w-max -right-2 bg-green-primary -z-10">
            <pre className="-translate-y-1/2 ">{text + " "}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExtraInfoSign;
