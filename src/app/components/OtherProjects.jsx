import { IconFolder, IconBrandGithub, IconWorld } from '@tabler/icons-react'

const othersProjects = [
    { // SPORT E-COMMERCE
        id: 1,
        proyecto_title: "G&X Sport E-Commerce",
        proyecto_description:
            "Sitio web para una empresa que vende ropa deportiva, diseño competitivo, moderno e intuitivo",
        proyecto_url_github: "https://github.com/MartinBernachea/tp.sitio.e-commerce",
        proyecto_url_web: "https://sport-e-commerce.vercel.app/"
    },
    { // POKEDEX
        id: 2,
        proyecto_title: "Pokédex",
        proyecto_description:
            "Pokédex web",
        proyecto_url_github: "https://github.com/gianlucadonofrio/digital-booking",
        proyecto_url_web: "https://sport-e-commerce.vercel.app/"
    },
    { // TO DO LIST
        id: 3,
        proyecto_title: "To Do List",
        proyecto_description:
            "Aplicación web para crear listas de tareas, donde los usuarios pueden crear, editar y eliminar tareas.",
        proyecto_url_github:
            "https://github.com/MartinBernachea/to-do-list",
        proyecto_url_web: "https://to-do-list-by-martin.vercel.app/"
    },
    { // CALCULATOR APP
        id: 4,
        proyecto_title: "Calculator App",
        proyecto_description:
            "Aplicación web para realizar operaciones matemáticas, con un diseño minimalista y moderno.",
        proyecto_url_github:
            "https://github.com/MartinBernachea/calculator",
        proyecto_url_web: "https://calculator-by-martin.vercel.app/"
    },
    { // COUNTER APP
        id: 5,
        proyecto_title: "Counter App",
        proyecto_description:
            "Cuenta con tres botones, uno para sumar, otro para restar y un botón para reiniciar el contador.",
        proyecto_url_github:
            "https://github.com/MartinBernachea/counter-app",
        proyecto_url_web: "https://counter-app-by-martin.vercel.app/"
    },
    { // GUESS THE NUMBER
        id: 6,
        proyecto_title: "Choose Your Own Adventure",
        proyecto_description:
            "Aplicación web para crear historias interactivas, donde los usuarios pueden elegir entre diferentes opciones para avanzar en la historia.",
        proyecto_url_github:
            "https://github.com/gianlucadonofrio/react-basics/tree/main/frontend3-primera-evaluacion",
        proyecto_url_web: "https://neon-melomakarona-53c09b.netlify.app/"
    },
]



export default function OthersProjects() {
    return (
        <section>
            <h1 className="title">More</h1>
            <p className="section--text-p1">interesting projects</p>
            <div className="op-container">
                {othersProjects.map((project) => (
                    <div
                        key={project.id}
                        className="op-card-container"
                    >
                        <div className="op-card-icon-container">
                            <IconFolder />
                            <div>
                                <a
                                    href={project.proyecto_url_github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="github"
                                >
                                    <IconBrandGithub className="section--socials-icon" color='#197a9d'/>
                                </a>
                                <a
                                    href={project.proyecto_url_web}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="web"
                                >
                                    <IconWorld className="section--socials-icon" color='#1a9f80' />
                                </a>
                            </div>
                        </div>
                        <h2 className="title">
                            {project.proyecto_title}
                        </h2>
                        <p>{project.proyecto_description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
