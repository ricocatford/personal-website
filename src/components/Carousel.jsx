import React from "react";
import { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

import bonteeth from '../assets/images/bonteeth.png';

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
    </Carousel>
  );
}