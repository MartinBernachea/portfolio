'use client'

import Image from 'next/image'
import {
    IconBrandGithub,
    IconBrandLinkedin
} from '@tabler/icons-react'

export default function Hero() {

    function openResume() {
        window.open('/assets/resume-example.pdf')
    }

    return (
        <section id='profile'>
            <div className='section--img-container'>
                <Image 
                    className='section--img'
                    src="/assets/profile/profile-pic.png" 
                    alt="profile-pic"
                    width={400}
                    height={400}
                    priority={true}
                />
            </div>
            <div className='section--text'>
                <p className='section--text-p1'>Hello 👋 ,  I&apos;m</p>
                <h1 className='title'>Martin Bernachea</h1>
                <p className='section--text-p2'>Frontend Developer</p>
                <div className='btn--container'>
                    <button 
                        className='btn btn--color-1'
                        onClick={openResume}
                    >
                        Download CV
                    </button>
                    <button 
                        className='btn btn--color-2'
                        // onClick={ ??? }
                    >
                        Contact Me
                    </button>
                </div>
                <div className='section--socials'>
                <IconBrandGithub
                    className='section--socials-icon' 
                    alt="profile-pic"
                    width={35}
                    height={35}
                    // href='https://github.com/MartinBernachea'
                />
                <IconBrandLinkedin
                    className='section--socials-icon'   
                    alt="profile-pic"
                    width={35}
                    height={35}
                    // href='https://www.linkedin.com/in/martin-bernachea/'
                />
                </div>
            </div>
        </section>
    )
}

