import { v4 as uuidv4 } from "uuid";
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
        id: uuidv4(),
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-logos.jpg",
      },
      {
        id: uuidv4(),
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-flag.jpg",
      },
      {
        id: uuidv4(),
        project: "detsaridis",
        src: "/assets/works/branding/detsaridis-track.jpg",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu1.png",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu2.png",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu3.png",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu4.png",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu5.png",
      },
      {
        id: uuidv4(),
        project: "camelot",
        src: "/assets/works/branding/menu6.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos2.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos3.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos4.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos5.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos6.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/katalogos7.png",
      },
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/branding/menwc.jpg",
      },
      {
        id: uuidv4(),
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
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/logos/tzintzer.jpg",
      },
      {
        id: uuidv4(),
        project: "happy art",
        src: "/assets/works/logos/happyart.jpg",
      },
      {
        id: uuidv4(),
        project: "aesthetics",
        src: "/assets/works/logos/aesthetics.png",
      },
      {
        id: uuidv4(),
        project: "kourelou",
        src: "/assets/works/logos/kourelou.png",
      },
      {
        id: uuidv4(),
        project: "yolo",
        src: "/assets/works/logos/yolo.png",
      },
      {
        id: uuidv4(),
        project: "blanca negra",
        src: "/assets/works/logos/blancanegra.webp",
      },
      {
        id: uuidv4(),
        project: "blue koala",
        src: "/assets/works/logos/bluekoala.webp",
      },
      {
        id: uuidv4(),
        project: "asaminthos",
        src: "/assets/works/logos/asaminthos.webp",
      },
      {
        id: uuidv4(),
        project: "work venture",
        src: "/assets/works/logos/workventure.jpg",
      },
      {
        id: uuidv4(),
        project: "twc",
        src: "/assets/works/logos/twc.jpg",
      },
      {
        id: uuidv4(),
        project: "board games cafe",
        src: "/assets/works/logos/boardgamecafe.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Music Posters",
    images: [
      {
        id: uuidv4(),
        project: "lovell",
        src: "/assets/works/music-posters/lovell.webp",
      },
      {
        id: uuidv4(),
        project: "nils frahm",
        src: "/assets/works/music-posters/nilsfrahm.webp",
      },
      {
        id: uuidv4(),
        project: "melorman",
        src: "/assets/works/music-posters/melorman.webp",
      },
      {
        id: uuidv4(),
        project: "algiers",
        src: "/assets/works/music-posters/algiers.webp",
      },
      {
        id: uuidv4(),
        project: "mary's flower superhead",
        src: "/assets/works/music-posters/marysflower.webp",
      },
      {
        id: uuidv4(),
        project: "mood",
        src: "/assets/works/music-posters/mood1.webp",
      },
      {
        id: uuidv4(),
        project: "mood",
        src: "/assets/works/music-posters/mood2.webp",
      },
      {
        id: uuidv4(),
        project: "midori takada",
        src: "/assets/works/music-posters/midoritakada.webp",
      },
      {
        id: uuidv4(),
        project: "carnal",
        src: "/assets/works/music-posters/carnal.webp",
      },
      {
        id: uuidv4(),
        project: "keep shelly in athens",
        src: "/assets/works/music-posters/keepshelly.webp",
      },
      {
        id: uuidv4(),
        project: "lovell",
        src: "/assets/works/music-posters/lovell2.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-1.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-2.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-3.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-4.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-5.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-6.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-7.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken17-8.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken19-1.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken19-2.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken19-3.webp",
      },
      {
        id: uuidv4(),
        project: "plissken festival",
        src: "/assets/works/music-posters/plissken19-4.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/facebook-event.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/facebook-logo.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/insta-facebook.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/insta-fb.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/insta-story.webp",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/music-posters/poster-web.webp",
      },
      {
        id: uuidv4(),
        project: "slap",
        src: "/assets/works/music-posters/slap.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Movie Posters",
    images: [
      {
        id: uuidv4(),
        project: "zero star hotel",
        src: "/assets/works/movie-posters/zerostarhotel.jpg",
      },
      {
        id: uuidv4(),
        project: "the distance between us and the stars",
        src: "/assets/works/movie-posters/distance.jpg",
      },
      {
        id: uuidv4(),
        project: "parasite",
        src: "/assets/works/movie-posters/parasite.jpg",
      },
      {
        id: uuidv4(),
        project: "28 days later",
        src: "/assets/works/movie-posters/dayslater.png",
      },
      {
        id: uuidv4(),
        project: "sundays",
        src: "/assets/works/movie-posters/sundays.jpg",
      },
      {
        id: uuidv4(),
        project: "midsommar",
        src: "/assets/works/movie-posters/midsommar.png",
      },
      {
        id: uuidv4(),
        project: "mnimes fonon",
        src: "/assets/works/movie-posters/mnimes.jpg",
      },
      {
        id: uuidv4(),
        project: "the leftovers",
        src: "/assets/works/movie-posters/leftovers.jpg",
      },
      {
        id: uuidv4(),
        project: "chiamami",
        src: "/assets/works/movie-posters/chiamami.jpg",
      },
      {
        id: uuidv4(),
        project: "the road",
        src: "/assets/works/movie-posters/theroad.png",
      },
    ],
  },
  {
    id: 5,
    title: "Illustrations",
    images: [
      {
        id: uuidv4(),
        project: "first",
        src: "/assets/works/illustrations/first.jpg",
      },
      {
        id: uuidv4(),
        project: "second",
        src: "/assets/works/illustrations/second.jpg",
      },
      {
        id: uuidv4(),
        project: "third",
        src: "/assets/works/illustrations/third.jpg",
      },
      {
        id: uuidv4(),
        project: "fourth",
        src: "/assets/works/illustrations/fourth.jpg",
      },
      {
        id: uuidv4(),
        project: "fifth",
        src: "/assets/works/illustrations/fifth.jpg",
      },
      {
        id: uuidv4(),
        project: "sixth",
        src: "/assets/works/illustrations/sixth.jpg",
      },
      {
        id: uuidv4(),
        project: "seventh",
        src: "/assets/works/illustrations/seventh.jpg",
      },
      {
        id: uuidv4(),
        project: "eight",
        src: "/assets/works/illustrations/eight.jpg",
      },
      {
        id: uuidv4(),
        project: "nine",
        src: "/assets/works/illustrations/ninth.jpg",
      },
      {
        id: uuidv4(),
        project: "ten",
        src: "/assets/works/illustrations/ten.png",
      },
      {
        id: uuidv4(),
        project: "eleven",
        src: "/assets/works/illustrations/eleven.png",
      },
    ],
  },
  {
    id: 6,
    title: "Websites",
    images: [
      {
        id: uuidv4(),
        project: "astroneir",
        src: "/assets/works/websites/astro1.png",
      },
      {
        id: uuidv4(),
        project: "astroneir",
        src: "/assets/works/websites/astro2.png",
      },
      {
        id: uuidv4(),
        project: "astroneir",
        src: "/assets/works/websites/astro3.png",
      },
      {
        id: uuidv4(),
        project: "joelene kylie",
        src: "/assets/works/websites/joelene1.png",
      },
      {
        id: uuidv4(),
        project: "joelene kylie",
        src: "/assets/works/websites/joelene2.png",
      },
      {
        id: uuidv4(),
        project: "joelene kylie",
        src: "/assets/works/websites/joelene3.png",
      },
      {
        id: uuidv4(),
        project: "ikos construction",
        src: "/assets/works/websites/ikos.png",
      },
      {
        id: uuidv4(),
        project: "ikos construction",
        src: "/assets/works/websites/ikos2.png",
      },
      {
        id: uuidv4(),
        project: "three quarters",
        src: "/assets/works/websites/three.png",
      },
      {
        id: uuidv4(),
        project: "three quarters",
        src: "/assets/works/websites/three2.png",
      },
      {
        id: uuidv4(),
        project: "three quarters",
        src: "/assets/works/websites/three3.png",
      },
    ],
  },
  {
    id: 7,
    title: "Google Ads",
    images: [
      {
        id: uuidv4(),
        project: "cinobo cannes",
        src: "/assets/works/googleads/cinobo1.jpg",
      },
      {
        id: uuidv4(),
        project: "cinobo cannes",
        src: "/assets/works/googleads/cinobo2.jpg",
      },
      {
        id: uuidv4(),
        project: "cinobo cannes",
        src: "/assets/works/googleads/cinobo3.jpg",
      },
      {
        id: uuidv4(),
        project: "cinobo horror",
        src: "/assets/works/googleads/cinobohorror1.jpg",
      },
      {
        id: uuidv4(),
        project: "cinobo horror",
        src: "/assets/works/googleads/cinobohorror2.jpg",
      },
      {
        id: uuidv4(),
        project: "cinobo horror",
        src: "/assets/works/googleads/cinobohorror3.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Packaging",
    images: [
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta2.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta3.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta4.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta5.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta6.jpg",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta7.jpg",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta8.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta9.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta10.png",
      },
      {
        id: uuidv4(),
        project: "elta",
        src: "/assets/works/packaging/elta11.png",
      },
      {
        id: uuidv4(),
        project: "saristi",
        src: "/assets/works/packaging/saristi1.jpg",
      },
      {
        id: uuidv4(),
        project: "saristi",
        src: "/assets/works/packaging/saristi2.jpg",
      },
      {
        id: uuidv4(),
        project: "saristi",
        src: "/assets/works/packaging/saristi3.jpg",
      },
      {
        id: uuidv4(),
        project: "saristi",
        src: "/assets/works/packaging/saristi4.jpg",
      },
      {
        id: uuidv4(),
        project: "pop market",
        src: "/assets/works/packaging/pop1.png",
      },
      {
        id: uuidv4(),
        project: "pop market",
        src: "/assets/works/packaging/pop2.png",
      },
      {
        id: uuidv4(),
        project: "pop market",
        src: "/assets/works/packaging/pop3.png",
      },
      {
        id: uuidv4(),
        project: "pop market",
        src: "/assets/works/packaging/pop4.webp",
      },
      {
        id: uuidv4(),
        project: "pop market",
        src: "/assets/works/packaging/pop5.png",
      },
      {
        id: uuidv4(),
        project: "vosinakis",
        src: "/assets/works/packaging/vosinakis1.jpg",
      },
      {
        id: uuidv4(),
        project: "vosinakis",
        src: "/assets/works/packaging/vosinakis2.png",
      },
      {
        id: uuidv4(),
        project: "vosinakis",
        src: "/assets/works/packaging/vosinakis3.png",
      },
      {
        id: uuidv4(),
        project: "vosinakis",
        src: "/assets/works/packaging/vosinakis4.png",
      },
      {
        id: uuidv4(),
        project: "zita shoes",
        src: "/assets/works/packaging/shoes1.png",
      },
      {
        id: uuidv4(),
        project: "gioumourtzina",
        src: "/assets/works/packaging/gioumou.webp",
      },
    ],
  },
  { id: 11, title: "T Shirts", images: [] },
];

export const videoData = [
  {
    id: uuidv4(),
    title: "Movie Trailers",
    videos: [
      {
        id: uuidv4(),
        title: "Abyssal Zone",
        src: "/videos/abyssal-zone.mp4",
        thumb: "/videos/abyssal-zone-thumb.png",
        size: {
          width: 640,
          height: 360,
        },
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Animations",
    videos: [
      {
        id: uuidv4(),
        title: "Ear T-Shirt Animation",
        src: "/videos/ear-t-shirt.mp4",
        thumb: "/videos/ear-thumb.png",
        size: {
          width: 300,
          height: 300,
        },
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Video Editing",
    videos: [
      {
        id: uuidv4(),
        title: "Cinobo Horror",
        src: "/videos/cinobo-horror.mp4",
        thumb: "/videos/cinobo-horror-thumb.png",
        size: {
          width: 640,
          height: 360,
        },
      },
      {
        id: uuidv4(),
        title: "Ear-Astroneir Design Colab",
        src: "/videos/ear-astroneir-design-colab.mp4",
        thumb: "/videos/ear-colab-thumb.png",
        size: {
          width: 300,
          height: 300,
        },
      },
    ],
  },
];
