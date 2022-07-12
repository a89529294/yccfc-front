import React from "react";

function RightArrow({
  width = "w-6",
  height = "h-6",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      className={`${width} ${height}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M6.26318 1L11 6L6.26318 11"
        stroke="#E86E2A"
        strokeLinecap="round"
      />
      <path d="M1 6L10.4737 6" stroke="#E86E2A" strokeLinecap="round" />
    </svg>
  );
}

export default RightArrow;
