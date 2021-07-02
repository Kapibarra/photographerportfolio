import React from 'react'
//Import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


const ServicesSection = () => {
    return (
<div className="services">
    <div className="description">
        <h2>High<span>Quality </span> services</h2>
        <div className="cards">
            <div className="card">
                <div className="icon">
                    <img src={clock}></img>
                    <h3>Effecient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil autem dolor error rem ratione accusamus!</p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src={diaphragm}></img>
                    <h3>Effecient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil autem dolor error rem ratione accusamus!</p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src={money}></img>
                    <h3>Effecient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil autem dolor error rem ratione accusamus!</p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src={teamwork}></img>
                    <h3>teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.nihil autem dolor error rem ratione accusamus!</p>
            </div>
        </div>
    </div>
    <div className="image">
        <img src={home2}></img>
    </div>
</div>
    )
}
export default ServicesSection