import React from 'react'
import home1 from '../img/home1.png'
import {StyledAbout, StyledDescription, StyledImage,StyledHide} from '../styles'

// Framer Motion
import {motion} from 'framer-motion'

const AboutSection = () => {
// Framer motion
const titleAnim = {
    hidden: {opacity:0},
    show: {opacity: 1,transition:{duration : 1}},

}
const container = {
    hidden: {x:100},
    show:{x:0,transition:{duration : 0.6, ease: "easeOut", staggerChildren: 1, when: "afterChildren"}}
}

    return (
<StyledAbout>
    <StyledDescription>
        <motion.div variants={container} initial="hidden" animate="show" className="title">
            <StyledHide>
                <motion.h2 variants={titleAnim}>We work to make</motion.h2>
            </StyledHide>
            <StyledHide>
                <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
            </StyledHide>
            <StyledHide>
                <motion.h2 variants={titleAnim}>true</motion.h2>
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