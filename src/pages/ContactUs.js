import React from 'react';
// framer motion
import {motion} from "framer-motion"
import {pageAnimation} from '../Animation'

const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>ContactUs</h1>
        </motion.div>
    )
}

export default ContactUs