import React from "react";
import prev from "../assets/prev.svg";
import prevHover from "../assets/prev-hover.svg";
import next from "../assets/next.svg";
import nextHover from "../assets/next-hover.svg";
import Image from "next/image";

function ArrowButton({
  onClick,
  dir,
  className = "",
}: {
  onClick: () => void;
  className?: string;
  dir: "left" | "right";
}) {
  const isLeft = dir === "left";
  const path = isLeft ? prev : next;
  const pathHover = isLeft ? prevHover : nextHover;
  return (
    <button className={`group ${className}`} onClick={onClick}>
      <div className="relative aspect-square w-[26px] hover-hover:group-hover:hidden">
        <Image src={path} alt="arrow" layout="fill" objectFit="cover" />
      </div>
      <div className="relative aspect-square w-[26px] hidden hover-hover:group-hover:block">
        <Image src={pathHover} alt="arrow" layout="fill" objectFit="cover" />
      </div>
    </button>
  );
}

export default ArrowButton;
