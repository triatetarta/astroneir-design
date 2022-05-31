import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import useInterval from "@use-it/interval";
import Image from "next/image";

const Intro = ({ setLoaded }) => {
  const [counter, setCounter] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const bgRedAnimation = useAnimation();
  const bgBlueAnimation = useAnimation();

  const sequence = async () => {
    bgRedAnimation.set({
      y: 1000,
    });
    bgBlueAnimation.set({
      y: 2000,
      x: 1000,
      rotate: -35,
    });
    await bgRedAnimation.start({
      y: "-100%",
      transition: {
        duration: 1,
      },
    });
    await bgBlueAnimation.start({
      y: "-100%",
      rotate: -35,
      x: -1000,
      transition: {
        duration: 0.5,
      },
    });

    setStartCount(true);
  };

  useEffect(() => {
    sequence();
  }, []);

  useInterval(() => {
    if (!startCount) return;
    if (counter === 100) {
      setTimeout(() => {
        setLoaded(true);
      }, 800);
      return;
    }
    setCounter((prevCounter) => {
      if (prevCounter < 100) {
        return counter + 5;
      }
    });
  }, 200);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed top-0 left-0 right-0 bottom-0'
    >
      <motion.div
        animate={bgRedAnimation}
        className='fixed top-0 left-0 right-0 bottom-0 bg-astro-red z-50'
      />
      <motion.div
        animate={bgBlueAnimation}
        className='fixed -top-[400px] -left-[400px] -right-[400px] -bottom-[400px] bg-astro-blue z-50'
      />
      <motion.div className='fixed top-0 left-0 right-0 bottom-0 bg-astro-pink flex flex-col items-center justify-center'>
        <div className='w-[400px] h-[300px] md:w-[600px] md:h-[600px] relative overflow-hidden'>
          <Image
            src='/assets/intro.png'
            layout='fill'
            priority
            objectFit='contain'
          />
          <motion.div
            initial={{ y: "0%" }}
            animate={{ y: `${-counter}%` }}
            className='absolute top-0 left-0 w-full h-full bg-astro-pink'
          />
        </div>

        <div className='relative w-full'>
          {startCount && (
            <h2
              key={"count" + counter}
              className='text-white font-bold text-6xl md:text-7xl absolute left-1/2 transform -translate-x-1/2'
            >
              {counter}
            </h2>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
