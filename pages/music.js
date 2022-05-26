import { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { videoData } from "../constants/data";
import { motion, AnimatePresence } from "framer-motion";

const Music = () => {
  const [videos, setVideos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef();

  useEffect(() => {
    setVideos(videoData);
  }, []);

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

  return (
    <Layout>
      <section className='w-full flex md:flex-row flex-col justify-between h-[calc(100vh-8.5rem)] mt-10'>
        {videos?.map((video, index) => {
          return (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className='relative w-[450px] h-[240px] overflow-hidden rounded-lg'
              key={video.id}
              onClick={onClickHandler}
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

              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: isPlaying ? 0.1 : 0.5 }}
                exit={{ opacity: 0.5 }}
                className='absolute top-0 left-0 w-full h-full bg-black z-30'
              />

              <video
                className='object-cover absolute left-0 right-0 bottom-0 top-0 min-w-full min-h-[100%]'
                ref={videoRef}
                width='100%'
                height='100%'
                loop
                autoPlay=''
                muted
                playsInline=''
              >
                <source src={video.src} type='video/mp4' />
              </video>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Music;
