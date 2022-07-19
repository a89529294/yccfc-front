import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import burger from "../assets/burger.svg";
import { clickContext } from "../pages/_app";

function Layout({
  children,
  useGMap = false,
}: {
  children: React.ReactNode;
  useGMap?: boolean;
}) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBgIdx, setCurrentBgIdx] = useState(1);
  const { setClicked } = useContext(clickContext);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setToggle((t) => !t);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative flex flex-col h-auto min-h-full isolate "
      onClick={() => setClicked(true)}>
      <header className="relative z-10 flex items-center h-32 px-24 isolate sm:px-8 sm:h-20">
        <Link href="/">
          <a className="relative block h-24 w-60 sm:h-16 sm:w-44">
            <Image
              src="/nav/logo.png"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </a>
        </Link>

        {/* Desktop */}
        <nav className="flex justify-around flex-1 text-lg font-medium font-inter text-green-primary sm:hidden">
          {navLinks.map((l, i) => (
            <DesktopNavLink l={l} key={i} />
          ))}
        </nav>
        <nav className="flex items-center gap-7 sm:hidden">
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
          className="absolute top-0 left-0 w-full -z-10 sm:hidden">
          <path
            opacity="0.9"
            d="M0.0541728 99.184C0.0541728 99.184 120.403 129.041 252 107C361.065 88.7331 447.584 85.5186 545 99.184C702.072 121.225 824.763 130.043 1001 107C1207.62 79.9498 1343.02 98.1821 1440 123.229V0H0L0.0541728 99.184Z"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>

        {/* Mobile */}
        <div className="absolute top-0 left-0 hidden w-full h-full bg-white -z-10 sm:block " />

        <div
          className="relative hidden w-8 ml-auto aspect-square sm:block"
          onClick={() => {
            setIsMenuOpen((o) => !o);
          }}>
          <Image src={burger} alt="menu" layout="fill" objectFit="cover" />
        </div>

        {isMenuOpen ? (
          <div className="absolute bottom-0 right-0 hidden translate-y-full bg-white sm:block">
            <ul>
              <li className="flex items-center justify-around py-2">
                {mediaLinks.map((m, i) => (
                  <a
                    key={i}
                    href={m.url}
                    className="relative w-6 aspect-square">
                    <Image
                      src={m.img}
                      alt={m.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                ))}
              </li>
              {navLinks.map((l, i) => (
                <li
                  key={i}
                  className="px-12 py-4 border-t border-solid border-grey-medium">
                  <Link href={l.path}>
                    <a>{l.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
      {useGMap ? (
        <iframe
          id="contact-us-map"
          className="fixed w-full h-screen bg-white-smoke -z-10"
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

      <main className={`relative sm:top-56`}>{children}</main>
    </div>
  );
}

function DesktopNavLink({ l }: { l: typeof navLinks[number] }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { clicked, setClicked } = useContext(clickContext);

  useEffect(() => {
    clicked && setIsSubMenuOpen(false);
  }, [clicked]);
  return l.subMenu ? (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsSubMenuOpen((o) => !o);
      }}
      className="relative">
      <div className="flex items-center gap-2">
        {l.text}
        <Image
          src="/chevron-down.svg"
          alt="chevron"
          width={10}
          height={5}></Image>
      </div>
      {isSubMenuOpen ? (
        <ul className="absolute -bottom-2 border-t-2 border-solid border-orange-primary bg-white w-[120%] -left-[10%] text-lg translate-y-full whitespace-nowrap text-green-primary">
          {l.subMenu.map((sm, i) => (
            <li
              key={i}
              className="py-2 border-solid first-of-type:border-b border-grey-medium">
              <Link href={sm.path}>
                <a>{sm.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </button>
  ) : (
    <Link href={l.path}>
      <a className="flex items-center gap-2">{l.text}</a>
    </Link>
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
      className="fixed w-full h-screen transition-opacity duration-1000 -z-10 sm:absolute sm:w-full sm:h-56 sm:top-20 sm:left-0"
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
    // useSubMenu: true,
    subMenu: [
      { name: "關於我們", path: "/about-us" },
      { name: "花絮", path: "/about-us-misc" },
    ],
  },
  {
    text: "最新消息",
    path: "/latest-news",
  },
  {
    text: "房型介紹",
    path: "/rooms-showcase",
    // useSubMenu: true,
    subMenu: [{ name: "房型介紹", path: "/rooms-showcase" }],
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
