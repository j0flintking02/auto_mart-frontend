import React, { Component } from 'react'
import NavbarComponent from "../components/navbar";
import car from "../img/cars/lamborghini.png";

export default class DescriptionView extends Component {
    render() {
        return (
            <>
            <NavbarComponent />
                <section class="description">
    <div class="car-model">
        <div class="four columns">
            <div class="car_details">
                <span class="car_details-make">lamborghini <span class="car_details-price">$30000</span></span>
                <span class="car_details-model">Gerardo</span>
                <ul>
                    <li>speed: 300hp</li>
                    <li>color: white</li>
                    <li>capacity: 4 seater</li>
                </ul>
            </div>
            <h3>description</h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam repellat inventore molestias vero
                repudiandae sapiente hic iusto eos quaerat. Nostrum, quasi praesentium? Officiis natus, quia modi sunt
                pariatur
                iusto?</p>

            <a href="order.html" class="btn btn-info offset-by-three columns">checkout</a>
            <br/>
            <br/>
            <a class="btn btn-report offset-by-three columns" id="myBtn">report</a>
        </div>
        <div class="six columns">
            <img src={car} height="492" width="850" alt=""/>
        </div>
    </div>
</section>
            </>
        )
    }
}
