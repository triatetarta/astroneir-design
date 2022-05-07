import { useDispatch, useSelector } from "react-redux";
import ReactHowler from "react-howler";
import { setTrack, setMusic } from "./reducer";
import { useEffect } from "react";
import { musicPlaylist } from "../../constants/data";

const BackgroundMusic = () => {
  const { music, volume, mute, track, newContext, isPlaying } = useSelector(
    (state) => state.sound
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMusic(musicPlaylist));

    if (music === undefined) return;

    dispatch(setTrack(music[0]));
  }, [music]);

  const onEndHandler = async () => {
    let currentIndex = music.findIndex((song) => song.id === track.id);

    await dispatch(setTrack(music[(currentIndex + 1) % music.length]));
  };

  if (track === "" || track === undefined) return;

  if (newContext)
    return (
      <>
        <ReactHowler
          html5={true}
          playing={isPlaying}
          src={track?.src}
          // volume={volume.background}
          onEnd={onEndHandler}
          mute={mute}
        ></ReactHowler>
      </>
    );
};

export default BackgroundMusic;
