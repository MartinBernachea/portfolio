import { IconFolder, IconBrandGithub, IconWorld } from '@tabler/icons-react'

const othersProjects = [
    {
        id: 1,
        proyecto_title: "The Food Truck",
        proyecto_description:
            "Sitio web para una empresa de comida rápida, con un diseño moderno y minimalista, con un menú interactivo y un carrito de compras.",
        proyecto_url_github: "https://github.com/gianlucadonofrio/theFoodTruck",
        proyecto_url_web: "https://the-food-truck-vue-js.vercel.app/"
    },
    {
        id: 2,
        proyecto_title: "Digital Booking",
        proyecto_description:
            "Sitio web para reservas de alojamientos, donde los usuarios pueden buscar alojamientos, reservarlos y dejar comentarios.",
        proyecto_url_github: "https://github.com/gianlucadonofrio/digital-booking"
    },
    {
        id: 3,
        proyecto_title: "To Do List",
        proyecto_description:
            "Aplicación web para crear listas de tareas, donde los usuarios pueden crear, editar y eliminar tareas.",
        proyecto_url_github:
            "https://github.com/gianlucadonofrio/react-basics/tree/main/app-to-do",
        proyecto_url_web: "https://jade-croquembouche-c4a60f.netlify.app/"
    },
    {
        id: 4,
        proyecto_title: "Calculator App",
        proyecto_description:
            "Aplicación web para realizar operaciones matemáticas, con un diseño minimalista y moderno.",
        proyecto_url_github:
            "https://github.com/MartinBernachea/calculator",
        proyecto_url_web: "https://calculator-by-martin.vercel.app/"
    },
    {
        id: 5,
        proyecto_title: "Counter App",
        proyecto_description:
            "Cuenta con un contador que aumenta la cantidad de clicks que se realizan en el botón, y un botón para reiniciar el contador.",
        proyecto_url_github:
            "https://github.com/gianlucadonofrio/react-basics/tree/main/contador-de-clicks",
        proyecto_url_web: "https://gleaming-sawine-355a2c.netlify.app/"
    },
    {
        id: 6,
        proyecto_title: "Choose Your Own Adventure",
        proyecto_description:
            "Aplicación web para crear historias interactivas, donde los usuarios pueden elegir entre diferentes opciones para avanzar en la historia.",
        proyecto_url_github:
            "https://github.com/gianlucadonofrio/react-basics/tree/main/frontend3-primera-evaluacion",
        proyecto_url_web: "https://neon-melomakarona-53c09b.netlify.app/"
    },
];



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
