import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { emojiHappy, emojiSad, transition } from "../../constants/data";
import ArrowLeft from "../../public/assets/arrows/arrowLeft.svg";
import ArrowRight from "../../public/assets/arrows/arrowRight.svg";
import CloseIcon from "../../public/assets/xWhite.svg";
import { setCursor } from "../Cursor/reducer";
import { useDispatch } from "react-redux";

const Gallery = ({ images, selImageIndex, setOpenGallery }) => {
  const [index, setIndex] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setIndex(selImageIndex);
  }, []);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [images, index]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='gallery fixed top-0 right-0 bottom-0 left-0 bg-black/90 z-30 select-none pointer-events-none'
      >
        <div
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
          onClick={() => setOpenGallery(false)}
          className='w-14 h-14 ml-auto py-4 px-4 flex items-center justify-center pointer-events-auto z-40'
        >
          <CloseIcon className='w-full h-full' />
        </div>
        <div className='relative h-full w-full mx-auto '>
          <div
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
            className='w-8 h-8 absolute top-1/2 left-2 md:left-4 pointer-events-auto'
            onClick={() => setIndex(index - 1)}
          >
            <ArrowLeft />
          </div>

          <div
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
            className='w-8 h-8 absolute top-1/2 right-2 md:right-4 pointer-events-auto'
            onClick={() => setIndex(index + 1)}
          >
            <ArrowRight />
          </div>

          {images?.map((image, imageIndex) => {
            let positionX = "200%";
            let positionY = "-50%";
            let zIndex = 0;
            let opacity = 0;

            if (imageIndex === index) {
              (positionX = "-50%"),
                (positionY = "-50%"),
                (zIndex = 1),
                (opacity = 1);
            }

            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === images.length - 1)
            ) {
              (positionX = "-200%"),
                (positionY = "-50%"),
                (zIndex = 0),
                (opacity = 0);
            }

            return (
              <motion.div
                drag='x'
                onDragEnd={(_, { offset }) => {
                  const { x } = offset;

                  if (x > 30) {
                    setIndex(index - 1);
                  } else if (x < -30) {
                    setIndex(index + 1);
                  }
                }}
                key={image.id}
                initial={{ x: positionX, y: positionY, zIndex, opacity }}
                animate={{
                  x: positionX,
                  y: positionY,
                  zIndex,
                  opacity,
                }}
                transition={transition}
                className='w-3/4 h-3/4 overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-auto z-40'
              >
                <Image
                  className='select-none pointer-events-none'
                  src={image.src}
                  layout='fill'
                  objectFit='contain'
                  quality={100}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
