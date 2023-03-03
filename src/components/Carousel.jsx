import React from "react";

import Carousel from "react-bootstrap/Carousel";
import bonteeth from "../assets/images/bonteeth.png";
import guesstheword from "../assets/images/guess-the-word.png";
import beautybay from "../assets/images/beautybay.png";

import "../assets/css/Carousel.css"

export default function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={bonteeth} alt="BonTeeth" className="carousel-image" />
        <Carousel.Caption>
          <h3 className="carousel-subheading">
            BonTeeth
          </h3>
          <p className="carousel-description">
            A platform for booking and managing appointments.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={guesstheword} alt="Guess the Word" className="carousel-image" />
        <Carousel.Caption>
          <h3 className="carousel-subheading">
            Guess the Word
          </h3>
          <p className="carousel-description">
            A game using two RESTful APIs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={beautybay} alt="BeautyBay" className="carousel-image" />
        <Carousel.Caption>
          <h3 className="carousel-subheading">
            BeautyBay
          </h3>
          <p className="carousel-description">
            A mockup website.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}