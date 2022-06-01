import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import useInterval from "@use-it/interval";
import Image from "next/image";
import { ease } from "../../constants/data";
import { useDispatch } from "react-redux";
import { setIsLoaded } from "./reducer";

const Intro = () => {
  const [counter, setCounter] = useState(0);
  const [startCount, setStartCount] = useState(true);
  const bgRedAnimation = useAnimation();
  const bgBlueAnimation = useAnimation();

  const dispatch = useDispatch();

  const sequence = async () => {
    await bgRedAnimation.start({
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: ease,
      },
    });
    await bgBlueAnimation.start({
      y: "-100%",
      rotate: -35,
      x: -1000,
      transition: {
        duration: 0.8,
        ease: ease,
      },
    });

    dispatch(setIsLoaded(true));
  };

  useInterval(() => {
    if (!startCount) return;

    if (counter === 100) {
      setStartCount(false);
      sequence();

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
      initial={{ opacity: 1, y: "0%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1.2, ease: ease }}
      className='fixed top-0 left-0 right-0 bottom-0'
    >
      <motion.div
        initial={{ y: 2000, x: 1000, rotate: -35 }}
        animate={bgBlueAnimation}
        className='fixed -top-[400px] -left-[400px] -right-[400px] -bottom-[400px] bg-astro-blue z-50'
      />
      <motion.div
        initial={{ y: 1000 }}
        animate={bgRedAnimation}
        className='z-50 fixed top-0 left-0 right-0 bottom-0 bg-astro-red'
      />
      <div className='z-40 absolute top-0 left-0 right-0 bottom-0 bg-astro-pink flex flex-col items-center justify-center'>
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
      </div>
    </motion.div>
  );
};

export default Intro;
