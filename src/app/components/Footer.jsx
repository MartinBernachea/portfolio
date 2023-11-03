'use client'
import { IconHeartCode } from '@tabler/icons-react'


export default function Projects() {

    return (
        <footer id='Footer'>
            <nav>
                <div className="nav--links-container">
                    <ul className='footer--nav-links'>
                        <li><a href='#AboutMe'>Sobre Mi</a></li>
                        <li><a href='#MyProjects'>Mis Projectos</a></li>
                        <li><a href='#Contact'>Contacto</a></li>
                    </ul>
                </div>
            </nav>
            <div className='footer--div'>
                <h2>Gracias por visitar mi sitio web!</h2>
                <p>Hecho con <IconHeartCode width={18} height={18}/> por Martin Bernachea</p>
            </div>
        </footer>
    )
}

