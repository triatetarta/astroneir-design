import Image from "next/image";
import SpinningEmoji from "./SpinningEmoji";
import Title from "./Title";
import { stickersData } from "../../constants/data";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

const Showcase = () => {
  const [stickers, setStickers] = useState(undefined);
  const [title, setTitle] = useState("Bio");
  const [hovered, setHovered] = useState(false);
  const [stickerIndex, setStickerIndex] = useState(null);

  const eyeRef = useRef(null);

  const dispatch = useDispatch();

  const x = useMotionValue(250);
  const y = useMotionValue(150);

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

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEye = (e) => {
    const ref = eyeRef.current.getBoundingClientRect();

    let eyeX = ref.left + eyeRef.current.clientWidth / 2;
    let eyeY = ref.top + eyeRef.current.clientHeight / 2;

    let x = e.clientX;
    let y = e.clientY;

    let radian = Math.atan2(x - eyeX, y - eyeY);
    let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

    eyeRef.current.style.transform = "rotate(" + rotationDegrees + "deg)";
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

    x.set(250);
    y.set(150);
  };

  const getStyles = (stckr) => {
    if (stckr === "Bio") {
      return "self-center w-[300px] h-[400px]";
    }
    if (stckr === "Works") {
      return "self-end w-[300px] h-[400px]";
    }
    if (stckr === "Music") {
      return "self-start w-[300px] h-[400px]";
    }
    if (stckr === "Contact") {
      return "self-end w-[300px] h-[400px]";
    }
  };

  return (
    <div
      onMouseMove={handleMouseEye}
      className='flex flex-col relative h-[calc(100vh-8.5rem)] overflow-y-hidden'
    >
      <div className='w-full h-full relative flex flex-row items-center justify-center'>
        {stickers?.map((sticker, index) => {
          const { id, image, priority, title } = sticker;

          return (
            <motion.div
              onMouseEnter={(e) => handleMouseEnter(e, index, sticker)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouse}
              key={id}
              className={`${getStyles(title)} flex-1 relative`}
              style={{
                rotateX: stickerIndex === index && rotateX,
                rotateY: stickerIndex === index && rotateY,
              }}
            >
              <Image
                priority={priority}
                src={image.src}
                objectFit='contain'
                layout='fill'
                quality={100}
                // width={image.width}
                // height={image.height}
              />
            </motion.div>
          );
        })}
      </div>
      <div className='flex items-start justify-between w-full'>
        <SpinningEmoji eyeRef={eyeRef} />
        <Title title={title} hovered={hovered} />
        <div></div>
        <div className='w-[300px] h-full flex items-center'>
          <p className='text-white'>
            Anestis Neiros is a graphic designer, illustrator. He is also a Dj,
            known as Kinetta. Commitions for Packaging, Branding, Posters, Movie
            Posters, Illustrations, Websites
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
