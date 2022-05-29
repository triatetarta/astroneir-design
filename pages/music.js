import { useEffect, useRef, useState } from "react";
import { Layout } from "../components/Layout";
import { videoData } from "../constants/data";

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
    <>
      <Layout>
        <section className='w-full flex md:flex-row flex-col justify-between h-[calc(100vh-8.5rem)] md:pt-10 pt-8'>
          <div className='px-2 md:px-6 flex gap-4 flex-wrap items-center justify-center w-full h-full mt-0 md:mt-4 pb-10 select-none pointer-events-none max-w-[800px] mx-auto'>
            <iframe
              width='100%'
              height='300'
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1274894542&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
            />
            <iframe
              width='100%'
              height='300'
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1253701630&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
            />
            <iframe
              width='100%'
              height='300'
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1229690170&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
            />
            <iframe
              width='100%'
              height='300'
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1214135212&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Music;
