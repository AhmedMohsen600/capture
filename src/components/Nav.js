import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <HeaderStyle>
      <StyledNav>
        <h1>
          <Link id="logo" to="/">
            Capture
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">1.About us</Link>
            <Line
              animate={{
                transition: { duration: 1 },
                width: pathname === "/" ? "42%" : "0%",
              }}
              initial={{ width: "0%" }}
            />
          </li>
          <li>
            <Link to="/work">2.Our work</Link>
            <Line
              animate={{
                transition: { duration: 1 },
                width: pathname === "/work" ? "42%" : "0%",
              }}
              initial={{ width: "0%" }}
            />
          </li>
          <li>
            <Link to="/contact">3.Contact us</Link>
            <Line
              animate={{
                transition: { duration: 1 },
                width: pathname === "/contact" ? "42%" : "0%",
              }}
              initial={{ width: "0%" }}
            />
          </li>
        </ul>
      </StyledNav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled(motion.header)`
  background-color: #282828;
  position: relative;
  z-index: 3;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.384);
`;
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  width: 91%;
  margin: auto;
  flex-wrap: wrap;
  padding: 2rem;
  #logo {
    font-family: "lobster", cursive;
    font-size: 1.4rem;
    font-weight: lighter;
  }
  h1 {
    flex: 1 1 40rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    flex: 1 1 40rem;
    li {
      position: relative;
      padding-right: 4rem;
      padding-left: 4rem;
      @media screen and (max-width: 1300px) {
        padding: 0;
      }
    }
  }
  @media (max-width: 1300px) {
    padding: 2rem 0rem;
    h1 {
      margin-top: -0.3rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    ul {
      justify-content: space-around;
      width: 100%;
    }
  }
`;
const Line = styled(motion.div)`
  background-color: #23d997;
  position: absolute;
  height: 0.3rem;
  bottom: -80%;
  width: 100%;
  left: 30%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default Nav;
