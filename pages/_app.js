import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../configureStore";
import { Cursor } from "../components/Cursor";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const rootRef = useRef(null);

  return (
    <Provider store={store}>
      <Cursor rootRef={rootRef} />
      <div className='root min-h-screen' ref={rootRef}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
