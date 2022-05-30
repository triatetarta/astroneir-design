import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { emojiHappy, emojiSad, imagePlaceholder } from "../../constants/data";
import { setCursor } from "../Cursor/reducer";
import VideoPlayer from "./VideoPlayer";

const Work = ({
  selectedWork,
  setOpenGallery,
  setImages,
  setSelImageIndex,
}) => {
  const [hover, setHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const { images, videos } = selectedWork;

  const dispatch = useDispatch();

  const onImageClick = (index) => {
    setOpenGallery(true);
    setImages(images);
    setSelImageIndex(index);
  };

  return (
    <motion.article layout>
      {images !== undefined ? (
        <motion.div
          layout
          className='px-2 md:px-6 flex gap-4 flex-wrap items-center justify-center w-full h-full mt-0 md:mt-4 pb-10 select-none pointer-events-none max-w-[800px] mx-auto'
        >
          {images?.map((image, index) => {
            return (
              <motion.div
                layout
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
                className='pointer-events-auto'
                onClick={() => onImageClick(index)}
                key={image.id}
              >
                <div
                  onMouseEnter={() => {
                    setHover(true);
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                    setHoverIndex(null);
                  }}
                  className='w-[350px] h-[350px] md:w-[150px] md:h-[150px] overflow-hidden relative'
                >
                  <Image
                    placeholder='blur'
                    blurDataURL={image.src}
                    layout='fill'
                    objectFit='contain'
                    src={image.src || imagePlaceholder}
                    alt={image.title}
                  />
                  <AnimatePresence>
                    {hover && index === hoverIndex && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='w-full h-full bg-black/60 absolute top-0 left-0 flex items-center justify-center'
                      ></motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : null}

      {videos !== undefined ? (
        <motion.div
          layout
          className='px-2 md:px-6 flex flex-col md:flex-row md:flex-wrap items-center justify-center w-full h-full mt-10 md:mt-1 pb-10 mx-auto'
        >
          {videos?.map((item) => {
            return <VideoPlayer key={item.id} src={item.src} />;
          })}
        </motion.div>
      ) : null}
    </motion.article>
  );
};

export default Work;
