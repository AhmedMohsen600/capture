export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const fighterAnim = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeOut",
    },
  },
};
export const mainLine = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
      delay: 1.4,
    },
  },
};
export const line = {
  hidden: {
    width: "0%",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  show: {
    width: "100%",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const ourWorkTitle = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.4,
    },
  },
};

export const framerDiv = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};
export const slides = {
  hidden: {
    x: "-131%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const scrollAnim = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 1,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const moiveScrollAnim = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
