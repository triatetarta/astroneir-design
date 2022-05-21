import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { emojiHappy, emojiSad, imagePlaceholder } from "../../constants/data";
import { setCursor } from "../Cursor/reducer";

const Work = ({
  selectedWork,
  setOpenGallery,
  setImages,
  setSelImageIndex,
}) => {
  const [hover, setHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const { id, images } = selectedWork;

  const dispatch = useDispatch();

  const onImageClick = (index) => {
    setOpenGallery(true);
    setImages(images);
    setSelImageIndex(index);
  };

  return (
    <article>
      <div className='px-6 flex gap-4 flex-wrap items-center justify-center w-full h-full mt-4 pb-10 select-none pointer-events-none'>
        {images?.map((image, index) => {
          return (
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
                className='w-[150px] h-[150px] overflow-hidden relative'
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
                    >
                      <span className='text-white uppercase text-xl px-2 py-1 bg-pink-400 rounded-md'>
                        {image.project}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Work;
