import unicorn from "../public/assets/unicorn.png";
import bottle from "../public/assets/bottle.png";
import rainbow from "../public/assets/rainbow.png";
import flower from "../public/assets/flower.png";

export const transition = {
  type: "spring",
  stiffness: 280,
  damping: 30,
};

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
export const imagePlaceholder = "/assets/placeholder.png";

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
        src: "/assets/works/branding/detsaridis-logos.webp",
      },
      {
        id: 2,
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-flag.webp",
      },
      {
        id: 3,
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-track.webp",
      },
      {
        id: 4,
        project: "kamelot",
        src: "/assets/works/branding/menu2.webp",
      },
      {
        id: 5,
        project: "tzintzer",
        src: "/assets/works/branding/katalogos3.webp",
      },
      {
        id: 6,
        project: "tzintzer",
        src: "/assets/works/branding/katalogos7.webp",
      },
      {
        id: 7,
        project: "tzintzer",
        src: "/assets/works/branding/menwc.webp",
      },
      {
        id: 8,
        project: "tzintzer",
        src: "/assets/works/branding/womenwc.webp",
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
        src: "/assets/works/logos/tzintzer.webp",
      },
      {
        id: 2,
        project: "happy art",
        src: "/assets/works/logos/happyart.webp",
      },
      {
        id: 3,
        project: "aesthetics",
        src: "/assets/works/logos/aesthetics.webp",
      },
      {
        id: 4,
        project: "kourelou",
        src: "/assets/works/logos/kourelou.webp",
      },
      {
        id: 5,
        project: "yolo",
        src: "/assets/works/logos/yolo.webp",
      },
      {
        id: 6,
        project: "blanca negra",
        src: "/assets/works/logos/blancanegra.webp",
      },
      {
        id: 7,
        project: "blue koala",
        src: "/assets/works/logos/bluekoala.webp",
      },
      {
        id: 8,
        project: "asaminthos",
        src: "/assets/works/logos/asaminthos.webp",
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
        src: "/assets/works/music-posters/lovell.webp",
      },
      {
        id: 2,
        project: "nils frahm",
        src: "/assets/works/music-posters/nilsfrahm.webp",
      },
      {
        id: 3,
        project: "melorman",
        src: "/assets/works/music-posters/melorman.webp",
      },
      {
        id: 4,
        project: "algiers",
        src: "/assets/works/music-posters/algiers.webp",
      },
      {
        id: 5,
        project: "mary's flower superhead",
        src: "/assets/works/music-posters/marysflower.webp",
      },
      {
        id: 6,
        project: "mood",
        src: "/assets/works/music-posters/mood1.webp",
      },
      {
        id: 7,
        project: "mood",
        src: "/assets/works/music-posters/mood2.webp",
      },
      {
        id: 8,
        project: "midori takada",
        src: "/assets/works/music-posters/midoritakada.webp",
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
        src: "/assets/works/movie-posters/zerostarhotel.webp",
      },
      {
        id: 2,
        project: "the distance between us and the stars",
        src: "/assets/works/movie-posters/distance.webp",
      },
      {
        id: 3,
        project: "parasite",
        src: "/assets/works/movie-posters/parasite.webp",
      },
      {
        id: 4,
        project: "28 days later",
        src: "/assets/works/movie-posters/dayslater.webp",
      },
      {
        id: 5,
        project: "sundays",
        src: "/assets/works/movie-posters/sundays.webp",
      },
      {
        id: 6,
        project: "midsommar",
        src: "/assets/works/movie-posters/midsommar.webp",
      },
      {
        id: 7,
        project: "mnimes fonon",
        src: "/assets/works/movie-posters/mnimes.webp",
      },
      {
        id: 8,
        project: "the leftovers",
        src: "/assets/works/movie-posters/leftovers.webp",
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
        src: "/assets/works/illustrations/first.webp",
      },
      {
        id: 2,
        project: "second",
        src: "/assets/works/illustrations/second.webp",
      },
      {
        id: 3,
        project: "third",
        src: "/assets/works/illustrations/third.webp",
      },
      {
        id: 4,
        project: "fourth",
        src: "/assets/works/illustrations/fourth.webp",
      },
      {
        id: 5,
        project: "fifth",
        src: "/assets/works/illustrations/fifth.webp",
      },
      {
        id: 6,
        project: "sixth",
        src: "/assets/works/illustrations/sixth.webp",
      },
      {
        id: 7,
        project: "seventh",
        src: "/assets/works/illustrations/seventh.webp",
      },
      {
        id: 8,
        project: "eight",
        src: "/assets/works/illustrations/eight.webp",
      },
    ],
  },
  {
    id: 6,
    title: "Websites",
    images: [
      {
        id: 1,
        project: "astroneir",
        src: "/assets/works/websites/astroneir1.webp",
      },
      {
        id: 2,
        project: "astroneir",
        src: "/assets/works/websites/astroneir2.webp",
      },
      {
        id: 3,
        project: "joelene",
        src: "/assets/works/websites/joelene1.webp",
      },
      {
        id: 4,
        project: "ikos",
        src: "/assets/works/websites/ikos1.webp",
      },
      {
        id: 5,
        project: "ikos",
        src: "/assets/works/websites/ikos2.webp",
      },
      {
        id: 6,
        project: "three quarters",
        src: "/assets/works/websites/threequarters1.webp",
      },
      {
        id: 7,
        project: "three quarters",
        src: "/assets/works/websites/threequarters2.webp",
      },
      {
        id: 8,
        project: "three quarters",
        src: "/assets/works/websites/threequarters3.webp",
      },
    ],
  },
  { id: 7, title: "Google Ads", images: [] },
  { id: 8, title: "Packaging", images: [] },
  { id: 9, title: "Video Editing", images: [] },
  { id: 10, title: "Movie Trailers", images: [] },
  { id: 11, title: "T Shirts", images: [] },
];
