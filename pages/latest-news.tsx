import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

import newsArticleImg from "../assets/latest-news/placeholder.png";
import { toBase64, shimmer } from "../components/BlurredImage";
import Link from "next/link";

function latestNews() {
  return (
    <MainPageLayout headerImgURL="/latest-news/news-header.svg">
      <div className="grid grid-cols-news-container gap-x-4 gap-y-7 my-7">
        {articles.map((a, i) => (
          <Article
            key={i}
            img={a.img}
            title={a.title}
            date={a.date}
            id={a.id}
          />
        ))}
      </div>
    </MainPageLayout>
  );
}

function Article({
  id,
  img,
  title,
  date,
}: {
  id: number;
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
        {/* TODO change the green bg to using ::before */}
        <Image
          layout="fill"
          objectFit="cover"
          alt="news image"
          src={img}
          onLoadingComplete={() => {
            setWidth(ref.current?.clientWidth || 210);
            setHeight(ref.current?.clientHeight || 150);
          }}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(500, 500)
          )}`}
        />
      </div>

      <h3 className="mt-2 mb-1 text-sm font-medium text-orange-primary ">
        {date}
      </h3>
      <h2 className="text-lg font-medium text-green-primary ">{title}</h2>
      <button className="flex items-center gap-1 px-3 py-2 mt-3 text-sm font-normal border border-solid border-orange-primary text-orange-primary">
        <Image src="/plus.svg" alt="plus sign" width={12} height={12} />
        <Link href={`/latest-news/${id}`}>
          <a>????????????</a>
        </Link>
      </button>
    </article>
  );
}

export const articles = [
  {
    id: 1,
    img: newsArticleImg,
    title: "??????1",
    date: "2022/06/30",
  },
  {
    id: 2,
    img: newsArticleImg,
    title: "??????2",
    date: "2022/06/31",
  },
  {
    id: 3,
    img: newsArticleImg,
    title: "??????3",
    date: "2022/06/28",
  },
  {
    id: 4,
    img: newsArticleImg,
    title: "??????4",
    date: "2022/06/29",
  },
];

export default latestNews;
