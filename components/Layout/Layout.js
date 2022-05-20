import { Header } from "./Header";
import Granim from "granim";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Bio } from "../Bio";
import { Contact } from "../Contact";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const { track } = useSelector((state) => state.sound);
  const { isBioOpen } = useSelector((state) => state.bio);
  const { isContactOpen } = useSelector((state) => state.contact);

  useEffect(() => {
    if (track === undefined) return;

    new Granim({
      element: "#logo-canvas",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            [
              { color: track.colors.first, pos: 0 },
              { color: track.colors.middle, pos: 0.2 },
              { color: track.colors.last, pos: 0.75 },
            ],
            [
              { color: track.colors.first, pos: 0 },
              { color: track.colors.middle, pos: 0.2 },
              { color: track.colors.last, pos: 0.75 },
            ],
          ],
          transitionSpeed: 10000,
        },
      },
    });
  }, [track]);

  return (
    <>
      <canvas id='logo-canvas'></canvas>
      <div className='noise-bg'></div>
      <Header />
      <div className='gl-container mx-auto relative'>
        <AnimatePresence>{isBioOpen && <Bio />}</AnimatePresence>
        <AnimatePresence>{isContactOpen && <Contact />}</AnimatePresence>

        {children}
      </div>
    </>
  );
};

export default Layout;
