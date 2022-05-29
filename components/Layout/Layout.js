import { Header } from "./Header";
// import Granim from "granim";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bio } from "../Bio";
import { Contact } from "../Contact";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Gradient } from "../../Gradient";

const Layout = ({ children }) => {
  const [isWorks, setIsWorks] = useState(false);
  const { track } = useSelector((state) => state.sound);
  const { isBioOpen } = useSelector((state) => state.bio);
  const { isContactOpen } = useSelector((state) => state.contact);

  const router = useRouter();

  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  useEffect(() => {
    if (router.pathname !== "/works" && router.pathname !== "/music") return;

    setIsWorks(true);
  }, [router]);

  // useEffect(() => {
  //   if (track === undefined) return;

  //   new Granim({
  //     element: "#logo-canvas",
  //     direction: "diagonal",
  //     opacity: [1, 1],
  //     states: {
  //       "default-state": {
  //         gradients: [
  //           [
  //             { color: track.colors.first, pos: 0 },
  //             { color: track.colors.middle, pos: 0.2 },
  //             { color: track.colors.last, pos: 0.75 },
  //           ],
  //           [
  //             { color: track.colors.first, pos: 0 },
  //             { color: track.colors.middle, pos: 0.2 },
  //             { color: track.colors.last, pos: 0.75 },
  //           ],
  //         ],
  //         transitionSpeed: 10000,
  //       },
  //     },
  //   });
  // }, [track]);

  return (
    <>
      {/* <canvas id='logo-canvas'></canvas> */}
      <canvas id='gradient-canvas' data-transition-in />
      <div className='noise-bg overflow-hidden'></div>
      <Header />
      <div
        className={`gl-container mx-auto relative overflow-x-hidden ${
          isWorks ? "overflow-y-scroll" : "overflow-y-hidden"
        }`}
      >
        <AnimatePresence>{isBioOpen && <Bio />}</AnimatePresence>
        <AnimatePresence>{isContactOpen && <Contact />}</AnimatePresence>
        {children}
      </div>
    </>
  );
};

export default Layout;
