import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import CloseIcon from "../../public/assets/x.svg";
import unicorn from "../../public/assets/unicorn.png";
import { closeBio } from "./reducer";
import Image from "next/image";
import { emojiHappy, emojiSad, socialMediaData } from "../../constants/data";
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
      initial={{ opacity: 0, y: "-100%", x: "-50%" }}
      animate={{ opacity: 1, y: "-70%", x: "-50%" }}
      exit={{ opacity: 0, scale: 0 }}
      className='fixed top-1/2 left-1/2 w-[800px] bg-white p-5 rounded-md z-40 shadow-md'
    >
      <div className='p-4 relative flex items-center justify-end'>
        <span
          onClick={() => dispatch(closeBio())}
          className='w-8 h-8 rounded-md flex items-center justify-center'
        >
          <CloseIcon />
        </span>
      </div>
      <div className='flex'>
        <p className='w-2/3'>
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
        <div className='relative w-1/3'>
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
            <a
              key={media.id}
              target='_blank'
              href={media.link}
              rel='noopener noreferrer'
              className='h-6 w-6'
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
            </a>
          );
        })}
      </div>
    </motion.article>
  );
};

export default Bio;
