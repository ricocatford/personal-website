import ProjectCard from "./ProjectCard";
import data from "../../data/projects.json";

export default function Portfolio() {
    return (
        <div className="container" id="portfolio">
            <h3 className="subheading text-center">Projects</h3>
            <ProjectCard projects={data} />
        </div>
    );
}
