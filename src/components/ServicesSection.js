import React from "react";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <StyledService>
      <StyledDescription>
        <h2>
          High<span>Quality </span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock}></img>
              <h3>Effecient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil
              autem dolor error rem ratione accusamus!
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm}></img>
              <h3>Effecient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil
              autem dolor error rem ratione accusamus!
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money}></img>
              <h3>Effecient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil
              autem dolor error rem ratione accusamus!
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork}></img>
              <h3>teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil
              autem dolor error rem ratione accusamus!
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2}></img>
      </StyledImage>
    </StyledService>
  );
};

const StyledService = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
display: flex;
flex-wrap: wrap;
`;
const StyledCard = styled.div`
flex-basis:20rem;
.icon {
    display: flex;
    align-items: center;
}
`
export default ServicesSection;
