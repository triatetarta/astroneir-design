import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "../../public/assets/arrow.svg";

const Title = ({ title, hovered }) => {
  return (
    <div className='items-center overflow-hidden hidden md:flex'>
      <AnimatePresence>
        {hovered && (
          <motion.h1
            initial={{ y: "100%", skewX: 20 }}
            animate={{ y: "0%", skewX: 0 }}
            exit={{ y: "100%", skewX: 20 }}
            transition={{
              stiffness: 240,
              damping: 17,
              type: "spring",
            }}
            className='lg:text-[8rem] text-[4rem] font-bold text-white'
          >
            {title}
          </motion.h1>
        )}
      </AnimatePresence>

      <div className='lg:w-20 lg:h-20 lg:ml-10 w-10 h-10 ml-2 overflow-hidden'>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                stiffness: 240,
                damping: 25,
                type: "spring",
              }}
              className='w-full h-full'
            >
              <ArrowRight className='w-full h-full' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Title;
