import { Header } from "./Header";
import Granim from "granim";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            [
              { color: "#411aff", pos: 0.2 },
              { color: "#e936b0", pos: 0.8 },
              { color: "#ef2f5e", pos: 1 },
            ],
            [
              { color: "#411aff", pos: 0 },
              { color: "#e936b0", pos: 0.2 },
              { color: "#ef2f5e", pos: 0.75 },
            ],
          ],
          transitionSpeed: 10000,
        },
      },
    });
  }, []);

  return (
    <>
      <canvas id='logo-canvas'></canvas>
      <div className='noise-bg'></div>
      <Header />
      <div className='container mx-auto relative'>{children}</div>
    </>
  );
};

export default Layout;
