import React from 'react'
//Page components
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
//framer motion
import {motion} from "framer-motion"
import {pageAnimation} from '../Animation'

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
<AboutSection />
<ServicesSection />
<FaqSection />
</motion.div>
    )
}

export default AboutUs