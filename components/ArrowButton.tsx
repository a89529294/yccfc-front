import React from "react";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";

function ArrowButton({
  onClick,
  dir,
  className = "",
}: {
  onClick: () => void;
  className: string;
  dir: "left" | "right";
}) {
  const isLeft = dir === "left";
  const Arrow = isLeft ? LeftArrow : RightArrow;
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 text-orange-primary border border-solid border-orange-primary p-2 ${
        isLeft ? "-translate-x-full" : "translate-x-full"
      } ${className}`}
      onClick={onClick}
    >
      <Arrow width="w-2.5" height="h-2.5" />
    </button>
  );
}

export default ArrowButton;
