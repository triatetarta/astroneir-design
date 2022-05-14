import unicorn from "../public/assets/unicorn.png";
import bottle from "../public/assets/bottle.png";
import rainbow from "../public/assets/rainbow.png";
import flower from "../public/assets/flower.png";
import Link from "../public/assets/link.svg";

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
    src: "/audio/hissarlik-daily-life.mp3",
    artist: "Hissarlik",
    title: "Daily Life",
    colors: {
      first: "#411aff",
      middle: "#e936b0",
      last: "#ef2f5e",
    },
  },
  {
    id: 2,
    src: "/audio/bufi-africa-latina-maya-danon-remix.mp3",
    artist: "Bufi",
    title: "Africa Latina (Maya Danon Remix)",
    colors: {
      first: "#0C24FE",
      middle: "#00FF01",
      last: "#FFBF00",
    },
  },
];

export const emojiSad = "./assets/emojisad.svg";
export const emojiHappy = "./assets/emojihappy.svg";

export const worksData = [
  {
    id: 1,
    title: "Branding",
    images: [],
  },
  {
    id: 2,
    title: "Logos",
    images: [
      {
        id: 1,
        project: "tzintzer",
        src: "./assets/works/logos/tzintzer.jpg",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
      {
        id: 2,
        project: "happy art",
        src: "./assets/works/logos/happyart.jpg",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
      {
        id: 3,
        project: "plissken",
        src: "./assets/works/logos/plissken.jpg",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
      {
        id: 4,
        project: "kourelou",
        src: "./assets/works/logos/kourelou.png",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
      {
        id: 5,
        project: "twc",
        src: "./assets/works/logos/twc.jpg",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
      {
        id: 6,
        project: "board games cafe",
        src: "./assets/works/logos/board.jpg",
        urlIcon: <Link className='h-full w-full' />,
        url: "https://www.google.com",
      },
    ],
  },
  { id: 3, title: "Music Posters", images: [] },
  { id: 4, title: "Movie Posters", images: [] },
  { id: 5, title: "Illustrations", images: [] },
  { id: 6, title: "Websites", images: [] },
  { id: 7, title: "Google Ads", images: [] },
  { id: 8, title: "Packaging", images: [] },
  { id: 9, title: "Video Editing", images: [] },
  { id: 10, title: "Movie Trailers", images: [] },
];
