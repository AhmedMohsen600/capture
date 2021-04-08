import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      style={{ backgroundColor: "white" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div style={{ overflow: "hidden", marginBottom: "4rem" }}>
        <motion.h2 style={{ color: "black" }} variants={titleAnim}>
          Get in touch.
        </motion.h2>
      </motion.div>
      <SocialLinks>
        <Hide>
          <Circle variants={titleAnim} />
          <motion.h2 variants={titleAnim}>Send us message</motion.h2>
        </Hide>
        <Hide>
          <Circle variants={titleAnim} />
          <motion.h2 variants={titleAnim}>Send an email</motion.h2>
        </Hide>
        <Hide>
          <Circle variants={titleAnim} />
          <motion.h2 variants={titleAnim}>Social Media</motion.h2>
        </Hide>
      </SocialLinks>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  min-height: 90vh;
  padding: 9rem 10rem;

  h2 {
    color: #353535;
    font-weight: 300;
  }
  @media (max-width: 1500px) {
    padding: 8rem 0.7rem;
    h2 {
      font-size: 2.4rem;
      margin-left: 0.4rem;
    }
  }
`;
const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 2rem;
  background-color: #353535;
  @media (max-width: 1500px) {
    margin-left: 0.5rem;
  }
`;
const Hide = styled(motion.div)`
  display: flex;
  overflow: hidden;
  align-items: center;
  padding-bottom: 2.5rem;
`;
const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
`;
export default ContactUs;
