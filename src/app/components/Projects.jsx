'use client'
import Image from "next/image"
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'

export default function Projects() {

    const projectsInfo = [
        { // SPORT E-COMMERCE
            id: 1,
            proyecto_title: "G&X Sport E-Commerce",
            proyecto_description:
                "Sitio web para una empresa que vende ropa deportiva, diseño competitivo, moderno e intuitivo",
            proyecto_url_github: "https://github.com/MartinBernachea/tp.sitio.e-commerce",
            proyecto_url_web: "https://sport-e-commerce.vercel.app/"
        },
        // { // POKEDEX
        //     id: 2,
        //     proyecto_title: "Pokédex",
        //     proyecto_description:
        //         "Pokédex web",
        //     proyecto_url_github: "https://github.com/",
        //     proyecto_url_web: "https://sport-e-commerce.vercel.app/"
        // },
        // { // WEATHER APP
        //     id: 3,
        //     proyecto_title: "Project Title",
        //     proyecto_description:
        //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maxime explicabo iusto voluptas sequi nostrum vero iure officia totam temporibus pariatur, ab, praesentium dolore? Sit cupiditate quos atque odit sapiente.",
        //     proyecto_url_github: "https://github.com",
        //     proyecto_url_web: "https://google.com",
        // },
    ]

    return (
        <section id="MyProjects">
            <p className="section--text-p1">Mis mas recientes</p>
            <h1 className="title">Proyectos</h1>
            <div className="projects--container">
                {projectsInfo.map((project) => (
                    <div
                        key={project.id}
                        className='projects--card'
                    >
                        <Image
                            src={`/assets/project/project-${project.id}.jpeg`}
                            alt={project.proyecto_title}
                            className="card-image"
                            priority
                            width={1000}
                            height={1000}
                        />
                        <div className="project--info-container">
                            <h1 className="project--info-title">
                                {project.proyecto_title}
                            </h1>
                            <p className="project--info-p">
                                {project.proyecto_description}
                            </p>
                            <div className="button--container">
                                <a
                                    href={project.proyecto_url_github}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="github"
                                >
                                    <IconBrandGithub className="project--icons" />
                                </a>
                                <a
                                    href={project.proyecto_url_web}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="web"
                                >
                                    <IconWorld className="project--icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

