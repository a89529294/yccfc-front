import Image from "next/image";
import Link from "next/link";
import React from "react";

function Layout({
  children,
  useGMap = false,
}: {
  children: React.ReactNode;
  useGMap?: Boolean;
}) {
  return (
    <div
      className={`flex flex-col min-h-full bg-no-repeat bg-[length:100%_auto]  ${
        useGMap ? "bg-main-g-map" : "bg-main"
      }`}
    >
      <header className="relative flex items-center h-32 px-16 isolate">
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
            <a key={i} href={m.url} className="h-5 ">
              <Image width={20} height={20} alt={m.alt} src={m.img} />
            </a>
          ))}
        </nav>

        <svg
          viewBox="0 0 1440 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full -z-10"
        >
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
    alt: "line",
  },
  {
    url: "https:www.google.com",
    img: "/nav/facebook.svg",
    alt: "facebook",
  },
  {
    url: "https:www.google.com",
    img: "/nav/ig.svg",
    alt: "ig",
  },
  {
    url: "https:www.google.com",
    img: "/nav/youtube.svg",
    alt: "youtube",
  },
];

export default Layout;
