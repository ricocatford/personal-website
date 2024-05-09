import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

import ProjectCard from "./ProjectCard";

export default function Portfolio() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="container" id="portfolio">
            <h3 className="subheading text-center">
                {texts.portfolio.heading}
            </h3>
            <ProjectCard texts={texts} />
        </div>
    );
}
