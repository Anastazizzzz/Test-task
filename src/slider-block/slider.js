import React from "react";
import "./slider.css"
import card1 from"./card1.webp";
import card2 from"./card2.webp";
import card3 from"./card3.webp";
import Slider from "react-slick";

function SliderCards(){
    return(
        <div>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    
                <div class="carousel-item active">
                    <img src={card1} class="d-block w-100" alt="card1"/>
                </div>

                <div class="carousel-item">
                        <img src={card2} class="d-block w-100" alt="card2"/>
                </div>

                <div class="carousel-item">
                    <img src={card3} class="d-block w-100" alt="card3"/>
                </div>
                
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

            <Slider />
            </div>

        </div>

    )
}

export default SliderCards;