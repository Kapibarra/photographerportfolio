import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion'

const FaqSection = () => {
  return (
    <StyledFAQ>
      <h2>
        <span>Any</span> questions?
      </h2>
      <AnimateSharedLayout>
      <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor start amet consectetur nulla</p>
            <p>
              Lorem ipsum dolor start amet consectetur nulla saciendis magnam
              sint quo architecto labore totam!
            </p>
        </div>
      </Toggle>
      <Toggle title="Daily Scedudle">
          <div className="answer">
            <p>Lorem ipsum dolor start amet consectetur nulla</p>
            <p>
              Lorem ipsum dolor start amet consectetur nulla saciendis magnam
              sint quo architecto labore totam!
            </p>
          </div>
      </Toggle>
      <Toggle title=" Payments methods?">
          <div className="answer">
            <p>Lorem ipsum dolor start amet consectetur nulla</p>
            <p>
              Lorem ipsum dolor start amet consectetur nulla saciendis magnam
              sint quo architecto labore totam!
            </p>
          </div>
      </Toggle>
      <Toggle title="What products?">
          <div className="answer">
            <p>Lorem ipsum dolor start amet consectetur nulla</p>
            <p>
              Lorem ipsum dolor start amet consectetur nulla saciendis magnam
              sint quo architecto labore totam!
            </p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
    </StyledFAQ>
  );
};

const StyledFAQ = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
