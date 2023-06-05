import { useState } from "react";

export default function Skills({ skills }) {
    const [activeTab, setActiveTab] = useState(skills[0]);

    return (
        <div className="skills__container flex box-shadow">
            <div className="skills__sidenav__wrapper">
                <ul className="skills__sidenav flex">
                    {skills.map((item) => (
                        <li
                            key={item.id}
                            className={
                                activeTab.skillsCategory == item.skillsCategory
                                    ? "skills__sidenav__btn--highlight"
                                    : "skills__sidenav__btn"
                            }
                            onClick={() => setActiveTab(item)}
                        >
                            <span>
                                <i
                                    className={`${item.icon} skills__sidenav__icon`}
                                />
                            </span>
                            {item.skillsCategory}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills__list__wrapper flex justify-between">
                <ul className="skills__list">
                    {activeTab.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <i className={activeTab.icon} />
            </div>
        </div>
    );
}
