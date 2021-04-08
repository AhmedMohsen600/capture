import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { scrollAnim } from "../animation";
const ServicesSection = () => {
  const [elment, control] = useScroll();
  return (
    <StyledServieces
      ref={elment}
      variants={scrollAnim}
      animate={control}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt="team-work" />
              <h3>Teamwork</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image className="image">
        <img src={home2} alt="camera" />
      </Image>
    </StyledServieces>
  );
};

const StyledServieces = styled(motion.div)`
  display: flex;
  min-height: 90vh;
  justify-content: space-between;
  align-items: center;
  padding: 9rem 7rem;
  @media (max-width: 1300px) {
    padding: 0;
    display: block;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  @media (max-width: 1300px) {
    padding: 0;
    padding-left: 0.5rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 0.9rem;
  }
`;
const Image = styled.div`
  flex: 1;
  @media (max-width: 1300px) {
    width: 100%;
  }

  img {
    width: 97%;
    height: 84vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      width: 100%;
    }
  }
`;
export default ServicesSection;
