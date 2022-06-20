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

export const ease = [0.6, 0.05, -0.01, 0.9];
// export const ease = [0.6, 0.01, -0.05, 0.95];
// export const ease = [0.43, 0.13, 0.23, 0.96];

export const whileTapScale = 0.9;

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
    id: uuidv4(),
    title: "Branding",
    images: [
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
    id: uuidv4(),
    title: "Logos",
    images: [
      {
        id: uuidv4(),
        project: "tzintzer",
        src: "/assets/works/logos/tzintzer.jpg",
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
    ],
  },
  {
    id: uuidv4(),
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
        project: "nils frahm",
        src: "/assets/works/music-posters/nilsfrahm-02.jpg",
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
        project: "carnal",
        src: "/assets/works/music-posters/carnal2.jpg",
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
        project: "Lubomyr Melnyk",
        src: "/assets/works/music-posters/lubomyr-melnyk.png",
      },
      {
        id: uuidv4(),
        project: "Christian Loffler",
        src: "/assets/works/music-posters/christian-loffler.png",
      },
      {
        id: uuidv4(),
        project: "Motorama",
        src: "/assets/works/music-posters/motorama.png",
      },
      {
        id: uuidv4(),
        project: "Parra For Cuva",
        src: "/assets/works/music-posters/parra-for-cuva.png",
      },
      {
        id: uuidv4(),
        project: "crust",
        src: "/assets/works/music-posters/Crust.jpg",
      },
      {
        id: uuidv4(),
        project: "crust",
        src: "/assets/works/music-posters/Crust2.jpg",
      },
      {
        id: uuidv4(),
        project: "the boy",
        src: "/assets/works/music-posters/theboy.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Album Covers",
    images: [
      {
        id: uuidv4(),
        project: "elect 07",
        src: "/assets/works/album-covers/elect-07.jpg",
      },
      {
        id: uuidv4(),
        project: "jholie",
        src: "/assets/works/album-covers/Jholie.jpg",
      },
      {
        id: uuidv4(),
        project: "jholie",
        src: "/assets/works/album-covers/Jholie2.jpg",
      },
      {
        id: uuidv4(),
        project: "melorman",
        src: "/assets/works/album-covers/Melorman.jpg",
      },
      {
        id: uuidv4(),
        project: "technoworks",
        src: "/assets/works/album-covers/Technoworks.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Book Covers",
    images: [
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/1.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/2.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/3.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/4.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/5.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/6.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/7.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/8.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/9.png",
      },
      {
        id: uuidv4(),
        project: "20.000 Leagues Under The Sea",
        src: "/assets/works/book-covers/10.png",
      },
    ],
  },
  {
    id: uuidv4(),
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
      {
        id: uuidv4(),
        project: "abyssal zone",
        src: "/assets/works/movie-posters/abyssal-zone.jpg",
      },
      {
        id: uuidv4(),
        project: "the man from earth",
        src: "/assets/works/movie-posters/the-man-from-earth.jpg",
      },
      {
        id: uuidv4(),
        project: "fargo",
        src: "/assets/works/movie-posters/fargo.png",
      },
      {
        id: uuidv4(),
        project: "the distance between us and the sky",
        src: "/assets/works/movie-posters/thedistancebetween.jpg",
      },
      {
        id: uuidv4(),
        project: "the x files",
        src: "/assets/works/movie-posters/thexfiles.png",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Festivals",
    images: [
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-01.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-02.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-03.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-04.png",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-05.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-06.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-07.jpg",
      },
      {
        id: uuidv4(),
        project: "plissken",
        src: "/assets/works/festivals/plissken-08.png",
      },
      {
        id: uuidv4(),
        project: "blackablackablacka",
        src: "/assets/works/festivals/blackablackablacka-01.jpg",
      },
      {
        id: uuidv4(),
        project: "blackablackablacka",
        src: "/assets/works/festivals/blackablackablacka-02.jpg",
      },
      {
        id: uuidv4(),
        project: "blackablackablacka",
        src: "/assets/works/festivals/blackablackablacka-03.jpg",
      },
      {
        id: uuidv4(),
        project: "blackablackablacka",
        src: "/assets/works/festivals/blackablackablacka-04.jpg",
      },
      {
        id: uuidv4(),
        project: "fade radio",
        src: "/assets/works/festivals/poster-web.webp",
      },
    ],
  },
  {
    id: uuidv4(),
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
      {
        id: uuidv4(),
        project: "building",
        src: "/assets/works/illustrations/building-01.png",
      },
      {
        id: uuidv4(),
        project: "building",
        src: "/assets/works/illustrations/jap-01.png",
      },
      {
        id: uuidv4(),
        project: "catpocalypse",
        src: "/assets/works/illustrations/catpocalypse-01.png",
      },
      {
        id: uuidv4(),
        project: "mon",
        src: "/assets/works/illustrations/mon-01.png",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Collage Art",
    images: [
      {
        id: uuidv4(),
        project: "field",
        src: "/assets/works/collage-art/field.jpg",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Posters",
    images: [
      {
        id: uuidv4(),
        project: "Athens Towers",
        src: "/assets/works/posters/athens-towers-01.png",
      },
      {
        id: uuidv4(),
        project: "Greek Islands",
        src: "/assets/works/posters/greek-islands-01.png",
      },
      {
        id: uuidv4(),
        project: "Hilton",
        src: "/assets/works/posters/hilton-01.png",
      },
      {
        id: uuidv4(),
        project: "general",
        src: "/assets/works/posters/general.jpg",
      },
      {
        id: uuidv4(),
        project: "general",
        src: "/assets/works/posters/general2.jpg",
      },
      {
        id: uuidv4(),
        project: "general",
        src: "/assets/works/posters/general3.gif",
      },
    ],
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
        project: "zita shoes",
        src: "/assets/works/packaging/shoes1.png",
      },
    ],
  },
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
        title: "Cinobo Cow Teaser",
        src: "/videos/cinobo-cow-teaser.mp4",
        thumb: "/videos/agelada.png",
        size: {
          width: 640,
          height: 360,
        },
      },
      {
        id: uuidv4(),
        title: "Cinobo February",
        src: "/videos/cinobo-feb.mp4",
        thumb: "/videos/cin-feb.png",
        size: {
          width: 640,
          height: 360,
        },
      },
      {
        id: uuidv4(),
        title: "Cinobo May",
        src: "/videos/cinobo-may.mp4",
        thumb: "/videos/cin-may.png",
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
