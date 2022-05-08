import unicorn from "../public/assets/unicorn.png";
import bottle from "../public/assets/bottle.png";
import rainbow from "../public/assets/rainbow.png";
import flower from "../public/assets/flower.png";

export const stickersData = [
  {
    id: 1,
    title: "Bio",
    image: unicorn,
    priority: false,
  },
  {
    id: 2,
    title: "Works",
    image: bottle,
    priority: false,
  },
  {
    id: 3,
    title: "Music",
    image: rainbow,
    priority: false,
  },
  {
    id: 4,
    title: "Contact",
    image: flower,
    priority: true,
  },
];

export const musicPlaylist = [
  {
    id: 1,
    src: "https://t4.bcbits.com/stream/3daae2f582504c197af927e3652f6092/mp3-128/75037182?p=0&ts=1652090486&t=e1e52dc5093cc2055108f3f62b70962d5b696576&token=1652090486_3d6747e43bfdc4a091d1e6ab359628bde4f0a320",
    artist: "OorsprongPark",
    title: "Elevator Kitsch",
    colors: {
      first: "#411aff",
      middle: "#e936b0",
      last: "#ef2f5e",
    },
  },
  {
    id: 2,
    src: "https://t4.bcbits.com/stream/a5479d98e095272637e742bd417de730/mp3-128/1987304360?p=0&ts=1652090606&t=cb4e9beca7b3588a4a172621da203d2bd40b82d3&token=1652090606_1bd578e220091a5a2a43e5c49c05f8895e4e649f",
    artist: "Antoni Maiovvi",
    title: "Valencia Forever",
    colors: {
      first: "#0C24FE",
      middle: "#00FF01",
      last: "#FFBF00",
    },
  },
];
