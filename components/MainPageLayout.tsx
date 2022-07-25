import React, { useState } from "react";
import Image from "next/image";

import footer from "../assets/container-footer.png";

import LeftChevron from "./svg/LeftChevron";
import RightChevron from "./svg/RightChevron";
function MainPageLayout({
  children,
  headerImgURL,
  className = "",
  hideFooter = false,
}: {
  children: React.ReactNode;
  headerImgURL: string;
  className?: string;
  hideFooter?: Boolean;
}) {
  const [showContent, setShowContent] = useState(true);

  const slideLeft = "-translate-x-[calc(100%_+_96px)]";
  return (
    <div className="px-24 pt-20 sm:px-8 sm:pt-0 sm:-z-10">
      <div
        className={`transition-transform relative px-10 bg-white rounded-md w-container sm:w-full sm:px-0 ${
          showContent ? "" : slideLeft
        }`}>
        <div className="relative -mx-10  aspect-[520/92] sm:mx-0">
          <Image
            src={headerImgURL}
            layout="fill"
            objectFit="cover"
            alt="header"
          />
        </div>
        <div className="absolute right-0 translate-x-full cursor-pointer top-2 group sm:hidden">
          <button
            className="flex flex-col items-center px-2 py-1 text-white hover-hover:group-hover:bg-green-primary bg-orange-primary"
            onClick={() => setShowContent((s) => !s)}>
            {showContent ? <LeftChevron /> : <RightChevron />}
            <span className="text-xs ">{showContent ? "close" : "open"}</span>
          </button>
        </div>
        <section className={className}>{children}</section>
        {hideFooter ? null : (
          <div className="px-10 pb-5 -mx-10 sm:ml-0">
            <Image src={footer} layout="responsive" alt="section footer" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPageLayout;
