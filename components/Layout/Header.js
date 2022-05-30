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

export const Header = () => {
  const [navItems, setNavItems] = useState([]);
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

  return (
    <nav className='gl-container mx-auto flex items-start justify-between pt-10 text-white relative'>
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
              <motion.li
                whileTap={{ scale: whileTapScale }}
                onClick={() => onClickHandler(item, index)}
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
                key={item.id}
              >
                {item.title}
              </motion.li>
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
