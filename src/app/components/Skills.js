import {
    IconFlask,
    IconCode,
    IconDatabase,
    IconTool,
} from "@tabler/icons-react";

const skills = [
    {
        id: 1,
        id_dropdown: "frontend",
        title: "Frontend",
        icon: (
            <IconCode
                className="skills--icon"
                id="frontend"
                style={{
                    WebkitBoxReflect:
                        "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
                }}
            />
        ),
        skills: [
            {
                id: 1,
                skill: "HTML5",
            },
            {
                id: 2,
                skill: "CSS3",
            },
            {
                id: 3,
                skill: "JavaScript",
            },
            {
                id: 4,
                skill: "ReactJS",
            },
            {
                id: 5,
                skill: "TypeScript",
            },
            {
                id: 6,
                skill: "NextJS",
            },
        ],
    },
    {
        id: 2,
        id_dropdown: "backend",
        title: "Backend",
        icon: (
            <IconDatabase
                className="skills--icon"
                id="backend"
                style={{
                    WebkitBoxReflect:
                        "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
                }}
            />
        ),
        skills: [
            {
                id: 1,
                skill: "Java",
            },
            {
                id: 2,
                skill: "NodeJS",
            },
            {
                id: 3,
                skill: "Express",
            },
            {
                id: 5,
                skill: "MySQL",
            },
            {
                id: 6,
                skill: "MongoDB",
            },
        ],
    },
    {
        id: 3,
        id_dropdown: "testing",
        icon: (
            <IconFlask
                className="skills--icon"
                id="testing"
                style={{
                    WebkitBoxReflect:
                        "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
                }}
            />
        ),
        title: "Testing",
        skills: [
            {
                id: 1,
                skill: "Jest",
            },
            {
                id: 2,
                skill: "Selenium",
            },
            {
                id: 3,
                skill: "React Testing Library",
            },
        ],
    },
    {
        id: 4,
        id_dropdown: "tools",
        title: "Herramientas",
        icon: (
            <IconTool
                className="skills--icon"
                id="tools"
                style={{
                    WebkitBoxReflect:
                        "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
                }}
            />
        ),
        skills: [
            {
                id: 1,
                skill: "GitHub",
            },
            {
                id: 2,
                skill: "GitLab",
            },
            {
                id: 3,
                skill: "Postman",
            },
            {
                id: 4,
                skill: "Scrum",
            },
            {
                id: 5,
                skill: "Kanban",
            },
        ],
    },
];

export default function Skills() {
    return (
        <section className="section--skills">
            <div className="section--skills-title-container">
                <h1 className="title">Skills</h1>
                <p className="section--text-p1">
                    Mis conocimientos
                </p>
            </div>
            <div className="skills-card-container">
                {skills.map((skill) => (
                    <div
                        className="skills--card"
                        key={skill.id}
                    >
                        <span className="skills--card-icon">{skill.icon}</span>
                        <p className="skills--card-label">
                            {skill.skills.map((skill) => {
                                return (
                                    <span
                                        className="skills--card-text"
                                        key={skill.id}
                                    >
                                        {skill.skill}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
