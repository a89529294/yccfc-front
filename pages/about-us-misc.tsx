import Image from "next/image";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";

function AboutUsMisc() {
  return (
    <MainPageLayout headerImgURL="/about-us/title_event.png">
      <Geo />
    </MainPageLayout>
  );
}

function Geo() {
  return (
    <div
      className="w-32 bg-cover aspect-square"
      style={{
        clipPath: "circle(90.8% at 51% 9%)",
      }}>
      <div
        className="relative w-24 h-24 rounded-full"
        style={{
          backgroundImage: 'url("/about-us/misc-placeholder.png")',
        }}></div>
    </div>
  );
}

export default AboutUsMisc;
