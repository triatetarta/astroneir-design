import { motion } from "framer-motion";
import { variants, spring } from "./cursorAnimations";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const { cursorContent, cursorVariant } = useSelector((state) => state.cursor);

  const cursor = useRef(null);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <motion.div
      className='cursor-circle'
      variants={variants}
      animate={cursorVariant}
      transition={spring}
      ref={cursor}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <img src={cursorContent} alt='cursor' />
    </motion.div>
  );
};

export default Cursor;
