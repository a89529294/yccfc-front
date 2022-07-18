import React from "react";
import Image from "next/image";

function RoomImage({ path }: { path: string }) {
  return (
    <div className="relative w-56 h-32">
      <Image src={path} alt="room" objectFit="cover" layout="fill" />
    </div>
  );
}

export default RoomImage;
