import React from 'react'

export default function Card(props) {
    return (
        <>
        <div className="three columns"></div>
            <a href={ `/description/${1}` } className="cardCustom">
                <div className="cardCustom_side">
                    <img src={ car } className="responsive" alt=""/>
                    <div className="car_details">
                        <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                        <span className="car_details-model">Gerardo</span>
                    </div>
                </div>
            </a>
        <div/>
        </>
    )
}
