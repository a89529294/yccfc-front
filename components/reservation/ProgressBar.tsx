import React from "react";
import SlantedFlag from "../svg/SlantedFlag";

function ProgressBar() {
  return (
    <div className="flex ">
      <Side dir="left" label="選擇房型" selected />
      <Inbetween />
      <Middle label="選擇房型" />
      <Inbetween />
      <Middle label="填寫聯絡資訊" />
      <Inbetween />
      <Side dir="right" label="填寫付款資訊" />
    </div>
  );
}

function Inbetween() {
  return (
    <span className="flex-1 grid grid-rows-[max-content_max-content]  gap-y-1">
      <h2 className="invisible text-orange-primary">d</h2>
      <div className="grid flex-1 h-1.5">
        <div></div>
        <div className="border-t border-solid border-grey-dark"></div>
      </div>
    </span>
  );
}

function Middle({ label }: { label: string }) {
  return (
    <span className="grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content] gap-y-1">
      <h2 className="col-start-2 text-grey-dark">{label}</h2>
      <div className="flex col-start-2 ">
        <div className="grid flex-1">
          <div></div>
          <div className="border-t border-solid border-grey-dark"></div>
        </div>
        <div className="rounded-full w-1.5 aspect-square bg-grey-dark mx-1.5"></div>
        <div className="grid flex-1">
          <div></div>
          <div className="border-t border-solid border-grey-dark"></div>
        </div>
      </div>
    </span>
  );
}

function Side({
  dir,
  label,
  selected = false,
}: {
  dir: "left" | "right";
  label: string;
  selected?: boolean;
}) {
  const isLeft = dir === "left";
  return (
    <span
      className={`grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content] ${
        selected ? "gap-1" : "gap-y-1"
      }`}
    >
      {selected ? <SlantedFlag className="self-center" /> : null}
      <h2
        className={`col-start-2 ${
          selected ? "text-orange-primary" : "text-grey-dark"
        }`}
      >
        {label}
      </h2>
      <div className="flex col-start-2 ">
        <div className="grid flex-1 ">
          {isLeft ? null : (
            <>
              <div></div>
              <div className="border-t border-solid border-grey-dark"></div>
            </>
          )}
        </div>
        <div
          className={`rounded-full w-1.5 aspect-square mx-1.5 ${
            selected ? "bg-orange-primary" : "bg-grey-dark"
          }`}
        ></div>
        <div className="grid flex-1">
          {isLeft ? (
            <>
              <div></div>
              <div className="border-t border-solid border-grey-dark"></div>
            </>
          ) : null}
        </div>
      </div>
    </span>
  );
}

export default ProgressBar;
