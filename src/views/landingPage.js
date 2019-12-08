import React from 'react';
import car from "../img/cars/lamborghini.png";
import Header from "../components/Header";
import Footer from "../components/Footer";


const LandingPage = () =>{
    return(
        <React.Fragment>
            <Header />
            <section class="section-cars">
  <h2>New/used cars</h2>
  <hr/>
  <div class="wrapper">
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="responsive" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="responsive" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="responsive" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="responsive" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
  </div>

  <div class="wrapper">
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="card_pic" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="card_pic" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="card_pic" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
    <div class="three columns">
      <a href={`description/${1}`} class="cardCustom">
        <div class="cardCustom_side">
          <img src={car} class="card_pic" alt=""/>
          <div class="car_details">
            <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
            <span class="car_details-model">Gerardo</span>
          </div>
        </div>
      </a>
    </div>
  </div>
  <a href="#" class="btn btn-info offset-by-five columns">view more</a>
</section>
            <Footer />
        </React.Fragment>
    )
}

export default LandingPage;