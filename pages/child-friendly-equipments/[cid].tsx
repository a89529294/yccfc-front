import Image from "next/image";
import React from "react";
import InnerPageBottomNav from "../../components/InnerPageBottomNav";
import MainPageLayout from "../../components/MainPageLayout";

function ChildInnerPage() {
  return (
    <MainPageLayout
      headerImgURL="/cfe/title_facility.svg"
      className="pt-10 pb-5">
      <div className="relative w-96 h-52 bg-green-primary">
        <div className="absolute w-full h-full left-10 bottom-2">
          <Image
            src="/cfe/cfeInnerPlaceholder.png"
            alt="placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h1 className="text-lg font-medium text-green-primary mt-5 mb-2.5">
        孩子們的新夥伴
      </h1>
      <p className="text-sm text-body mb-52">
        哇！孩子們！緣溪行有新夥伴加入了！可愛的動物碰碰車！讓營區親子設施添加一份熱鬧～爸爸媽媽快帶小朋友們來與我們見面，記錄孩子們最開心燦爛的笑容創造美好的回憶吧!!
      </p>
      <InnerPageBottomNav homePath="/child-friendly-equipments" />
    </MainPageLayout>
  );
}

export default ChildInnerPage;
