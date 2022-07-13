import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";

function Slider({
  imgs,
  imgDimensions,
}: {
  imgs: Array<string>;
  imgDimensions: { width: number; height: number };
}) {
  const [position, setPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = imgDimensions;
  const deduction = Math.floor(containerWidth / width);
  const upperLimit = imgs.length - deduction;
  const lowerLimit = 0;

  const distance = position * -(width + 6); //based on img width + gap: 6

  useEffect(() => {
    setContainerWidth(ref.current?.clientWidth || 440);
  }, []);

  function slideLeft() {
    if (position + 1 <= upperLimit) setPosition((p) => ++p);
  }

  function slideRight() {
    if (position - 1 >= lowerLimit) setPosition((p) => --p);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className="absolute -left-[6px] -translate-x-full top-1/2 -translate-y-1/2 text-orange-primary border border-solid border-orange-primary p-2"
        onClick={slideLeft}
      >
        <LeftArrow width="w-[10px]" height="h-[10px]" />
      </button>
      {/* TODO use ArrowButton instead */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-[6px] transition-transform"
          style={{ transform: `translateX(${distance}px)` }}
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <Image
                key={i}
                src={img}
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute -right-[6px] translate-x-full top-1/2 -translate-y-1/2 text-orange-primary border border-solid border-orange-primary p-2"
        onClick={slideRight}
      >
        <RightArrow width="w-[10px]" height="h-[10px]" />
      </button>
      {/* TODO use ArrowButton instead */}
    </div>
  );
}

export default Slider;
