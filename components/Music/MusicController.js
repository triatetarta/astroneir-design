import React from "react";
import PlayIcon from "../../public/assets/play.svg";
import PauseIcon from "../../public/assets/pause.svg";
import NextIcon from "../../public/assets/next.svg";

const MusicController = () => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'>
        <PlayIcon className='w-full h-full' />
      </div>
      <div className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'>
        <PauseIcon className='h-full w-full' />
      </div>
      <div className='h-6 w-6 bg-black flex items-center justify-center p-1.5 rounded-md'>
        <NextIcon className='h-full w-full' />
      </div>
    </div>
  );
};

export default MusicController;
