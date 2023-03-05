import Col from "react-bootstrap/Col";

import "../assets/css/SkillCard.css";

const SkillCard = (props) => {
    const skills = props.skills;

    return (
        <>
            {skills.map(skill => (
                <Col xs={6} sm={4} md={3} lg={2}>
                    <div className="skill-container mx-auto" key={skill.id}>
                        <img src={skill.image} alt={skill.name} className="skill-image"/>
                        <h3 className="skill-heading text-center">
                            {skill.name}
                        </h3>
                    </div>
                </Col>
            ))}
        </>
    );
}

export default SkillCard;