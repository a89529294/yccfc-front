import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowButton from "./ArrowButton";
import { shimmer, toBase64 } from "./BlurredImage";

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
      <ArrowButton
        onClick={slideLeft}
        dir="left"
        className="absolute -left-[6px] -translate-x-full top-1/2 -translate-y-1/2"
      />
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
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(500, 500)
                )}`}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowButton
        onClick={slideRight}
        dir="right"
        className="absolute -right-[6px] translate-x-full top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default Slider;
