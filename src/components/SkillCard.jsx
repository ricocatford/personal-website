import Col from "react-bootstrap/Col";

import "../assets/css/SkillCard.css";

const SkillCard = (props) => {
    const skills = props.skills;

    return (
        <>
            {skills.map((skill) => (
                <Col xs={6} sm={4} md={3} lg={2}>
                    <div className="skill-container mx-auto">
                        <img src={skill.image} alt={skill.name} className="skill-image"/>
                        <p className="text-center">
                            {skill.name}
                        </p>
                    </div>
                </Col>
            ))}
        </>
    );
}

export default SkillCard;