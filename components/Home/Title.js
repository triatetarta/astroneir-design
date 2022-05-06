import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "../../public/assets/arrow.svg";

const Title = ({ title, hovered }) => {
  return (
    <div className='ml-16 mb-16'>
      <div className='flex items-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='text-[10rem] font-bold text-white'
        >
          {title}
        </motion.h1>
        <div className='w-20 h-20 ml-10 overflow-hidden'>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ stiffness: 240, damping: 25, type: "spring" }}
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
