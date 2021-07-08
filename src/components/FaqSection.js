import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";

const FaqSection = () => {
  return (
    <StyledFAQ>
      <h2>
        <span>Any</span> questions
      </h2>
      <div className="question">
        <h4> How do i start?</h4>
        <div className="answer">
          <p>
            {" "}
            Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint
            quo architecto labore totam!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4> Daily schedudle?</h4>
        <div className="answer">
          <p>
            {" "}
            Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint
            quo architecto labore totam!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4> Payments methods?</h4>
        <div className="answer">
          <p>
            {" "}
            Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint
            quo architecto labore totam!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4> what products?</h4>
        <div className="answer">
          <p>
            {" "}
            Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint
            quo architecto labore totam!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
      padding:3rem 0rem;
      cursor:pointer;
  }
  .answer {
      padding:2rem 0rem;
      p {
          padding: 1rem 0rem;
      }
  }
`;

export default FaqSection;
