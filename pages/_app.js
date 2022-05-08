import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../configureStore";
import { Cursor } from "../components/Cursor";
import MusicWrapper from "../components/Music/MusicWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Cursor />
      <MusicWrapper />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
