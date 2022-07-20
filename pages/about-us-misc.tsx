import Image from "next/image";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";

import mask1 from "../assets/about-us/event_1st.svg";
import mask2 from "../assets/about-us/mask2.png";

function AboutUsMisc() {
  return (
    <MainPageLayout headerImgURL="/about-us/title_event.png">
      <Geo />
    </MainPageLayout>
  );
}

// TODO Learn about masking and clip-path to make this better
function Geo() {
  return (
    <div className="relative py-10">
      {/* <div
        className="grid w-32 bg-cover aspect-square place-items-center"
        style={{
          clipPath: "circle(70% at 51% 9%)",
        }}>
        <div
          className="relative w-24 h-24 rounded-full"
          style={{
            backgroundImage: 'url("/about-us/misc-placeholder.png")',
          }}></div>
      </div> */}

      <div className="relative w-[150px] aspect-square -translate-x-1/2 left-1/2 ">
        <div className="absolute w-[135px] h-[133px] left-1.5 rounded-full overflow-hidden">
          <Image
            src="/about-us/misc-placeholder.png"
            alt="activity"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Image alt="mask" src={mask1} />
        <Description dir="right" />
      </div>

      <div className="-mt-3 left-52 relative w-8 h-20 skew-x-[20deg] border-r border-dashed border-orange-primary" />

      <div className="relative w-[90px] aspect-square -translate-x left-1/2">
        <div className="absolute w-[90px] h-[90px] rounded-full overflow-hidden">
          <Image
            src="/about-us/misc-placeholder.png"
            alt="activity"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1">
          <Image alt="mask" src={mask2} />
        </div>
        <Description dir="left" />
      </div>

      <div className="left-52 relative w-8 h-20 -skew-x-[20deg] border-r border-dashed border-orange-primary" />

      <div className="relative w-[90px] aspect-square -translate-x-1/2 left-1/2">
        <div className="absolute w-[90px] h-[90px]  rounded-full overflow-hidden">
          <Image
            src="/about-us/misc-placeholder.png"
            alt="activity"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1">
          <Image alt="mask" src={mask2} />
        </div>
        <Description dir="right" className="pl-2" />
      </div>

      <div className=" left-52 relative w-8 h-20 skew-x-[20deg] border-r border-dashed border-orange-primary" />

      <div className="relative w-[150px] aspect-square -translate-x-1 left-1/2 ">
        <div className="absolute w-[135px] h-[133px] left-1.5 rounded-full overflow-hidden">
          <Image
            src="/about-us/misc-placeholder.png"
            alt="activity"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Image alt="mask" src={mask1} />
        <Description dir="left" />
      </div>

      <div className="-mt-4 left-52 relative w-8 h-20 -skew-x-[50deg] border-r border-dashed border-orange-primary" />

      <div className="relative w-[90px] aspect-square -translate-x-full left-1/2">
        <div className="absolute w-[90px] h-[90px]  rounded-full overflow-hidden">
          <Image
            src="/about-us/misc-placeholder.png"
            alt="activity"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1">
          <Image alt="mask" src={mask2} />
        </div>
        <Description dir="right" className="pl-2" />
      </div>
    </div>
  );
}

function Description({
  dir,
  className = "",
}: {
  dir: "left" | "right";
  className?: string;
}) {
  const c =
    dir === "right" ? "right-0 translate-x-full" : "left-0 -translate-x-full";
  return (
    // TODO figure out how to display text on two lines not using fixed width w-40
    <div className={`absolute -translate-y-1/2 top-1/2 w-40 ${c} ${className}`}>
      <h3 className="text-sm font-bold text-orange-primary">2022/06/30</h3>
      <h1 className="font-medium text-green-primary">
        現在小學的畢業旅行 <br />
        都這麼酷嗎！！
      </h1>
    </div>
  );
}

export default AboutUsMisc;
