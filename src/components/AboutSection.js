import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
      </Image>
      <Wave />
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9rem 7rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 0rem;
    text-align: center;
  }
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  @media (max-width: 1300px) {
    padding: 0rem 1.3rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  h2 {
    font-weight: lighter;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Image = styled.div`
  overflow: hidden;
  flex: 1;

  img {
    width: 97%;
    height: 84vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      width: 100%;
    }
  }
`;

export default AboutSection;
