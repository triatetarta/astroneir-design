import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import CloseIcon from "../../public/assets/x.svg";
import unicorn from "../../public/assets/unicorn.png";
import { closeBio } from "./reducer";
import Image from "next/image";
import {
  emojiHappy,
  emojiSad,
  socialMediaData,
  whileTapScale,
} from "../../constants/data";
import { useEffect, useState } from "react";
import { setCursor } from "../Cursor/reducer";

const Bio = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSocialMedia(socialMediaData);
  }, []);

  return (
    <motion.article
      drag
      dragMomentum={false}
      initial={{ opacity: 0, y: "-150%", x: "-50%" }}
      animate={{ opacity: 1, y: "-50%", x: "-50%" }}
      exit={{ opacity: 0, scale: 0 }}
      className='fixed top-1/2 left-1/2 w-3/4 md:w-[750px] bg-white px-6 pt-5 pb-10 rounded-md z-30 transform -translate-x-1/2 -translate-y-1/2'
    >
      <div className='p-3 relative flex items-center justify-end'>
        <motion.span
          onClick={() => dispatch(closeBio())}
          whileTap={{ scale: whileTapScale }}
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
          className='md:w-8 md:h-8 w-5 h-5 rounded-md flex items-center justify-center z-40 relative'
        >
          <CloseIcon />
        </motion.span>
      </div>
      <div className='flex flex-col md:flex-row'>
        <p className='w-full md:w-2/3'>
          Creative Graphic Designer, fluent in Illustrator and Photoshop, with
          talent for developing unique custom artworks. Highly artistic, always
          on task with innovative approach to ideas and concept development.
          Offering 7 years of expertise managing individual projects and brand
          designing. Consistently creates skilled, creative and brand-specific
          designs. Demonstrated success in managing an art directing in various
          projects from inception to completion within defined scope, quality,
          and timeline. Progressing experience in Video Editing, GIF animation
          and After Effects Animation. Detail-oriented, organized, enthusiastic
          team player and used to work at fast pace to meet tight deadlines.
        </p>
        <div className='relative w-full md:w-1/3 mt-6 md:mt-0 h-[120px] md:h-auto'>
          <Image
            src={unicorn}
            objectFit='contain'
            layout='fill'
            quality={100}
            alt='unicorn'
          />
        </div>
      </div>

      <div className='h-full flex items-center space-x-4 mt-6'>
        {socialMedia?.map((media) => {
          return (
            <motion.a
              whileTap={{ scale: whileTapScale }}
              key={media.id}
              target='_blank'
              href={media.link}
              rel='noopener noreferrer'
              className='md:h-6 md:w-6 h-5 w-5'
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
    </motion.article>
  );
};

export default Bio;
