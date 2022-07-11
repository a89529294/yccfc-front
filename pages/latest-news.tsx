import Image, { StaticImageData } from "next/image";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";

import newsArticleImg from "../assets/latest-news/placeholder.png";

function latestNews() {
  return (
    <MainPageLayout headerImgURL="/latest-news/news-header.svg">
      <div className="grid grid-cols-news-container gap-x-2 gap-y-7 my-7">
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
  return (
    <article>
      <Image layout="responsive" alt="news image" src={img} />
      <h3>{date}</h3>
      <h2>{title}</h2>
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
