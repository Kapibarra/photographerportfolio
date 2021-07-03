import React from 'react'
import styled from 'styled-components'
import {AboutSection} from './AboutSection'

const FaqSection = () => {
    return (
<div className="faq">
    <h2>Any questions</h2>
    <div className="question">
        <h4> How do i start?</h4>
        <div className="answer">
        <p> Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint quo architecto labore totam!</p>
        </div>
    </div>
    <div className="question">
        <h4> Daily schedudle?</h4>
        <div className="answer">
        <p> Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint quo architecto labore totam!</p>
        </div>
    </div>
    <div className="question">
        <h4> Payments methods?</h4>
        <div className="answer">
        <p> Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint quo architecto labore totam!</p>
        </div>
    </div>
    <div className="question">
        <h4> what products?</h4>
        <div className="answer">
        <p> Lorem ipsum dolor start amet consectetur nulla saciendis magnam sint quo architecto labore totam!</p>
        </div>
    </div>
</div>
    )
}

const StyledFAQ = styled.div`

`

export default FaqSection