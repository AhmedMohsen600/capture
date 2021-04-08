import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollAnim } from "../animation";
const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <FAQ variants={scrollAnim} animate={control} ref={element} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <div className="question">
          <Toggle title="How do i start">
            <Answer>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                pariatur magnam, eligendi optio quisquam sed veniam incidunt
                necessitatibus placeat hic!
              </p>
            </Answer>
          </Toggle>
        </div>

        <div className="question">
          <Toggle title="Daily schedule">
            <Answer>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                pariatur magnam, eligendi optio quisquam sed veniam incidunt
                necessitatibus placeat hic!
              </p>
            </Answer>
          </Toggle>
        </div>

        <div className="question">
          <Toggle title="Diferrent Payment Method">
            <Answer>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                pariatur magnam, eligendi optio quisquam sed veniam incidunt
                necessitatibus placeat hic!
              </p>
            </Answer>
          </Toggle>
        </div>

        <div className="question">
          <Toggle title="What product do you offer">
            <Answer>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                pariatur magnam, eligendi optio quisquam sed veniam incidunt
                necessitatibus placeat hic!
              </p>
            </Answer>
          </Toggle>
        </div>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  padding: 5rem 7rem;
  flex-direction: column;
  @media screen and (max-width: 1500px) {
    padding: 5rem 5rem;
    align-items: center;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  h2 {
    font-weight: lighter;
    @media screen and (max-width: 1500px) {
      text-align: center;
      padding-bottom: 1rem;
    }
  }
  span {
    display: block;
  }
  h4 {
    padding-top: 2.5rem;
  }
  .line {
    background: whitesmoke;
    margin-top: 15px;
    height: 2px;
  }
`;
const Answer = styled.div`
  padding: 2rem 0rem;
  p {
    padding: 1rem 0rem;
  }
`;
export default FaqSection;
