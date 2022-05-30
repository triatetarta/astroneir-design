import "../styles/globals.css";
import "../styles/gradient.css";
import { Provider } from "react-redux";
import { store } from "../configureStore";
import { Cursor } from "../components/Cursor";
import MusicWrapper from "../components/Music/MusicWrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro/";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname !== "/") setLoaded(true);
  }, [pathname]);

  return (
    <Provider store={store}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />

        <meta itemProp='name' content='Astroneir Design - Graphic Designer' />
        <meta
          itemProp='description'
          content='Astroneir Design is a creative Graphic Designer, with passion for developing unique custom artworks. Highly artistic, always
          on task with innovative approach to ideas and concept development.'
        />
        <meta itemProp='image' content='https://i.imgur.com/dWXIOhh.png' />

        <meta
          name='keywords'
          content='Graphic Design, Colours, Illustration, Web Design, Video Editing, Anestis Neiros, Astroneir Design, Branding, Music Posters, Movie Posters, Packaging, Movie Trailers, T Shirts'
          key='titleKeywords'
        />

        <meta property='og:url' content='https://www.astroneir-design.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Astroneir Design' />
        <meta property='og:description' content='Graphic Designer' />
        <meta property='og:image' content='https://i.imgur.com/dWXIOhh.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Astroneir Design' />
        <meta name='twitter:description' content='Graphic Designer' />
        <meta name='twitter:image' content='https://i.imgur.com/dWXIOhh.png' />
      </Head>

      <Cursor />
      <MusicWrapper />

      <AnimatePresence>
        {loaded ? (
          <Component {...pageProps} key='main' />
        ) : (
          <Intro setLoaded={setLoaded} key='intro' />
        )}
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
