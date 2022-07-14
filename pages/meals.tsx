import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "../components/BlurredImage";
import FlagTitle from "../components/FlagTitle";
import ListItem from "../components/ListItem";
import MainPageLayout from "../components/MainPageLayout";
import Slider from "../components/Slider";
import UnderscoredFlagTitle from "../components/UnderscoredFlagTitle";

function Meals() {
  return (
    <MainPageLayout
      headerImgURL="/meals/meals-header.svg"
      className="flex flex-col gap-8 py-8 font-noto-sans"
    >
      <section className="mb-8">
        <UnderscoredFlagTitle className="mb-6 text-orange-primary">
          基本餐點
        </UnderscoredFlagTitle>
        <div className="mb-2.5 flex gap-4">
          <FlagTitle size="md">主食</FlagTitle>
          <select
            name=""
            id=""
            className="text-sm text-green-primary pr-14 bg-[top_50%_right_1rem] bg-no-repeat appearance-none outline outline-orange-primary bg-down-chevron"
          >
            <option value="1">【豪華四人餐】牛肉</option>
          </select>
        </div>
        <div className="flex flex-col gap-[6px] mb-6">
          <div className="relative aspect-[440/293]">
            <Image
              src="/meals/beef/1.svg"
              alt="beef"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(500, 500)
              )}`}
            />
          </div>
          <Slider imgs={imgs} imgDimensions={{ width: 158, height: 88 }} />
        </div>
        <div className="text-sm leading-6 columns-2 text-body">
          <ul className="grid gap-2 ">
            {col1.map((l, i) => (
              <ListItem key={i}>
                <span className="ml-2">{l}</span>
              </ListItem>
            ))}
          </ul>
          <ul className="grid gap-2">
            {col2.map((l, i) => (
              <ListItem key={i}>
                <span className="ml-2">{l}</span>
              </ListItem>
            ))}
          </ul>
        </div>
      </section>
      <section className="grid gap-5">
        <UnderscoredFlagTitle className="text-orange-primary">
          單點
        </UnderscoredFlagTitle>
        <article className="grid gap-1 -mt-2">
          <FlagTitle>肉品</FlagTitle>
          <div className="grid grid-cols-2 gap-x-3 gap-y-5">
            {meats.map((m, i) => (
              <div key={i}>
                <div className="relative aspect-[210/152] shifted-green-bg">
                  <Image
                    src={m.path}
                    alt="meat"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(500, 500)
                    )}`}
                  />
                </div>
                <h2 className="mt-4 mb-1 text-lg font-medium text-green-primary">
                  {m.name}
                </h2>
                <h3 className="text-sm text-body">{m.price + "/組"}</h3>
              </div>
            ))}
          </div>
        </article>
        {articles.map((a, i) => (
          <article key={i}>
            <FlagTitle>{a.title}</FlagTitle>
            <div className="relative aspect-[440/315] my-1">
              <Image
                src={a.imgPath}
                alt="meat"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(500, 500)
                )}`}
              />
            </div>
            <p className="mb-3 text-sm leading-5 text-body">{a.body}</p>
            <ul className="text-sm leading-5 text-body">
              {a.lis.map((l, i) => {
                const isLast = i === a.lis.length - 1;

                return (
                  <ListItem key={i}>
                    {isLast ? (
                      <span>
                        {l}
                        <span className="text-orange-primary">
                          {a.highlightString}
                        </span>
                      </span>
                    ) : (
                      l
                    )}
                  </ListItem>
                );
              })}
            </ul>
          </article>
        ))}
      </section>
    </MainPageLayout>
  );
}

const articles = [
  {
    imgPath: "/meals/beef/1.svg",
    title: "早餐",
    body: "有別於一般露營區的儉樸，提供如同飯店等級的中西式自助吧，蔬菜更是選用在地高山食蔬產地直送，稀飯更是以生米熬煮，香綿燙口。另外提供近二十種餐點給您享用，不怕您不吃只怕您吃不飽！",
    lis: [
      "供餐時間｜AM07:30~09:30憑券至營本部餐廳兌換",
      "如非免搭帳區住客也可加購享用，",
    ],
    highlightString: "加購價：$180元/人",
  },
  {
    imgPath: "/meals/beef/5.png",
    title: "下午迎賓茶點",
    body: "特別與在地小農合作，提供當地農特產品 「筊白筍、地瓜、日月潭紅茶」不同於大眾認知的特色輕食下午茶，顛覆你對下午茶的印象！",
    lis: [
      "供應時間｜pm14:00~17:00憑券至營本部餐廳兌換",
      "僅提供免搭帳住客享用，自搭區&外客可加購享用，",
    ],
    highlightString: "加購價：$120元/人",
  },

  {
    imgPath: "/meals/beef/2.svg",
    title: "晚餐",
    body: "與ISO食品認證台中知名燒烤食材廠商配合 豬、雞、海鮮等肉品產地選用MIT，牛肉則選用美國牛，新鮮食材當日配送，烤肉器具&餐具一應具全，讓您不必費心準備食材及器具，安心愉快的享受著BBQ的美饌與樂趣。素食主義者也別擔心，特別精心準備素食鮮菇蔬菜鍋給您安心享用。另外針對大食客我們也有提供單點肉品、鍋物等食材任君挑選。",
    lis: [
      "領餐時間｜PM17:30～20:00 憑券至營本部餐廳兌換",
      "如非免搭帳區住客也可加購享用，",
    ],
    highlightString: "一套4人份加購價：$2180元/套",
  },
];

const meats = [
  {
    path: "/meals/meat1.svg",
    name: "炙燒烤羊腿",
    price: 3200,
  },
  {
    path: "/meals/meat2.svg",
    name: "港式脆皮烤乳豬",
    price: 4200,
  },
  {
    path: "/meals/meat3.svg",
    name: "古早味甕仔雞",
    price: 200,
  },
];

const col1 = [
  "原味火烤小牛排-300g",
  "上等里肌豬肉片-400g",
  "哈燒五味蜜翅腿-5支",
  "椒鹽松阪豬肉片-200g",
  "御膳芝麻北京餅-1片",
  "老酒花雕鮮醉蝦-10尾",
  "正虎斑挪威鯖魚-1片",
];
const col2 = [
  "古早味中式香腸-5支",
  "翡翠蔥燒培根捲-10捲",
  "正古早味糯米腸-5條",
  "炙燒桂香棉花糖-1包",
  "綿密鮮奶手工吐司-10片",
  "烤肉醬及佐料-配套",
  "餐具、用具-配套",
];

const imgs = [
  "/meals/beef/2.svg",
  "/meals/beef/3.svg",
  "/meals/beef/4.jpg",
  "/meals/beef/5.png",
  "/meals/beef/6.png",
  "/meals/beef/7.png",
  "/meals/beef/8.png",
];

export default Meals;
