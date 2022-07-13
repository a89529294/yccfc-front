import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

function ChildFriendlyEquipments() {
  return (
    <MainPageLayout headerImgURL="/latest-news/news-header.svg">
      <div className="grid grid-cols-news-container gap-x-4 gap-y-7 my-7">
        {articles.map((a, i) => (
          <Article key={i} img={a.img} title={a.title} body={a.body} />
        ))}
      </div>
    </MainPageLayout>
  );
}

function Article({
  img,
  title,
  body,
}: {
  img: string;
  title: string;
  body: string;
}) {
  return (
    <article className="relative font-noto-sans shifted-green-bg">
      <div className="bg-white grid gap-2.5 px-1.5 pt-1.5 pb-4 border border-solid border-green-primary">
        <div className="relative w-full aspect-[197/111]">
          <Image layout="fill" objectFit="cover" alt="news image" src={img} />
        </div>
        <h2 className="text-lg font-medium text-green-primary ">{title}</h2>
        <h3 className="text-xs font-normal leading-5 text-body">{body}</h3>

        <button className="flex items-center gap-1 px-3 py-2 text-xs font-normal border border-solid border-orange-primary text-orange-primary justify-self-start">
          <Image src="/plus.svg" alt="plus sign" width={12} height={12} />
          瞭解更多
        </button>
      </div>
    </article>
  );
}

const articles = [
  {
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
];

export default ChildFriendlyEquipments;
