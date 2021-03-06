import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toBase64, shimmer } from "../components/BlurredImage";
import MainPageLayout from "../components/MainPageLayout";

function ChildFriendlyEquipments() {
  return (
    <MainPageLayout headerImgURL="/cfe/title_facility.svg">
      <div className="grid grid-cols-news-container gap-x-4 gap-y-7 my-7">
        {articles.map((a, i) => (
          <Article
            key={i}
            img={a.img}
            title={a.title}
            body={a.body}
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
  body,
}: {
  id: number;
  img: string;
  title: string;
  body: string;
}) {
  return (
    <article className="relative font-noto-sans shifted-green-bg">
      <div className="bg-white grid gap-2.5 px-1.5 pt-1.5 pb-4 border border-solid border-green-primary">
        <div className="relative w-full aspect-[197/111]">
          <Image
            layout="fill"
            objectFit="cover"
            alt="news image"
            src={img}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
          />
        </div>
        <h2 className="text-lg font-medium text-green-primary ">{title}</h2>
        <h3 className="text-sm font-normal leading-5 text-body">{body}</h3>

        <button className="flex items-center gap-1 px-3 py-2 text-sm font-normal border border-solid border-orange-primary text-orange-primary justify-self-start">
          <Image src="/plus.svg" alt="plus sign" width={12} height={12} />
          <Link href={`/child-friendly-equipments/${id}`}>
            <a>瞭解更多</a>
          </Link>
        </button>
      </div>
    </article>
  );
}

const articles = [
  {
    id: 1,
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    id: 2,
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    id: 3,
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
  {
    id: 4,
    img: "/cfe/cfe-placeholder.png",
    title: "孩子們的新夥伴",
    body: "哇!!孩子們!!緣溪行有新夥伴加入了!! 可愛的動物碰碰車!!讓營區親子設施添加一份熱鬧~ 爸爸媽媽⋯⋯",
  },
];

export default ChildFriendlyEquipments;
