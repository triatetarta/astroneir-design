import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoaded } from "../components/Intro/reducer";

export default function Home() {
  const { isLoaded } = useSelector((state) => state.intro);

  const dispatch = useDispatch();

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname !== "/") dispatch(setIsLoaded(true));
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Astroneir Design - Graphic Designer</title>
        <meta
          name='description'
          content='Astroneir Design is a creative Graphic Designer, with passion for developing unique custom artworks. Highly artistic, always
          on task with innovative approach to ideas and concept development.'
        />
      </Head>

      <div className='w-full h-full relative'>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            {!isLoaded ? <Intro key='intro' /> : <Showcase key='showcase' />}
          </AnimatePresence>
        </Layout>
      </div>
    </>
  );
}
