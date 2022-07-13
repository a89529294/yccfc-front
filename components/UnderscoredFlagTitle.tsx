import React from "react";
import SlantedFlag from "./svg/SlantedFlag";

function UnderscoredFlagTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={`relative text-orange-primary w-max isolate flex items-center gap-[10px] text-2xl font-bold before:content-[''] before:absolute before:block before:bg-green-primary before:h-2 before:w-11/12 before:-z-10 before:bottom-0 ${className}`}
    >
      {children} <SlantedFlag fill="fill-orange-primary" />
    </div>
  );
}

export default UnderscoredFlagTitle;
