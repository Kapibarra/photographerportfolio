import React from "react";
// images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import { Link } from "react-router-dom";
import styled from "styled-components";
// framer motion
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim , slider ,sliderContainer} from "../Animation";


const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: '#fff'}}>
    <motion.div variants={sliderContainer}>
    <Frame1 variants={slider}></Frame1>
    <Frame2 variants={slider}></Frame2>
    <Frame3 variants={slider}></Frame3>
    <Frame4 variants={slider}></Frame4>
    </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-athlete">
        <Hide>
          <motion.img src={athlete} alt="athlete" variants={photoAnim}></motion.img>
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/the-racer">
        <Hide>
          <motion.img src={theracer} alt="theracer" variants={photoAnim}></motion.img>
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/good-times">
        <Hide>
          <motion.img src={goodtimes} alt="goodtime" variants={photoAnim}></motion.img>
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    border-radius: 30px;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
overflow: hidden;
`
// Frame Animation
const Frame1 = styled(motion.div)`
position: fixed;
left:0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background: #ff8efb;
`
const Frame3 = styled(Frame1)`
background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
background: #8effa0;
`

export default OurWork;
