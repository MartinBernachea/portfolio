'use client'
import Image from "next/image"
import Link from 'next/link'

export default function Projects() {

    const projectsData = [
        {
            id: 1,
            alt: '',
            title: '',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            id: 2,
            alt: '',
            title: '',
            githubLink: '',
            liveDemo: ''
        },
        {
            id: 3,
            alt: '',
            title: '',
            githubLink: '',
            liveDemo: ''
        },
    ]

    return (
        <section id="MyProjects">
            <p className="section--text-p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="projects--container">
                {/* {projectsData.map((card) => {
                    return {
                        
                    }
                })} */}
                {/* <div 
                    key={projectsData.id}
                    className="projects--card-container"
                >
                    <Image 
                        src={`/assets/project/project-${projectsData.id}.png`}
                        width={200}
                        height={200}
                        alt={projectsData.alt}
                        priority
                    />
                    <h1>{projectsData.title}</h1>
                    <div className="projects-card-btn-container">
                        <Link 
                            href={projectsData.githubLink} 
                            target="_blank"
                        >
                            <button>Github</button>
                        </Link>
                        <Link 
                            href={projectsData.liveDemoLink} 
                            target="_blank"
                        >
                            <button>Live Demo</button>
                        </Link>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

