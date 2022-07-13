import React from "react";
import Image from "next/image";

import footer from "../assets/container-footer.png";
import close from "../assets/close-container.svg";

function MainPageLayout({
  children,
  headerImgURL,
  className = "",
}: {
  children: React.ReactNode;
  headerImgURL: string;
  className?: string;
}) {
  return (
    <div className="flex-1 px-16 pt-20">
      <div className="relative px-10 pb-5 w-container bg-container">
        <div className="relative -ml-10 -mr-10 aspect-[520/92]">
          <Image
            src={headerImgURL}
            layout="fill"
            objectFit="cover"
            alt="header"
          />
        </div>
        <div className="absolute right-0 translate-x-full cursor-pointer top-2">
          <Image width={50} height={50} src={close} alt="close container" />
        </div>
        <section className={className}>{children}</section>
        <div className="px-10 -ml-10 -mr-10 ">
          <Image src={footer} layout="responsive" alt="section footer" />
        </div>
      </div>
    </div>
  );
}

export default MainPageLayout;
