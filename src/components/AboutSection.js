import React from 'react'
import home1 from '../img/home1.png'
import {StyledAbout, StyledDescription, StyledImage,StyledHide} from '../styles'

// Framer Motion
import {motion} from 'framer-motion'

const AboutSection = () => {

const titleAnim = {
    hidden: {opacity:0},
    show: {opacity: 1,transition:{duration : 2}},

}
const container = {
    hidden: {x:100},
    show:{x:0,transition:{duration : 0.6, ease: "easeOut"}}
}
    return (
<StyledAbout>
    <StyledDescription>
        <motion.div variants={container} initial="hidden" animate="show" className="title">
            <StyledHide>
                <motion.h2 variants={titleAnim} initial="hidden" animate="show">We work to make</motion.h2>
            </StyledHide>
            <StyledHide>
                <h2>your <span>dreams</span> come</h2>
            </StyledHide>
            <StyledHide>
                <h2>true</h2>
            </StyledHide>
        </motion.div>
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