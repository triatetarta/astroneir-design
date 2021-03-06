import Image from "next/image";
import { useRouter } from "next/router";
import SpinningEmoji from "./SpinningEmoji";
import Title from "./Title";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import {
  emojiHappy,
  emojiSad,
  socialMediaData,
  stickersData,
  whileTapScale,
} from "../../constants/data";
import { openBio } from "../Bio/reducer";
import { openContact } from "../Contact/reducer";
import ArrowRight from "../../public/assets/arrow.svg";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [stickers, setStickers] = useState(undefined);
  const [title, setTitle] = useState("Bio");
  const [hovered, setHovered] = useState(false);
  const [stickerIndex, setStickerIndex] = useState(null);
  const [socialMedia, setSocialMedia] = useState([]);

  const eyeRef = useRef(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const x = useMotionValue(250);
  const y = useMotionValue(150);

  const rotateX = useSpring(useTransform(y, [0, 300], [-20, 20]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });
  const rotateY = useSpring(useTransform(x, [0, 500], [20, -20]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEye = (e) => {
    const rect = eyeRef.current.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // const xAxis = x > width / 2 ? x / 100 : (x / 15) * -1;
    // const xAxis = x > width / 2 ? x / 100 : (x / 100) * -1;
    const xAxis = x / 100;
    const yAxis = y / 100;

    // eyeRef.current.style.transform = `translate(${xAxis}px)`;
    eyeRef.current.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  };

  useEffect(() => {
    setStickers(stickersData);
    setSocialMedia(socialMediaData);
  }, []);

  useEffect(() => {
    if (isMobile && stickerIndex === null) {
      setStickerIndex(0);
    }
  }, [isMobile, stickerIndex]);

  useEffect(() => {
    if (stickers === undefined) return;
    const lastIndex = stickers.length - 1;
    if (stickerIndex < 0) {
      setStickerIndex(lastIndex);
    }
    if (stickerIndex > lastIndex) {
      setStickerIndex(0);
    }
  }, [stickers, stickerIndex]);

  const handleMouseEnter = (e, index, sticker) => {
    dispatch(setCursor({ cursorContent: emojiHappy, cursorVariant: "smile" }));
    setStickerIndex(index);
    setTitle(sticker.title);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    dispatch(setCursor({ cursorContent: emojiSad, cursorVariant: "default" }));
    setStickerIndex(null);
    setTitle("Bio");
    setHovered(false);

    x.set(250);
    y.set(150);
  };

  const getStyles = (stckr) => {
    if (stckr === "Bio") {
      return "self-center md:w-[300px] md:h-[400px] w-full h-2/3";
    }
    if (stckr === "Works") {
      return "self-center md:self-end md:w-[300px] md:h-[400px] w-full h-2/3";
    }
    if (stckr === "Music") {
      return "self-center md:self-start md:w-[300px] md:h-[400px] w-full h-2/3";
    }
    if (stckr === "Contact") {
      return "self-center md:self-end md:w-[300px] md:h-[400px] w-full h-2/3";
    }
  };

  const onClickHandler = (title) => {
    if (title === "Bio") {
      dispatch(openBio());
    }
    if (title === "Works") {
      router.push("/works");
    }
    if (title === "Music") {
      router.push("/music");
    }
    if (title === "Contact") {
      dispatch(openContact());
    }
  };

  return (
    <div
      onMouseMove={handleMouseEye}
      className='flex flex-col relative h-[calc(100vh-8.5rem)] overflow-y-hidden'
    >
      <div className='w-full h-full relative flex md:flex-row md:items-center md:justify-center flex-col items-center justify-between'>
        <div className='h-3/4 md:h-full w-full md:flex md:flex-row md:items-center md:justify-center relative'>
          {stickers?.map((sticker, index) => {
            const { id, image, priority, title } = sticker;

            let opacity = 0;
            let zIndex = 0;

            if (stickerIndex === index) {
              (opacity = 1), (zIndex = 1);
            }

            if (
              stickerIndex === index - 1 ||
              (index === 0 && stickerIndex === stickers.length - 1)
            ) {
              (opacity = 0), (zIndex = 0);
            }

            return (
              <motion.div
                whileTap={{ scale: whileTapScale }}
                onMouseEnter={(e) => handleMouseEnter(e, index, sticker)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouse}
                key={id}
                initial={{ opacity: isMobile ? opacity : 1, zIndex }}
                animate={{ opacity: isMobile ? opacity : 1, zIndex }}
                className={`md:flex-1 md:relative absolute top-[25%] md:top-0  md:left-0 md:transform-none ${getStyles(
                  title
                )}`}
                style={{
                  rotateX: stickerIndex === index && rotateX,
                  rotateY: stickerIndex === index && rotateY,
                }}
              >
                <Image
                  onClick={() => onClickHandler(title)}
                  priority={priority}
                  src={image.src}
                  objectFit='contain'
                  layout='fill'
                  quality={100}
                />
              </motion.div>
            );
          })}
        </div>

        <div className='md:hidden flex items-center justify-center space-x-4 flex-1'>
          <motion.div
            initial={{ rotate: -90 }}
            whileTap={{ scale: whileTapScale }}
            onClick={() => setStickerIndex(stickerIndex + 1)}
            className='-rotate-90 w-10 h-10'
          >
            <ArrowRight />
          </motion.div>
          <motion.div
            initial={{ rotate: 90 }}
            whileTap={{ scale: whileTapScale }}
            onClick={() => setStickerIndex(stickerIndex - 1)}
            className='rotate-90 w-10 h-10'
          >
            <ArrowRight />
          </motion.div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <SpinningEmoji eyeRef={eyeRef} />
        <Title title={title} hovered={hovered} />
        <div></div>
        <div className='h-full flex flex-col lg:flex-row  lg:items-center lg:space-x-4 justify-center items-end'>
          <div className='flex space-x-2 lg:mt-4'>
            {socialMedia?.map((media) => {
              return (
                <motion.a
                  whileTap={{ scale: whileTapScale }}
                  key={media.id}
                  target='_blank'
                  href={media.link}
                  rel='noopener noreferrer'
                  className='h-5 w-5 md:h-6 md:w-6'
                  onMouseEnter={() =>
                    dispatch(
                      setCursor({
                        cursorContent: emojiHappy,
                        cursorVariant: "smile",
                      })
                    )
                  }
                  onMouseLeave={() =>
                    dispatch(
                      setCursor({
                        cursorContent: emojiSad,
                        cursorVariant: "default",
                      })
                    )
                  }
                >
                  <Image
                    src={media.icon}
                    alt={media.title}
                    width={24}
                    height={24}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
