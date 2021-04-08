import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MovieSection from "../components/MovieSection";
import MoiveTime from "../components/MoiveTime";
import MoiveRacer from "../components/MoiveRacer";
import { pageAnimation, slides, framerDiv } from "../animation";

const OurWork = () => {
  return (
    <motion.div
      style={{ overflow: "hidden", backgroundColor: "white" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MovieSection />
      <MoiveRacer />
      <MoiveTime />
      <motion.div variants={framerDiv}>
        <Framer1 variants={slides} />
        <Framer2 variants={slides} />
        <Framer3 variants={slides} />
        <Framer4 variants={slides} />
      </motion.div>
    </motion.div>
  );
};

const Framer1 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: #fffebf;
`;
const Framer2 = styled(Framer1)`
  background-color: #ff8efb;
`;
const Framer3 = styled(Framer1)`
  background-color: #8ed2ff;
`;
const Framer4 = styled(Framer1)`
  background-color: #8effa0;
`;
export default OurWork;
