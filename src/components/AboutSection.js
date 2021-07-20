import React from 'react'
import home1 from '../img/home1.png'
import {StyledAbout, StyledDescription, StyledImage,StyledHide} from '../styles'

// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../Animation'
import Wave from './Wave'

const AboutSection = () => {
// Framer motion

    return (
<StyledAbout>
    <StyledDescription>
        <motion.div>
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
        <motion.p variants={fade}> Contact us for any photography ideas that you have. We are professionals</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
    </StyledDescription>
    <StyledImage>
        <motion.img src={home1} alt="camera" variants={photoAnim}/>
    </StyledImage>
    <Wave />
</StyledAbout>
    )
}

//Styled components


export default AboutSection