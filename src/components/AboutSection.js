import React from 'react'
import home1 from '../img/home1.png'
import {StyledAbout, StyledDescription, StyledImage,StyledHide} from '../styles'

const AboutSection = () => {
    return (
<StyledAbout>
    <StyledDescription>
        <div className="title">
            <StyledHide>
                <h2>We work to make</h2>
            </StyledHide>
            <StyledHide>
                <h2>your <span>dreams</span> come</h2>
            </StyledHide>
            <StyledHide>
                <h2>true</h2>
            </StyledHide>
        </div>
        <p> Contact us for any photography ideas that you have. We are professionals</p>
        <button>Contact Us</button>
    </StyledDescription>
    <StyledImage>
        <img src={home1} alt="camera" />
    </StyledImage>
</StyledAbout>
    )
}

//Styled components


export default AboutSection