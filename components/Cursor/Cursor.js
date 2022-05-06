import { motion } from "framer-motion";
import { variants, spring } from "./cursorAnimations";
import { useSelector } from "react-redux";
import useMouse from "@react-hook/mouse-position";

const Cursor = (props) => {
  const { cursorContent, cursorVariant } = useSelector((state) => state.cursor);

  const mouse = useMouse(props.rootRef, {
    enterDelay: 50,
    leaveDelay: 50,
  });

  let mousePosition = {
    xPosition: 0,
    yPosition: 0,
  };

  if (mouse.x !== null) {
    mousePosition.xPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mousePosition.yPosition = mouse.clientY;
  }

  return (
    <motion.div
      className='cursor-circle'
      variants={variants}
      custom={mousePosition}
      animate={cursorVariant}
      transition={spring}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <motion.span className='cursor-content'>{cursorContent}</motion.span>
    </motion.div>
  );
};

export default Cursor;
