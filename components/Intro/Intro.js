import Emoji from "../../public/assets/emoji.svg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Intro = ({ setLoaded }) => {
  const emojiAnimation = useAnimation();
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
    emojiAnimation.set({
      y: -1000,
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

    await emojiAnimation.start({
      y: 0,
    });

    await emojiAnimation.start({
      scale: 8,
      opacity: 0,
    });
    await setLoaded(true);
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0'>
      <motion.div
        animate={bgRedAnimation}
        className='fixed top-0 left-0 right-0 bottom-0 bg-astro-red z-50'
      />
      <motion.div
        animate={bgBlueAnimation}
        className='fixed -top-[400px] -left-[400px] -right-[400px] -bottom-[400px] bg-astro-blue z-50'
      />
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-astro-pink flex items-center justify-center'>
        <motion.div animate={emojiAnimation}>
          <Emoji />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
