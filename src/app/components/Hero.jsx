'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconSend,
    IconArrowBarToDown
} from '@tabler/icons-react'

export default function Hero() {

    function openResume() {
        window.open('/assets/CV-Bernachea-Martin-Frontend-Developer.pdf')
    }

    return (
        <section id='profile'>
            <div className='section--img-container'>
                <Image 
                    className='section--img'
                    src="/assets/profile/martin-pp.jpeg" 
                    alt="profile-pic"
                    width={400}
                    height={400}
                    priority={true}
                />
            </div>
            <div className='section--text'>
                <p className='section--text-p1'>Hola 👋 , soy</p>
                <h1 className='title'>Martin Bernachea</h1>
                <p className='section--text-p2'>Frontend Developer</p>
                <div className='btn--container'>
                    <button 
                        className='btn btn--color-1'
                        onClick={openResume}
                    >
                        Download CV
                    </button>
                    <Link href={'#Contact'}>
                        <button className='btn btn--color-2'>
                            {/* Contact Me */}
                            Contactame 
                        </button>
                    </Link>
                </div>
                <div className='section--socials'>
                <Link href='https://github.com/MartinBernachea' target='_blank'>
                    <IconBrandGithub
                        className='section--socials-icon' 
                        alt="profile-pic"
                        width={35}
                        height={35}
                    /> 
                </Link>
                <Link href='https://www.linkedin.com/in/martin-bernachea/' target='_blank'>
                    <IconBrandLinkedin
                        className='section--socials-icon'   
                        alt="profile-pic"
                        width={35}
                        height={35}
                    />
                </Link>
                </div>
            </div>
        </section>
    )
}

