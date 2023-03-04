import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import "../assets/css/Carousel.css"

const CustomCarousel = (props) => {
  const projects = props.projects;

  return (
    <Carousel>
      {projects.map(project => (
        <Carousel.Item key={project.id}>
          <img src={project.image} alt={project.name} className="carousel-image" />
          <Carousel.Caption>
            <h3 className="carousel-heading">
              {project.name}
            </h3>
            <p className="carousel-description">
              {project.description}
            </p>
            <div className="d-flex justify-content-center">
              <Link to={project.links.repository} target="_blank">
                <i className="fa-brands fa-github carousel-link" />
              </Link>
              <Link to={project.links.live} target="_blank">
                <i className="fa-solid fa-rocket carousel-link" />
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;