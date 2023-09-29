'use client'
import Image from "next/image"
import Link from 'next/link'
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'

export default function Projects() {

    const projectsInfo = [
        {
            id: 1,
            proyecto_title: "Project Title",
            proyecto_description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maxime explicabo iusto voluptas sequi nostrum vero iure officia totam temporibus pariatur, ab, praesentium dolore? Sit cupiditate quos atque odit sapiente.",
            proyecto_url_github: "https://github.com",
            proyecto_url_web: "https://google.com",
        },
        {
            id: 2,
            proyecto_title: "Project Title",
            proyecto_description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maxime explicabo iusto voluptas sequi nostrum vero iure officia totam temporibus pariatur, ab, praesentium dolore? Sit cupiditate quos atque odit sapiente.",
            proyecto_url_github: "https://github.com",
            proyecto_url_web: "https://google.com",
        },
        {
            id: 3,
            proyecto_title: "Project Title",
            proyecto_description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maxime explicabo iusto voluptas sequi nostrum vero iure officia totam temporibus pariatur, ab, praesentium dolore? Sit cupiditate quos atque odit sapiente.",
            proyecto_url_github: "https://github.com",
            proyecto_url_web: "https://google.com",
        },
    ]

    return (
        <section id="MyProjects">
            <p className="section--text-p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="projects--container">
                {projectsInfo.map((project) => (
                    <div
                        key={project.id}
                        className='projects--card'
                    >
                        <Image
                            src={`/assets/project/project-${project.id}.png`}
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

