'use client'
import { useState } from 'react'

export default function Header() {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    return (
        <>
            <nav id='desktop-nav'>
                <div className='logo'>
                    {"{martin}"}
                </div>
                <ul className='nav-links'>
                    <li><a>About Me</a></li>
                    <li><a>My Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <nav id='hamburger-nav'>
                <div className='logo'>
                    {"{martin}"}
                </div>
                <div className='hamburger-logo'>
                    <div className='hamburger-icon' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='menu-links'>
                        <li><a onClick={toggleMenu}>About Me</a></li>
                        <li><a onClick={toggleMenu}>My Projects</a></li>
                        <li><a onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
        </>
    )
}

