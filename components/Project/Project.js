import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "../../public/assets/x.svg";

const Project = ({ setSelectedWorks, selectedWorks, work, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(30);

  const { id, images } = work;

  const onCloseHandler = (id) => {
    setSelectedWorks(selectedWorks.filter((item) => item.id !== id));
  };

  return (
    <motion.article
      whileTap={{ zIndex: 40 }}
      onTap={() => setZIndex(zIndex + 1)}
      onAnimationComplete={() => setIsOpen(true)}
      drag
      initial={{ opacity: 0, scale: 5, rotate: 360, y: 450, x: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: !isOpen && 0 + index * 30,
        x: !isOpen && 0 + index * 30,
      }}
      exit={{ opacity: 0, scale: 0, rotate: -360, y: 150, x: 0 }}
      className={`bg-white rounded-md absolute left-1/3 top-20 max-w-[380px] shadow-2xl `}
      style={{ zIndex: zIndex }}
    >
      <div className='p-4 relative flex items-center justify-end'>
        <span
          onClick={() => onCloseHandler(id)}
          className='w-8 h-8 rounded-md flex items-center justify-center'
        >
          <CloseIcon />
        </span>
      </div>

      <div className='px-6 flex gap-4 flex-wrap items-center justify-center w-full h-full mt-4 pb-10 select-none pointer-events-none'>
        {images?.map((image) => {
          return (
            <div key={image.id}>
              <div className='w-[150px] h-[150px] overflow-hidden relative'>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={image.src}
                  alt={image.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default Project;
