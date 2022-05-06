import apple from "../public/assets/apple.png";
import bottle from "../public/assets/bottle.png";
import rainbow from "../public/assets/rainbow.png";
import paper from "../public/assets/paper.png";

export const stickersData = [
  {
    id: 1,
    title: "Bio",
    cssProps: "flex-1 self-start",
    image: apple,
    priority: false,
  },
  {
    id: 2,
    title: "Works",
    cssProps: "flex-1 -rotate-[25deg] self-end",
    image: bottle,
    priority: false,
  },
  {
    id: 3,
    title: "Music",
    cssProps: "flex-1 rotate-[10deg] self-start",
    image: rainbow,
    priority: false,
  },
  {
    id: 4,
    title: "Contact",
    cssProps: "flex-1 self-end",
    image: paper,
    priority: true,
  },
];
