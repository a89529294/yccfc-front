import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Layout({
  children,
  useGMap = false,
}: {
  children: React.ReactNode;
  useGMap?: Boolean;
}) {
  const [currentBgIdx, setCurrentBgIdx] = useState(1);

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setToggle((t) => !t);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      //   className={`flex flex-col min-h-full bg-no-repeat bg-[length:100%_auto]  ${
      //     useGMap ? "bg-main-g-map" : bgs[currentBgIdx]
      //   }`}
      className="relative flex flex-col min-h-full isolate">
      {useGMap ? (
        <iframe
          id="contact-us-map"
          className="fixed w-full h-screen bg-white-smoke"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=zh-TW&amp;q=緣溪行森林營地&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
      ) : (
        <>
          <BackgroundImage
            startingIndex={0}
            main={toggle === true}
            setCurrentBgIdx={setCurrentBgIdx}
            currentBgIdx={currentBgIdx}
          />
          <BackgroundImage
            startingIndex={1}
            main={toggle === false}
            setCurrentBgIdx={setCurrentBgIdx}
            currentBgIdx={currentBgIdx}
          />
        </>
      )}

      <header className="relative flex items-center h-32 px-24 isolate">
        <Link href="/">
          <a className="relative block h-24 w-60">
            <Image
              src="/nav/logo.png"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </a>
        </Link>
        <nav className="flex justify-around flex-1 text-lg font-medium font-inter text-green-primary">
          {navLinks.map((l, i) => (
            <Link href={l.path} key={i}>
              <a>{l.text}</a>
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-7">
          {mediaLinks.map((m, i) => (
            <a key={i} href={m.url} className="h-5 group">
              <div className="hover-hover:group-hover:hidden">
                <Image width={20} height={20} alt={m.alt} src={m.img} />
              </div>
              <div className="hidden hover-hover:group-hover:block">
                <Image width={20} height={20} alt={m.alt} src={m.imgHover} />
              </div>
            </a>
          ))}
        </nav>

        <svg
          viewBox="0 0 1440 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full -z-10">
          <path
            opacity="0.9"
            d="M0.0541728 99.184C0.0541728 99.184 120.403 129.041 252 107C361.065 88.7331 447.584 85.5186 545 99.184C702.072 121.225 824.763 130.043 1001 107C1207.62 79.9498 1343.02 98.1821 1440 123.229V0H0L0.0541728 99.184Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </header>
      {children}
    </div>
  );
}

function BackgroundImage({
  startingIndex,
  main,
  setCurrentBgIdx,
  currentBgIdx,
}: {
  startingIndex: number;
  main: boolean;
  setCurrentBgIdx: React.Dispatch<React.SetStateAction<number>>;
  currentBgIdx: number;
}) {
  const [opacity, setOpacity] = useState(0);
  const [imgPath, setImagePath] = useState(bgURLs[startingIndex]);

  useEffect(() => {
    main && setOpacity(1);
    !main && setOpacity(0);
  }, [main]);

  useEffect(() => {}, [currentBgIdx]);

  return (
    <div
      className="fixed w-full h-screen transition-opacity duration-1000 -z-10"
      style={{ opacity }}
      onTransitionEnd={(e) => {
        const opacity = window
          .getComputedStyle(e.target as Element)
          .getPropertyValue("opacity");
        if (!+opacity) {
          setCurrentBgIdx((i) => {
            const newI = i < bgURLs.length - 1 ? ++i : 0;
            setImagePath(bgURLs[newI]);
            return newI;
          });
        }
      }}>
      <Image objectFit="cover" layout="fill" src={imgPath} alt="bg" />
    </div>
  );
}

const bgURLs = [
  "/main-bg/1-min.png",
  "/main-bg/2-min.png",
  "/main-bg/3-min.png",
  "/main-bg/4-min.png",
  "/main-bg/5-min.png",
  "/main-bg/6-min.png",
  "/main-bg/7-min.png",
  "/main-bg/8-min.png",
  "/main-bg/9-min.png",
  "/main-bg/10-min.png",
  "/main-bg/11-min.png",
  "/main-bg/12-min.png",
  "/main-bg/13-min.png",
  "/main-bg/14-min.png",
  "/main-bg/15-min.png",
  "/main-bg/16-min.png",
];

const navLinks = [
  {
    text: "關於我們",
    path: "/about-us",
  },
  {
    text: "最新消息",
    path: "/latest-news",
  },
  {
    text: "房型介紹",
    path: "/rooms-showcase",
  },
  {
    text: "餐點介紹",
    path: "/meals",
  },
  {
    text: "親子設施",
    path: "/child-friendly-equipments",
  },
  {
    text: "立即訂房",
    path: "/reservation",
  },
  {
    text: "聯絡我們",
    path: "/contact-us",
  },
];

const mediaLinks = [
  {
    url: "https:www.google.com",
    img: "/nav/line.svg",
    imgHover: "/nav/line-hover.svg",
    alt: "line",
  },
  {
    url: "https:www.google.com",
    img: "/nav/fb.svg",
    imgHover: "/nav/fb-hover.svg",
    alt: "facebook",
  },
  {
    url: "https:www.google.com",
    img: "/nav/ig.svg",
    imgHover: "/nav/ig-hover.svg",
    alt: "ig",
  },
  {
    url: "https:www.google.com",
    img: "/nav/yt.svg",
    imgHover: "/nav/yt-hover.svg",
    alt: "youtube",
  },
];

export default Layout;
