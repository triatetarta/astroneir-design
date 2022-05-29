import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bio } from "../Bio";
import { Contact } from "../Contact";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Gradient } from "../../Gradient";

const Layout = ({ children }) => {
  const [isWorks, setIsWorks] = useState(false);
  const { isBioOpen } = useSelector((state) => state.bio);
  const { isContactOpen } = useSelector((state) => state.contact);

  const router = useRouter();

  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");

    gradient.amp = 100;
  }, []);

  useEffect(() => {
    if (router.pathname !== "/works" && router.pathname !== "/music") return;

    setIsWorks(true);
  }, [router]);

  return (
    <>
      <canvas id='gradient-canvas' data-transition-in />
      <div className='noise-bg overflow-hidden'></div>
      <Header />
      <div
        className={`gl-container mx-auto relative overflow-x-hidden ${
          isWorks ? "overflow-y-auto" : "overflow-y-hidden"
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
