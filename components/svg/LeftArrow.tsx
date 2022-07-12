import React from "react";

function LeftArrow({
  width = "w-6",
  height = "h-6",
}: {
  width?: string;
  height?: string;
}) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={`${width} ${height}`}
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   stroke="currentColor"
    //   strokeWidth={2}
    // >
    //   <path
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //   />
    // </svg>
    <svg
      className={`${width} ${height}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      style={{ display: "block", transform: "scale(-1,1)" }}
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

export default LeftArrow;
