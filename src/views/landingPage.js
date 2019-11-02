import React from 'react';
import car from "../img/cars/lamborghini.png";
import Header from "./Header";
import Footer from "./Footer";


const LandingPage = () =>{
    return(
        <React.Fragment>
            <Header />
            <section className="section-cars">
                <h2>New/used cars</h2>
                <hr/>
                <div className="wrapper">
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                                <img src={ car } className="responsive" alt=""/>
                                <div className="car_details">
                                <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                        <div className="cardCustom_side">
                        <img src={car} className="responsive" alt=""/>
                        <div className="car_details">
                            <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                            <span className="car_details-model">Gerardo</span>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                            <img src={car} className="responsive" alt=""/>
                            <div className="car_details">
                                <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                            <img src={car} className="responsive" alt=""/>
                            <div className="car_details">
                                <span className="car_details-make">lamborghini</span>
                                <span className="car_details-price">$30000</span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                                <img src={ car } className="responsive" alt=""/>
                                <div className="car_details">
                                <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                        <div className="cardCustom_side">
                        <img src={car} className="responsive" alt=""/>
                        <div className="car_details">
                            <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                            <span className="car_details-model">Gerardo</span>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                            <img src={car} className="responsive" alt=""/>
                            <div className="car_details">
                                <span className="car_details-make">lamborghini <span className="car_details-price">$30000</span></span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="three columns">
                        <a href="description.html" className="cardCustom">
                            <div className="cardCustom_side">
                            <img src={car} className="responsive" alt=""/>
                            <div className="car_details">
                                <span className="car_details-make">lamborghini</span>
                                <span className="car_details-price">$30000</span>
                                <span className="car_details-model">Gerardo</span>
                            </div>
                            </div>
                        </a>
                    </div>
                </div>

                <a href="#" className="btn btn-info offset-by-five columns">view more</a>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default LandingPage;