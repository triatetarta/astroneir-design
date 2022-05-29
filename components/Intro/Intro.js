import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Intro = ({ setLoaded }) => {
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

    await setLoaded(true);
  };

  useEffect(() => {
    sequence();
  }, []);

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
      <motion.div className='fixed top-0 left-0 right-0 bottom-0 bg-astro-pink flex items-center justify-center'></motion.div>
    </motion.div>
  );
};

export default Intro;
