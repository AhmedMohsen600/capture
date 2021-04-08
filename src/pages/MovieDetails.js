import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MovieState from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../animation";
const MovieDetails = () => {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const url = history.location.pathname;
  useEffect(() => {
    const currentMoive = movies.filter((state) => state.url === url);
    setMovie(currentMoive[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLines>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="the" />
          </HeadLines>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <motion.img
              variants={photoAnim}
              src={movie.secondaryImg}
              alt="theMovie"
            />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  padding: 7rem 7rem;
  @media (max-width: 1500px) {
    padding: 4rem 0rem;
  }
`;
const HeadLines = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    text-align: center;
    color: white;
    @media (max-width: 1500px) {
      font-size: 3rem;
      width: 100%;
      margin-top: 3.5rem;
    }
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 1500px) {
      margin-top: 4rem;
      width: 100%;
      height: 100%;
    }
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 7rem;
  @media (max-width: 1500px) {
    display: block;
    margin: 0rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  p {
    padding: 0.9rem 0rem;
  }
  .line {
    background: #23d997;
    width: 100%;
    height: 7px;
    margin: 1rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetails;
