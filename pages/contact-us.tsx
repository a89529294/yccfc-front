import Image from "next/image";
import React, { useRef, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import MainPageLayout from "../components/MainPageLayout";
import UnderscoredFlagTitle from "../components/UnderscoredFlagTitle";

function ContactUs() {
  const [position, setPosition] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [gap, setGap] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const distance = -(imgWidth + gap) * position + "px";
  function slideLeft() {
    position + 1 <= maxPosition && setPosition((p) => ++p);
  }
  function slideRight() {
    position - 1 >= minPosition && setPosition((p) => --p);
  }

  return (
    <MainPageLayout
      headerImgURL="/contact-us/title_contact.svg"
      className="font-noto-sans"
    >
      <section className="grid gap-5 pt-8 pb-6">
        <article className="grid gap-4">
          <UnderscoredFlagTitle>交通方式</UnderscoredFlagTitle>
          <p className="text-xs text-body">
            國道六號行至埔里端出口後右轉，至鯉魚路後左轉。直行約2分鐘見左處一白色大橋(乾溪景觀橋)，開進後即抵達「緣溪行森林營地」。
          </p>
        </article>
        <article className="grid gap-3">
          <UnderscoredFlagTitle>周邊景點</UnderscoredFlagTitle>
          <div className="relative">
            <ArrowButton className="-left-2" dir="left" onClick={slideLeft} />
            <div className="overflow-hidden" ref={galleryContainerRef}>
              <div
                className="flex gap-[2%] transition-transform"
                style={{
                  transform: `translateX(${distance})`,
                }}
              >
                {attractions.map((a, i) => (
                  <div key={i} className="basis-[32%] shrink-0 ">
                    <div
                      className="relative aspect-[142/106]"
                      ref={imageContainerRef}
                    >
                      <Image
                        src={a.imgPath}
                        alt="attraction"
                        layout="fill"
                        objectFit="cover"
                        onLoadingComplete={() => {
                          setImgWidth(
                            imageContainerRef.current?.clientWidth || 140
                          );
                          setGap(
                            galleryContainerRef.current?.clientWidth
                              ? galleryContainerRef.current?.clientWidth * 0.02
                              : 8.8
                          );
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ArrowButton
              className="-right-2"
              dir="right"
              onClick={slideRight}
            />
          </div>
        </article>
        <article></article>
      </section>
      <section></section>
    </MainPageLayout>
  );
}

const attractions = [
  { imgPath: "/contact-us/1.png", name: "18度C巧克力工房", duration: 20 },
  { imgPath: "/contact-us/2.png", name: "三級古蹟-興大實驗林", duration: 30 },
  { imgPath: "/contact-us/3.png", name: "中台禪寺", duration: 50 },
  { imgPath: "/contact-us/4.png", name: "元首館", duration: 10 },
  { imgPath: "/contact-us/5.png", name: "合歡山", duration: 90 },
  { imgPath: "/contact-us/6.png", name: "清境農場", duration: 50 },
  { imgPath: "/contact-us/7.png", name: "福興溫泉遊客中心", duration: 22 },
  { imgPath: "/contact-us/8.png", name: "虎嘯山飛行傘", duration: 86 },
  { imgPath: "/contact-us/9.png", name: "虎嘯山飛行傘基地", duration: 39 },
  { imgPath: "/contact-us/10.png", name: "虎嘯山飛行傘基地2", duration: 46 },
];

const minPosition = 0;
const maxPosition = attractions.length - 3;

export default ContactUs;
