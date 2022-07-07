import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  "關於我們",
  "最新消息",
  "房型介紹",
  "餐點介紹",
  "親子設施",
  "立即訂房",
  "聯絡我們",
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-main min-h-full">
      <header className="relative h-32 isolate flex px-16 items-center">
        <div className="w-60 h-24 relative ">
          <Image src="/logo.png" layout="fill" objectFit="contain" alt="logo" />
        </div>
        <nav>
          {navLinks.map((l, i) => (
            <Link href="/" key={i}>
              <a>{l}</a>
            </Link>
          ))}
        </nav>

        <svg
          viewBox="0 0 1440 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full left-0 top-0 -z-10"
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

export default Layout;
