import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import CloseIcon from "../../public/assets/x.svg";
import { setCursor } from "../Cursor/reducer";
import { emojiHappy, emojiSad, socialMediaData } from "../../constants/data";
import { closeContact } from "./reducer";
import Image from "next/image";
import { useEffect, useState } from "react";

const Contact = () => {
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
      animate={{ opacity: 1, y: "-90%", x: "-50%" }}
      exit={{ opacity: 0, scale: 0 }}
      className='fixed top-1/2 left-1/2 w-[400px] bg-white px-6 pt-5 pb-10 rounded-md z-40 shadow-md'
    >
      <div className='p-3 relative flex items-center justify-end'>
        <span
          onClick={() => dispatch(closeContact())}
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
          className='w-8 h-8 rounded-md flex items-center justify-center'
        >
          <CloseIcon />
        </span>
      </div>

      <div>
        <h3 className='text-2xl font-bold'>Anestis Neiros</h3>
        <p className='text-xl'>e-mail: kindertron@gmail.com</p>
        <p className='text-xl'>tel: +30 697 593 1862</p>
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

export default Contact;
