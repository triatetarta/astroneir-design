import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { emojiHappy, emojiSad } from "../../constants/data";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

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
      onClick={() => {
        if (isPlaying) {
          setIsPlaying(false);
        }
        return;
      }}
      className='relative overflow-hidden rounded-lg pointer-events-auto w-[320px] h-[160px] md:w-[440px] md:h-[248px] bg-black mb-4 md:mr-4'
    >
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            onClick={() => setIsPlaying(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-5 w-5 md:h-10 md:w-10 absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2'
          >
            <img
              className='w-full h-full'
              src='/assets/musicplayer/play.png'
              alt='play button'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && isHovered && (
          <motion.div
            onClick={() => setIsPlaying(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='h-5 w-5 md:h-10 md:w-10 absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex'
          >
            <img
              className='w-full h-full'
              src='/assets/musicplayer/pause.png'
              alt='play button'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ReactPlayer
        width='100%'
        height='100%'
        className='object-contain absolute left-0 right-0 bottom-0 top-0'
        url={src}
        playing={isPlaying}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default VideoPlayer;
