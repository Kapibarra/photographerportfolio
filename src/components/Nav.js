import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <nav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><a>1. About Us</a></li>
                <li><a>2. Our Work</a></li>
                <li><a>3. Contact Us</a></li>
            </ul>
        </nav>
    )
}

const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content: space-between;
`

export default Nav