import React from "react";
import Image from "next/image";

import footer from "../assets/container-footer.png";

function MainPageLayout({
  children,
  headerImgURL,
}: {
  children: React.ReactNode;
  headerImgURL: string;
}) {
  return (
    <div className="flex-1 px-16 pt-20">
      <div className="relative px-10 pb-5 w-container bg-container">
        <div className="relative h-24 -ml-10 -mr-10">
          <Image
            src={headerImgURL}
            layout="fill"
            objectFit="cover"
            alt="header"
          />
        </div>
        {children}
        <div className="px-10 -ml-10 -mr-10 ">
          <Image src={footer} layout="responsive" alt="section footer" />
        </div>
      </div>
    </div>
  );
}

export default MainPageLayout;
