const roomTypes = [
  {
    id: 1,
    name: "緣遊獵",
    mainImg: "/rooms-showcase/yuanyoulie/1.jpg",
    subImgs: [
      "/rooms-showcase/yuanyoulie/2.jpg",
      "/rooms-showcase/yuanyoulie/3.jpg",
      "/rooms-showcase/yuanyoulie/4.jpg",
      "/rooms-showcase/yuanyoulie/5.jpg",
    ],
  },
  {
    id: 2,
    name: "溪遊獵",
    mainImg: "/rooms-showcase/xiyoulie/1.jpg",
    subImgs: [
      "/rooms-showcase/xiyoulie/2.jpg",
      "/rooms-showcase/xiyoulie/3.jpg",
      "/rooms-showcase/xiyoulie/4.jpg",
      "/rooms-showcase/xiyoulie/5.jpg",
      "/rooms-showcase/xiyoulie/6.jpg",
      "/rooms-showcase/xiyoulie/7.jpg",
      "/rooms-showcase/xiyoulie/8.jpg",
    ],
  },
  {
    id: 3,
    name: "森林遊獵",
    mainImg: "/rooms-showcase/senlinyoulie/1.jpg",
    subImgs: [
      "/rooms-showcase/senlinyoulie/2.jpg",
      "/rooms-showcase/senlinyoulie/3.jpg",
      "/rooms-showcase/senlinyoulie/4.jpg",
      "/rooms-showcase/senlinyoulie/5.jpg",
    ],
  },
  {
    id: 4,
    name: "星空行",
    mainImg: "/rooms-showcase/xingkongxing/1.jpg",
    subImgs: [
      "/rooms-showcase/xingkongxing/2.jpg",
      "/rooms-showcase/xingkongxing/3.jpg",
      "/rooms-showcase/xingkongxing/4.jpg",
      "/rooms-showcase/xingkongxing/5.jpg",
    ],
  },
  {
    id: 5,
    name: "愛綠地",
    mainImg: "/rooms-showcase/ailudi/1.jpg",
    subImgs: ["/rooms-showcase/ailudi/2.jpg", "/rooms-showcase/ailudi/3.jpg"],
  },
  {
    id: 6,
    name: "情人營",
    mainImg: "/rooms-showcase/qingrenying/1.jpg",
    subImgs: [
      "/rooms-showcase/qingrenying/2.jpg",
      "/rooms-showcase/qingrenying/3.jpg",
      "/rooms-showcase/qingrenying/4.jpg",
      "/rooms-showcase/qingrenying/5.jpg",
      "/rooms-showcase/qingrenying/6.jpg",
    ],
  },
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
