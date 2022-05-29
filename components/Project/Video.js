import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { emojiHappy, emojiSad } from "../../constants/data";

const Video = ({ src, id, size, thumb }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef();

  const dispatch = useDispatch();

  const onClickHandler = async () => {
    if (!isPlaying) {
      await videoRef.current.play();
      setIsPlaying(true);
    }
    if (isPlaying) {
      await videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const onMouseEnter = () => {
    setIsHovered(true);
    dispatch(
      setCursor({
        cursorContent: emojiHappy,
        cursorVariant: "smile",
      })
    );
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    dispatch(
      setCursor({
        cursorContent: emojiSad,
        cursorVariant: "default",
      })
    );
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='relative overflow-hidden rounded-lg pointer-events-auto  aspect-w-16 aspect-h-9'
      key={id}
      onClick={onClickHandler}
      style={{ width: size.width, height: size.height }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-5 w-5 md:h-10 md:w-10 absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2'
          >
            {isPlaying ? (
              <img
                className='w-full h-full'
                src='/assets/musicplayer/pause.png'
                alt='pause button'
              />
            ) : (
              <img
                className='w-full h-full'
                src='/assets/musicplayer/play.png'
                alt='play button'
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isPlaying && (
          <div className='absolute top-0 left-0 w-full h-full z-30'>
            <div className='relative w-full h-full'>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0.6 : 1 }}
                exit={{ opacity: 0 }}
                className='absolute top-0 left-0 w-full h-full z-30'
              >
                <motion.img
                  src={thumb}
                  alt='thumbnail'
                  className='w-full h-full object-contain relative'
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <video
        className='object-contain absolute left-0 right-0 bottom-0 top-0'
        ref={videoRef}
        width='100%'
        height='100%'
        loop
        autoPlay=''
        muted={!isPlaying}
        playsInline=''
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video;
