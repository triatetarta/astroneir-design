import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import CloseIcon from "../../public/assets/x.svg";
import { setCursor } from "../Cursor/reducer";
import {
  emojiHappy,
  emojiSad,
  socialMediaData,
  whileTapScale,
  ease,
} from "../../constants/data";
import { closeContact } from "./reducer";
import Image from "next/image";
import { useEffect, useState } from "react";

const Contact = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = async (e) => {
    await navigator.clipboard.writeText(e.target.textContent);

    setText("email copied to clipboad");
    setCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
      setText("");
    }, 3000);
  }, [text, copied]);

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
      transition={{ ease }}
      className='fixed top-1/2 left-1/2 w-[350px] md:w-[400px] bg-white px-6 pt-5 pb-10 rounded-md z-30'
    >
      <div className='p-3 relative flex items-center justify-end'>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: hover ? 90 : 0 }}
          transition={{ duration: 0.2, ease }}
          whileTap={{ scale: whileTapScale }}
          onClick={() => dispatch(closeContact())}
          onMouseEnter={() => {
            setHover(true);
            dispatch(
              setCursor({
                cursorContent: emojiHappy,
                cursorVariant: "smile",
              })
            );
          }}
          onMouseLeave={() => {
            setHover(false);
            dispatch(
              setCursor({
                cursorContent: emojiSad,
                cursorVariant: "default",
              })
            );
          }}
          className='md:w-8 md:h-8 w-5 h-5 rounded-md flex items-center justify-center z-40 relative'
        >
          <CloseIcon className='md:w-8 md:h-8 w-5 h-5' />
        </motion.span>
      </div>

      <div>
        <h3 className='text-xl md:text-2xl font-bold'>Anestis Neiros</h3>
        <p className='text-lg md:text-xl flex items-center space-x-2'>
          <span>e-mail:</span>
          <span className='flex items-center' onClick={(e) => clickHandler(e)}>
            kindertron@gmail.com
          </span>
        </p>
        <p className='text-lg md:text-xl'>tel: +30 697 593 1862</p>
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
              <div className='md:w-6 md:h-6 w-5 h-5 relative'>
                <Image src={media.icon} alt={media.title} layout='fill' />
              </div>
            </motion.a>
          );
        })}
      </div>

      {copied && (
        <div className='absolute bottom-2 right-2 text-xs'>{text}</div>
      )}
    </motion.article>
  );
};

export default Contact;
