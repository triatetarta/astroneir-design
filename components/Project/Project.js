import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "../../public/assets/x.svg";
import { emojiHappy, emojiSad, imagePlaceholder } from "../../constants/data";
import { setCursor } from "../Cursor/reducer";
import { useDispatch } from "react-redux";
import { transition } from "../../constants/data";

const Project = ({
  setSelectedWorks,
  selectedWorks,
  work,
  index,
  setOpenGallery,
  setImages,
  setSelImageIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const dispatch = useDispatch();

  const { id, images } = work;

  const onCloseHandler = (id) => {
    setSelectedWorks(selectedWorks.filter((item) => item.id !== id));
  };

  const onImageClick = (index) => {
    setOpenGallery(true);
    setImages(images);
    setSelImageIndex(index);
  };

  const changeZIndex = (e) => {
    let elems = document.getElementsByClassName("draggable-card");
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.zIndex = 30;
      e.target.style.zIndex = 40;
    }
  };

  return (
    <motion.article
      onClick={changeZIndex}
      onAnimationComplete={() => setIsOpen(true)}
      onDragStart={(e) => {
        changeZIndex(e);
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 5, rotate: 360, y: 450, x: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: !isOpen && 0 + index * 30,
        x: !isOpen && 0 + index * 30,
      }}
      exit={{ opacity: 0, scale: 0, rotate: -360, y: 150, x: 0 }}
      className={`draggable-card bg-white rounded-md absolute left-1/3 top-20 max-w-[380px] shadow-2xl `}
      style={{ zIndex: 30 }}
    >
      <div className='p-4 relative flex items-center justify-end pointer-events-none'>
        <span
          onClick={() => onCloseHandler(id)}
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
          className='w-8 h-8 rounded-md flex items-center justify-center pointer-events-auto'
        >
          <CloseIcon />
        </span>
      </div>

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
              <motion.div
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default Project;
