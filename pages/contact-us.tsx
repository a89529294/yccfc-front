import Image from "next/image";
import React, { useRef, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import { shimmer, toBase64 } from "../components/BlurredImage";
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
      hideFooter>
      <section className="grid gap-5 pt-8 pb-6">
        <article className="grid gap-4">
          <UnderscoredFlagTitle>交通方式</UnderscoredFlagTitle>
          <p className="text-sm text-body">
            國道六號行至埔里端出口後右轉，至鯉魚路後左轉。直行約2分鐘見左處一白色大橋(乾溪景觀橋)，開進後即抵達「緣溪行森林營地」。
          </p>
        </article>
        <article className="grid gap-3">
          <UnderscoredFlagTitle>周邊景點</UnderscoredFlagTitle>
          <div className="relative">
            <ArrowButton
              className="absolute -translate-x-full -translate-y-1/2 -left-2 top-1/2"
              dir="left"
              onClick={slideLeft}
            />
            <div className="overflow-hidden" ref={galleryContainerRef}>
              <div
                className="flex gap-[2%] transition-transform"
                style={{
                  transform: `translateX(${distance})`,
                }}>
                {attractions.map((a, i) => (
                  <div
                    key={i}
                    className="basis-[32%] shrink-0 border-b-[3px] border-solid border-green-primary">
                    <div
                      className="relative aspect-[142/106] mb-2"
                      ref={imageContainerRef}>
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
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                          shimmer(500, 500)
                        )}`}
                      />
                    </div>
                    <h2 className="mb-1 text-sm font-bold text-green-primary">
                      {a.name}
                    </h2>
                    <h3 className="mb-3 text-sm font-medium text-orange-primary">
                      路程｜{a.duration}分鐘
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <ArrowButton
              className="absolute translate-x-full -translate-y-1/2 -right-2 top-1/2"
              dir="right"
              onClick={slideRight}
            />
          </div>
        </article>
        <article className="grid gap-4">
          <UnderscoredFlagTitle>聯絡我們</UnderscoredFlagTitle>
          <div className="grid grid-cols-2 text-sm text-body">
            <div className="grid items-center gap-5">
              <p>地址｜南投縣埔里鎮乾溪景觀橋</p>
              <p>電話｜049-2900389</p>
              <p>
                時間｜check in / 3:00pm
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;check out
                / 12:00am
              </p>
            </div>
            <div className="grid justify-center">
              <div className="flex gap-2.5 items-center">
                <Image
                  width={25}
                  height={25}
                  src="/contact-us/line-normal.svg"
                  alt="line"
                />
                歡迎加入我們的LINE！
              </div>

              <Image
                width={133}
                height={133}
                src="/contact-us/qr.svg"
                alt="qr-code"
              />
            </div>
          </div>
        </article>
      </section>

      <form className="grid gap-5 px-10 pt-5 -ml-10 -mr-10 bg-grey-lightest pb-7">
        <h2 className="text-sm font-medium text-orange-primary">
          請留下您的資訊，我們將會盡快聯繫您
        </h2>
        <div className="grid gap-4 text-sm font-medium ">
          <input
            type="text"
            placeholder="請輸入您的姓名"
            className="placeholder:text-grey-medium py-1.5 px-4"
          />
          <input
            type="text"
            placeholder="請輸入您的手機"
            className="placeholder:text-grey-medium py-1.5 px-4"
          />
          <textarea
            cols={30}
            rows={10}
            className="px-4 py-3 resize-none placeholder:text-grey-medium"
            placeholder="請輸入您想說的話..."></textarea>
          <button
            className="px-8 py-2 text-sm font-medium border border-solid text-orange-primary border-orange-primary justify-self-center"
            onClick={(e) => e.preventDefault()}>
            送出
          </button>
        </div>
      </form>
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

export async function getStaticProps() {
  return {
    props: {
      useGMap: true,
    },
  };
}

export default ContactUs;
