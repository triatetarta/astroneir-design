import { AnimatePresence, motion } from "framer-motion";
import PlayIcon from "../../public/assets/play.svg";
import PauseIcon from "../../public/assets/pause.svg";
import NextIcon from "../../public/assets/next.svg";
import PlayingLeft from "../../public/assets/playingleft.svg";
import PlayingRight from "../../public/assets/playingright.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setNewContext, setTrack } from "./reducer";
import { setCursor } from "../Cursor/reducer";

const MusicController = () => {
  const { music, track, isPlaying } = useSelector((state) => state.sound);
  const dispatch = useDispatch();

  const handleClick = () => {
    const audioCtx = new AudioContext();

    dispatch(setNewContext(true));
    dispatch(setIsPlaying(true));
  };

  const playNextHandler = async () => {
    let currentIndex = music.findIndex((song) => song.id === track.id);

    await dispatch(setTrack(music[(currentIndex + 1) % music.length]));
  };

  const pauseHandler = () => {
    dispatch(setIsPlaying(false));
  };

  return (
    <div className='flex flex-col items-center space-y-3'>
      <div className='flex items-center space-x-4'>
        <div
          onMouseEnter={() =>
            dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }))
          }
          onMouseLeave={() =>
            dispatch(
              setCursor({ cursorContent: "🙁", cursorVariant: "default" })
            )
          }
          onClick={handleClick}
          className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'
        >
          <PlayIcon className='w-full h-full' />
        </div>
        <div
          onMouseEnter={() =>
            dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }))
          }
          onMouseLeave={() =>
            dispatch(
              setCursor({ cursorContent: "🙁", cursorVariant: "default" })
            )
          }
          onClick={pauseHandler}
          className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'
        >
          <PauseIcon className='h-full w-full' />
        </div>
        <div
          onMouseEnter={() =>
            dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }))
          }
          onMouseLeave={() =>
            dispatch(
              setCursor({ cursorContent: "🙁", cursorVariant: "default" })
            )
          }
          onClick={playNextHandler}
          className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'
        >
          <NextIcon className='h-full w-full' />
        </div>
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex items-center justify-center space-x-2 text-xs'
          >
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: -20, opacity: 0 }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              className='h-3 w-3'
            >
              <PlayingLeft className='h-full w-full' />
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              NOW PLAYING
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 20, opacity: 0 }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              className='h-3 w-3'
            >
              <PlayingRight className='h-full w-full' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicController;
