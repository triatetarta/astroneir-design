import Image from "next/image";
import { SpinningEmoji } from "../Aesthetics";
import Title from "./Title";
import { stickersData } from "../../constants/data";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

const Showcase = () => {
  const [stickers, setStickers] = useState(undefined);
  const [title, setTitle] = useState("Bio");
  const [hovered, setHovered] = useState(false);
  const [stickerIndex, setStickerIndex] = useState(null);

  const dispatch = useDispatch();

  const x = useMotionValue(250);
  const y = useMotionValue(150);

  const hoverState = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [0, 300], [-15, 15]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });
  const rotateY = useSpring(useTransform(x, [0, 500], [15, -15]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    hoverState.set(1);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  useEffect(() => {
    setStickers(stickersData);
  }, []);

  const handleMouseEnter = (e, index, sticker) => {
    dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }));
    setStickerIndex(index);
    setTitle(sticker.title);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    dispatch(setCursor({ cursorContent: "🙁", cursorVariant: "default" }));
    setStickerIndex(null);
    setTitle("Bio");
    setHovered(false);

    hoverState.set(0);
    x.set(250);
    y.set(150);
  };

  const getStyles = (stckr) => {
    if (stckr === "Bio") {
      return "self-start w-full";
    }
    if (stckr === "Works") {
      return "-rotate-[25deg] self-end";
    }
    if (stckr === "Music") {
      return "rotate-[10deg] self-start";
    }
    if (stckr === "Contact") {
      return "self-end";
    }
  };

  return (
    <div className='flex flex-col relative h-[calc(100vh-136px)] overflow-y-hidden'>
      <div className='w-full h-full relative flex flex-row items-center justify-center'>
        {stickers?.map((sticker, index) => {
          const { id, image, priority, title } = sticker;

          return (
            <motion.div
              onMouseEnter={(e) => handleMouseEnter(e, index, sticker)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouse}
              key={id}
              className={`${getStyles(title)} flex-1`}
              style={{
                rotateX: stickerIndex === index && rotateX,
                rotateY: stickerIndex === index && rotateY,
              }}
            >
              <Image
                priority={priority}
                src={image.src}
                objectFit='contain'
                layout='responsive'
                width={image.width}
                height={image.height}
              />
            </motion.div>
          );
        })}
      </div>
      <div className='flex items-center w-full'>
        <SpinningEmoji />
        <Title title={title} hovered={hovered} />
      </div>
    </div>
  );
};

export default Showcase;
