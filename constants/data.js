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

export const socialMediaData = [
  {
    id: 1,
    icon: "/assets/social/tiktok.svg",
    title: "tik tok",
    link: "https://www.tiktok.com/@astroneir.design",
  },
  {
    id: 2,
    icon: "/assets/social/facebook.svg",
    title: "facebook",
    link: "https://www.facebook.com/anestits",
  },
  {
    id: 3,
    icon: "/assets/social/instagram.svg",
    title: "instagram",
    link: "https://www.instagram.com/astroneir_design",
  },
  {
    id: 4,
    icon: "/assets/social/soundcloud.svg",
    title: "soundcloud",
    link: "https://soundcloud.com/kinetta83",
  },
];

export const worksData = [
  {
    id: 1,
    title: "Branding",
    images: [
      {
        id: 1,
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-logos.jpg",
      },
      {
        id: 2,
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-flag.jpg",
      },
      {
        id: 3,
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-track.jpg",
      },
      {
        id: 4,
        project: "kamelot",
        src: "/assets/works/branding/Menu-02.png",
      },
      {
        id: 5,
        project: "tzintzer",
        src: "/assets/works/branding/katalogos3.png",
      },
      {
        id: 6,
        project: "tzintzer",
        src: "/assets/works/branding/katalogos7.png",
      },
      {
        id: 7,
        project: "tzintzer",
        src: "/assets/works/branding/menwc.jpg",
      },
      {
        id: 8,
        project: "tzintzer",
        src: "/assets/works/branding/womenwc.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Logos",
    images: [
      {
        id: 1,
        project: "tzintzer",
        src: "/assets/works/logos/tzintzer.png",
      },
      {
        id: 2,
        project: "happy art",
        src: "/assets/works/logos/happyart.png",
      },
      {
        id: 3,
        project: "aesthetics",
        src: "/assets/works/logos/aesthetics.png",
      },
      {
        id: 4,
        project: "kourelou",
        src: "/assets/works/logos/kourelou.png",
      },
      {
        id: 5,
        project: "yolo",
        src: "/assets/works/logos/yolo.png",
      },
      {
        id: 6,
        project: "blanca negra",
        src: "/assets/works/logos/blancanegra.png",
      },
      {
        id: 7,
        project: "blue koala",
        src: "/assets/works/logos/bluekoala.png",
      },
      {
        id: 8,
        project: "asaminthos",
        src: "/assets/works/logos/asaminthos.png",
      },
    ],
  },
  {
    id: 3,
    title: "Music Posters",
    images: [
      {
        id: 1,
        project: "lovell",
        src: "/assets/works/music-posters/lovell.jpg",
      },
      {
        id: 2,
        project: "nils frahm",
        src: "/assets/works/music-posters/nilsfrahm.jpg",
      },
      {
        id: 3,
        project: "melorman",
        src: "/assets/works/music-posters/melorman.jpg",
      },
      {
        id: 4,
        project: "algiers",
        src: "/assets/works/music-posters/algiers.jpg",
      },
      {
        id: 5,
        project: "mary's flower superhead",
        src: "/assets/works/music-posters/marysflower.jpg",
      },
      {
        id: 6,
        project: "mood",
        src: "/assets/works/music-posters/mood1.jpg",
      },
      {
        id: 7,
        project: "mood",
        src: "/assets/works/music-posters/mood2.jpg",
      },
      {
        id: 8,
        project: "midori takada",
        src: "/assets/works/music-posters/midoritakada.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Movie Posters",
    images: [
      {
        id: 1,
        project: "zero star hotel",
        src: "/assets/works/movie-posters/zerostarhotel.jpg",
      },
      {
        id: 2,
        project: "the distance between us and the stars",
        src: "/assets/works/movie-posters/distance.jpg",
      },
      {
        id: 3,
        project: "parasite",
        src: "/assets/works/movie-posters/parasite.jpg",
      },
      {
        id: 4,
        project: "28 days later",
        src: "/assets/works/movie-posters/dayslater.png",
      },
      {
        id: 5,
        project: "sundays",
        src: "/assets/works/movie-posters/sundays.jpg",
      },
      {
        id: 6,
        project: "midsommar",
        src: "/assets/works/movie-posters/midsommar.png",
      },
      {
        id: 7,
        project: "mnimes fonon",
        src: "/assets/works/movie-posters/mnimes.jpg",
      },
      {
        id: 8,
        project: "the leftovers",
        src: "/assets/works/movie-posters/leftovers.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Illustrations",
    images: [
      {
        id: 1,
        project: "first",
        src: "/assets/works/illustrations/first.jpg",
      },
      {
        id: 2,
        project: "second",
        src: "/assets/works/illustrations/second.jpg",
      },
      {
        id: 3,
        project: "third",
        src: "/assets/works/illustrations/third.jpg",
      },
      {
        id: 4,
        project: "fourth",
        src: "/assets/works/illustrations/fourth.jpg",
      },
      {
        id: 5,
        project: "fifth",
        src: "/assets/works/illustrations/fifth.jpg",
      },
      {
        id: 6,
        project: "sixth",
        src: "/assets/works/illustrations/sixth.jpg",
      },
      {
        id: 7,
        project: "seventh",
        src: "/assets/works/illustrations/seventh.jpg",
      },
      {
        id: 8,
        project: "eight",
        src: "/assets/works/illustrations/eight.jpg",
      },
    ],
  },
  { id: 6, title: "Websites", images: [] },
  { id: 7, title: "Google Ads", images: [] },
  { id: 8, title: "Packaging", images: [] },
  { id: 9, title: "Video Editing", images: [] },
  { id: 10, title: "Movie Trailers", images: [] },
  { id: 11, title: "T Shirts", images: [] },
];
