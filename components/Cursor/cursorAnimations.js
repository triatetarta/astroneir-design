export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

export const variants = {
  default: (mousePosition) => ({
    rotate: 0,
    opacity: 1,
    height: 40,
    width: 40,
    x: mousePosition.xPosition,
    y: mousePosition.yPosition,
    fontSize: "18px",
    backgroundColor: "#D94C77",
    transition: {
      type: "spring",
      mass: 0.6,
    },
  }),
  smile: (mousePosition) => ({
    rotate: 360,
    opacity: 1,
    height: 42,
    width: 42,
    x: mousePosition.xPosition,
    y: mousePosition.yPosition,
    fontSize: "20px",
    backgroundColor: "#D94C77",
    transition: {
      type: "spring",
      mass: 0.6,
    },
  }),
};
