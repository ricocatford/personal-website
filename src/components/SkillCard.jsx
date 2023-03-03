import Col from "react-bootstrap/Col";

import "../assets/css/SkillCard.css";

const SkillCard = (props) => {
    const skills = props.skills;

    return (
        <>
            {skills.map((skill) => (
                <Col xs={6} sm={6} md={3} lg={2}>
                    <div className="container mx-auto">
                        <img src={skill.img} alt={skill.name} className="image"/>
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