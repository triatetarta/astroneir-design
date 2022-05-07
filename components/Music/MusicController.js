import PlayIcon from "../../public/assets/play.svg";
import PauseIcon from "../../public/assets/pause.svg";
import NextIcon from "../../public/assets/next.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setNewContext, setTrack } from "./reducer";
import { setCursor } from "../Cursor/reducer";

const MusicController = () => {
  const { music, track } = useSelector((state) => state.sound);
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
    <div className='flex items-center space-x-4'>
      <div
        onMouseEnter={() =>
          dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }))
        }
        onMouseLeave={() =>
          dispatch(setCursor({ cursorContent: "🙁", cursorVariant: "default" }))
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
          dispatch(setCursor({ cursorContent: "🙁", cursorVariant: "default" }))
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
          dispatch(setCursor({ cursorContent: "🙁", cursorVariant: "default" }))
        }
        onClick={playNextHandler}
        className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'
      >
        <NextIcon className='h-full w-full' />
      </div>
    </div>
  );
};

export default MusicController;
