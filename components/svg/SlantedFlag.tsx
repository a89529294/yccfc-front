import React from "react";

function SlantedFlag({
  fill = "fill-green-primary",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_325_3728)">
        <path
          d="M5.90671 0.330022L4.75 0L-0.167375 16.615L0.989332 16.945L5.90671 0.330022Z"
          fill="#D9D9D9"
        />
        <path
          d="M12.7729 6.79686L5.90283 0.34137L3.45249 8.62069L12.7729 6.79686Z"
          className={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_325_3728">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SlantedFlag;
