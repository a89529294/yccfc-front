import Link from "next/link";
import React from "react";
import ArrowButton from "./ArrowButton";

function InnerPageBottomNav({
  className = "",
  homePath,
}: {
  className?: string;
  homePath: string;
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <ArrowButton dir="left" onClick={() => {}} />
      <button className="px-6 py-2 text-sm font-medium border border-solid text-orange-primary border-orange-primary">
        <Link href={homePath}>
          <a>回到列表</a>
        </Link>
      </button>
      <ArrowButton dir="right" onClick={() => {}} />
    </div>
  );
}

export default InnerPageBottomNav;
