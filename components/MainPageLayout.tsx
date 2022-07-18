import React from "react";
import Image from "next/image";

import footer from "../assets/container-footer.png";
import close from "../assets/close.svg";
import closeHover from "../assets/close-hover.svg";

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
  return (
    <div className="flex-1 px-24 pt-20">
      <div className="relative px-10 bg-white w-container">
        <div className="relative -ml-10 -mr-10 aspect-[520/92]">
          <Image
            src={headerImgURL}
            layout="fill"
            objectFit="cover"
            alt="header"
          />
        </div>
        <div className="absolute right-0 translate-x-full cursor-pointer top-2 group">
          <div className="hover-hover:group-hover:hidden">
            <Image width={50} height={50} src={close} alt="close" />
          </div>
          <div className="hidden hover-hover:group-hover:block">
            <Image width={50} height={50} src={closeHover} alt="close hover" />
          </div>
        </div>
        <section className={className}>{children}</section>
        {hideFooter ? null : (
          <div className="px-10 pb-5 -ml-10 -mr-10">
            <Image src={footer} layout="responsive" alt="section footer" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPageLayout;
