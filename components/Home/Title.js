import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "../../public/assets/arrow.svg";

const Title = ({ title, hovered }) => {
  return (
    <div className='ml-16 mb-16'>
      <div className='flex items-center overflow-hidden'>
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
              className='text-[10rem] font-bold text-white'
            >
              {title}
            </motion.h1>
          )}
        </AnimatePresence>

        <div className='w-20 h-20 ml-10 overflow-hidden'>
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
    </div>
  );
};

export default Title;
