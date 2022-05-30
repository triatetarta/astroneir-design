import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { MusicController } from "../Music";
import {
  emojiHappy,
  emojiSad,
  stickersData,
  whileTapScale,
} from "../../constants/data";
import { openBio } from "../Bio/reducer";
import { openContact } from "../Contact/reducer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hand from "../../public/assets/hand.svg";

export const Header = () => {
  const [navItems, setNavItems] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setNavItems(stickersData);
  }, []);

  const onClickHandler = (item, index) => {
    if (item.title === "Bio") {
      dispatch(openBio());
    }
    if (item.title === "Works") {
      router.push("/works");
    }
    if (item.title === "Music") {
      router.push("/music");
    }
    if (item.title === "Contact") {
      dispatch(openContact());
    }

    return;
  };

  const mouseEnterHandler = (index) => {
    setCurrentIndex(index);
    setHovered(true);
    dispatch(
      setCursor({
        cursorContent: emojiHappy,
        cursorVariant: "smile",
      })
    );
  };

  const mouseExitHandler = () => {
    setCurrentIndex(null);
    setHovered(false);
    dispatch(
      setCursor({
        cursorContent: emojiSad,
        cursorVariant: "default",
      })
    );
  };

  return (
    <nav className='gl-container mx-auto flex items-start justify-between md:pt-10 pt-4 text-white relative'>
      <motion.div
        whileTap={{ scale: whileTapScale }}
        className='cursor-pointer'
        onClick={() => router.push("/")}
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
        <h1 className='font-semibold'>Anestis Neiros</h1>
      </motion.div>
      <div>
        <ul className='font-semibold flex flex-col px-2'>
          {navItems.map((item, index) => {
            return (
              <motion.div key={item.id} className='flex items-center'>
                <motion.span className='w-5 h-5 mb-1 mr-1'>
                  {hovered && index === currentIndex && (
                    <motion.div
                      layoutId='hand'
                      className='w-5 h-5 mt-1 mr-1'
                      initial={{ scale: 0.5 }}
                      animate={{
                        opacity: hovered ? 1 : 0.6,
                        scale: 1,
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      <Hand className='w-5 h-5' />
                    </motion.div>
                  )}
                </motion.span>
                <motion.li
                  whileTap={{ scale: whileTapScale }}
                  onClick={() => onClickHandler(item, index)}
                  onMouseEnter={() => mouseEnterHandler(index)}
                  onMouseLeave={mouseExitHandler}
                  key={item.id}
                >
                  {item.title}
                </motion.li>
              </motion.div>
            );
          })}
        </ul>
      </div>
      <div></div>
      <div>
        <MusicController />
      </div>
    </nav>
  );
};
