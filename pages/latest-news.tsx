import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

import newsArticleImg from "../assets/latest-news/placeholder.png";

function latestNews() {
  return (
    <MainPageLayout headerImgURL="/latest-news/news-header.svg">
      <div className="grid grid-cols-news-container gap-x-4 gap-y-7 my-7">
        {articles.map((a, i) => (
          <Article key={i} img={a.img} title={a.title} date={a.date} />
        ))}
      </div>
    </MainPageLayout>
  );
}

function Article({
  img,
  title,
  date,
}: {
  img: StaticImageData;
  title: string;
  date: string;
}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <article className="relative font-noto-sans">
      <div className="relative w-full aspect-[210/150]" ref={ref}>
        <div
          className="absolute bg-green-primary top-2 left-2"
          style={{ width: width + "px", height: height + "px" }}
        />
        <Image
          layout="fill"
          objectFit="cover"
          alt="news image"
          src={img}
          onLoadingComplete={() => {
            setWidth(ref.current?.clientWidth || 210);
            setHeight(ref.current?.clientHeight || 150);
          }}
        />
      </div>

      <h3 className="mt-2 mb-1 text-xs font-medium text-orange-primary ">
        {date}
      </h3>
      <h2 className="text-lg font-medium text-green-primary ">{title}</h2>
      <button className="flex items-center gap-1 px-3 py-2 mt-3 text-xs font-normal border border-solid border-orange-primary text-orange-primary">
        <Image src="/plus.svg" alt="plus sign" width={12} height={12} />
        瞭解更多
      </button>
    </article>
  );
}

const articles = [
  {
    img: newsArticleImg,
    title: "標題",
    date: "2022/06/30",
  },
  {
    img: newsArticleImg,
    title: "標題",
    date: "2022/06/30",
  },
  {
    img: newsArticleImg,
    title: "標題",
    date: "2022/06/30",
  },
  {
    img: newsArticleImg,
    title: "標題",
    date: "2022/06/30",
  },
];

export default latestNews;
