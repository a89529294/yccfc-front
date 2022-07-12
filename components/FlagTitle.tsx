import React from "react";
import SlantedFlag from "./svg/SlantedFlag";

function FlagTitle({
  children,
  size = "sm",
}: {
  children: string;
  size?: keyof typeof sizes;
}) {
  return (
    <h2 className={`relative flex text-orange-primary ${sizes[size]}`}>
      {children}
      <SlantedFlag className="absolute -translate-x-full -translate-y-1/2 -left-1 top-1/2" />
    </h2>
  );
}

const sizes = {
  sm: "font-medium text-sm",
  md: "font-bold text-xl",
};

export default FlagTitle;
