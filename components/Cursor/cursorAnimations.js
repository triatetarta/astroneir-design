export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

export const variants = {
  default: {
    rotate: 0,
    opacity: 1,
    height: 20,
    width: 20,
    x: "-50%",
    y: "-50%",
    fontSize: "20px",
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
  smile: {
    rotate: 360,
    opacity: 1,
    height: 20,
    width: 20,
    x: "-50%",
    y: "-50%",
    fontSize: "20px",
    transition: {
      type: "spring",
      mass: 0.6,
    },
  },
};
