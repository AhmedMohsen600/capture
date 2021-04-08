import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import goodtimes from "../img/goodtimes-small.png";
import { line, moiveScrollAnim } from "../animation";
const MoiveTime = () => {
  const [element, control] = useScroll();

  return (
    <Work
      variants={moiveScrollAnim}
      animate={control}
      ref={element}
      initial="hidden"
    >
      <Movie>
        <motion.h2>The goodtimes</motion.h2>
        <motion.div variants={line} className="line"></motion.div>
        <Link to="./work/good-times">
          <Hide>
            <motion.img src={goodtimes} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 9rem 7rem;
  @media (max-width: 1300px) {
    padding: 0rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 1rem;
  img {
    width: 100%;
    height: 79vh;
    object-fit: cover;
  }
  .line {
    height: 0.5rem;
    background: #22c287;
    margin-bottom: 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: black;
    font-weight: 600;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default MoiveTime;
