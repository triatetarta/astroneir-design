import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../configureStore";
import { Cursor } from "../components/Cursor";
import MusicWrapper from "../components/Music/MusicWrapper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Intro } from "../components/Intro/";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname !== "/") setLoaded(true);
  }, [pathname]);

  return (
    <Provider store={store}>
      <Cursor />
      <MusicWrapper />

      <AnimatePresence>
        {loaded ? (
          <Component {...pageProps} />
        ) : (
          <Intro setLoaded={setLoaded} />
        )}
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
