import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><a>1. About Us</a></li>
                <li><a>2. Our Work</a></li>
                <li><a>3. Contact Us</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content: space-between;
align-items: center;
padding:1rem 10rem;
background: #282828;
a {
    color: white;
    text-decoration:none;
}
ul {
    display:flex;
    list-style:none;
}
h1 {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}
`

export default Nav