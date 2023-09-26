'use client'
import { useState } from 'react'
import Skills from './Skills'
import { IconHeartCode } from '@tabler/icons-react'

export default function AboutMe() {

    return (
        <section id='AboutMe'>
            <p className='section--text-p1'>Get to Know More</p>
            <h1 className='title'>About Me</h1>
            <div className='section--about-container'>
                <p><span className="font-bold">Software Developer,</span> apasionado por el desarrollo Frontend <IconHeartCode width={18} height={18}/></p>

                <div className='divider'/>

                Me encanta crear sitios web que brinden una
                experiencia de usuario única y satisfactoria. Puedes ver algunos de
                mis proyectos en la sección de{" "}
                <a className="font-bold" href="#">proyectos.</a>

                <div className='divider'/>

                Soy una persona autodidacta, responsable y comprometida con mi
                trabajo. Constantemente estoy aprendiendo nuevas tecnologías y
                herramientas para mejorar mis habilidades.

                <div className='divider'/>

                Si tiene alguna pregunta o algun comentario no dude en{" "}
                <a className="font-bold" href="#"> contactarme.</a>
            </div>
                <Skills/>
        </section>
    )
}

