import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Portfolio.css";

export default function ProjectCard({ projects }) {
    return (
        <>
            {projects.map((project) => (
                <div
                    className="flex justify-between project__card"
                    key={project.id}
                >
                    <div className="project__img__wrapper">
                        <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project__info__wrapper">
                        <h4 className="project__heading">{project.name}</h4>

                        <ul className="flex flex-wrap align-center project__stack">
                            <span>
                                <strong>Stack:</strong>
                            </span>
                            {project.stack.map((item, index) => (
                                <li
                                    className="project__stack__item"
                                    key={index}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="project__description">
                            {project.description}
                        </p>
                        <div className="flex project__links__wrapper">
                            <Link
                                to={project.links.repository}
                                className="btn btn--outline"
                                target="_blank"
                            >
                                Source Code
                                <span>
                                    <i className="fa-solid fa-laptop-code btn__icon" />
                                </span>
                            </Link>
                            <Link
                                to={project.links.live}
                                className="btn btn--primary"
                                target="_blank"
                            >
                                See Live
                                <span>
                                    <i className="fa-solid fa-arrow-up-right-from-square btn__icon" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
