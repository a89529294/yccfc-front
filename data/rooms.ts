const roomTypes = [
  { id: 1, name: "緣遊獵" },
  { id: 2, name: "溪遊獵" },
  { id: 3, name: "森林遊獵" },
  { id: 4, name: "星空行" },
  { id: 5, name: "愛綠地" },
  { id: 6, name: "情人營" },
];

const selectableRooms: {
  [key: number]: {
    name: string;
    imgPath: string;
    price: number;
    deposit: number;
  }[];
} = {
  1: [
    {
      name: "緣遊獵 - 1",
      imgPath: "/rooms-showcase/yuanyoulie/1.png",
      price: 999,
      deposit: 199,
    },
    {
      name: "緣遊獵 - 2",
      imgPath: "/rooms-showcase/yuanyoulie/1.png",
      price: 999,
      deposit: 199,
    },
  ],
  2: [
    {
      name: "溪遊獵 - 1",
      imgPath: "/rooms-showcase/xiyoulie/1.png",
      price: 1999,
      deposit: 299,
    },
  ],
  3: [
    {
      name: "森林遊獵 - 1",
      imgPath: "/rooms-showcase/senlinyoulie/1.png",
      price: 3999,
      deposit: 399,
    },
  ],
  4: [
    {
      name: "星空行 - 1",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
    {
      name: "星空行 - 2",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
    {
      name: "星空行 - 3",
      imgPath: "/rooms-showcase/xingkongxing/1.png",
      price: 2345,
      deposit: 223,
    },
  ],
  5: [
    {
      name: "愛綠地 - 1",
      imgPath: "/rooms-showcase/ailudi/1.png",
      price: 5231,
      deposit: 500,
    },
    {
      name: "愛綠地 - 2",
      imgPath: "/rooms-showcase/ailudi/1.png",
      price: 5231,
      deposit: 500,
    },
  ],
  6: [
    {
      name: "情人營 - 1",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 2",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 3",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 4",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
    {
      name: "情人營 - 5",
      imgPath: "/rooms-showcase/qingrenying/1.png",
      price: 4231,
      deposit: 399,
    },
  ],
};

export { roomTypes, selectableRooms };
