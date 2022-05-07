import BackgroundMusic from "./BackgroundMusic";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MusicWrapper = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BackgroundMusic />
    </>
  );
};

export default MusicWrapper;
